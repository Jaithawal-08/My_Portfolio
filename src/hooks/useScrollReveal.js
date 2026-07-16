import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollReveal
 * Attach to a container ref. All children matching `selector` will
 * animate in (fade + slide) as they enter the viewport.
 *
 * @param {string} selector  - CSS selector for child elements (default ".reveal")
 * @param {object} options   - overrides: { y, duration, stagger, delay, start }
 */
const useScrollReveal = (selector = ".reveal", options = {}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = containerRef.current?.querySelectorAll(selector);
      if (!elements || elements.length === 0) return;

      elements.forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: options.y ?? 50 },
          {
            opacity: 1,
            y: 0,
            duration: options.duration ?? 0.8,
            delay: options.delay ?? 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: options.start ?? "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [selector, options.y, options.duration, options.delay, options.start]);

  return containerRef;
};

export default useScrollReveal;
