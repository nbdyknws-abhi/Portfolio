import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  // Framer Motion values for smooth hardware-accelerated 3D tilt tracking (prevents React re-renders)
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Spring animations for custom lag easing on the card tilt
  const springX = useSpring(rotateX, { damping: 25, stiffness: 100 });
  const springY = useSpring(rotateY, { damping: 25, stiffness: 100 });

  const { scrollY } = useScroll();

  // Opacity fade transition on scroll based on absolute window scroll pixels (no layout thrashing)
  const opacityTransform = useTransform(scrollY, [0, 500], [1, 0]);

  // Handle mouse movements to tilt the glass card (optimized to cache size and run on compositor thread)
  useEffect(() => {
    let rect: DOMRect | null = null;

    const updateRect = () => {
      if (cardRef.current) {
        rect = cardRef.current.getBoundingClientRect();
      }
    };

    // Calculate dimensions initially
    updateRect();

    // Recalculate size on window resize
    window.addEventListener("resize", updateRect);

    const handleMouseMove = (e: MouseEvent) => {
      if (!rect) return;
      const x = (e.clientX - (rect.left + rect.width / 2)) / 25; // Tilt speed
      const y = (e.clientY - (rect.top + rect.height / 2)) / 25;
      rotateX.set(y);
      rotateY.set(-x);
    };

    const handleMouseLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [rotateX, rotateY]);

  const handleScrollTo = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const globalLenis = (window as any).lenis;
    const target = document.querySelector(href);
    if (target) {
      if (globalLenis && typeof globalLenis.scrollTo === "function") {
        globalLenis.scrollTo(target as HTMLElement);
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6 md:px-12 pt-24 pb-12 lg:pb-24 z-10"
    >
      {/* Background Flare */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-amber/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Main Grid Wrapper */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">

        {/* Left: Cinematic Title & Copy */}
        <motion.div
          className="lg:col-span-7 flex flex-col text-left space-y-6 md:space-y-8"
          style={{ opacity: opacityTransform }}
        >
          {/* Tag */}
          <div className="inline-flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              THE PORTFOLIO SYSTEM v2.6
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-display font-bold tracking-tight text-brand-light leading-[1.05]">
            I Build <br />
            <span className="text-stroke-hover text-brand-light transition-all duration-500">Cinematic</span> <br />
            Digital Experiences.
          </h1>

          {/* Subtext */}
          <p className="max-w-lg text-sm sm:text-base text-brand-gray font-light leading-relaxed">
            Crafting atmospheric storytelling interfaces, premium frontends, and motion systems for high-budget digital layouts. Making your digital core feel expensive.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <button
              onClick={(e) => handleScrollTo(e, "#projects")}
              className="flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-4 bg-brand-amber text-brand-black font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] clickable"
            >
              <span>Explore Projects</span>
              <ArrowRight size={14} />
            </button>
            <button
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="flex items-center space-x-2 text-xs uppercase tracking-widest px-6 py-4 glass-panel border border-white/10 hover:border-brand-amber/30 text-brand-light transition-all duration-300 hover:bg-brand-light/5 clickable"
            >
              <Play size={10} fill="currentColor" className="text-brand-amber" />
              <span>Initiate Project</span>
            </button>
          </div>
        </motion.div>

        {/* Right: Floating Glassmorphic UI Card (Micro-App) */}
        <motion.div
          className="lg:col-span-5 flex justify-center items-center relative"
          style={{ opacity: opacityTransform }}
        >
          {/* Glow behind card */}
          <div className="absolute w-[300px] h-[300px] bg-brand-amber/5 blur-[60px] rounded-full pointer-events-none" />

          <motion.div
            ref={cardRef}
            className="w-full max-w-[420px] glass-panel-gold rounded-xl p-6 shadow-2xl relative select-none"
            style={{
              rotateX: springX,
              rotateY: springY,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Header controls of floating frame */}
            <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
              <div className="flex space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              </div>
              <span className="text-[10px] font-mono tracking-widest text-brand-gray">SYSTEM_CORE.EXE</span>
            </div>

            {/* Dashboard / Mini UI contents */}
            <div className="space-y-4 text-left">
              <div className="bg-brand-black/50 p-4 rounded-lg border border-white/5">
                <div className="text-[9px] font-mono text-brand-amber mb-1 tracking-[0.2em]">ENGAGEMENT RATIO</div>
                <div className="text-2xl font-bold font-display text-brand-light tracking-wider">99.84%</div>
                <div className="w-full h-1 bg-brand-charcoal rounded overflow-hidden mt-2">
                  <div className="w-[84%] h-full bg-gradient-to-r from-brand-bronze to-brand-amber" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-brand-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-[9px] font-mono text-brand-gray mb-1 tracking-wider">LOAD TIME</div>
                  <div className="text-sm font-semibold font-display text-brand-light">0.34s</div>
                </div>
                <div className="bg-brand-black/30 p-3 rounded-lg border border-white/5">
                  <div className="text-[9px] font-mono text-brand-gray mb-1 tracking-wider">FRAME RATE</div>
                  <div className="text-sm font-semibold font-display text-brand-amber">60 FPS</div>
                </div>
              </div>

              <div className="bg-brand-black/45 p-4 rounded-lg border border-white/5 relative overflow-hidden">
                <div className="text-[9px] font-mono text-brand-amber mb-2 tracking-widest">
                  — SYSTEM STATE
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-brand-light/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                    <span>GPU RENDERING: OK</span>
                  </div>
                  <span className="text-brand-gray/50">SHADERS: ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Accent gold corner brackets */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-brand-amber rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-amber rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-amber rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-brand-amber rounded-br-lg" />
          </motion.div>
        </motion.div>
      </div>

      {/* Dynamic Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center space-y-2 pointer-events-none"
        style={{ opacity: opacityTransform }}
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-brand-gray">SCROLL TO BEGIN</span>
        <div className="w-[1px] h-10 bg-brand-charcoal overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-brand-amber"
            animate={{
              y: ["0%", "200%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
