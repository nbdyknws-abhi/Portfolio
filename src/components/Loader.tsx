import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Play cinematic animation for 2.8 seconds, then trigger complete
    const timer = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      setTimeout(onComplete, 1000); // Allow exit transition to complete
    }, 2800);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 w-full h-full bg-brand-black z-[9999] flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center text-[9px] tracking-[0.3em] font-mono text-brand-gray uppercase z-10">
            <span>© 2026 / PORTFOLIO</span>
            <span>CREATIVE FE DEVELOPER</span>
          </div>

          {/* Center Brand Identity with Layered Depth */}
          <div className="flex flex-col items-center justify-center flex-1 my-auto relative w-full h-full">
            {/* Ambient gold glow in loading center */}
            <div className="absolute w-[400px] h-[400px] bg-brand-amber/5 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Layer 1: Massive Outline-Stroked Background Title (styled with gold stroke) */}
            <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, letterSpacing: "0.05em" }}
                animate={{ opacity: 0.2, scale: 1, letterSpacing: "0.15em" }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{
                  WebkitTextStroke: "1px rgba(212, 175, 55, 0.15)",
                  color: "transparent",
                }}
                className="text-2xl xs:text-3xl sm:text-6xl md:text-8xl lg:text-[8vw] font-display font-black text-center uppercase leading-none tracking-widest break-words max-w-5xl px-4"
              >
                NBDYKNWS
              </motion.div>
            </div>

            {/* Layer 2: 3D Textured Foreground Title */}
            <div className="relative overflow-visible z-10 flex flex-col items-center justify-center space-y-6">
              <div className="overflow-hidden py-4 px-8">
                <motion.h1 
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1], // premium easeOutQuart
                  }}
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-[0.18em] text-center uppercase loader-text-3d"
                >
                  NBDYKNWS
                </motion.h1>
              </div>

              <motion.p
                className="text-[10px] md:text-xs tracking-[0.5em] text-brand-amber font-mono uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 0.8, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                MADE BY ABHISHEK
              </motion.p>
            </div>
          </div>

          {/* Footer loading tracker without progress percentage */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 text-[9px] font-mono uppercase tracking-[0.25em] text-brand-gray z-10">
            <div className="max-w-xs text-left">
              <span className="block text-brand-amber text-[9px] mb-2 tracking-[0.3em]">SYSTEM STATE:</span>
              <span className="block normal-case text-brand-light/60 font-light leading-relaxed">
                Assembling motion structures & atmospheric lighting shaders.
              </span>
            </div>
            
            <div className="flex items-center space-x-3 text-brand-amber animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <span>INITIALIZING SYSTEM</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
