import React, { useState, useEffect, useRef } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaPhone } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-header",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-header", start: "top 88%" }
        }
      );
      gsap.fromTo(".contact-left",
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-left", start: "top 85%" }
        }
      );
      gsap.fromTo(".contact-right",
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: ".contact-right", start: "top 85%" }
        }
      );
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: "", email: "", subject: "", message: "" });
      }, 3500);
    }
  };

  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-black/40 border border-cyan-400/20 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-black/60 focus:shadow-[0_0_18px_rgba(34,211,238,0.25)]";

  return (
    <div ref={pageRef} className="relative min-h-screen text-white px-6 sm:px-12 lg:px-24 pt-28 pb-24">

      {/* Header */}
      <div className="contact-header max-w-4xl mx-auto mb-16 text-center">
        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">Let's Talk</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          Get In <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Touch</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project idea, a collaboration opportunity, or just want to discuss AI/ML and software? Drop a message!
        </p>
      </div>

      {/* Two-column layout */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left column — contact info */}
        <div className="contact-left flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide mb-2">Contact Information</h2>

          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I'm a B.Tech CSE (AI/ML) student open to internship opportunities, development collaborations, and technical discussions around web development, machine learning, and system design.
          </p>

          {/* Info items */}
          <div className="space-y-4 mt-2">
            {[
              { icon: <FaEnvelope />, label: "Email", value: "jaithawal08@gmail.com", href: "mailto:jaithawal08@gmail.com" },
              { icon: <FaMapMarkerAlt />, label: "Location", value: "India", href: null },
            ].map(({ icon, label, value, href }) => {
              const inner = (
                <div className="group flex items-center gap-4 p-4 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                  <div className="text-xl text-cyan-400 p-3 bg-black/35 rounded-xl border border-cyan-400/15 group-hover:border-cyan-400/35">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase">{label}</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-200 mt-0.5">{value}</p>
                  </div>
                </div>
              );
              return href ? <a key={label} href={href}>{inner}</a> : <div key={label}>{inner}</div>;
            })}
          </div>

          {/* Social links */}
          <div className="mt-4">
            <p className="text-xs font-mono tracking-widest text-cyan-400 uppercase mb-4">Find me on</p>
            <div className="flex gap-4 flex-wrap">
              {[
                { icon: <FaGithub />, href: "https://github.com/Jaithawal-08", label: "GitHub" },
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jai-thawal-5510b6294", label: "LinkedIn" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-cyan-400/30 rounded-full text-cyan-400 bg-white/5 text-sm font-semibold hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-base">{icon}</span> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick quote */}
          <div className="mt-6 p-5 rounded-2xl border border-cyan-400/15 bg-white/5 backdrop-blur-md">
            <p className="text-gray-300 italic text-sm leading-relaxed">
              ❝ Driven by curiosity, powered by code, and committed to continuous growth. ❞
            </p>
          </div>
        </div>

        {/* Right column — form */}
        <div className="contact-right rounded-3xl border border-cyan-400/25 bg-white/5 backdrop-blur-md p-6 sm:p-8 transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <h3 className="text-2xl font-bold tracking-wide text-gray-100 mb-6">Send a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Name</label>
                <input type="text" name="name" required value={formState.name} onChange={handleChange} placeholder="Your Name" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Email</label>
                <input type="email" name="email" required value={formState.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Subject</label>
              <input type="text" name="subject" value={formState.subject} onChange={handleChange} placeholder="Internship / Collaboration / Hello!" className={inputClass} />
            </div>

            <div>
              <label className="block text-xs font-mono tracking-widest text-cyan-400 uppercase mb-2">Message</label>
              <textarea
                name="message" required rows="6" value={formState.message}
                onChange={handleChange} placeholder="Tell me about your project or idea..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-4 border-2 border-cyan-400 rounded-full text-cyan-400 font-bold text-lg transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            >
              <FaPaperPlane className="text-sm" />
              {submitted ? "Message Sent! ✓" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-center font-semibold text-pink-400 text-sm animate-pulse">
                Thank you! I'll get back to you shortly. 🎉
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;