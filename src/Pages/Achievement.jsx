import React, { useEffect, useRef } from "react";
import { FaAws, FaExternalLinkAlt, FaRegCheckCircle, FaExpand, FaTimes } from "react-icons/fa";
import { SiAnthropic } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: "aws-cloud",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS) Academy",
    details:
      "Completed 20 hours of structured instruction covering core cloud architecture, AWS services (EC2, S3, RDS, VPC, IAM), pricing models, and cloud security principles.",
    date: "04 June 2026",
    icon: <FaAws className="text-[#FF9900] text-4xl" />,
    verifyUrl: "https://www.credly.com/go/2afxY61b",
    badgeText: "Credential ID: 2afxY61b",
    certImage: "/certs/aws_cloud_badge.png",
    tag: "Cloud Computing",
    tagColor: "text-orange-300 bg-orange-500/10 border-orange-400/30",
  },
  {
    id: "aws-ml",
    title: "AWS Machine Learning Foundation",
    issuer: "Amazon Web Services (AWS) Academy",
    details:
      "Completed AWS curriculum training covering fundamental machine learning concepts on AWS — including data engineering, feature engineering, model training, and evaluation pipelines.",
    date: "2026",
    icon: <FaAws className="text-[#FF9900] text-4xl" />,
    verifyUrl: "https://www.credly.com/go/2afxY61b",
    badgeText: "AWS Training Badge Received",
    certImage: "/certs/aws_cloud_badge.png",
    tag: "Machine Learning",
    tagColor: "text-yellow-300 bg-yellow-500/10 border-yellow-400/30",
  },
  {
    id: "anthropic-mcp",
    title: "Introduction to Model Context Protocol",
    issuer: "Anthropic",
    details:
      "Completed official Anthropic training on designing, building, and deploying MCP servers — the standard protocol for LLM integrations that enables Claude and other models to connect securely to external tools.",
    date: "2026",
    icon: <SiAnthropic className="text-[#E0D4C3] text-4xl" />,
    verifyUrl: "https://verify.skilljar.com/c/6gi8ix2uv5ra",
    badgeText: "Certificate No: 6gi8ix2uv5ra",
    certImage: "/certs/anthropic_mcp_cert.png",
    tag: "Generative AI",
    tagColor: "text-emerald-300 bg-emerald-500/10 border-emerald-400/30",
  },
];

const Achievement = () => {
  const pageRef = useRef(null);
  const [lightbox, setLightbox] = React.useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".ach-header",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".ach-header", start: "top 88%" }
        }
      );
      gsap.utils.toArray(".cert-card").forEach((card, i) => {
        gsap.fromTo(card,
          { opacity: 0, y: 70 },
          {
            opacity: 1, y: 0, duration: 0.85, ease: "power3.out", delay: i * 0.12,
            scrollTrigger: { trigger: card, start: "top 88%", toggleActions: "play none none none" },
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen text-white px-6 sm:px-12 lg:px-24 pt-28 pb-24">

      {/* Lightbox overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl transition-colors"
            onClick={() => setLightbox(null)}
          >
            <FaTimes />
          </button>
          <img
            src={lightbox}
            alt="Certificate"
            className="max-w-3xl w-full max-h-[80vh] object-contain rounded-2xl shadow-[0_0_60px_rgba(34,211,238,0.3)]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Header */}
      <div className="ach-header max-w-4xl mx-auto mb-16 text-center">
        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">My Credentials</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-3">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">Badges</span>
        </h1>
        <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Official credentials and verified training programs I have completed in Cloud Computing, Machine Learning, and Generative AI.
        </p>
      </div>

      {/* Certification Cards — single column, big, with image */}
      <div className="max-w-4xl mx-auto space-y-10">
        {certifications.map((item) => (
          <div
            key={item.id}
            className="cert-card group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_50px_rgba(34,211,238,0.2)] hover:scale-[1.005]"
          >
            <div className="flex flex-col lg:flex-row">
              {/* Certificate Image Preview */}
              <div
                className="lg:w-72 xl:w-80 flex-shrink-0 relative overflow-hidden bg-black/40 cursor-pointer flex items-center justify-center min-h-48 lg:min-h-0"
                onClick={() => setLightbox(item.certImage)}
              >
                <img
                  src={item.certImage}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* Expand overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <div className="flex flex-col items-center text-white text-sm font-semibold gap-2">
                    <FaExpand className="text-2xl text-cyan-400" />
                    <span className="text-xs text-cyan-300">View Certificate</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Tag */}
                  <span className={`inline-block text-xs font-mono font-semibold px-3 py-1 rounded-full border mb-4 ${item.tagColor}`}>
                    {item.tag}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-3">
                    <div className="p-3 bg-black/40 rounded-2xl border border-cyan-400/20 group-hover:border-cyan-400/40 transition-colors flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-mono mt-1">{item.issuer}</p>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mt-4 mb-6">
                    {item.details}
                  </p>
                </div>

                {/* Footer: Badge ID + Date + Verify button */}
                <div className="border-t border-cyan-400/15 pt-4">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-4 text-xs font-mono">
                    <span className="text-cyan-400">{item.badgeText}</span>
                    <span className="text-gray-400">{item.date}</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={item.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 border border-cyan-400/60 rounded-full text-cyan-400 font-semibold text-xs transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                    >
                      <FaRegCheckCircle /> Verify Credential <FaExternalLinkAlt className="text-[9px]" />
                    </a>
                    <button
                      onClick={() => setLightbox(item.certImage)}
                      className="flex items-center gap-2 px-5 py-2.5 border border-pink-500/40 rounded-full text-pink-400 font-semibold text-xs transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    >
                      <FaExpand className="text-xs" /> View Certificate
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;