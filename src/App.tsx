import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import { Loader } from "./components/Loader";
import { CustomCursor } from "./components/CustomCursor";
import { BackgroundGrid } from "./components/BackgroundGrid";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { ProjectsGateway, AtmosphericShowcase, SystemicShowcase, LabsShowcase } from "./sections/Projects";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Testimonials } from "./sections/Testimonials";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<"home" | "atmospheric" | "systemic" | "labs">("home");
  const [selectedService, setSelectedService] = useState("Cinematic Landing Page");

  const lenisRef = useRef<Lenis | null>(null);
  const homeScrollPosRef = useRef(0);

  // Monitor hash changes to support browser history (back/forward button & swipe gestures)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let nextView: "home" | "atmospheric" | "systemic" | "labs" = "home";

      if (hash === "#/atmospheric") {
        nextView = "atmospheric";
      } else if (hash === "#/systemic") {
        nextView = "systemic";
      } else if (hash === "#/labs") {
        nextView = "labs";
      }

      setCurrentView(nextView);
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Check initial hash on load
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Capture homepage scroll position in a Ref (zero re-render cost)
  useEffect(() => {
    const handleScrollCapture = () => {
      if (currentView === "home") {
        homeScrollPosRef.current = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScrollCapture, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollCapture);
  }, [currentView]);

  const scrollToSection = (targetSection: string) => {
    if (targetSection === "top") {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    } else {
      const target = document.querySelector(targetSection);
      if (target) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(target as HTMLElement);
        } else {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleViewChange = (view: "home" | "atmospheric" | "systemic" | "labs", targetSection?: string) => {
    const targetHash = view === "home" ? "#/" : `#/${view}`;

    if (window.location.hash === targetHash || (view === "home" && (window.location.hash === "" || window.location.hash === "#/"))) {
      if (view === "home" && targetSection) {
        scrollToSection(targetSection);
      }
    } else {
      window.location.hash = targetHash;
      if (view === "home" && targetSection) {
        setTimeout(() => {
          scrollToSection(targetSection);
        }, 100);
      }
    }
  };

  // Initialize Lenis smooth scroll once loading has completed
  useEffect(() => {
    if (isLoading) return;

    // Detect mobile/touch-screen devices to allow 100% native smooth scrolling (60/120fps lag-free)
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // premium easeOutQuart
      infinite: false,
      syncTouch: false,
      touchMultiplier: 0, // Bypass touch event intercepts
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Synchronize Lenis scroll positions with requestAnimationFrame
    let rafId: number;
    const scrollLoop = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(scrollLoop);
    };

    rafId = requestAnimationFrame(scrollLoop);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
      (window as any).lenis = null;
    };
  }, [isLoading]);

  // Reset scroll to top on view changes (instant to avoid transition stutters)
  useEffect(() => {
    if (currentView === "home") {
      const targetScroll = homeScrollPosRef.current;
      if (lenisRef.current) {
        lenisRef.current.scrollTo(targetScroll, { immediate: true });
      } else {
        window.scrollTo({ top: targetScroll, left: 0, behavior: "instant" as any });
      }
    } else {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as any });
      }
    }
  }, [currentView]);

  // Service selection presets trigger
  const handleSelectService = (serviceType: string) => {
    setSelectedService(serviceType);
    handleViewChange("home", "#contact");
  };

  return (
    <>
      {/* 1. Cinematic Preloader */}
      <Loader onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative text-brand-light min-h-screen selection:bg-brand-amber selection:text-brand-black">
          {/* 2. Custom Cursor */}
          <CustomCursor />

          {/* 3. Film Grain Overlay */}
          <div className="grain-overlay" />

          {/* 4. Ambient Background Canvas & Grid */}
          <BackgroundGrid />

          {/* 5. Navigation header */}
          <Navbar currentView={currentView} onViewChange={handleViewChange} />

          {/* 6. Main Scrollable Container based on active route */}
          {currentView === "home" && (
             <main className="relative z-10 w-full animate-fade-in">
               <Hero />
               <ProjectsGateway onViewChange={handleViewChange} />
               <About />
               <Services onSelectService={handleSelectService} />
               <Process />
               <Testimonials />
               <CTA selectedService={selectedService} />
               <Footer />
             </main>
          )}

          {currentView === "atmospheric" && (
            <main className="relative z-10 w-full animate-fade-in">
              <AtmosphericShowcase onViewChange={handleViewChange} />
              <Footer />
            </main>
          )}

          {currentView === "systemic" && (
            <main className="relative z-10 w-full animate-fade-in">
              <SystemicShowcase onViewChange={handleViewChange} />
              <Footer />
            </main>
          )}

          {currentView === "labs" && (
            <main className="relative z-10 w-full animate-fade-in">
              <LabsShowcase onViewChange={handleViewChange} />
              <Footer />
            </main>
          )}
        </div>
      )}
    </>
  );
}

export default App;
