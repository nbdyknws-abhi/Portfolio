import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
}

export const Testimonials: React.FC = () => {
  const reviews: Testimonial[] = [
    {
      quote:
        "Abhishek turned our project concept into an interactive film. The frame rate stayed at a perfect 60fps on mobile, and the lighting changes on scroll completely wowed our design cohort.",
      name: "Marcus Vance",
      role: "Front-End Lead",
      company: "Aether Motors (Concept)",
      project: "Chronos GT Launchpad",
    },
    {
      quote:
        "We expected a simple portfolio, but we received a masterclass in digital storytelling. The scroll smoothness and custom animations were implemented with absolute engineering precision.",
      name: "Helena Rostova",
      role: "UX Researcher",
      company: "Kage Fashion (Concept)",
      project: "Autumn_26 Editorial Hub",
    },
    {
      quote:
        "A rare combination of high-fidelity design capability and deep frontend craft. He understood the visual weight of brutalist structures and implemented them with zero loading lag.",
      name: "Christian Bale",
      role: "Project Mentor",
      company: "Atelier Nova (Concept)",
      project: "Agency Portfolio Ecosystem",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col space-y-4 mb-20 text-left">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              PROJECT REVIEWS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Project Appraisals
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {reviews.map((rev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-panel rounded-xl p-8 shadow-xl flex flex-col justify-between relative group hover:border-brand-amber/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-brand-gray/10 group-hover:text-brand-amber/15 transition-colors duration-300">
                <Quote size={40} />
              </div>

              {/* Quote text */}
              <div className="space-y-6 relative z-10">
                <p className="text-sm md:text-base text-brand-light/90 leading-relaxed font-light italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-8 border-t border-white/5 mt-8 flex flex-col space-y-2 relative z-10">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-semibold font-display text-brand-light">
                    {rev.name}
                  </span>
                  <span className="text-[8px] font-mono text-brand-amber uppercase tracking-widest">
                    {rev.role.includes("Mentor") ? "MENTOR REVIEW" : "PEER REVIEW"}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-brand-gray">
                  <span>{rev.role}</span>
                  <span className="mx-1.5">@</span>
                  <span className="text-brand-light/75">{rev.company}</span>
                </div>
                <div className="text-[9px] font-mono text-brand-gray/50 tracking-wider">
                  CASE_STUDY: {rev.project}
                </div>
              </div>

              {/* Ambient thin border highlight */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent group-hover:bg-brand-amber transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
