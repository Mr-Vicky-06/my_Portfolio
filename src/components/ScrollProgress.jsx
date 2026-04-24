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
      {/* Energon Fuel Bar */}
      <div className="fixed top-0 left-0 right-0 h-[6px] bg-black/40 z-[1000] backdrop-blur-md border-b border-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-optimus-red via-optimus-blue to-cyan-400 origin-left shadow-[0_0_20px_rgba(6,182,212,0.6)]"
          style={{ scaleX }}
        >
          {/* Animated scanline on the progress bar */}
          <div className="absolute inset-0 bg-white/20 animate-[scan_2s_linear_infinite] opacity-50" />
        </motion.div>
      </div>

      {/* Cybertronian minimal scroll text indicator */}
      <motion.div 
        className="fixed right-6 bottom-12 z-50 text-[10px] font-bold font-mono text-cyan-400 uppercase tracking-[0.3em] [writing-mode:vertical-rl] mix-blend-screen hidden md:block"
      >
        <span className="animate-pulse-slow">CORE_ENERGY: ACTIVE</span>
      </motion.div>
    </>
  );
}

