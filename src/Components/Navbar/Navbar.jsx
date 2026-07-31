import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Projects", to: "/project" },
    { label: "Achievements", to: "/achievement" },
    { label: "Contact", to: "/contact" },
  ];

  const navLinkClass = (to) => {
    const active = location.pathname === to;
    return `relative text-lg font-medium transition-all duration-300
      after:content-[''] after:absolute after:left-0 after:-bottom-1
      after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-pink-500
      after:transition-all after:duration-300 hover:after:w-full
      ${active
        ? "text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.7)] after:!w-full"
        : "text-cyan-400 hover:text-pink-400 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]"
      }`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-10 lg:px-16 py-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5">

      {/* Logo */}
      <Link to="/" className="group">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide leading-none transition-all duration-300 group-hover:scale-105">
          <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-pink-500 bg-clip-text text-transparent font-serif transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(103,232,249,0.7)]">
            Jai Thawal
          </span>
        </h1>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-10">
        {links.map(({ label, to }) => (
          <Link key={to} to={to} className={navLinkClass(to)}>
            {label}
          </Link>
        ))}
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
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-[420px] py-6 border-b border-cyan-400/20" : "max-h-0"
          }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={navLinkClass(to)}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;