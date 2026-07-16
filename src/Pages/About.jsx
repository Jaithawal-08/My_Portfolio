import React, { useEffect, useRef } from "react";
import AboutImg from "../Components/About/AboutImg.jpeg";
import { FaGraduationCap, FaCode, FaBrain, FaHeart, FaMapMarkerAlt, FaUserGraduate } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiFastapi, SiMongodb } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate photo section
      gsap.fromTo(".about-photo",
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: ".about-photo", start: "top 85%", toggleActions: "play none none none" } }
      );

      // Animate heading
      gsap.fromTo(".about-heading",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: ".about-heading", start: "top 88%", toggleActions: "play none none none" } }
      );

      // Stagger the info cards
      gsap.fromTo(".about-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.15,
          scrollTrigger: { trigger: ".about-cards-grid", start: "top 85%", toggleActions: "play none none none" }
        }
      );

      // Animate stats
      gsap.fromTo(".about-stat",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)", stagger: 0.1,
          scrollTrigger: { trigger: ".about-stats", start: "top 88%", toggleActions: "play none none none" }
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen text-white">
      {/* ---- HERO SPLIT (Photo | Content) ---- */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left: Darkened photo */}
        <div className="about-photo w-full lg:w-1/2 relative overflow-hidden flex items-center justify-center min-h-[55vh] lg:min-h-screen">
          <img
            src={AboutImg}
            alt="Jai Thawal"
            className="w-full h-full object-cover brightness-[0.35] contrast-[1.1] saturate-[0.8] absolute inset-0"
          />
          {/* Gradient blends photo into bg on both sides */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111]/60 via-transparent to-[#111] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#111] to-transparent pointer-events-none lg:hidden" />
          <div className="absolute inset-0 flex items-end p-8 pb-12 lg:hidden">
            <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase">B.Tech CS AI/ML · 2024–2028</p>
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 pt-28 lg:pt-36 pb-16 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Heading */}
            <div className="about-heading border-l-4 border-cyan-400 pl-5 mb-8">
              <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Get to know me</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mt-2">
                About <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Me</span>
              </h1>
            </div>

            {/* Description */}
            <div className="about-heading text-gray-300 space-y-4 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Hi! I'm <strong className="text-cyan-300">Jai Thawal</strong> — a
                <strong className="text-pink-300"> B.Tech Computer Science & Engineering (AI/ML) </strong>
                student in my 3rd year, batch of <strong className="text-cyan-300">2024 to 2028</strong>,
                with a current GPA of <strong className="text-pink-400 font-mono text-xl"> 8.4 / 10</strong>.
              </p>
              <p>
                I combine a love of clean UI, smart algorithms, and machine learning to build projects that are both visually striking and technically sound.
              </p>
            </div>

            {/* GPA / Stats Bar */}
            <div className="about-stats flex flex-wrap gap-4 mb-10">
              {[
                { label: "GPA", value: "8.4 / 10" },
                { label: "Batch", value: "2024–2028" },
                { label: "Year", value: "3rd" },
                { label: "Projects", value: "4+" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="about-stat rounded-2xl border border-cyan-400/25 bg-white/5 backdrop-blur-md px-5 py-3 text-center"
                >
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{label}</p>
                  <p className="text-xl font-extrabold text-white mt-1">{value}</p>
                </div>
              ))}
            </div>

            {/* Cards grid */}
            <div className="about-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaGraduationCap />, title: "Academics",
                  body: "B.Tech CSE (AI/ML) — Solid grounding in theory, algorithms, and applied machine learning.",
                },
                {
                  icon: <FaCode />, title: "Development",
                  body: "Building reactive UIs with React & Tailwind, REST APIs with FastAPI, and full-stack web apps.",
                },
                {
                  icon: <FaBrain />, title: "DSA & AI",
                  body: "Practising DSA problem-solving, studying ML models, and exploring Generative AI patterns.",
                },
                {
                  icon: <FaHeart />, title: "Interests",
                  body: "Designing wireframes in Figma, collaborating on GitHub, and solving DSA problems.",
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="about-card group rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md p-5 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1">
                  <div className="flex items-center gap-3 text-cyan-400 mb-3">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
                    <h3 className="text-base font-bold text-gray-100 group-hover:text-white">{title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---- SECOND SECTION: More About Info ---- */}
      <div className="px-6 sm:px-12 lg:px-24 py-24">
        <div className="max-w-5xl mx-auto">
          {/* Section title */}
          <div className="about-heading text-center mb-16">
            <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">A little more</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">
              What I <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Bring</span>
            </h2>
          </div>

          <div className="about-cards-grid grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaUserGraduate className="text-cyan-400 text-3xl" />,
                title: "Academic Foundation",
                body: "Strong base in computer science fundamentals — data structures, operating systems, DBMS, and OOP with Java & C++.",
              },
              {
                icon: <SiReact className="text-cyan-400 text-3xl" />,
                title: "Frontend Expertise",
                body: "Built real-world UIs using React, Tailwind CSS, and vanilla JS/HTML/CSS. Passionate about micro-animations and responsive layouts.",
              },
              {
                icon: <FaBrain className="text-pink-400 text-3xl" />,
                title: "AI / ML Focus",
                body: "Actively learning ML algorithms, neural networks, and exploring Generative AI tooling including MCP protocol and AWS ML services.",
              },
              {
                icon: <SiFastapi className="text-emerald-400 text-3xl" />,
                title: "Backend & APIs",
                body: "Familiar with FastAPI for building lightweight, scalable Python APIs connected to MongoDB and MySQL databases.",
              },
              {
                icon: <SiMongodb className="text-emerald-500 text-3xl" />,
                title: "Data Engineering",
                body: "Experience designing schemas and working with both relational (MySQL) and document-based (MongoDB) databases.",
              },
              {
                icon: <FaMapMarkerAlt className="text-pink-400 text-3xl" />,
                title: "Problem Solver",
                body: "LeetCode 450+ — Solving problems related to algorithms and data structures and improve my logical thinking.",
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="about-card group rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)] hover:-translate-y-1">
                <div className="mb-4">{icon}</div>
                <h3 className="text-base font-bold text-gray-100 mb-2 group-hover:text-white">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;