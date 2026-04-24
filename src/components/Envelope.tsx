import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);

    // Trigger confetti
    const end = Date.now() + 1000;
    const colors = ["#c5a059", "#dfc18c", "#ffffff", "#f5f5f0"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.6 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.6 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Wait for animation to finish before calling onOpen
    setTimeout(onOpen, 1500);
  };

  return (
    <div 
      className="relative w-72 h-52 sm:w-80 sm:h-56 cursor-pointer group"
      onClick={handleOpen}
    >
      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-4 bg-black/10 blur-xl rounded-full" />

      {/* Envelope Container */}
      <motion.div 
        animate={opening ? { y: 20, scale: 1.05 } : {}}
        className="relative w-full h-full bg-white shadow-2xl overflow-hidden rounded-sm transform-gpu preserve-3d"
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-[#f9f9f7] border border-stone-200" />

        {/* The Card inside (partially visible when opening) */}
        <motion.div
          animate={opening ? { y: -80, opacity: 1 } : { y: 0, opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          className="absolute inset-x-4 top-4 bottom-4 bg-brand-beige border border-brand-gold/20 flex flex-col items-center justify-center p-4 shadow-inner"
        >
          <div className="w-12 h-[1px] bg-brand-gold mb-2" />
          <p className="font-serif text-brand-gold text-xs tracking-widest text-center">ANNETH</p>
        </motion.div>

        {/* Envelope Sides */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: "polygon(0% 0%, 50% 50%, 0% 100%)",
            backgroundColor: "#f5f5f0",
            borderLeft: "1px solid #e5e7eb"
          }}
        />
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: "polygon(100% 0%, 50% 50%, 100% 100%)",
            backgroundColor: "#f5f5f0",
            borderRight: "1px solid #e5e7eb"
          }}
        />
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: "polygon(0% 100%, 50% 50%, 100% 100%)",
            backgroundColor: "#efefe9",
            borderBottom: "1px solid #e5e7eb"
          }}
        />

        {/* Envelope Flap (Top) */}
        <motion.div
          animate={opening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 30 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 origin-top"
          style={{
            clipPath: "polygon(0% 0%, 50% 50%, 100% 0%)",
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #e5e7eb",
            backfaceVisibility: "hidden"
          }}
        >
          {/* Wax Seal / Design on flap */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-brand-gold flex items-center justify-center shadow-lg border-2 border-brand-gold-light/50">
               <span className="text-white font-serif text-xl border-b border-white/30">A</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {!opening && (
        <div className="absolute -inset-2 rounded-lg border-2 border-dashed border-brand-gold/20 animate-pulse pointer-events-none" />
      )}
    </div>
  );
}
