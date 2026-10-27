import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub, FaLinkedin, FaCode, FaBrain, FaTrophy,
  FaExternalLinkAlt, FaLaptopCode,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeetCodeHeatmap from "./LeetCodeHeatmap.jsx";

gsap.registerPlugin(ScrollTrigger);

const dsaTopics = [
  "Arrays", "Strings", "Binary Search", "Linked Lists",
  "Stacks & Queues", "Recursion", "Backtracking", "Trees",
  "Graphs", "Greedy", "Heaps", "Dynamic Programming",
];

const socialLinks = [
  {
    href: "https://github.com/Jaithawal-08",
    icon: <FaGithub />,
    label: "GitHub",
    sub: "Jaithawal-08",
    color: "from-gray-500/20 to-gray-700/20 border-gray-500/30 hover:border-gray-300/60",
    iconColor: "text-white",
  },
  {
    href: "https://www.linkedin.com/in/jai-thawal-4a1a4027a",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    sub: "Connect with me",
    color: "from-blue-600/20 to-blue-800/20 border-blue-500/30 hover:border-blue-400/60",
    iconColor: "text-blue-400",
  },
  {
    href: "https://leetcode.com/u/Jai_thawal/",
    icon: <SiLeetcode />,
    label: "LeetCode",
    sub: "450+ Solved",
    color: "from-amber-500/20 to-orange-700/20 border-amber-500/30 hover:border-amber-400/60",
    iconColor: "text-amber-400",
  },
  {
    href: "https://my-portfolio-j8l4.vercel.app/",
    icon: <FaLaptopCode />,
    label: "Portfolio",
    sub: "Live on Vercel",
    color: "from-violet-600/20 to-purple-800/20 border-violet-500/30 hover:border-violet-400/60",
    iconColor: "text-violet-400",
  },
];

const HomeScrollSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".hss-badge",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".hss-badges", start: "top 88%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".hss-stat-card",
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1, scale: 1, duration: 0.65, ease: "back.out(1.4)", stagger: 0.1,
          scrollTrigger: { trigger: ".hss-stats-row", start: "top 88%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".hss-topic-tag",
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.45, ease: "power2.out", stagger: 0.06,
          scrollTrigger: { trigger: ".hss-topics", start: "top 88%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".hss-github-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".hss-github-card", start: "top 88%", toggleActions: "play none none none" },
        }
      );
      gsap.utils.toArray(".hss-analytics-card").forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
      gsap.fromTo(".hss-tagline",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: ".hss-tagline", start: "top 92%", toggleActions: "play none none none" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative px-6 sm:px-12 lg:px-24 pb-24 pt-8">
      {/* Ambient glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto space-y-16">

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">More About Me</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-pink-400/30 to-transparent" />
        </div>

        {/* Quick Stats */}
        <div className="hss-stats-row grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: <SiLeetcode className="text-amber-400 text-2xl" />, value: "450+", label: "LeetCode Solved" },
            { icon: <FaCode className="text-cyan-400 text-2xl" />, value: "4+", label: "Projects Built" },
            { icon: <FaBrain className="text-pink-400 text-2xl" />, value: "AI/ML", label: "Specialisation" },
            { icon: <FaTrophy className="text-yellow-300 text-2xl" />, value: "8.4", label: "GPA / 10" },
          ].map(({ icon, value, label }) => (
            <div
              key={label}
              className="hss-stat-card group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 flex flex-col items-center text-center transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:-translate-y-1"
            >
              <div className="mb-2">{icon}</div>
              <p className="text-xl font-extrabold bg-gradient-to-r from-cyan-300 to-pink-400 bg-clip-text text-transparent">{value}</p>
              <p className="text-xs text-gray-400 mt-1 font-mono tracking-wide">{label}</p>
            </div>
          ))}
        </div>

        {/* Social Profile Links */}
        <div>
          <p className="text-center text-gray-400 font-mono text-xs tracking-widest uppercase mb-6">Find Me On</p>
          <div className="hss-badges grid grid-cols-2 sm:grid-cols-4 gap-4">
            {socialLinks.map(({ href, icon, label, sub, color, iconColor }) => (
              <Link
                key={label}
                to={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`hss-badge group flex flex-col items-center gap-2 p-5 rounded-2xl bg-gradient-to-br border backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(34,211,238,0.18)] ${color}`}
              >
                <span className={`text-3xl transition-transform duration-300 group-hover:scale-110 ${iconColor}`}>
                  {icon}
                </span>
                <span className="text-sm font-bold text-white">{label}</span>
                <span className="text-xs text-gray-400">{sub}</span>
                <FaExternalLinkAlt className="text-gray-500 text-xs mt-1 group-hover:text-cyan-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>

        {/* GitHub Analytics */}
        <div className="hss-github-card rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
          <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-6 text-center">GitHub Analytics</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Jaithawal-08&show_icons=true&theme=tokyonight&hide_border=true&rank_icon=github"
              alt="GitHub Stats"
              className="rounded-xl max-w-full h-auto"
              style={{ maxHeight: 170 }}
            />
            <img
              src="https://streak-stats.demolab.com/?user=Jaithawal-08&theme=tokyonight&hide_border=true"
              alt="GitHub Streak"
              className="rounded-xl max-w-full h-auto"
              style={{ maxHeight: 170 }}
            />
          </div>
        </div>

        {/* LeetCode Dashboard */}
        <div className="hss-analytics-card rounded-3xl border border-amber-400/15 bg-white/5 backdrop-blur-md p-6 sm:p-8">
          <p className="text-amber-400 font-mono text-xs tracking-widest uppercase mb-6 text-center">LeetCode Dashboard</p>
          <div className="flex justify-center mb-4">
            <a
              href="https://leetcode.com/u/Jai_thawal/"
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-all duration-500 hover:scale-[1.02]"
            >
              <img
                src="https://github-readme-leetcode-card.romitsagu.com/Jai_thawal?theme=dark"
                alt="LeetCode solved-problem statistics"
                className="rounded-xl max-w-full h-auto w-full max-w-[500px]"
              />
            </a>
          </div>
          <LeetCodeHeatmap />
        </div>

        {/* Language Analysis */}
        <div className="hss-analytics-card rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
          <p className="text-pink-400 font-mono text-xs tracking-widest uppercase mb-6 text-center">Language Analysis</p>
          <div className="flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jaithawal-08&layout=compact&theme=tokyonight&hide_border=true"
              alt="Most used languages on GitHub"
              className="rounded-xl max-w-full h-auto"
              style={{ maxHeight: 200 }}
            />
          </div>
        </div>

        {/* DSA Topics */}
        <div>
          <p className="text-center font-mono text-xs tracking-widest uppercase mb-2">
            <span className="text-amber-400">DSA</span>
            <span className="text-gray-500 mx-2">·</span>
            <span className="text-gray-400">Topics Covered</span>
          </p>
          <p className="text-center text-gray-500 text-xs mb-6">Solving on LeetCode with C++</p>
          <div className="hss-topics flex flex-wrap justify-center gap-2">
            {dsaTopics.map((topic) => (
              <span
                key={topic}
                className="hss-topic-tag px-4 py-1.5 rounded-full text-xs font-semibold border border-cyan-400/25 bg-cyan-400/5 text-cyan-300 transition-all duration-300 hover:bg-cyan-400/15 hover:border-cyan-400/60 hover:text-white cursor-default"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <div className="hss-tagline text-center pt-4">
          <div className="inline-block rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 via-white/5 to-pink-500/10 backdrop-blur-md px-8 py-5">
            <p className="text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-300 via-white to-pink-400 bg-clip-text text-transparent leading-relaxed">
              ⚡ Learn. Build. Solve. Repeat.
            </p>
            <p className="text-xs text-gray-500 mt-2 font-mono">Turning ideas into useful software · B.Tech CSE AI/ML</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HomeScrollSection;
