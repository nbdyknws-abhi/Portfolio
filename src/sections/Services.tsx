import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Layers, Cpu, Eye, Compass, Code2 } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  specs: string[];
  emotion: string;
}

interface ServicesProps {
  onSelectService: (serviceType: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services: ServiceItem[] = [
    {
      id: "01",
      title: "Cinematic Landing Pages",
      desc: "High-impact single pages that focus on storytelling, lighting flow, and cinematic visual pacing to maximize brand presence.",
      icon: <Sparkles className="text-brand-amber" size={24} />,
      specs: ["WebGL Integration", "Scroll Animations", "Audio Design", "Product Showcases"],
      emotion: "AWE & DESIRE",
    },
    {
      id: "02",
      title: "Interactive Brand Websites",
      desc: "Full-scale marketing ecosystems engineered with smooth section transitions, micro-interactions, and premium layouts.",
      icon: <Layers className="text-brand-amber" size={24} />,
      specs: ["Custom Routings", "Visual Fluidity", "Content Management", "High SEO Integrity"],
      emotion: "TRUST & AUTHORITY",
    },
    {
      id: "03",
      title: "Motion Design Systems",
      desc: "Bespoke animation frameworks, defining easing rules, interaction styles, and transitions for absolute unity.",
      icon: <Cpu className="text-brand-amber" size={24} />,
      specs: ["SVG Animators", "GPU Optimization", "Framer Motion", "GSAP Timelines"],
      emotion: "MOMENTUM & DEPTH",
    },
    {
      id: "04",
      title: "Premium UI/UX Design",
      desc: "Art-directed layout grids, high-end editorial typography scales, and custom luxury styling presets.",
      icon: <Eye className="text-brand-amber" size={24} />,
      specs: ["Editorial Spacing", "Glassmorphic Panels", "Dark Luxury Themes", "Interactive Prototypes"],
      emotion: "CONFIDENCE",
    },
    {
      id: "05",
      title: "Frontend Craftsmanship",
      desc: "Production-ready engineering using clean React + TS structures, ensuring smooth 60fps scrolling and speed.",
      icon: <Code2 className="text-brand-amber" size={24} />,
      specs: ["React / NextJS", "TypeScript", "Tailwind Systems", "Clean Semantics"],
      emotion: "PRECISION",
    },
    {
      id: "06",
      title: "Performance Optimization",
      desc: "Profiling render times, optimizing assets, minimizing layout shifts, and ensuring 60fps scrolling animations.",
      icon: <Compass className="text-brand-amber" size={24} />,
      specs: ["Core Web Vitals", "Asset Compression", "Bundle Reduction", "FPS Diagnostics"],
      emotion: "SPEED & FLUIDITY",
    },
  ];

  const [mobileActiveIdx, setMobileActiveIdx] = useState<number | null>(null);

  useEffect(() => {
    // Detect mobile touch screen devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (!isTouch) return;

    const servicesSection = document.getElementById("services");
    if (!servicesSection) return;

    const rows = servicesSection.querySelectorAll(".service-row");
    if (rows.length === 0) return;

    let scrollTimeout: any;

    // Use IntersectionObserver to track which row enters the center of the viewport (no layout thrashing!)
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-35% 0px -35% 0px", // Trigger when entering/exiting the middle 30% region of screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let activeIdx: number | null = null;

      // Find the row currently intersecting the center zone
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const rowIdx = Array.from(rows).indexOf(entry.target as HTMLElement);
          if (rowIdx !== -1) {
            activeIdx = rowIdx;
          }
        }
      });

      if (activeIdx !== null) {
        setMobileActiveIdx(activeIdx);
      }

      // Reset the mobile details collapse timer on scroll trigger activity
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setMobileActiveIdx(null);
      }, 1500);
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    rows.forEach((row) => observer.observe(row));

    // Passive scroll listener only resets the idle collapse timer, avoiding getBoundingClientRect entirely!
    const handleScrollReset = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setMobileActiveIdx(null);
      }, 1500);
    };

    window.addEventListener("scroll", handleScrollReset, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollReset);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const mapServiceToPreset = (title: string) => {
    if (title.includes("Landing Pages")) return "Cinematic Landing Page";
    if (title.includes("Brand Websites")) return "Interactive Brand Website";
    if (title.includes("Motion Design")) return "Motion Design System";
    if (title.includes("UI/UX Design")) return "Premium UI/UX Design";
    return "Custom High-End Project";
  };

  return (
    <section
      id="services"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col space-y-4 mb-20 text-left">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              CAPABILITIES & METHOD
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Design & Execution
          </h2>
        </div>

        {/* Services Rows List */}
        <div className="border-t border-white/10">
          {services.map((service, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => onSelectService(mapServiceToPreset(service.title))}
                className="service-row border-b border-white/15 py-8 md:py-12 relative overflow-hidden transition-all duration-300 select-none cursor-pointer"
              >
                {/* Expandable background highlight */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-brand-amber/[0.02] to-transparent pointer-events-none transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
                  
                  {/* Left block: ID & Title & Icon */}
                  <div className="lg:col-span-6 flex items-center space-x-6 text-left">
                    <span className="text-xs font-mono text-brand-gray/50 font-medium">
                      {service.id}
                    </span>
                    <div className="p-2 bg-brand-charcoal/40 rounded border border-white/5">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-semibold tracking-wide text-brand-light transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Mid block: Short Description */}
                  <div className="lg:col-span-4 text-left">
                    <p className="text-xs md:text-sm text-brand-gray font-light leading-relaxed max-w-md">
                      {service.desc}
                    </p>
                  </div>

                  {/* Right block: Target Emotion */}
                  <div className="lg:col-span-2 text-left lg:text-right">
                    <span className="text-[10px] font-mono text-brand-amber bg-brand-amber/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.emotion}
                    </span>
                  </div>

                </div>

                {/* Mobile: Specs show on scroll focus, collapse when scroll stops */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: mobileActiveIdx === index ? "auto" : 0,
                    opacity: mobileActiveIdx === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="block md:hidden overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-4 pt-6 pl-6 text-left border-t border-white/5 mt-6">
                    {service.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="space-y-1">
                        <span className="block text-[8px] font-mono text-brand-gray tracking-wider uppercase">
                          SPEC_0{specIdx + 1}
                        </span>
                        <span className="block text-xs text-brand-light font-medium">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Desktop: Specifications showing on Hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isHovered ? "auto" : 0,
                    opacity: isHovered ? 1 : 0,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="hidden md:block overflow-hidden"
                >
                  <div className="grid grid-cols-4 gap-6 pt-6 pl-14 text-left border-t border-white/5 mt-6">
                    {service.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="space-y-1">
                        <span className="block text-[8px] font-mono text-brand-gray tracking-wider uppercase">
                          SPEC_0{specIdx + 1}
                        </span>
                        <span className="block text-xs text-brand-light font-medium">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
