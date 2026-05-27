import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../logo.png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface NavbarProps {
  currentView: "home" | "atmospheric" | "systemic" | "labs";
  onViewChange: (view: "home" | "atmospheric" | "systemic" | "labs", targetSection?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onViewChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { damping: 50, stiffness: 400, mass: 0.2 });
  const rotate = useTransform(smoothScrollY, [0, 1800], [0, 360], { clamp: false });

  const navLinks = [
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (currentView !== "home") {
      onViewChange("home", href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        const globalLenis = (window as any).lenis;
        if (globalLenis && typeof globalLenis.scrollTo === "function") {
          globalLenis.scrollTo(target as HTMLElement);
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      {/* Floating Stuck Logo (Always fixed at top-left) - Fades out smoothly when mobile drawer is open */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
          onViewChange("home", "top");
        }}
        className={`fixed top-2 lg:top-4 left-2 lg:left-6 z-[60] flex items-center justify-center group transition-all duration-300 ${
          isOpen ? "opacity-0 pointer-events-none scale-95" : "opacity-100"
        }`}
      >
        <div className="relative w-24 h-24 lg:w-28 lg:h-28 flex items-center justify-center">
          {/* Circular Text (Rotates on scroll) */}
          <motion.svg
            viewBox="0 0 100 100"
            style={{ rotate }}
            className="absolute inset-0 w-full h-full will-change-transform pointer-events-none"
          >
            <defs>
              <path
                id="logoTextPath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="fill-brand-gray/60 group-hover:fill-brand-amber transition-colors duration-300 font-mono text-[5.2px] uppercase tracking-[0.21em] font-semibold">
              <textPath href="#logoTextPath" startOffset="0%">
                • NBDYKNWS • CREATIVE FRONTEND DEVELOPER 
              </textPath>
            </text>
          </motion.svg>

          {/* Central Logo (Stationary, but scales on hover) */}
          <motion.img 
            src={logo} 
            alt="Logo" 
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 lg:w-14 lg:h-14 object-contain origin-center cursor-pointer z-10"
          />
        </div>
      </a>

      {/* Non-fixed Navbar (Scrolls away) */}
      <nav
        className="absolute top-0 left-0 w-full z-50 py-8 bg-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-end items-center">

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-10">
          <div className="flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-xs uppercase tracking-widest text-brand-gray hover:text-brand-light transition-colors duration-300 font-medium relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-amber transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Status, Sound, & CTA */}
          <div className="flex items-center space-x-6 pl-6 border-l border-white/10">
            {/* Status dot */}
            <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.15em] text-brand-amber">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-amber animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <span className="hidden lg:inline text-brand-light/60">Available</span>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="text-[10px] font-sans font-semibold uppercase tracking-widest px-5 py-2.5 rounded bg-brand-light text-brand-black hover:bg-brand-amber hover:text-brand-black transition-all duration-300"
            >
              Inquire
            </a>
          </div>
        </div>

        {/* Mobile menu block */}
        <div className="flex items-center space-x-4 lg:hidden">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`text-brand-light hover:text-brand-amber transition-colors z-[60] ${
              isOpen ? "fixed top-8 right-6" : "relative"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-brand-black z-40 transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center px-12 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Glow in drawer background */}
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-brand-amber/5 blur-[80px] rounded-full pointer-events-none" />

        <div className="flex flex-col space-y-8 text-left relative z-10">
          <div className="text-[10px] tracking-[0.3em] text-brand-amber uppercase font-mono mb-4">
            — NAVIGATION
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-3xl font-display font-semibold tracking-wider text-brand-light hover:text-brand-amber transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-8 border-t border-white/10 flex flex-col space-y-6">
            <div className="flex items-center space-x-3 text-xs uppercase tracking-widest text-brand-light/60">
              <span className="w-2 h-2 rounded-full bg-brand-amber animate-pulse shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
              <span>Available for collaboration</span>
            </div>
            
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="inline-block text-xs uppercase tracking-widest py-4 px-6 bg-brand-amber text-brand-black text-center font-bold"
            >
              Let's build
            </a>
          </div>
        </div>
      </div>
    </nav>
  </>
);
};
