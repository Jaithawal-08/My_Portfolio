import React, { useEffect, useMemo, useState } from "react";
import { SiLeetcode } from "react-icons/si";

const LEVEL_COLORS = ["#1c2230", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function toKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function buildGrid(daysByDate, year) {
  const start = new Date(year, 0, 1);
  start.setDate(start.getDate() - start.getDay());
  const end = new Date(year, 11, 31);
  const weeks = [];
  const monthLabels = [];
  let cursor = new Date(start);

  while (cursor <= end) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(cursor);
      const key = toKey(day);
      const count = daysByDate.get(key) ?? 0;
      let level = 0;
      if (count > 0) level = count < 3 ? 1 : count < 6 ? 2 : count < 10 ? 3 : 4;
      week.push({ key, count, level, month: day.getMonth() });
      day.setDate(day.getDate() + 1);
      if (i === 0) {
        const first = new Date(cursor);
        if (first.getDate() <= 7 && monthLabels.every((entry) => entry.month !== first.getMonth())) {
          monthLabels.push({ index: weeks.length, month: first.getMonth() });
        }
      }
      cursor = new Date(cursor);
      cursor.setDate(cursor.getDate() + 1);
    }
    weeks.push(week);
  }
  return { weeks, monthLabels };
}

export default function LeetCodeHeatmap() {
  const [data, setData] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    fetch("/api/leetcode-calendar", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
      .then((payload) => {
        if (!payload?.ok || !Array.isArray(payload.calendar?.days)) throw new Error("bad payload");
        setData(payload);
        setYear(payload.activeYears[0] ?? new Date().getFullYear());
      })
      .catch(() => {})
      .finally(() => clearTimeout(timeout));
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const grid = useMemo(() => {
    if (!data || !year) return null;
    const map = new Map(data.calendar.days.map((entry) => [entry.d, entry.c]));
    return buildGrid(map, year);
  }, [data, year]);

  if (!data) {
    return (
      <a
        href="https://leetcode.com/u/Jai_thawal/"
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-white/10 bg-black/30 p-6 mt-8 text-center"
      >
        <p className="text-sm font-semibold text-amber-300 mb-1">Submission Activity</p>
        <p className="text-xs text-gray-500 font-mono">View the full activity heatmap on LeetCode →</p>
      </a>
    );
  }

  const { calendar, counts } = data;
  const stats = [
    { label: "Total Submissions", value: calendar.total },
    { label: "Active Days", value: calendar.totalActiveDays },
    { label: "Max Streak", value: `${calendar.maxStreak}d` },
    { label: "Current Streak", value: `${calendar.currentStreak}d` },
  ];

  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-4 sm:p-6 mt-8">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <p className="text-sm font-semibold text-amber-300 flex items-center gap-2">
          <SiLeetcode className="text-amber-400" /> Submission Activity
        </p>
        <div className="flex gap-1.5">
          {data.activeYears.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                y === year
                  ? "bg-green-500/20 text-green-300 border border-green-400/40"
                  : "text-gray-500 border border-white/10 hover:text-gray-300"
              }`}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {grid && (
        <div className="overflow-x-auto pb-1">
          <div style={{ minWidth: 33 + grid.weeks.length * 15 }}>
            <div className="relative" style={{ height: 14 }}>
              <span className="invisible text-[10px]">X</span>
              {grid.monthLabels.map(({ index, month }) => (
                <span
                  key={month}
                  className="text-[10px] text-gray-500 font-mono"
                  style={{ position: "absolute", left: 33 + index * 15, top: 0 }}
                >
                  {MONTH[month]}
                </span>
              ))}
            </div>
            <div className="flex mt-1">
              <div className="flex flex-col justify-between pr-1 text-[10px] text-gray-600 font-mono" style={{ minHeight: 87 }}>
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              {grid.weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-[3px] mr-[3px]">
                  {week.map((cell) => (
                    <div
                      key={cell.key}
                      title={cell.count ? `${cell.key}: ${cell.count} submission${cell.count > 1 ? "s" : ""}` : cell.key}
                      className="rounded-[2px] transition-transform hover:scale-125"
                      style={{ width: 12, height: 12, backgroundColor: LEVEL_COLORS[cell.level] }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
        {stats.map(({ label, value }) => (
          <div key={label} className="rounded-lg border border-white/10 bg-white/5 py-2">
            <p className="text-base font-bold text-green-300">{value}</p>
            <p className="text-[10px] text-gray-500 font-mono">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
        <p className="text-xs text-gray-400 font-mono">
          {counts?.easy}/{counts?.medium}/{counts?.hard}
          <span className="text-gray-600 ml-1.5">Easy / Medium / Hard</span>
        </p>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-gray-500 font-mono mr-1">Less</span>
          {LEVEL_COLORS.map((color) => (
            <span key={color} className="rounded-[2px]" style={{ width: 10, height: 10, backgroundColor: color }} />
          ))}
          <span className="text-[10px] text-gray-500 font-mono ml-1">More</span>
        </div>
      </div>
    </div>
  );
}
