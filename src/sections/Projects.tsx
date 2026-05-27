import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ArrowLeft } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  stats: { label: string; value: string }[];
  accentColor: string;
  glowColor: string;
  mockup: React.ReactNode;
  liveLink?: string;
}

interface ShowcaseProps {
  onViewChange: (view: "home" | "atmospheric" | "systemic" | "labs", targetSection?: string) => void;
}

// ---------------------------------------------------------
// 1. Projects Gateway (Homepage Cards Selector)
// ---------------------------------------------------------
export const ProjectsGateway: React.FC<ShowcaseProps> = ({ onViewChange }) => {
  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-32 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="flex flex-col space-y-4 text-left">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              SELECTED ARTIFACTS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Featured Works
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pt-6">
          {/* Card 1: Atmospheric Design */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onViewChange("atmospheric")}
            className="glass-panel-gold rounded-xl p-6 md:p-12 text-left flex flex-col justify-between min-h-[380px] cursor-pointer group shadow-2xl relative overflow-hidden"
          >
            {/* Visual Thumbnail Image Overlay */}
            <img
              src="/atmospheric-thumbnail.png"
              alt="Atmospheric Design"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-35 transition-all duration-700 z-0 scale-100 group-hover:scale-105 pointer-events-none"
            />
            {/* Dark gradient overlay to preserve contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-brand-black/40 z-0 pointer-events-none" />

            {/* Hover visual accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-baseline space-x-3">
                <span className="text-xs font-mono text-brand-amber font-semibold">01</span>
                <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                  — CREATIVE FOCUS
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-light tracking-wide group-hover:text-brand-amber transition-colors duration-300">
                Atmospheric Design
              </h3>
              <p className="text-sm text-brand-gray/80 font-light leading-relaxed">
                Cinematic, motion-heavy interactive experiences featuring 3D physics, web audio synthesis, custom animations, and ambient digital brand storytelling.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-brand-amber pt-8 relative z-10">
              <span>Enter Case Studies</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 2: Systemic Minimalism */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onViewChange("systemic")}
            className="glass-panel rounded-xl p-6 md:p-12 text-left flex flex-col justify-between min-h-[380px] cursor-pointer group shadow-2xl relative overflow-hidden"
          >
            {/* Visual Thumbnail Image Overlay */}
            <img
              src="/systemic-thumbnail.png"
              alt="Systemic Minimalism"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-all duration-700 z-0 scale-100 group-hover:scale-105 pointer-events-none"
            />
            {/* Dark gradient overlay to preserve contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-brand-black/40 z-0 pointer-events-none" />

            {/* Hover visual accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-baseline space-x-3">
                <span className="text-xs font-mono text-brand-gray font-semibold">02</span>
                <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                  — PERFORMANCE FOCUS
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-light tracking-wide group-hover:text-brand-amber transition-colors duration-300">
                Systemic Minimalism
              </h3>
              <p className="text-sm text-brand-gray/80 font-light leading-relaxed">
                Clean, standardized conversion structures, lightweight typography layouts, corporate grid architectures, and fast professional user interfaces.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-brand-amber pt-8 relative z-10">
              <span>Enter Case Studies</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </motion.div>

          {/* Card 3: Experiential Labs */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => onViewChange("labs")}
            className="glass-panel-gold rounded-xl p-6 md:p-12 text-left flex flex-col justify-between min-h-[380px] cursor-pointer group shadow-2xl relative overflow-hidden"
          >
            {/* Visual Thumbnail Image Overlay */}
            <img
              src="/labs-thumbnail.png"
              alt="Experiential Labs"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-30 transition-all duration-700 z-0 scale-100 group-hover:scale-105 pointer-events-none"
            />
            {/* Dark gradient overlay to preserve contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/95 to-brand-black/40 z-0 pointer-events-none" />

            {/* Hover visual accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-amber/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-baseline space-x-3">
                <span className="text-xs font-mono text-brand-amber font-semibold">03</span>
                <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                  — TECH PLAYGROUND
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-light tracking-wide group-hover:text-brand-amber transition-colors duration-300">
                Experiential Labs
              </h3>
              <p className="text-sm text-brand-gray/80 font-light leading-relaxed">
                Speculative prototypes, WebGL physics sandboxes, visual experiments, and interactive creative coding sketches exploring the boundaries of digital canvases.
              </p>
            </div>

            <div className="flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-brand-amber pt-8 relative z-10">
              <span>Enter Sandbox</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ---------------------------------------------------------
// 2. Atmospheric Showcase (Dedicated Page)
// ---------------------------------------------------------
export const AtmosphericShowcase: React.FC<ShowcaseProps> = ({ onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Gallery States
  const [aetherGalleryIndex, setAetherGalleryIndex] = useState(0);
  const [aetherDirection, setAetherDirection] = useState(0);
  const aetherImages = [
    { src: "/aether-motors/home.png", label: "01 // Brand Concept Hero" },
    { src: "/aether-motors/process.png", label: "02 // Chronicles of Craft" },
    { src: "/aether-motors/sanctuary.png", label: "03 // Sanctuary Interior" }
  ];

  const [novaGalleryIndex, setNovaGalleryIndex] = useState(0);
  const [novaDirection, setNovaDirection] = useState(0);
  const novaImages = [
    { src: "/atelier-nova/loader.png", label: "01 // Loader Boot" },
    { src: "/atelier-nova/home.png", label: "02 // Home Hero" },
    { src: "/atelier-nova/projects.png", label: "03 // Project Archive" },
    { src: "/atelier-nova/process.png", label: "04 // Studio Process" },
    { src: "/atelier-nova/contact.png", label: "05 // Contact Inquiry" }
  ];

  const [kageGalleryIndex, setKageGalleryIndex] = useState(0);
  const [kageDirection, setKageDirection] = useState(0);
  const kageImages = ["/kage/1.png", "/kage/2.png", "/kage/3.png", "/kage/4.png"];

  const [eclipseGalleryIndex, setEclipseGalleryIndex] = useState(0);
  const [eclipseDirection, setEclipseDirection] = useState(0);
  const eclipseImages = [
    { src: "/eclipse/home.png", label: "01 // Elite Athletic Method Hero" },
    { src: "/eclipse/disciplines.png", label: "02 // Unleash Absolute Physiology" },
    { src: "/eclipse/wearables.png", label: "03 // Product Capability" },
    { src: "/eclipse/facility.png", label: "04 // Atmosphere Controlled Facility" },
    { src: "/eclipse/access.png", label: "05 // Request Tier-3 Access" }
  ];

  const [novaAudioTab, setNovaAudioTab] = useState<"gallery" | "equalizer">("gallery");
  const [novaAudioGalleryIndex, setNovaAudioGalleryIndex] = useState(0);
  const [novaAudioDirection, setNovaAudioDirection] = useState(0);
  const novaAudioImages = [
    { src: "/nova-audio/loader.png", label: "01 // Loader Boot Screen" },
    { src: "/nova-audio/home.png", label: "02 // Aether-X Landing Page" },
    { src: "/nova-audio/architecture.png", label: "03 // Acoustic Super-Computing" },
    { src: "/nova-audio/mechanics.png", label: "04 // Interactive Exploded View" },
    { src: "/nova-audio/allocation.png", label: "05 // Limited Production Allocation" }
  ];
  const [eqBass, setEqBass] = useState(64);
  const [eqMids, setEqMids] = useState(78);
  const [eqTreble, setEqTreble] = useState(52);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: "01",
      title: "AETHER MOTORS",
      category: "LUXURY AUTOMOTIVE",
      description:
        "A hyper-immersive WebGL configurator and brand narrative site for a high-end electric hypercar brand, featuring cinematic lighting shifts and 3D rendering integration.",
      stats: [
        { label: "ENGAGEMENT", value: "+148%" },
        { label: "TECH STACK", value: "React / Three.js / GSAP" },
      ],
      accentColor: "#d4af37",
      glowColor: "rgba(212, 175, 55, 0.2)",
      liveLink: "https://aethermotors.onrender.com/",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">aethermotors.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/aether-motors/thumbnail.jpg"
              alt="Aether Motors"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "ATELIER NOVA STUDIO",
      category: "ARCHITECTURAL AGENCY",
      description:
        "A minimalist, brutalist-inspired interactive portfolio showcasing architectural models through heavy shadows, typography transitions, and responsive editorial layout grids.",
      stats: [
        { label: "LOAD TIME", value: "0.22s" },
        { label: "TECH STACK", value: "Next.js / Lenis / Tailwind" },
      ],
      liveLink: "https://ateliernovastudios.onrender.com",
      accentColor: "#708090",
      glowColor: "rgba(112, 128, 144, 0.2)",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">ateliernovastudios.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/atelier-nova/home.png"
              alt="Atelier Nova Studio"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "KAGE FASHION",
      category: "EDITORIAL CAMPAIGN",
      description:
        "High-contrast fashion visual hub with elegant scroll-based mask scaling, immersive typography shifts, and full-screen video background layouts, tailored for a luxury design label.",
      stats: [
        { label: "CONVERSIONS", value: "+34%" },
        { label: "TECH STACK", value: "React / Framer Motion / GSAP" },
      ],
      liveLink: "https://kageofficial.onrender.com",
      accentColor: "#8c6d31",
      glowColor: "rgba(140, 109, 49, 0.2)",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">kageofficial.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/kage/lookbook_thumbnail.png"
              alt="Kage Lookbook 009"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
    {
      id: "04",
      title: "NOVA AUDIO",
      category: "PRODUCT EXPERIENCE",
      description:
        "A stunning, audio-visualizer matched e-commerce landing experience built for elite luxury studio headphones, focusing heavily on ambient sound transitions and interactive 3D physics.",
      stats: [
        { label: "SALES GROWTH", value: "+64%" },
        { label: "TECH STACK", value: "React / Three.js / Canvas API" },
      ],
      accentColor: "#d4af37",
      glowColor: "rgba(212, 175, 55, 0.2)",
      liveLink: "https://getnova.onrender.com",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">getnova.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/nova-audio/home.png"
              alt="Nova Audio"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
    {
      id: "05",
      title: "ECLIPSE FITNESS",
      category: "LUXURY PERFORMANCE",
      description:
        "An energetic, contrast-heavy lifestyle launchpad showing fitness coaching programs and high-budget performance apparel with glowing vector elements, telemetry widgets, and speed microcopy.",
      stats: [
        { label: "CLICKS", value: "+112%" },
        { label: "TECH STACK", value: "React / GSAP / Tailwind" },
      ],
      accentColor: "#708090",
      glowColor: "rgba(112, 128, 144, 0.2)",
      liveLink: "https://eclipsefitnessofficial.onrender.com",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">eclipsefitnessofficial.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/eclipse/home.png"
              alt="Eclipse Fitness"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
  ];

  const handleInspect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const renderInteractivePlayground = (project: Project) => {
    switch (project.id) {
      case "01": // Aether Motors
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              PROJECT GALLERY
            </div>
            <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
              <AnimatePresence initial={false} custom={aetherDirection} mode="popLayout">
                <motion.img
                  key={aetherGalleryIndex}
                  src={aetherImages[aetherGalleryIndex].src}
                  alt={aetherImages[aetherGalleryIndex].label}
                  custom={aetherDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      const nextIndex = (aetherGalleryIndex + 1) % aetherImages.length;
                      setAetherDirection(1);
                      setAetherGalleryIndex(nextIndex);
                    } else if (info.offset.x > swipeThreshold) {
                      const prevIndex = (aetherGalleryIndex - 1 + aetherImages.length) % aetherImages.length;
                      setAetherDirection(-1);
                      setAetherGalleryIndex(prevIndex);
                    }
                  }}
                  className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                {aetherImages[aetherGalleryIndex].label}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {aetherImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setAetherDirection(idx > aetherGalleryIndex ? 1 : -1);
                    setAetherGalleryIndex(idx);
                  }}
                  className={`flex-1 h-1.5 rounded transition-colors clickable ${
                    aetherGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        );

      case "02": // Atelier Nova Studio
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              PROJECT GALLERY
            </div>
            <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
              <AnimatePresence initial={false} custom={novaDirection} mode="popLayout">
                <motion.img
                  key={novaGalleryIndex}
                  src={novaImages[novaGalleryIndex].src}
                  alt={novaImages[novaGalleryIndex].label}
                  custom={novaDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      const nextIndex = (novaGalleryIndex + 1) % novaImages.length;
                      setNovaDirection(1);
                      setNovaGalleryIndex(nextIndex);
                    } else if (info.offset.x > swipeThreshold) {
                      const prevIndex = (novaGalleryIndex - 1 + novaImages.length) % novaImages.length;
                      setNovaDirection(-1);
                      setNovaGalleryIndex(prevIndex);
                    }
                  }}
                  className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                {novaImages[novaGalleryIndex].label}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {novaImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setNovaDirection(idx > novaGalleryIndex ? 1 : -1);
                    setNovaGalleryIndex(idx);
                  }}
                  className={`flex-1 h-1.5 rounded transition-colors clickable ${
                    novaGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        );

      case "03": // Kage Fashion
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              PROJECT GALLERY
            </div>
            <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-stone-950 border border-white/5 relative overflow-hidden group touch-pan-y">
              <AnimatePresence initial={false} custom={kageDirection} mode="popLayout">
                <motion.img
                  key={kageGalleryIndex}
                  src={kageImages[kageGalleryIndex]}
                  alt={`Kage Gallery ${kageGalleryIndex + 1}`}
                  custom={kageDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      const nextIndex = (kageGalleryIndex + 1) % kageImages.length;
                      setKageDirection(1);
                      setKageGalleryIndex(nextIndex);
                    } else if (info.offset.x > swipeThreshold) {
                      const prevIndex = (kageGalleryIndex - 1 + kageImages.length) % kageImages.length;
                      setKageDirection(-1);
                      setKageGalleryIndex(prevIndex);
                    }
                  }}
                  className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none">
                IMAGE {kageGalleryIndex + 1} // {kageImages.length}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {kageImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setKageDirection(idx > kageGalleryIndex ? 1 : -1);
                    setKageGalleryIndex(idx);
                  }}
                  className={`flex-1 h-1.5 rounded transition-colors clickable ${
                    kageGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        );

      case "04": // Nova Audio
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
                NOVA PLAYGROUND
              </div>
              <div className="flex space-x-2 text-[9px] font-mono">
                <button
                  onClick={() => setNovaAudioTab("gallery")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    novaAudioTab === "gallery"
                      ? "bg-brand-amber text-brand-black font-semibold font-mono"
                      : "text-brand-gray hover:text-brand-light font-mono"
                  }`}
                >
                  GALLERY
                </button>
                <button
                  onClick={() => setNovaAudioTab("equalizer")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    novaAudioTab === "equalizer"
                      ? "bg-brand-amber text-brand-black font-semibold font-mono"
                      : "text-brand-gray hover:text-brand-light font-mono"
                  }`}
                >
                  EQUALIZER
                </button>
              </div>
            </div>

            {novaAudioTab === "gallery" ? (
              <div className="space-y-6">
                <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
                  <AnimatePresence initial={false} custom={novaAudioDirection} mode="popLayout">
                    <motion.img
                      key={novaAudioGalleryIndex}
                      src={novaAudioImages[novaAudioGalleryIndex].src}
                      alt={novaAudioImages[novaAudioGalleryIndex].label}
                      custom={novaAudioDirection}
                      variants={{
                        enter: (direction: number) => ({
                          x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                          opacity: 0,
                        }),
                        center: { x: 0, opacity: 1 },
                        exit: (direction: number) => ({
                          x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.6}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 50;
                        if (info.offset.x < -swipeThreshold) {
                          const nextIndex = (novaAudioGalleryIndex + 1) % novaAudioImages.length;
                          setNovaAudioDirection(1);
                          setNovaAudioGalleryIndex(nextIndex);
                        } else if (info.offset.x > swipeThreshold) {
                          const prevIndex = (novaAudioGalleryIndex - 1 + novaAudioImages.length) % novaAudioImages.length;
                          setNovaAudioDirection(-1);
                          setNovaAudioGalleryIndex(prevIndex);
                        }
                      }}
                      className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                    {novaAudioImages[novaAudioGalleryIndex].label}
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  {novaAudioImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setNovaAudioDirection(idx > novaAudioGalleryIndex ? 1 : -1);
                        setNovaAudioGalleryIndex(idx);
                      }}
                      className={`flex-1 h-1.5 rounded transition-colors clickable ${
                        novaAudioGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 p-4 flex flex-col justify-between">
                  <span className="text-[8px] font-mono text-white/40">OUTPUT_TELEMETRY: DB</span>
                  <div className="flex items-end justify-center space-x-6 h-20 px-4">
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-3 bg-brand-amber rounded-t transition-all duration-300" style={{ height: `${eqBass}px` }} />
                      <span className="text-[8px] font-mono text-white/50">BASS</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-3 bg-brand-amber rounded-t transition-all duration-300" style={{ height: `${eqMids}px` }} />
                      <span className="text-[8px] font-mono text-white/50">MIDS</span>
                    </div>
                    <div className="flex flex-col items-center space-y-1">
                      <div className="w-3 bg-brand-amber rounded-t transition-all duration-300" style={{ height: `${eqTreble}px` }} />
                      <span className="text-[8px] font-mono text-white/50">TREB</span>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono text-white/40 text-right">BANDWIDTH: 20HZ-20KHZ</span>
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-brand-gray">BASS BOOST</span>
                    <input
                      type="range" min="10" max="80" value={eqBass}
                      onChange={(e) => setEqBass(Number(e.target.value))}
                      className="w-full accent-brand-amber h-[3px] bg-brand-charcoal rounded outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-brand-gray">MID BALANCE</span>
                    <input
                      type="range" min="10" max="80" value={eqMids}
                      onChange={(e) => setEqMids(Number(e.target.value))}
                      className="w-full accent-brand-amber h-[3px] bg-brand-charcoal rounded outline-none"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-brand-gray">TREBLE SHARPNESS</span>
                    <input
                      type="range" min="10" max="80" value={eqTreble}
                      onChange={(e) => setEqTreble(Number(e.target.value))}
                      className="w-full accent-brand-amber h-[3px] bg-brand-charcoal rounded outline-none"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case "05": // Eclipse Fitness
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              PROJECT GALLERY
            </div>
            <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
              <AnimatePresence initial={false} custom={eclipseDirection} mode="popLayout">
                <motion.img
                  key={eclipseGalleryIndex}
                  src={eclipseImages[eclipseGalleryIndex].src}
                  alt={eclipseImages[eclipseGalleryIndex].label}
                  custom={eclipseDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      const nextIndex = (eclipseGalleryIndex + 1) % eclipseImages.length;
                      setEclipseDirection(1);
                      setEclipseGalleryIndex(nextIndex);
                    } else if (info.offset.x > swipeThreshold) {
                      const prevIndex = (eclipseGalleryIndex - 1 + eclipseImages.length) % eclipseImages.length;
                      setEclipseDirection(-1);
                      setEclipseGalleryIndex(prevIndex);
                    }
                  }}
                  className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                {eclipseImages[eclipseGalleryIndex].label}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {eclipseImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setEclipseDirection(idx > eclipseGalleryIndex ? 1 : -1);
                    setEclipseGalleryIndex(idx);
                  }}
                  className={`flex-1 h-1.5 rounded transition-colors clickable ${
                    eclipseGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="atmospheric-showcase"
      className="relative w-full py-32 px-6 md:px-12 z-10 bg-brand-black min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center pb-6 border-b border-white/5">
          <button
            onClick={() => onViewChange("home")}
            className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-brand-gray hover:text-brand-amber transition-colors clickable cursor-pointer"
          >
            <ArrowLeft size={12} />
            <span>Back to Homepage</span>
          </button>
          
          <span className="text-[9px] font-mono text-brand-gray/60 uppercase tracking-widest hidden md:inline">
            ARCHIVE // ATMOSPHERIC DESIGN
          </span>
        </div>

        {/* Category Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              ATMOSPHERIC DESIGN
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Cinematic Portfolios
          </h2>
          <p className="text-sm text-brand-gray font-light max-w-2xl leading-relaxed">
            A curated index of creative frontends built with motion physics, immersive canvas particles, custom visualizers, and heavy animation layouts.
          </p>
        </div>

        {/* Projects Grid List */}
        <div className="space-y-32 md:space-y-44 pt-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div
                  onClick={() => handleInspect(project)}
                  className={`lg:col-span-6 w-full aspect-video md:aspect-[16/10] relative group rounded-xl bg-brand-charcoal/30 p-2 overflow-hidden cursor-pointer ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 blur-[60px] opacity-30 rounded-xl transition-all duration-700 group-hover:opacity-50"
                    style={{ background: project.glowColor }}
                  />
                  <div className="w-full h-full glass-panel rounded-lg p-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center">
                    {project.mockup}
                  </div>
                </div>

                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{project.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                      — {project.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => handleInspect(project)}
                    className="text-2xl md:text-4xl font-display font-bold tracking-wide text-brand-light hover:text-brand-amber transition-colors duration-300 cursor-pointer inline-block"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-gray font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-white/5">
                    {project.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="space-y-1">
                        <div className="text-[9px] font-mono text-brand-gray tracking-wider uppercase">{stat.label}</div>
                        <div className="text-sm font-semibold text-brand-light font-display">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      onClick={() => handleInspect(project)}
                      className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-amber hover:text-brand-light transition-colors duration-300 clickable"
                    >
                      <span>Inspect Design</span>
                      <ArrowUpRight size={14} />
                    </button>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-light hover:text-brand-amber transition-colors duration-300 clickable"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Fullscreen Inspection Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              data-lenis-prevent
              className="fixed inset-0 w-full h-full z-[100] bg-brand-black/90 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-12 overflow-y-auto cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl glass-panel-gold rounded-xl p-6 md:p-12 relative shadow-2xl flex flex-col lg:flex-row gap-8 md:gap-12 text-left cursor-default my-8 md:my-auto"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-amber transition-colors clickable"
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>
  
                <div className="flex-1 space-y-6">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{selectedProject.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">— CASE STUDY IN DETAIL</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-extrabold text-brand-light tracking-wide">{selectedProject.title}</h3>
                  <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light">
                    This creative project showcases standard-setting animation, dynamic grids, and atmospheric branding. We engineered clean motion presets and optimized assets to guarantee premium user experiences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10 font-mono text-xs">
                    <div>
                      <span className="block text-[8px] text-brand-amber tracking-widest uppercase mb-1">PROJECT SCOPE</span>
                      <span className="text-brand-light">{selectedProject.category}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-brand-amber tracking-widest uppercase mb-1">RETROSPECTIVE STATUS</span>
                      <span className="text-brand-light">100% PRODUCTION READY</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      onClick={() => {
                        handleCloseModal();
                        onViewChange("home", "#contact");
                      }}
                      className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-widest uppercase bg-brand-amber text-brand-black px-6 py-3.5 rounded font-bold clickable hover:scale-105 transition-transform"
                    >
                      <span>Hire For Similar Project</span>
                    </a>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-widest uppercase border border-white/10 hover:border-brand-amber text-brand-light px-6 py-3.5 rounded font-bold clickable hover:scale-105 transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
  
                <div className="flex-1 p-6 md:p-8 rounded-lg bg-brand-charcoal/30 border border-white/5 flex flex-col justify-between min-h-[300px]">
                  {renderInteractivePlayground(selectedProject)}
                  <div className="text-[9px] font-mono text-brand-gray/50 text-right pt-6 border-t border-white/5 mt-6">DEVELOPER PLAYGROUND COMPONENT v1.0</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

// ---------------------------------------------------------
// 3. Systemic Showcase (Dedicated Page)
// ---------------------------------------------------------
export const SystemicShowcase: React.FC<ShowcaseProps> = ({ onViewChange }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Gallery States
  const [flowSyncGalleryIndex, setFlowSyncGalleryIndex] = useState(0);
  const [flowSyncDirection, setFlowSyncDirection] = useState(0);
  const flowSyncImages = [
    { src: "/flowsync/home.png", label: "01 // Workspace Hero & Hub" },
    { src: "/flowsync/features.png", label: "02 // Bidirectional Sync & Metrics" },
    { src: "/flowsync/results.png", label: "03 // High-Impact Outcomes" },
    { src: "/flowsync/pricing.png", label: "04 // Transparent SaaS Pricing" },
    { src: "/flowsync/footer.png", label: "05 // Project Retrospective Footer" }
  ];

  // Tab State
  const [flowSyncTab, setFlowSyncTab] = useState<"gallery" | "kanban">("gallery");

  // Kanban tasks state
  const [kanbanTasks, setKanbanTasks] = useState([
    { id: "task-1", title: "Automate Stripe Webhooks", status: "todo" as "todo" | "progress" | "done" },
    { id: "task-2", title: "Slack-Linear Sync Pipeline", status: "progress" as "todo" | "progress" | "done" },
    { id: "task-3", title: "Configure SOC2 Audit Log", status: "done" as "todo" | "progress" | "done" },
  ]);

  const [syncLogs, setSyncLogs] = useState<string[]>([
    "System active: pipeline synced 140ms ago."
  ]);

  const moveTask = (id: string) => {
    setKanbanTasks(prev => prev.map(t => {
      if (t.id === id) {
        let nextStatus: "todo" | "progress" | "done" = "todo";
        if (t.status === "todo") nextStatus = "progress";
        else if (t.status === "progress") nextStatus = "done";
        else nextStatus = "todo";
        
        // Add log
        setSyncLogs(logs => [
          `Task "${t.title}" moved to ${nextStatus.toUpperCase()}`,
          ...logs.slice(0, 3)
        ]);
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const projects: Project[] = [
    {
      id: "01",
      title: "FLOWSYNC",
      category: "WORKSPACE COORDINATION",
      description:
        "A high-velocity, modern workspace coordination application that automates tool pipelines, eliminates status meetings, and provides real-time team velocity analytics.",
      stats: [
        { label: "VELOCITY GROWTH", value: "+300%" },
        { label: "TECH STACK", value: "React / Tailwind v4 / Framer Motion" },
      ],
      accentColor: "rgb(79, 70, 229)",
      glowColor: "rgba(79, 70, 229, 0.2)",
      liveLink: "https://useflowsync.onrender.com",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">useflowsync.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden">
            <img
              src="/flowsync/home.png"
              alt="FlowSync Workspace Hub"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    }
  ];

  const handleInspect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const renderInteractivePlayground = (project: Project) => {
    switch (project.id) {
      case "01": // FlowSync
        return (
          <div className="space-y-6 flex flex-col h-full justify-between">
            <div className="flex justify-between items-center border-b border-white/5 pb-2">
              <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
                FLOWSYNC PLAYGROUND
              </div>
              <div className="flex space-x-2 text-[9px] font-mono">
                <button
                  onClick={() => setFlowSyncTab("gallery")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    flowSyncTab === "gallery"
                      ? "bg-brand-amber text-brand-black font-semibold font-mono"
                      : "text-brand-gray hover:text-brand-light font-mono"
                  }`}
                >
                  GALLERY
                </button>
                <button
                  onClick={() => setFlowSyncTab("kanban")}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    flowSyncTab === "kanban"
                      ? "bg-brand-amber text-brand-black font-semibold font-mono"
                      : "text-brand-gray hover:text-brand-light font-mono"
                  }`}
                >
                  KANBAN SIMULATOR
                </button>
              </div>
            </div>

            {flowSyncTab === "gallery" ? (
              <div className="space-y-6">
                <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
                  <AnimatePresence initial={false} custom={flowSyncDirection} mode="popLayout">
                    <motion.img
                      key={flowSyncGalleryIndex}
                      src={flowSyncImages[flowSyncGalleryIndex].src}
                      alt={flowSyncImages[flowSyncGalleryIndex].label}
                      custom={flowSyncDirection}
                      variants={{
                        enter: (direction: number) => ({
                          x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                          opacity: 0,
                        }),
                        center: { x: 0, opacity: 1 },
                        exit: (direction: number) => ({
                          x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                      }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.6}
                      onDragEnd={(_, info) => {
                        const swipeThreshold = 50;
                        if (info.offset.x < -swipeThreshold) {
                          const nextIndex = (flowSyncGalleryIndex + 1) % flowSyncImages.length;
                          setFlowSyncDirection(1);
                          setFlowSyncGalleryIndex(nextIndex);
                        } else if (info.offset.x > swipeThreshold) {
                          const prevIndex = (flowSyncGalleryIndex - 1 + flowSyncImages.length) % flowSyncImages.length;
                          setFlowSyncDirection(-1);
                          setFlowSyncGalleryIndex(prevIndex);
                        }
                      }}
                      className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
                  <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                    {flowSyncImages[flowSyncGalleryIndex].label}
                  </div>
                </div>
                <div className="flex justify-between gap-2">
                  {flowSyncImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setFlowSyncDirection(idx > flowSyncGalleryIndex ? 1 : -1);
                        setFlowSyncGalleryIndex(idx);
                      }}
                      className={`flex-1 h-1.5 rounded transition-colors clickable ${
                        flowSyncGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <span className="text-[8px] font-mono text-white/40 block">INTERACTIVE KANBAN BOARD (CLICK TO CYCLE TASK STATUS)</span>
                
                <div className="grid grid-cols-3 gap-2 h-44 sm:h-52 text-left">
                  {/* Todo Column */}
                  <div className="bg-zinc-950/60 border border-white/5 rounded p-1.5 flex flex-col space-y-1.5 overflow-y-auto">
                    <span className="text-[7px] font-mono text-brand-gray/80 tracking-widest uppercase block border-b border-white/5 pb-1">TO DO</span>
                    {kanbanTasks.filter(t => t.status === "todo").map(t => (
                      <div
                        key={t.id}
                        onClick={() => moveTask(t.id)}
                        className="bg-brand-charcoal/40 hover:bg-brand-charcoal/80 border border-white/5 hover:border-brand-amber/30 rounded p-1.5 text-[8px] cursor-pointer transition-all duration-200 select-none font-sans leading-tight text-brand-light"
                      >
                        {t.title}
                        <span className="block text-[6px] font-mono text-brand-gray/60 mt-1">CLICK → DOING</span>
                      </div>
                    ))}
                  </div>

                  {/* Doing Column */}
                  <div className="bg-zinc-950/60 border border-white/5 rounded p-1.5 flex flex-col space-y-1.5 overflow-y-auto">
                    <span className="text-[7px] font-mono text-brand-amber tracking-widest uppercase block border-b border-white/5 pb-1">DOING</span>
                    {kanbanTasks.filter(t => t.status === "progress").map(t => (
                      <div
                        key={t.id}
                        onClick={() => moveTask(t.id)}
                        className="bg-indigo-950/40 hover:bg-indigo-900/40 border border-indigo-500/20 hover:border-brand-amber/30 rounded p-1.5 text-[8px] cursor-pointer transition-all duration-200 select-none font-sans leading-tight text-brand-light"
                      >
                        {t.title}
                        <span className="block text-[6px] font-mono text-brand-amber/60 mt-1">CLICK → DONE</span>
                      </div>
                    ))}
                  </div>

                  {/* Done Column */}
                  <div className="bg-zinc-950/60 border border-white/5 rounded p-1.5 flex flex-col space-y-1.5 overflow-y-auto">
                    <span className="text-[7px] font-mono text-emerald-400 tracking-widest uppercase block border-b border-white/5 pb-1">DONE</span>
                    {kanbanTasks.filter(t => t.status === "done").map(t => (
                      <div
                        key={t.id}
                        onClick={() => moveTask(t.id)}
                        className="bg-emerald-950/20 hover:bg-emerald-900/20 border border-emerald-500/20 hover:border-brand-amber/30 rounded p-1.5 text-[8px] cursor-pointer transition-all duration-200 select-none font-sans leading-tight text-brand-light line-through decoration-white/20"
                      >
                        {t.title}
                        <span className="block text-[6px] font-mono text-emerald-400/60 mt-1">CLICK → TODO</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Console Log Log */}
                <div className="bg-black border border-white/5 rounded p-2 font-mono text-[7px] text-zinc-400 space-y-1 h-14 overflow-y-auto select-none text-left">
                  {syncLogs.map((log, i) => (
                    <div key={i} className="flex space-x-1">
                      <span className="text-brand-amber font-mono">[LOG]</span>
                      <span className="font-mono">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="systemic-showcase"
      className="relative w-full py-32 px-6 md:px-12 z-10 bg-brand-black min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center pb-6 border-b border-white/5">
          <button
            onClick={() => onViewChange("home")}
            className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-brand-gray hover:text-brand-amber transition-colors clickable cursor-pointer"
          >
            <ArrowLeft size={12} />
            <span>Back to Homepage</span>
          </button>
          
          <span className="text-[9px] font-mono text-brand-gray/60 uppercase tracking-widest hidden md:inline">
            ARCHIVE // SYSTEMIC MINIMALISM
          </span>
        </div>

        {/* Category Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              SYSTEMIC MINIMALISM
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Performance Systems
          </h2>
          <p className="text-sm text-brand-gray font-light max-w-2xl leading-relaxed">
            A structured repository focusing on standardized conversion funnels, lightweight typography grids, corporate layouts, and optimized transactional interfaces.
          </p>
        </div>

        {/* Projects Grid List */}
        <div className="space-y-32 md:space-y-44 pt-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div
                  onClick={() => handleInspect(project)}
                  className={`lg:col-span-6 w-full aspect-video md:aspect-[16/10] relative group rounded-xl bg-brand-charcoal/30 p-2 overflow-hidden cursor-pointer ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 blur-[60px] opacity-30 rounded-xl transition-all duration-700 group-hover:opacity-50"
                    style={{ background: project.glowColor }}
                  />
                  <div className="w-full h-full glass-panel rounded-lg p-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center">
                    {project.mockup}
                  </div>
                </div>

                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{project.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                      — {project.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => handleInspect(project)}
                    className="text-2xl md:text-4xl font-display font-bold tracking-wide text-brand-light hover:text-brand-amber transition-colors duration-300 cursor-pointer inline-block"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-gray font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-white/5">
                    {project.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="space-y-1">
                        <div className="text-[9px] font-mono text-brand-gray tracking-wider uppercase">{stat.label}</div>
                        <div className="text-sm font-semibold text-brand-light font-display">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      onClick={() => handleInspect(project)}
                      className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-amber hover:text-brand-light transition-colors duration-300 clickable"
                    >
                      <span>Inspect Design</span>
                      <ArrowUpRight size={14} />
                    </button>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-light hover:text-brand-amber transition-colors duration-300 clickable"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Inspection Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              data-lenis-prevent
              className="fixed inset-0 w-full h-full z-[100] bg-brand-black/90 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-12 overflow-y-auto cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl glass-panel-gold rounded-xl p-6 md:p-12 relative shadow-2xl flex flex-col lg:flex-row gap-8 md:gap-12 text-left cursor-default my-8 md:my-auto"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-amber transition-colors clickable"
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>
  
                <div className="flex-1 space-y-6">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{selectedProject.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">— CASE STUDY IN DETAIL</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-extrabold text-brand-light tracking-wide">{selectedProject.title}</h3>
                  <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light">
                    This systemic project focuses on standardized layout structures, high-performance transactional design systems, and rapid conversion pathways. We engineered clean, reusable styling modules to ensure robust, ultra-fast user experiences on all viewport sizes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-white/10 font-mono text-xs">
                    <div>
                      <span className="block text-[8px] text-brand-amber tracking-widest uppercase mb-1">PROJECT SCOPE</span>
                      <span className="text-brand-light">{selectedProject.category}</span>
                    </div>
                    <div>
                      <span className="block text-[8px] text-brand-amber tracking-widest uppercase mb-1">RETROSPECTIVE STATUS</span>
                      <span className="text-brand-light">100% PRODUCTION READY</span>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#contact"
                      onClick={() => {
                        handleCloseModal();
                        onViewChange("home", "#contact");
                      }}
                      className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-widest uppercase bg-brand-amber text-brand-black px-6 py-3.5 rounded font-bold clickable hover:scale-105 transition-transform"
                    >
                      <span>Hire For Similar Project</span>
                    </a>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-widest uppercase border border-white/10 hover:border-brand-amber text-brand-light px-6 py-3.5 rounded font-bold clickable hover:scale-105 transition-all"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
  
                <div className="flex-1 p-6 md:p-8 rounded-lg bg-brand-charcoal/30 border border-white/5 flex flex-col justify-between min-h-[300px]">
                  {renderInteractivePlayground(selectedProject)}
                  <div className="text-[9px] font-mono text-brand-gray/50 text-right pt-6 border-t border-white/5 mt-6">DEVELOPER PLAYGROUND COMPONENT v1.0</div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

export const LabsShowcase: React.FC<ShowcaseProps> = ({ onViewChange }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  // Simulation Controls State
  const [particleCount, setParticleCount] = useState(250);
  const [speedFactor, setSpeedFactor] = useState(1.5);
  const [colorTheme, setColorTheme] = useState<"amber" | "violet" | "emerald">("violet");
  const [gravityWells, setGravityWells] = useState<{ x: number; y: number }[]>([]);

  // Ref to hold states for the render loop to avoid closing over stale state
  const stateRef = React.useRef({ particleCount, speedFactor, colorTheme, gravityWells });
  
  useEffect(() => {
    stateRef.current = { particleCount, speedFactor, colorTheme, gravityWells };
  }, [particleCount, speedFactor, colorTheme, gravityWells]);

  // Selected Project inside LabsShowcase
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Gallery States for The Grand Era
  const [grandEraGalleryIndex, setGrandEraGalleryIndex] = useState(0);
  const [grandEraDirection, setGrandEraDirection] = useState(0);
  const grandEraImages = [
    { src: "/dark-onepiece/4.png", label: "01 // The Grand Era Splash Screen" },
    { src: "/dark-onepiece/3.png", label: "02 // Universe Relationship Graph" },
    { src: "/dark-onepiece/5.png", label: "03 // Character Overview Card" },
    { src: "/dark-onepiece/2.png", label: "04 // Ohara Annihilation Dossier" },
    { src: "/dark-onepiece/1.png", label: "05 // Voyage Scanning Tracker" }
  ];

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    if (selectedProject?.id !== "01") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Mouse coordinates tracker
    let mouse = { x: width / 2, y: height / 2, active: false };

    // Particle class
    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      size: number = 0;
      alpha: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      update(state: typeof stateRef.current) {
        // Apply attractor forces
        let targetX = this.x;
        let targetY = this.y;
        let influence = false;

        // If there are gravity wells, attract to them
        if (state.gravityWells.length > 0) {
          let minDistance = Infinity;
          let nearest = state.gravityWells[0];
          state.gravityWells.forEach(well => {
            const dx = well.x - this.x;
            const dy = well.y - this.y;
            const d = dx * dx + dy * dy;
            if (d < minDistance) {
              minDistance = d;
              nearest = well;
            }
          });
          targetX = nearest.x;
          targetY = nearest.y;
          influence = true;
        } else if (mouse.active) {
          // Attract to mouse
          targetX = mouse.x;
          targetY = mouse.y;
          influence = true;
        }

        if (influence) {
          const dx = targetX - this.x;
          const dy = targetY - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = (12 / dist) * state.speedFactor; // gravity strength
          
          this.vx += (dx / dist) * force;
          this.vy += (dy / dist) * force;
        }

        // Apply friction
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Handle boundaries (bounce with friction)
        if (this.x < 0) { this.x = 0; this.vx *= -0.5; }
        if (this.x > width) { this.x = width; this.vx *= -0.5; }
        if (this.y < 0) { this.y = 0; this.vy *= -0.5; }
        if (this.y > height) { this.y = height; this.vy *= -0.5; }
      }

      draw(c: CanvasRenderingContext2D, state: typeof stateRef.current) {
        let baseColor = "212, 175, 55"; // Amber
        if (state.colorTheme === "violet") baseColor = "129, 140, 248";
        if (state.colorTheme === "emerald") baseColor = "52, 211, 153";

        c.save();
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fillStyle = `rgba(${baseColor}, ${this.alpha})`;
        c.shadowColor = `rgba(${baseColor}, ${this.alpha})`;
        c.shadowBlur = this.size * 4;
        c.fill();
        c.restore();
      }
    }

    // Initialize particle pool
    let particles: Particle[] = [];
    const adjustParticleCount = () => {
      const target = stateRef.current.particleCount;
      if (particles.length < target) {
        const diff = target - particles.length;
        for (let i = 0; i < diff; i++) particles.push(new Particle());
      } else if (particles.length > target) {
        particles = particles.slice(0, target);
      }
    };
    adjustParticleCount();

    // Resize listener
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      particles.forEach(p => p.reset());
    };
    window.addEventListener("resize", handleResize);

    // Mouse listeners
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Render loop
    const render = () => {
      const state = stateRef.current;
      adjustParticleCount();

      ctx.fillStyle = "rgba(10, 10, 10, 0.25)"; // slight trails
      ctx.fillRect(0, 0, width, height);

      // Draw grid lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw gravity wells
      state.gravityWells.forEach(well => {
        let baseColor = "212, 175, 55"; // Amber
        if (state.colorTheme === "violet") baseColor = "129, 140, 248";
        if (state.colorTheme === "emerald") baseColor = "52, 211, 153";

        ctx.save();
        ctx.beginPath();
        ctx.arc(well.x, well.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${baseColor}, 0.8)`;
        ctx.shadowColor = `rgba(${baseColor}, 1)`;
        ctx.shadowBlur = 15;
        ctx.fill();

        // Pulsing orbit ring
        const pulse = Math.sin(Date.now() * 0.005) * 6 + 18;
        ctx.beginPath();
        ctx.arc(well.x, well.y, pulse, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${baseColor}, 0.15)`;
        ctx.stroke();
        ctx.restore();
      });

      // Update and draw particles
      particles.forEach(p => {
        p.update(state);
        p.draw(ctx, state);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [selectedProject]);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spawn gravity well
    setGravityWells(prev => [...prev.slice(-3), { x, y }]); // Limit to 4 gravity wells
  };

  const handleInspect = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      id: "01",
      title: "PHYSICS SANDBOX",
      category: "INTERACTIVE SIMULATION",
      description:
        "A real-time playground for browser-physics simulations, interactive visual systems, and motion algorithms. Click anywhere in the sandbox to deploy a pulsing gravity node.",
      stats: [
        { label: "ENGINE", value: "HTML5 Canvas 2D" },
        { label: "TECH STACK", value: "React / Canvas API" },
      ],
      accentColor: "#d4af37",
      glowColor: "rgba(212, 175, 55, 0.2)",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">labs_sandbox.exe</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden bg-black">
            <img
              src="/labs-thumbnail.png"
              alt="Labs Physics Sandbox"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "THE GRAND ERA",
      category: "CINEMATIC LORE ARCHIVE",
      description:
        "A premium, fully responsive cinematic storytelling platform and interactive database. Reimagines a massive pirate fantasy universe as a high-budget intelligence dossier, utilizing relationship graphs, boundary maps, and environmental canvas weather.",
      stats: [
        { label: "FEATURES", value: "Dossiers & Graphs" },
        { label: "TECH STACK", value: "React / SVG Glows / Canvas" },
      ],
      accentColor: "#8c6d31",
      glowColor: "rgba(140, 109, 49, 0.2)",
      liveLink: "https://darkonepiece.onrender.com",
      mockup: (
        <div className="w-full h-full bg-zinc-950 rounded-lg relative overflow-hidden border border-white/10 group-hover:border-brand-amber/30 transition-all duration-500 flex flex-col group shadow-2xl">
          <div className="h-6 w-full bg-zinc-900/90 border-b border-white/5 px-3 flex items-center justify-between z-10 shrink-0">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500/80" />
              <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
              <span className="w-2 h-2 rounded-full bg-green-500/80" />
            </div>
            <div className="text-[7px] font-mono text-zinc-500 tracking-wider">darkonepiece.onrender.com</div>
            <div className="w-6" />
          </div>
          <div className="flex-1 w-full relative overflow-hidden bg-black">
            <img
              src="/dark-onepiece/4.png"
              alt="The Grand Era Splash Screen"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950/80 to-transparent pointer-events-none" />
          </div>
        </div>
      ),
    },
  ];

  const renderInteractivePlayground = (project: Project) => {
    switch (project.id) {
      case "01": // Physics Sandbox
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              INTERACTIVE VIEWPORT
            </div>
            <div className="aspect-video md:aspect-[16/10] bg-black rounded-lg border border-white/5 relative overflow-hidden cursor-crosshair h-64">
              <canvas
                ref={canvasRef}
                onClick={handleCanvasClick}
                className="w-full h-full block"
              />
              <div className="absolute top-3 left-3 pointer-events-none select-none text-[7px] font-mono text-zinc-500 uppercase tracking-widest space-y-0.5">
                <div>FPS: 60 // ENGINE: 2D</div>
                <div>CLICK CANVAS TO SPAWN WELLS</div>
              </div>
            </div>
            
            {/* Controls Console */}
            <div className="glass-panel rounded-lg p-4 space-y-4 text-left border border-white/5">
              {/* Slider 1: Force */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-mono text-brand-gray">
                  <span>ORBITAL FORCE</span>
                  <span className="text-brand-light">{speedFactor.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="3.5"
                  step="0.1"
                  value={speedFactor}
                  onChange={(e) => setSpeedFactor(Number(e.target.value))}
                  className="w-full h-[2px] accent-brand-amber bg-brand-charcoal rounded outline-none clickable cursor-pointer"
                />
              </div>

              {/* Slider 2: Particle Mass */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-mono text-brand-gray">
                  <span>PARTICLE MASS</span>
                  <span className="text-brand-light">{particleCount} UNITS</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="450"
                  step="25"
                  value={particleCount}
                  onChange={(e) => setParticleCount(Number(e.target.value))}
                  className="w-full h-[2px] accent-brand-amber bg-brand-charcoal rounded outline-none clickable cursor-pointer"
                />
              </div>

              {/* Spectrum */}
              <div className="space-y-2">
                <span className="block text-[8px] font-mono text-brand-gray tracking-wider uppercase">
                  COLOR SPECTRUM
                </span>
                <div className="grid grid-cols-3 gap-1.5">
                  {(["violet", "amber", "emerald"] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setColorTheme(t)}
                      className={`py-1 text-[8px] font-mono rounded tracking-widest uppercase border transition-colors clickable cursor-pointer ${
                        colorTheme === t
                          ? "bg-brand-amber/10 border-brand-amber text-brand-amber font-semibold"
                          : "border-white/5 hover:border-white/10 text-brand-gray"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Attractors info and Clear button */}
              <div className="flex justify-between items-center pt-3 border-t border-white/5">
                <span className="text-[7px] font-mono text-brand-gray/60">
                  ATTRACTORS: {gravityWells.length} / 4
                </span>
                <button
                  onClick={() => setGravityWells([])}
                  disabled={gravityWells.length === 0}
                  className={`px-3 py-1.5 rounded text-[8px] font-mono tracking-widest uppercase font-semibold transition-colors clickable ${
                    gravityWells.length > 0
                      ? "bg-brand-light text-brand-black hover:bg-brand-amber cursor-pointer"
                      : "border border-white/5 text-zinc-600 cursor-not-allowed"
                  }`}
                >
                  Clear Wells
                </button>
              </div>
            </div>
          </div>
        );

      case "02": // The Grand Era Gallery
        return (
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-brand-amber tracking-widest uppercase">
              PROJECT GALLERY
            </div>
            <div className="h-48 sm:h-60 md:h-64 rounded-lg bg-zinc-950 border border-white/5 relative overflow-hidden group touch-pan-y">
              <AnimatePresence initial={false} custom={grandEraDirection} mode="popLayout">
                <motion.img
                  key={grandEraGalleryIndex}
                  src={grandEraImages[grandEraGalleryIndex].src}
                  alt={grandEraImages[grandEraGalleryIndex].label}
                  custom={grandEraDirection}
                  variants={{
                    enter: (direction: number) => ({
                      x: direction > 0 ? "100%" : direction < 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                    center: { x: 0, opacity: 1 },
                    exit: (direction: number) => ({
                      x: direction < 0 ? "100%" : direction > 0 ? "-100%" : 0,
                      opacity: 0,
                    }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(_, info) => {
                    const swipeThreshold = 50;
                    if (info.offset.x < -swipeThreshold) {
                      const nextIndex = (grandEraGalleryIndex + 1) % grandEraImages.length;
                      setGrandEraDirection(1);
                      setGrandEraGalleryIndex(nextIndex);
                    } else if (info.offset.x > swipeThreshold) {
                      const prevIndex = (grandEraGalleryIndex - 1 + grandEraImages.length) % grandEraImages.length;
                      setGrandEraDirection(-1);
                      setGrandEraGalleryIndex(prevIndex);
                    }
                  }}
                  className="w-full h-full object-cover absolute inset-0 cursor-grab active:cursor-grabbing select-none"
                />
              </AnimatePresence>
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 text-[8px] font-mono text-white/70 z-10 select-none uppercase">
                {grandEraImages[grandEraGalleryIndex].label}
              </div>
            </div>
            <div className="flex justify-between gap-2">
              {grandEraImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setGrandEraDirection(idx > grandEraGalleryIndex ? 1 : -1);
                    setGrandEraGalleryIndex(idx);
                  }}
                  className={`flex-1 h-1.5 rounded transition-colors clickable cursor-pointer ${
                    grandEraGalleryIndex === idx ? "bg-brand-amber" : "bg-white/10 hover:bg-white/30"
                  }`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="labs-showcase"
      className="relative w-full py-32 px-6 md:px-12 z-10 bg-brand-black min-h-screen text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center pb-6 border-b border-white/5">
          <button
            onClick={() => onViewChange("home")}
            className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-widest text-brand-gray hover:text-brand-amber transition-colors clickable cursor-pointer"
          >
            <ArrowLeft size={12} />
            <span>Back to Homepage</span>
          </button>
          
          <span className="text-[9px] font-mono text-brand-gray/60 uppercase tracking-widest hidden md:inline">
            ARCHIVE // EXPERIENTIAL LABS
          </span>
        </div>

        {/* Category Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              EXPERIENTIAL LABS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light">
            Interactive Sandboxes
          </h2>
          <p className="text-sm text-brand-gray font-light max-w-2xl leading-relaxed">
            Speculative prototypes, interactive physics simulators, visual algorithms, and digital playgrounds exploring advanced web capabilities.
          </p>
        </div>

        {/* Projects Grid List */}
        <div className="space-y-32 md:space-y-44 pt-12">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                <div
                  onClick={() => handleInspect(project)}
                  className={`lg:col-span-6 w-full aspect-video md:aspect-[16/10] relative group rounded-xl bg-brand-charcoal/30 p-2 overflow-hidden cursor-pointer ${
                    isEven ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 blur-[60px] opacity-30 rounded-xl transition-all duration-700 group-hover:opacity-50"
                    style={{ background: project.glowColor }}
                  />
                  <div className="w-full h-full glass-panel rounded-lg p-2 relative z-10 transition-transform duration-500 group-hover:scale-[1.01] flex items-center justify-center">
                    {project.mockup}
                  </div>
                </div>

                <div className={`lg:col-span-6 text-left space-y-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{project.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">
                      — {project.category}
                    </span>
                  </div>

                  <h3
                    onClick={() => handleInspect(project)}
                    className="text-2xl md:text-4xl font-display font-bold tracking-wide text-brand-light hover:text-brand-amber transition-colors duration-300 cursor-pointer inline-block"
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-brand-gray font-light leading-relaxed max-w-xl">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-white/5">
                    {project.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="space-y-1">
                        <div className="text-[9px] font-mono text-brand-gray tracking-wider uppercase">{stat.label}</div>
                        <div className="text-sm font-semibold text-brand-light font-display">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <button
                      onClick={() => handleInspect(project)}
                      className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-amber hover:text-brand-light transition-colors duration-300 clickable cursor-pointer"
                    >
                      <span>Inspect Experiment</span>
                      <ArrowUpRight size={14} />
                    </button>
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-light hover:text-brand-amber transition-colors duration-300 clickable"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cinematic Fullscreen Inspection Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              data-lenis-prevent
              className="fixed inset-0 w-full h-full z-[100] bg-brand-black/90 backdrop-blur-md flex items-start md:items-center justify-center p-4 md:p-12 overflow-y-auto cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-5xl glass-panel-gold rounded-xl p-6 md:p-12 relative shadow-2xl flex flex-col lg:flex-row gap-8 md:gap-12 text-left cursor-default my-8 md:my-auto"
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-6 right-6 text-brand-light/60 hover:text-brand-amber transition-colors clickable"
                  aria-label="Close Case Study"
                >
                  <X size={20} />
                </button>

                <div className="flex-1 space-y-6">
                  <div className="flex items-baseline space-x-3">
                    <span className="text-xs font-mono text-brand-amber font-semibold">{selectedProject.id}</span>
                    <span className="text-[10px] tracking-[0.25em] text-brand-gray font-mono uppercase">— LABS EXPERIMENT IN DETAIL</span>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-display font-extrabold text-brand-light tracking-wide">{selectedProject.title}</h3>
                  <p className="text-xs md:text-sm text-brand-gray leading-relaxed font-light font-sans">
                    {selectedProject.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6 py-4 border-t border-b border-white/5">
                    {selectedProject.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="space-y-1">
                        <div className="text-[9px] font-mono text-brand-gray tracking-wider uppercase">{stat.label}</div>
                        <div className="text-sm font-semibold text-brand-light font-display">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2 text-[10px] font-semibold tracking-[0.2em] uppercase bg-brand-amber text-brand-black px-6 py-3.5 rounded hover:bg-brand-light hover:scale-[1.02] transition-all duration-300 clickable text-center"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="w-full lg:w-[420px] shrink-0">
                  {renderInteractivePlayground(selectedProject)}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};
