const GRAPHQL_ENDPOINT = "https://leetcode.com/graphql/";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

const META_QUERY = `query userProfile($username: String!) {
  matchedUser(username: $username) {
    profile {
      ranking
    }
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
      }
    }
    userCalendar {
      activeYears
      submissionCalendar
    }
  }
}`;

const YEAR_QUERY = `query userCalendarForYear($username: String!, $year: Int) {
  matchedUser(username: $username) {
    userCalendar(year: $year) {
      submissionCalendar
    }
  }
}`;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function postGraphQL(query, variables, session) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    let response;
    try {
      response = await fetch(GRAPHQL_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Referer: "https://leetcode.com/contests/",
          Origin: "https://leetcode.com",
          "User-Agent": USER_AGENT,
          Cookie: `LEETCODE_SESSION=${session}`,
        },
        body: JSON.stringify({ query, variables }),
      });
    } catch {
      if (attempt < 2) {
        await sleep(400 + Math.random() * 500);
        continue;
      }
      throw new Error("upstream network error");
    }
    const payload = await response.json().catch(() => null);
    if (!payload) throw new Error("invalid response from leetcode.com");
    const matchedUser = payload?.data?.matchedUser ?? null;
    if (matchedUser) return matchedUser.userCalendar ?? {};
    const message = payload?.errors?.[0]?.message ?? "";
    if (attempt < 2 && /temporarily|rate|blocked/i.test(message)) {
      await sleep(400 + Math.random() * 500);
      continue;
    }
    throw new Error(message || "no permission to check the calendar.");
  }
  throw new Error("no permission to check the calendar.");
}

function mergeInto(target, raw) {
  if (typeof raw !== "string" || raw.length === 0) return;
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return;
  }
  if (typeof parsed !== "object" || parsed === null) return;
  for (const [key, value] of Object.entries(parsed)) {
    const ts = Number(key);
    const count = Number(value);
    if (!Number.isFinite(ts) || !Number.isFinite(count) || count <= 0) continue;
    const epochDay = Math.floor(ts / 86400);
    target.set(epochDay, (target.get(epochDay) ?? 0) + count);
  }
}

function daysToPairs(daysMap) {
  return [...daysMap.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([epochDay, count]) => {
      const d = new Date(epochDay * 86400 * 1000);
      const y = d.getUTCFullYear();
      const m = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      return { d: `${y}-${m}-${day}`, c: count };
    });
}

function streaks(daysMap) {
  const sorted = [...daysMap.keys()].sort((a, b) => a - b);
  let max = 0;
  let run = 0;
  let prev = null;
  for (const day of sorted) {
    run = prev !== null && day === prev + 1 ? run + 1 : 1;
    if (run > max) max = run;
    prev = day;
  }
  const todayEpochDay = Math.floor(Date.now() / 86400000);
  let current = 0;
  let cursor = todayEpochDay;
  if (!daysMap.has(cursor)) cursor -= 1;
  while (daysMap.has(cursor)) {
    current += 1;
    cursor -= 1;
  }
  return { maxStreak: max, currentStreak: current };
}

function normalizeDifficulty(rows) {
  const counts = { easy: 0, medium: 0, hard: 0 };
  for (const row of rows) {
    const key = row?.difficulty?.toLowerCase();
    if (key in counts) counts[key] = row.count;
  }
  counts.total = counts.easy + counts.medium + counts.hard;
  return counts;
}

async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  const session = process.env.LEETCODE_SESSION ?? "";
  const username = process.env.LEETCODE_USERNAME ?? "Jai_thawal";

  if (!session) {
    res.status(503).json({ ok: false, error: "LEETCODE_SESSION is not configured" });
    return;
  }

  try {
    const meta = await postGraphQL(META_QUERY, { username }, session);
    const activeYears = Array.isArray(meta.activeYears)
      ? meta.activeYears.filter((y) => Number.isInteger(y))
      : [];

    const yearItems = await Promise.all(
      activeYears.map((year) =>
        postGraphQL(YEAR_QUERY, { username, year }, session).catch(() => ({}))
      )
    );

    const merged = new Map();
    for (const item of yearItems) mergeInto(merged, item.submissionCalendar);
    if (merged.size === 0) mergeInto(merged, meta.submissionCalendar);

    const { maxStreak, currentStreak } = streaks(merged);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.status(200).json({
      ok: true,
      username,
      activeYears: [...activeYears].sort((a, b) => b - a),
      calendar: {
        days: daysToPairs(merged),
        total: [...merged.values()].reduce((a, b) => a + b, 0),
        totalActiveDays: merged.size,
        maxStreak,
        currentStreak,
      },
      counts: normalizeDifficulty(meta.acSubmissionNum ?? []),
      ranking: meta.profile?.ranking ?? null,
    });
  } catch (error) {
    res.status(502).json({ ok: false, error: error.message ?? "unknown error" });
  }
}

export default handler;
