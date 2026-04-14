"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Server, BookOpen, GraduationCap, Cpu } from "lucide-react";

const certificates = [
  {
    org: "NPTEL",
    icon: BookOpen,
    color: "text-green-400"
  },
  {
    org: "Oracle",
    icon: Server,
    color: "text-red-400"
  },
  {
    org: "Infosys Springboard",
    icon: GraduationCap,
    color: "text-blue-400"
  },
  {
    org: "Qualcomm Academy",
    icon: Cpu,
    color: "text-purple-400"
  }
];

export default function Certificates() {
  return (
    <section className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <BadgeCheck className="text-mechanical-accent w-6 h-6" />
        <h2 className="text-2xl font-mono tracking-wider uppercase text-gray-300">Certified Credentials</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mechanical-panel p-6 flex flex-col justify-center items-center group transition-all duration-300 hover:border-mechanical-accentCyan"
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="p-4 bg-mechanical-dark rounded-full border border-mechanical-border group-hover:border-mechanical-accent transition-colors">
                <cert.icon className={`w-8 h-8 ${cert.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors uppercase tracking-widest">{cert.org}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
