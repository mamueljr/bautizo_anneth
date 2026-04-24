import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import Envelope from "./components/Envelope";
import InvitationContent from "./components/InvitationContent";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Prevent scrolling when envelope is closed
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <div className="min-h-screen relative bg-brand-beige">
      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
          >
            <Envelope onOpen={() => setIsOpened(true)} />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-8 text-brand-gold font-serif text-lg tracking-widest uppercase"
            >
              Tienes una invitación especial
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="invitation-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative"
          >
            <InvitationContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
