import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  decay: number;
}

export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize particles (dust motes)
    const particles: Particle[] = [];
    const particleCount = Math.min(45, Math.floor((width * height) / 35000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.3 - 0.15, // Rise upward
        radius: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.3 + 0.15,
        decay: Math.random() * 0.002 + 0.001,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - width / 2) * 0.08;
      mouseRef.current.targetY = (e.clientY - height / 2) * 0.08;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop (Optimized: Renders only lightweight dust motes particles)
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse lag
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Draw Dust Motes Particles
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx + mouseRef.current.x * 0.15;
        p.y += p.vy + mouseRef.current.y * 0.15;

        // Fade in and out naturally
        if (p.alpha < 0.4 && p.decay > 0) {
          p.alpha += 0.002;
        }

        // Loop boundaries
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
          p.alpha = 0.1;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        // Slightly larger radius to mimic glowing light without using slow filters
        ctx.arc(p.x, p.y, p.radius + 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-brand-black">
      {/* Background Radial Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(18,18,20,0.8),rgba(3,3,3,1)_90%)]" />

      {/* Ambient Glowing Orbs (CSS hardware-accelerated layers to replace heavy Canvas gradients) */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.045)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(112,128,144,0.05)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[30%] right-[20%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(140,109,49,0.025)_0%,transparent_70%)] animate-pulse-slow pointer-events-none" style={{ animationDelay: "-6s" }} />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient Particles Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
