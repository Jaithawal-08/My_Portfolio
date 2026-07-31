import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const PageTransition = ({ children }) => {
  const location = useLocation();
  const overlayRef = useRef(null);
  const overlay2Ref = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    const overlay2 = overlay2Ref.current;
    const content = contentRef.current;

    if (!overlay || !overlay2 || !content) return;

    // Kill any running tweens
    gsap.killTweensOf([overlay, overlay2, content]);

    // Reset: overlay covers screen, content hidden
    gsap.set(overlay, { scaleY: 1, transformOrigin: "top center" });
    gsap.set(overlay2, { scaleY: 1, transformOrigin: "top center" });
    gsap.set(content, { opacity: 0 });

    const tl = gsap.timeline();

    // Both overlays slide out downward to reveal page
    tl.to(overlay2, {
      scaleY: 0,
      transformOrigin: "bottom center",
      duration: 0.55,
      ease: "power3.inOut",
      delay: 0.05,
    })
      .to(overlay, {
        scaleY: 0,
        transformOrigin: "bottom center",
        duration: 0.5,
        ease: "power3.inOut",
      }, "-=0.35")
      .to(content, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      }, "-=0.25");

    return () => {
      gsap.killTweensOf([overlay, overlay2, content]);
    };
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Transition Overlay 2 (back layer — pink-tinted) */}
      <div
        ref={overlay2Ref}
        className="fixed inset-0 z-[9990] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(236,72,153,0.95) 0%, rgba(14,116,144,0.95) 100%)",
          transformOrigin: "top center",
        }}
      />
      {/* Transition Overlay 1 (front layer — dark) */}
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9991] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #0c1a2e 50%, #0a0a0a 100%)",
          transformOrigin: "top center",
        }}
      />

      {/* Page Content */}
      <div ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
