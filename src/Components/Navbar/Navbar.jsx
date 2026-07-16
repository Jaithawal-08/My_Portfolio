import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navStyle =
    "relative text-cyan-400 text-lg font-medium transition-all duration-300 hover:text-pink-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-pink-500 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <nav className="relative top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-16 py-5 flex justify-between items-center">

      {/* Logo */}
      <Link to="/" className="group">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide leading-none transition-all duration-300 group-hover:scale-105">
        <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-500 bg-clip-text text-transparent font-serif transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.7)] group-hover:brightness-125">
           Jai Thawal
        </span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10">
        <Link to="/" className={navStyle}>Home</Link>
        <Link to="/about" className={navStyle}>About</Link>
        <Link to="/skills" className={navStyle}>Skills</Link>
        <Link to="/project" className={navStyle}>Projects</Link>
        <Link to="/achievement" className={navStyle}>Achievements</Link>
        <Link to="/contact" className={navStyle}>Contact</Link>
      </div>

      {/* Hamburger */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-cyan-400 text-4xl hover:text-pink-400 transition"
      >
        {isMenuOpen ? <HiXMark /> : <HiBars3 />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Link
            to="/"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/skills"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Skills
          </Link>

          <Link
            to="/project"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>

          <Link
            to="/achievement"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Achievements
          </Link>

          <Link
            to="/contact"
            className={navStyle}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;