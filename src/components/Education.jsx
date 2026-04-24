"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Activity } from "lucide-react";

const educationData = [
  {
    institution: "RMK Engineering College",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    period: "2023 — 2027",
    status: "PURSUING (In Progress)",
    score: "CGPA: 7.80",
    details: "Focusing on advanced Neural Network architectures, Deep Learning, and end-to-end AI system design.",
    icon: GraduationCap,
    theme: "text-cyan-400 border-cyan-500/20"
  },
  {
    institution: "Sri Ram Dayal Khemka Vivekananda Vidyalaya",
    degree: "Class XII (HSC)",
    period: "Completed 2023",
    status: "GRADUATED",
    score: "Score: 80.2%",
    details: "Mathematics, Physics, Chemistry focus.",
    icon: School,
    theme: "text-white/60 border-white/5"
  },
  {
    institution: "Sri Ram Dayal Khemka Vivekananda Vidyalaya",
    degree: "Class X (SSLC)",
    period: "Completed 2021",
    status: "GRADUATED",
    score: "Score: 84.2%",
    details: "Foundational science and mathematics.",
    icon: BookOpen,
    theme: "text-white/40 border-white/5"
  }
];

export default function Education() {
  return (
    <section className="space-y-12 relative py-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <div className="p-3 bg-white text-black transformer-glow shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Academic Initialization</h2>
          <p className="text-cyan-400 font-mono text-sm tracking-widest leading-none mt-2">STATUS: SYSTEM_LEARNING_ACTIVE</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group relative mechanical-panel bg-mechanical-dark/40 border-l-[4px] border border-y-0 border-r-0 ${edu.theme} p-8 flex flex-col md:flex-row items-start gap-8 transition-all duration-500 hover:bg-white/5 shadow-2xl`}
          >
            <div className="flex-shrink-0 w-16 h-16 rounded-sm bg-mechanical-dark border border-white/5 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
              <edu.icon className="w-8 h-8 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.institution}</h3>
                  <p className="text-lg text-gray-300 font-medium">{edu.degree}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-mono text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-sm border border-cyan-400/20">
                    {edu.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                {edu.details}
              </p>

              <div className="flex items-center gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Activity size={14} className="text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">{edu.status}</span>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-sm">
                  <span className="text-sm font-mono font-bold text-white">{edu.score}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
