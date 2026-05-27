import React from "react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  const philosophies = [
    {
      title: "Atmosphere & Pacing",
      desc: "Websites should breathe. Just like cinema, digital experiences need moments of high intensity and quiet calmness to guide the user's emotion.",
    },
    {
      title: "Visual Fidelity",
      desc: "No compromise on design. Using micro-animations, grain textures, and complex lighting to create interfaces that feel premium and tactile.",
    },
    {
      title: "Performance Craft",
      desc: "Smooth animations must be backed by structural optimization. Clean code, responsive structures, and GPU rendering are my baseline standards.",
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Heading and Tag */}
        <div className="lg:col-span-4 text-left flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              STUDIO MANIFESTO
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-brand-light">
            About <br className="hidden lg:inline" />
            The Craft
          </h2>
        </div>

        {/* Right Column: Story and Philosophy Grid */}
        <div className="lg:col-span-8 text-left space-y-16">
          {/* Main Story Paragraph */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-lg md:text-2xl font-light text-brand-light/95 leading-relaxed font-display"
            >
              I design and develop premium interactive websites. 
              Bridging the gap between cinematic storytelling and technical frontend excellence, 
              I shape digital spaces that feel clean, performant, and unforgettable.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-base text-brand-gray font-light leading-relaxed max-w-2xl"
            >
              Operating under the moniker NBDYKNWS, I treat the web browser as a canvas, 
              using light, shadow, depth, and momentum to craft websites that users don't just browse, 
              but experience. I build websites for people who believe their digital presence 
              is their most important asset.
            </motion.p>
          </div>

          {/* Philosophy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
            {philosophies.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-3"
              >
                <div className="text-[10px] font-mono text-brand-amber uppercase tracking-[0.2em] font-semibold">
                  0{index + 1} // {item.title}
                </div>
                <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Small Stats Dashboard - Optimized layout & text scaling for mobile viewports */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 p-4 md:p-6 rounded-lg glass-panel">
            <div className="space-y-1">
              <span className="block text-xl md:text-2xl font-display font-bold text-brand-amber">5+</span>
              <span className="block text-[8px] md:text-[9px] font-mono text-brand-gray tracking-wider uppercase">COMPLETED PROJECTS</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl md:text-2xl font-display font-bold text-brand-light">100%</span>
              <span className="block text-[8px] md:text-[9px] font-mono text-brand-gray tracking-wider uppercase">HANDCRAFTED CODE</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl md:text-2xl font-display font-bold text-brand-light">A+</span>
              <span className="block text-[8px] md:text-[9px] font-mono text-brand-gray tracking-wider uppercase">DESIGN PRECISION</span>
            </div>
            <div className="space-y-1">
              <span className="block text-xl md:text-2xl font-display font-bold text-brand-amber">120 FPS</span>
              <span className="block text-[8px] md:text-[9px] font-mono text-brand-gray tracking-wider uppercase">SCROLL FLUIDITY</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
