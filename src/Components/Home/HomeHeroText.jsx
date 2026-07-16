import React from "react";
import { Link } from "react-router-dom";

const HomeHeroText = () => {
  return (
    <div className="flex items-center lg:h-screen text-white px-6 sm:px-8 md:px-16 lg:px-32 py-20 lg:py-0">
      <div className="max-w-2xl border-l-4 border-sky-400 pl-4 sm:pl-6">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-200 tracking-wide">
          Hey, I'm
        </h2>

        <h1 className="mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
          <span className="text-sky-400">Jai Thawal</span>
        </h1>

        <h3 className="mt-5 text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-100 leading-relaxed">
          Web Developer
          <span className="text-sky-400 mx-2">|</span>
          AI/ML Enthusiast
          <span className="text-sky-400 mx-2">|</span>
          DSA Learner
        </h3>

        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8">
          Passionate about building modern web applications, solving
          complex problems through Data Structures & Algorithms,
          and exploring Artificial Intelligence to create
          impactful real-world solutions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6">

          <Link
            to="https://leetcode.com/u/Jai_thawal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-56 py-3 sm:py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              View LeetCode
            </button>
          </Link>

          <Link
            to="https://github.com/Jaithawal-08"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full sm:w-56 py-3 sm:py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold text-base sm:text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              View GitHub
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
};

export default HomeHeroText;