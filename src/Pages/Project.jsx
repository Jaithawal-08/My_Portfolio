import React, { useEffect, useRef } from "react";
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from "react-icons/fa";
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
    tags: ["React", "Tailwind CSS", "HTML", "CSS", "JS", "JSX"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://club-website-zoue.vercel.app/",
    cover: "/cover_club.png",
    accentColor: "#22d3ee",
  },
  {
    number: "02",
    title: "Splitvilla",
    description:
      "A personal money-splitting and expense-tracking web tool. Users enter expenses and participants; the app calculates fair splits automatically. Built entirely in vanilla JS — no frameworks.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://splitvilla.vercel.app/",
    cover: "/cover_splitvilla.png",
    accentColor: "#ec4899",
  },
  {
    number: "03",
    title: "Spotify Clone",
    description:
      "A pixel-faithful Spotify web player UI clone. Features sidebar navigation, playlist card hover states, album artwork, and a music player control bar — all in HTML, CSS & JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://spotify-clone-eight-omega-35.vercel.app",
    cover: "/cover_spotify.png",
    accentColor: "#34d399",
  },
  {
    number: "04",
    title: "Netflix Clone",
    description:
      "A high-fidelity static replica of the Netflix India landing page. Matches the original's visual design, hero section, feature highlights, and FAQ accordion in pure HTML & CSS.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Jaithawal-08",
    demo: "https://netflix-india-kappa.vercel.app",
    cover: "/cover_netflix.png",
    accentColor: "#ef4444",
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
          scrollTrigger: { trigger: ".projects-header", start: "top 88%" },
        }
      );
      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 80 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen text-white px-6 sm:px-12 lg:px-24 pt-28 pb-24">

      {/* Header */}
      <div className="projects-header max-w-5xl mx-auto mb-20 text-center">
        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">My Work</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          My <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Projects I've built while mastering HTML, CSS, JS, and React — ranging from UI clones to original tools.
        </p>
      </div>

      {/* Project Cards — stacked one by one, full width */}
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {projects.map((project) => (
            <div
              key={project.number}
              className="project-card group relative w-full h-[70vh] min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:scale-[1.02] hover:border-white/25 hover:shadow-[0_0_80px_var(--glow)] cursor-pointer"
              style={{ "--glow": project.accentColor }}
            >
            {/* Full-card background screenshot */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.cover})` }}
            />

            {/* Dark overlay — lightens on hover to reveal the screenshot */}
            <div className="absolute inset-0 bg-black/85 group-hover:bg-black/45 transition-all duration-500" />

            {/* Bottom gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            {/* Live badge */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 text-xs text-green-400 font-mono backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Live
            </div>

            {/* Project number */}
            <div className="absolute top-6 left-6">
              <span
                className="text-xs font-mono px-3 py-1 rounded-full border bg-black/50 backdrop-blur-sm"
                style={{ color: project.accentColor, borderColor: `${project.accentColor}50` }}
              >
                Project {project.number}
              </span>
            </div>

            {/* Card content — sits at bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              {/* Title — glows on hover */}
              <h3
                className="text-3xl sm:text-5xl font-extrabold text-white mb-4 transition-all duration-300 group-hover:[text-shadow:0_0_18px_var(--glow),0_0_40px_var(--glow)]"
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl group-hover:text-white transition-colors duration-300 line-clamp-3">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border backdrop-blur-sm ${tagColor[tag] ?? "text-gray-300 bg-white/5 border-white/20"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-cyan-400/60 text-cyan-400 font-semibold text-sm backdrop-blur-sm bg-black/30 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.6)] hover:border-cyan-400"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-pink-500/60 text-pink-400 font-semibold text-sm backdrop-blur-sm bg-black/30 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] hover:border-pink-500"
                >
                  <FaLaptopCode /> Live Demo <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;