import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaLaptopCode, FaRegFolderOpen, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const tagColor = {
  React: "text-cyan-300 bg-cyan-400/10 border-cyan-400/30",
  "Tailwind CSS": "text-sky-300 bg-sky-400/10 border-sky-400/30",
  HTML: "text-orange-300 bg-orange-500/10 border-orange-400/30",
  CSS: "text-blue-300 bg-blue-400/10 border-blue-400/30",
  JS: "text-yellow-300 bg-yellow-400/10 border-yellow-400/30",
  JavaScript: "text-yellow-300 bg-yellow-400/10 border-yellow-400/30",
  JSX: "text-purple-300 bg-purple-400/10 border-purple-400/30",
};

const projects = [
  {
    number: "01",
    title: "Club Website",
    description:
      "An interactive college club website featuring smooth navigation, event announcements, club info cards, and a fully responsive layout. Built with React ecosystem tools for component-driven architecture and great UX.",
    longDesc:
      "Handles club membership info, image galleries, responsive layouts, and themed to the club's branding. This was a collaborative UI project demonstrating my ability to work with React component structure and modern CSS utilities.",
    tags: ["React", "Tailwind CSS", "HTML", "CSS", "JS", "JSX"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://club-website-zoue.vercel.app/",
    gradient: "from-cyan-500/20 to-blue-600/20",
    glowColor: "rgba(34,211,238,0.3)",
  },
  {
    number: "02",
    title: "Splitvilla",
    description:
      "A personal money-splitting and expense-tracking web tool. Created as a milestone project after completing my core HTML, CSS, and JavaScript fundamentals — solving a real personal problem.",
    longDesc:
      "Users enter expenses and people involved; the app automatically calculates fair share splits. Designed with a clean minimal UI and local data handling entirely in vanilla JS — no frameworks involved.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://github.com/Jaithawal-08",
    gradient: "from-pink-500/20 to-rose-600/20",
    glowColor: "rgba(236,72,153,0.3)",
  },
  {
    number: "03",
    title: "Spotify Clone",
    description:
      "A pixel-faithful Spotify web player UI clone built using HTML, CSS, and JavaScript. Features a sidebar navigation, playlist card hover states, album artwork display, and a music player control bar.",
    longDesc:
      "Focused on matching the visual density of Spotify's interface, practising flexbox/grid layouts and hover interactions in pure CSS. The player UI controls are wired with JS event listeners.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://github.com/Jaithawal-08",
    gradient: "from-emerald-500/20 to-green-600/20",
    glowColor: "rgba(52,211,153,0.3)",
  },
  {
    number: "04",
    title: "Netflix Clone",
    description:
      "A high-fidelity static replica of the Netflix landing page built with only HTML and CSS. Matches the original's visual design language, hero section, feature highlights, and FAQ accordion section.",
    longDesc:
      "Demonstrates strong CSS layout fundamentals — pure CSS accordion, media queries for full responsiveness, and attention to detail in matching Netflix's brand design system.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://github.com/Jaithawal-08",
    gradient: "from-red-500/20 to-rose-800/20",
    glowColor: "rgba(239,68,68,0.3)",
  },
];

const Project = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".projects-header",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".projects-header", start: "top 88%" }
        }
      );

      // Each project card animates in one by one
      gsap.utils.toArray(".project-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen text-white px-6 sm:px-12 lg:px-24 pt-28 pb-24">

      {/* Header */}
      <div className="projects-header max-w-4xl mx-auto mb-20 text-center">
        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">My Work</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Projects I've built while mastering HTML, CSS, JS, and React — ranging from UI clones to original tools.
        </p>
      </div>

      {/* Projects — single column, stacked */}
      <div className="max-w-4xl mx-auto space-y-12">
        {projects.map((project) => (
          <div
            key={project.number}
            className={`project-card group relative rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-md p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:border-cyan-400/40 hover:scale-[1.01]`}
            style={{ boxShadow: `0 0 0 transparent` }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 0 50px ${project.glowColor}`}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 transparent`}
          >
            {/* Project number watermark */}
            <span className="absolute top-4 right-6 text-7xl font-black text-white/5 select-none pointer-events-none group-hover:text-white/8 transition-all">
              {project.number}
            </span>

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                {/* Number badge */}
                <span className="inline-block text-xs font-mono text-cyan-400 bg-cyan-400/10 border border-cyan-400/25 rounded-full px-3 py-1 mb-3">
                  Project {project.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
              </div>
              <FaRegFolderOpen className="text-cyan-400 text-3xl flex-shrink-0 group-hover:rotate-6 transition-transform mt-1" />
            </div>

            {/* Main description */}
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Long description (lighter) */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
              {project.longDesc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${tagColor[tag] ?? "text-gray-300 bg-white/5 border-white/20"}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-cyan-400/60 rounded-full text-cyan-400 font-semibold text-sm transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border-2 border-pink-500/60 rounded-full text-pink-400 font-semibold text-sm transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
              >
                <FaLaptopCode /> Live Demo <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;