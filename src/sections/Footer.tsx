import React from "react";
import { ArrowUp } from "lucide-react";
import logo from "../logo.png";

export const Footer: React.FC = () => {
  const socialLinks = [
    { label: "TWITTER", href: "#" },
    { label: "GITHUB", href: "#" },
    { label: "LINKEDIN", href: "#" },
    { label: "DRIBBBLE", href: "#" },
    { label: "AWWWARDS", href: "#" },
  ];

  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const globalLenis = (window as any).lenis;
    if (globalLenis && typeof globalLenis.scrollTo === "function") {
      globalLenis.scrollTo(0);
    } else {
      const target = document.querySelector("#root");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative w-full py-12 md:py-16 px-6 md:px-12 border-t border-white/5 bg-brand-black z-10 text-left">
      <div className="max-w-7xl mx-auto flex flex-col space-y-12">

        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Logo & Meta */}
          <div className="md:col-span-4 space-y-4">
            <img src={logo} alt="Logo" className="h-24 w-auto object-contain" />
            <p className="text-[9px] font-mono text-brand-gray/80 tracking-wider">
              CRAFTING IMMERSIVE INTERACTIVE PORTFOLIOS
            </p>
          </div>

          {/* Social Links Row */}
          <div className="md:col-span-6 flex flex-wrap gap-x-8 gap-y-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[10px] font-mono tracking-widest text-brand-gray hover:text-brand-amber transition-colors duration-300 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-amber transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={handleBackToTop}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-brand-amber flex items-center justify-center text-brand-gray hover:text-brand-amber transition-colors duration-300 clickable"
              aria-label="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Lower footer notes */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-white/5 gap-4">
          <span className="text-[9px] font-mono text-brand-gray/60 uppercase tracking-widest">
            © 2026 NBDYKNWS. ALL RIGHTS RESERVED.
          </span>

        </div>

      </div>
    </footer>
  );
};
