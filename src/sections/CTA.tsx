import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

interface CTAProps {
  selectedService: string;
}

export const CTA: React.FC<CTAProps> = ({ selectedService }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "Cinematic Landing Page",
    details: "",
  });
  const [submittingState, setSubmittingState] = useState<"IDLE" | "COMPILING" | "SUCCESS">("IDLE");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, type: selectedService }));
    }
  }, [selectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    // Transition to terminal compilation sequence
    setSubmittingState("COMPILING");
    setTerminalLogs(["[SYS] INITIATING SECURE ROUTER..."]);

    const logSteps = [
      { delay: 500, log: "[SYS] ENCRYPTING INQUIRY BLUEPRINT..." },
      { delay: 1000, log: "[SYS] ALLOCATING HOST NODE: SECURE_SSL_443" },
      { delay: 1600, log: "[SYS] TRANSMITTING PAYLOAD DATA STREAMS..." },
      { delay: 2200, log: "[SYS] SERVER RECEIVED: ACK_200 OK" }
    ];

    logSteps.forEach((step) => {
      setTimeout(() => {
        setTerminalLogs((prev) => [...prev, step.log]);
      }, step.delay);
    });

    setTimeout(() => {
      setSubmittingState("SUCCESS");
      setFormData({ name: "", email: "", type: "Cinematic Landing Page", details: "" });
    }, 2800);
  };

  const projectTypes = [
    "Cinematic Landing Page",
    "Interactive Brand Website",
    "Motion Design System",
    "Premium UI/UX Design",
    "Custom High-End Project",
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-24 md:py-36 px-6 md:px-12 z-10 border-t border-white/5 bg-brand-black"
    >
      {/* Background Flare */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-amber/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and copy */}
        <div className="lg:col-span-5 text-left flex flex-col space-y-6">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-amber" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-brand-amber">
              PROJECT INITIATION
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-brand-light leading-[1.1]">
            Let's Build <br />
            Something <br />
            <span className="text-stroke-hover text-brand-light transition-all duration-500">Unforgettable</span>.
          </h2>

          <p className="text-sm md:text-base text-brand-gray font-light leading-relaxed max-w-md">
            Whether you are launching a futuristic luxury brand, an architectural agency, or a high-end product, let's create a custom digital space that matches your ambition.
          </p>

          <div className="space-y-4 pt-6 border-t border-white/5 font-mono text-[10px] text-brand-gray tracking-wider">
            <div>
              <span className="block text-brand-amber text-[8px] mb-1">EMAIL INQUIRIES:</span>
              <a href="mailto:inquire@abhishek.dev" className="text-brand-light hover:text-brand-amber transition-colors">
                inquire@abhishek.dev
              </a>
            </div>
            <div>
              <span className="block text-brand-amber text-[8px] mb-1">LOCATION:</span>
              <span className="text-brand-light">BENGALURU, INDIA // REMOTE</span>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form Card */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <div className="w-full max-w-xl glass-panel-gold rounded-xl p-8 md:p-10 relative overflow-hidden text-left shadow-2xl">
            {/* Form Title */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <span className="text-[10px] font-mono tracking-widest text-brand-amber">INQUIRY_FORM_v2.6</span>
              <span className="text-[10px] font-mono tracking-widest text-brand-gray">
                {submittingState === "IDLE" ? "READY TO ENQUEUE" : submittingState === "COMPILING" ? "TRANSMITTING..." : "DISPATCH SUCCESS"}
              </span>
            </div>

            {/* Submitting/Submitted Visualizations */}
            {submittingState === "COMPILING" && (
              <div className="py-8 font-mono text-xs text-brand-light/90 space-y-2 bg-brand-black/40 p-4 rounded border border-white/5 min-h-[220px] flex flex-col justify-start">
                <span className="text-[10px] text-brand-amber mb-2 tracking-widest block border-b border-white/10 pb-2">COMPILE TERMINAL LOGS:</span>
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="flex space-x-2">
                    <span className="text-brand-amber font-semibold">&gt;&gt;</span>
                    <span>{log}</span>
                  </div>
                ))}
                <span className="animate-pulse text-brand-amber">&gt;&gt; _</span>
              </div>
            )}

            {submittingState === "SUCCESS" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-12 flex flex-col items-center justify-center space-y-4 text-center min-h-[220px]"
              >
                <div className="w-12 h-12 rounded-full border border-brand-amber flex items-center justify-center text-brand-amber animate-pulse">
                  <Check size={20} />
                </div>
                <h3 className="text-lg font-display font-semibold text-brand-light">TRANSMISSION RECEIVED</h3>
                <p className="text-xs text-brand-gray max-w-xs font-mono">
                  Your project blueprint has been safely delivered to host. Expect a manual response within 24 hours.
                </p>
                <button
                  onClick={() => setSubmittingState("IDLE")}
                  className="text-[9px] font-mono text-brand-amber border border-brand-amber/30 hover:border-brand-amber/70 px-4 py-2 rounded mt-2 clickable transition-colors"
                >
                  NEW TRANSMISSION
                </button>
              </motion.div>
            )}

            {submittingState === "IDLE" && (
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 mt-4">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-brand-light outline-none focus:border-brand-amber transition-colors peer clickable"
                  />
                  <label className="absolute left-0 top-3 text-xs md:text-sm text-brand-gray tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-amber peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]">
                    YOUR NAME OR ORGANIZATION
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-brand-light outline-none focus:border-brand-amber transition-colors peer clickable"
                  />
                  <label className="absolute left-0 top-3 text-xs md:text-sm text-brand-gray tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-amber peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]">
                    EMAIL ADDRESS
                  </label>
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label className="block text-[9px] font-mono text-brand-gray tracking-widest uppercase">
                    SELECT PROJECT FORMAT
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-brand-charcoal/50 border border-white/10 rounded px-4 py-3 text-xs text-brand-light outline-none focus:border-brand-amber transition-colors clickable font-mono"
                  >
                    {projectTypes.map((type, idx) => (
                      <option key={idx} value={type} className="bg-brand-black text-brand-light">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Details */}
                <div className="relative">
                  <textarea
                    rows={4}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-brand-light outline-none focus:border-brand-amber transition-colors peer resize-none clickable"
                  />
                  <label className="absolute left-0 top-3 text-xs md:text-sm text-brand-gray tracking-wider pointer-events-none transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-brand-amber peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px]">
                    PROJECT BRIEF & ACCENTS
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 text-xs uppercase tracking-widest py-4 bg-brand-light text-brand-black hover:bg-brand-amber hover:text-brand-black transition-all duration-300 font-bold clickable"
                >
                  <span>Submit Blueprint</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}

            {/* Corner highlights */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-amber/40" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-amber/40" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-amber/40" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-amber/40" />
          </div>
        </div>

      </div>
    </section>
  );
};
