import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Target, Compass, Palette, Film, Code, Rocket } from "lucide-react";

interface Step {
  scene: string;
  title: string;
  angle: string;
  desc: string;
  icon: React.ReactNode;
  deliverables: string[];
}

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const elements = document.querySelectorAll(".process-row");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        rootMargin: "-30% 0px -30% 0px", // Trigger active states near the middle third of viewport
        threshold: 0.1,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const steps: Step[] = [
    {
      scene: "SCENE 01",
      title: "Discovery & Narrative mapping",
      angle: "CAMERA: WIDE SHOT ON BRAND IDENTITY",
      desc: "Deconstruct project requirements and extract the core narrative hook. I establish the emotional positioning and identify what makes the design feel premium.",
      icon: <Target size={18} className="text-brand-amber" />,
      deliverables: ["Brand story outlines", "Mood boards", "Visual pacing guides"],
    },
    {
      scene: "SCENE 02",
      title: "Interactive Strategy",
      angle: "CAMERA: ESTABLISHING SHOT ON WIREFRAMES",
      desc: "Choreographing the user's flow. I chart scroll thresholds, plan visual scenes, and decide where animations build speed or hold moments of calm.",
      icon: <Compass size={18} className="text-brand-amber" />,
      deliverables: ["Interaction flowcharts", "Scroll-map layouts", "Content hierarchies"],
    },
    {
      scene: "SCENE 03",
      title: "Cinematic Layout Design",
      angle: "CAMERA: MACRO ZOOM ON SYSTEM TYPOGRAPHY",
      desc: "Forging the art direction. Designing customized glass panels, radial flares, ambient grids, and editorial headers in Figma with extreme attention to detail.",
      icon: <Palette size={18} className="text-brand-amber" />,
      deliverables: ["Art-directed Figma canvas", "Asset designs", "Custom grain overlays"],
    },
    {
      scene: "SCENE 04",
      title: "Motion Choreography",
      angle: "CAMERA: SLOW TRACKING SHOT ON SCENE RENDER",
      desc: "Creating the momentum rules. I program easing settings, custom scroll hooks, letter-by-letter splits, and responsive hover transitions using GSAP and Framer Motion.",
      icon: <Film size={18} className="text-brand-amber" />,
      deliverables: ["GSAP timeline setups", "Transition sheets", "Physics guidelines"],
    },
    {
      scene: "SCENE 05",
      title: "Premium Engineering",
      angle: "CAMERA: SPLIT-SCREEN ON COMPILER & DESIGN",
      desc: "Translating pixel concepts into ultra-clean, production-ready React + TypeScript code. I focus heavily on layout shifts, performance diagnostics, and load speed.",
      icon: <Code size={18} className="text-brand-amber" />,
      deliverables: ["Vite React application", "Tailwind styling", "SEO optimization markup"],
    },
    {
      scene: "SCENE 06",
      title: "Premiere & Launch",
      angle: "CAMERA: HIGH ANGLE ON LIVE MONITOR",
      desc: "Conducting ultimate cross-device testing, speed audits, and accessibility checks. I host on fast, reliable CDN edges to ensure instant load times.",
      icon: <Rocket size={18} className="text-brand-amber" />,
      deliverables: ["Live domain release", "Speed audit sheets", "Post-launch checks"],
    },
  ];

  return (
    <section
      id="process"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col space-y-4 mb-20 md:mb-24 text-left">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              PRODUCTION FLOW
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Creative Direction
          </h2>
        </div>

        {/* Process Timeline Grid */}
        <div className="relative">
          {/* Vertical Center Connection Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-brand-charcoal z-0" />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isActive = activeStep === index;

              return (
                <motion.div
                  key={index}
                  data-index={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="process-row flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-4 items-start text-left relative pl-12 md:pl-0"
                >
                  {/* Left Column (Desktop Even only) */}
                  <div
                    className={`hidden md:flex md:col-span-5 flex-col space-y-4 text-left md:text-right md:items-end ${
                      isEven ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                  >
                    {isEven && (
                      <div className="space-y-4">
                        <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded border transition-all duration-500 ${
                          isActive ? "bg-brand-amber/15 border-brand-amber/35" : "bg-brand-charcoal/40 border-white/5"
                        }`}>
                          <span className={`text-[9px] font-mono tracking-[0.25em] transition-colors duration-500 ${isActive ? "text-brand-amber font-semibold" : "text-brand-gray"}`}>
                            {step.scene}
                          </span>
                        </div>
                        <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-500 ${isActive ? "text-brand-amber" : "text-brand-light"}`}>
                          {step.title}
                        </h3>
                        <span className="block text-[9px] font-mono text-brand-gray tracking-wider">
                          {step.angle}
                        </span>
                        <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light max-w-md md:ml-auto">
                          {step.desc}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Column: Icon Pin */}
                  <div className="absolute left-0 top-1.5 md:relative md:left-auto md:top-auto md:col-span-2 flex justify-center items-center z-20">
                    <div 
                      className={`w-9 h-9 rounded-full bg-brand-black border-2 flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? "border-brand-amber shadow-[0_0_12px_rgba(212,175,55,0.6)] scale-110 text-brand-amber" 
                          : "border-brand-charcoal text-brand-gray"
                      }`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Right Column (All screens for Odd, Mobile only for Even) */}
                  <div className="flex flex-col space-y-4 md:col-span-5 w-full">
                    {/* Content Block */}
                    <div className={`space-y-4 ${isEven ? "block md:hidden" : "block"}`}>
                      <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded border transition-all duration-500 ${
                        isActive ? "bg-brand-amber/15 border-brand-amber/35" : "bg-brand-charcoal/40 border-white/5"
                      }`}>
                        <span className={`text-[9px] font-mono tracking-[0.25em] transition-colors duration-500 ${isActive ? "text-brand-amber font-semibold" : "text-brand-gray"}`}>
                          {step.scene}
                        </span>
                      </div>
                      <h3 className={`text-xl md:text-2xl font-display font-bold transition-colors duration-500 ${isActive ? "text-brand-amber" : "text-brand-light"}`}>
                        {step.title}
                      </h3>
                      <span className="block text-[9px] font-mono text-brand-gray tracking-wider">
                        {step.angle}
                      </span>
                      <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light max-w-md">
                        {step.desc}
                      </p>
                    </div>

                    {/* Deliverables Panel */}
                    <div
                      className={`p-4 rounded-lg border max-w-md transition-all duration-500 w-full ${
                        isEven ? "md:mr-auto" : "md:ml-0"
                      } ${
                        isActive ? "bg-brand-amber/[0.02] border-brand-amber/20" : "bg-brand-charcoal/20 border-white/5"
                      }`}
                    >
                      <span className="block text-[8px] font-mono text-brand-amber tracking-widest uppercase mb-2">
                        SCENE DELIVERABLES:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-[10px] text-brand-light/70 list-disc pl-4 font-mono">
                        {step.deliverables.map((del, dIndex) => (
                          <li key={dIndex}>{del}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
