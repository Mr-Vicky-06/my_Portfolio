"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

const logs = [
  {
    timestamp: "2025-08-01::10:00:00",
    process: "INFOSYS_SPRINGBOARD_INTERNSHIP",
    status: "SUCCESS",
    message: "Developed AI-based shipment prediction model improving logistics efficiency.",
    date: "Aug 2025 - Oct 2025"
  },
  {
    timestamp: "2025-06-01::09:30:00",
    process: "AICTE_SHELL_EDUNET_INTERNSHIP",
    status: "SUCCESS",
    message: "Implemented AI and data analytics solutions focused on sustainability and efficiency.",
    date: "Jun 2025 - Jul 2025"
  },
  {
    timestamp: "2023-09-01::08:00:00",
    process: "ACADEMIC_INITIALIZATION",
    status: "PROCESSING",
    message: "B.Tech AI & DS at RMK Engineering College. CGPA: 7.80. Learning advanced NN architectures.",
    date: "2023 - 2027"
  }
];

export default function ExperienceTimer() {
  return (
    <section className="space-y-8 max-w-3xl">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3"
      >
        <Terminal className="text-green-500 w-6 h-6" />
        <h2 className="text-2xl font-mono text-white tracking-widest">SYSTEM.LOG // EXPERIENCE</h2>
      </motion.div>

      <div className="mechanical-panel bg-[#050A14] font-mono text-sm p-6 overflow-hidden relative">
        {/* Terminal scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent w-full h-[10px] animate-[scan_3s_linear_infinite]" />
        
        <div className="space-y-6">
          {logs.map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring" }}
              className="flex flex-col gap-1 border-l-2 border-slate-800 pl-4 relative"
            >
              <div className="absolute -left-[5px] top-1.5 w-2 h-2 bg-slate-800 rounded-full" />
              <div className="flex items-center gap-3 text-xs">
                <span className="text-slate-500">[{log.timestamp}]</span>
                <span className="text-blue-400">{log.process}</span>
                <span className="text-green-500">[{log.status}]</span>
              </div>
              <p className="text-gray-300 mt-1">{log.message}</p>
              <p className="text-xs text-slate-500">{log.date}</p>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ yoyo: Infinity, duration: 0.8 }}
            className="text-green-500"
          >
            Awaiting input_
          </motion.div>
        </div>
      </div>
    </section>
  );
}
