import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    // Skip entirely on touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // Set initial positions offscreen
    gsap.set(dot, { xPercent: -50, yPercent: -50, x: -100, y: -100 });
    gsap.set(ring, { xPercent: -50, yPercent: -50, x: -100, y: -100 });

    const onMouseMove = (e) => {
      // Small dot follows mouse instantly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "power2.out",
      });

      // Larger ring follows with a slight easing delay
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Hover effect handlers
    const onMouseEnterLink = () => {
      gsap.to(ring, {
        scale: 1.8,
        backgroundColor: "rgba(34, 211, 238, 0.15)",
        borderColor: "rgba(236, 72, 153, 0.8)", // Changes to pink gradient border on hover
        borderWidth: "1.5px",
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 1.5,
        backgroundColor: "#f472b6", // pink-400
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(ring, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "rgba(34, 211, 238, 0.6)", // back to cyan
        borderWidth: "1px",
        duration: 0.3,
      });
      gsap.to(dot, {
        scale: 1,
        backgroundColor: "#22d3ee", // cyan-400
        duration: 0.3,
      });
    };

    // Since React routes can load dynamic elements, recheck/attach occasionally or listen to mouseover
    const onMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [role='button'], .hover-target");
      if (target) {
        onMouseEnterLink();
      } else {
        onMouseLeaveLink();
      }
    };
    
    // Instead of simple hover event handlers that might miss dynamically rendered elements,
    // we can use event delegation on window.
    window.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, []);

  return (
    <>
      {/* Central small dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] h-2 w-2 rounded-full bg-cyan-400 mix-blend-screen hidden md:block"
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] h-8 w-8 rounded-full border border-cyan-400/60 mix-blend-screen hidden md:block"
      />
    </>
  );
};

export default Cursor;
