import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor tracking
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring lag effect
  const ringX = useSpring(mouseX, { damping: 30, stiffness: 250, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 30, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Only show custom cursor on devices that support hover (fine pointer)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Hover listeners for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target is a link, button, or has interactive attributes
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("clickable") ||
        target.getAttribute("role") === "button";

      setIsHovered(!!isClickable);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]" ref={cursorRef}>
      {/* Ambient Spotlight Highlight (Glows over high-textured BG) */}
      <motion.div
        className="fixed w-36 h-36 rounded-full bg-brand-amber/10 blur-[28px] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: ringX,
          y: ringY,
          willChange: "transform",
        }}
        animate={{
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.18)" : "rgba(212, 175, 55, 0.08)",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
      />

      {/* Inner Dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-brand-amber -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed w-9 h-9 rounded-full border border-brand-amber/60 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{
          x: ringX,
          y: ringY,
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(212, 175, 55, 0.1)" : "rgba(212, 175, 55, 0)",
          borderColor: isHovered ? "rgba(212, 175, 55, 0.95)" : "rgba(212, 175, 55, 0.6)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
    </div>
  );
};
