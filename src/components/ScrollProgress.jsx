"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Top glowing origin bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-mechanical-accentCyan origin-left z-[1000] shadow-[0_0_15px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />

      {/* Cyberpunk minimal scroll text indicator (Optional) */}
      <motion.div 
        className="fixed right-4 bottom-4 z-50 text-[10px] font-mono text-mechanical-accentCyan uppercase tracking-[0.2em] [writing-mode:vertical-rl] mix-blend-screen hidden md:block"
        style={{ opacity: scrollYProgress }}
      >
        System Initialized
      </motion.div>
    </>
  );
}
