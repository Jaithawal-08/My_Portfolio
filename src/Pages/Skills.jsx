import React, { useEffect, useRef } from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub,
  FaPython, FaJava, FaSitemap, FaBrain, FaRobot, FaServer, FaMicrochip, FaProjectDiagram,
} from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiCplusplus, SiJavascript, SiFastapi, SiFigma, SiScikitlearn } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Core Languages & DSA",
    color: "cyan",
    skills: [
      { name: "DSA", icon: <FaSitemap className="text-amber-400" /> },
      { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
      { name: "OOPs / Java", icon: <FaJava className="text-red-500" /> },
      { name: "Python", icon: <FaPython className="text-yellow-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
    ],
  },
  {
    title: "Frontend & Design",
    color: "sky",
    skills: [
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      { name: "Figma", icon: <SiFigma className="text-purple-400" /> },
    ],
  },
  {
    title: "Backend & Databases",
    color: "emerald",
    skills: [
      { name: "FastAPI", icon: <SiFastapi className="text-emerald-400" /> },
      { name: "MySQL", icon: <FaDatabase className="text-blue-300" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
    ],
  },
  {
    title: "AI & Machine Learning",
    color: "pink",
    skills: [
      { name: "Machine Learning", icon: <FaBrain className="text-pink-400" /> },
      { name: "Generative AI", icon: <FaRobot className="text-sky-300" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="text-orange-400" /> },
    ],
  },
  {
    title: "Core Subjects",
    color: "violet",
    skills: [
      { name: "DBMS", icon: <FaDatabase className="text-blue-400" /> },
      { name: "Operating Systems", icon: <FaServer className="text-green-400" /> },
      { name: "COA", icon: <FaMicrochip className="text-yellow-400" /> },
      { name: "System Design", icon: <FaProjectDiagram className="text-purple-400" /> },
    ],
  },
  {
    title: "Tools & Collaboration",
    color: "orange",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
    ],
  },
];

const Skills = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".skills-header",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ".skills-header", start: "top 88%" } }
      );
      gsap.fromTo(".skill-category",
        { opacity: 0, y: 70 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.18,
          scrollTrigger: { trigger: ".skills-grid", start: "top 85%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(".skill-proficiency-row",
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.12,
          scrollTrigger: { trigger: ".proficiency-section", start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const proficiencies = [
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 78 },
    { name: "React", level: 72 },
    { name: "C++", level: 75 },
    { name: "Python", level: 70 },
    { name: "Machine Learning", level: 60 },
    { name: "MySQL / PostgreSQL", level: 65 },
    { name: "FastAPI", level: 58 },
  ];

  return (
    <div ref={pageRef} className="relative min-h-screen text-white px-6 sm:px-12 lg:px-24 pt-28 pb-24">

      {/* Header */}
      <div className="skills-header max-w-4xl mx-auto mb-16 text-center">
        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">My Expertise</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Tech Stack</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          A full view of the languages, frameworks, tools, and technical specialties I have built up through my B.Tech journey and personal projects.
        </p>
      </div>

      {/* Skill Category Cards */}
      <div className="skills-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="skill-category group rounded-3xl border border-cyan-400/25 bg-white/5 backdrop-blur-md p-6 transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:scale-[1.01]"
          >
            <h2 className="text-lg font-bold text-cyan-300 border-b border-cyan-400/20 pb-3 mb-4 tracking-wide">
              {category.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-black/30 border border-transparent transition-all duration-300 hover:border-cyan-400/30 hover:bg-black/50 hover:-translate-y-1"
                >
                  <div className="text-2xl sm:text-3xl mb-2">{icon}</div>
                  <span className="text-xs font-semibold text-gray-300 text-center leading-tight">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;