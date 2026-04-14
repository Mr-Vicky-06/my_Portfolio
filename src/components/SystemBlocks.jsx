"use client";

import { motion } from "framer-motion";
import { ServerCog, Database, Network, ShieldCheck } from "lucide-react";

const processes = [
  {
    title: "1. Data Acquisition & Modeling",
    icon: Database,
    desc: "Ingestion of raw multimodal data, noise filtration, and structured modeling using Pandas/NumPy."
  },
  {
    title: "2. Algorithm Engineering",
    icon: ServerCog,
    desc: "Designing and fine-tuning scalable algorithms leveraging Deep Learning and classical ML frameworks."
  },
  {
    title: "3. System Integration",
    icon: Network,
    desc: "Constructing API pipelines, microservices, and high-performance routing protocols."
  },
  {
    title: "4. Sim-to-Real Validation",
    icon: ShieldCheck,
    desc: "Testing through digital twins and edge deployment to ensure safety and robust autonomous operation."
  }
];

export default function SystemBlocks() {
  return (
    <section className="space-y-12 relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <ServerCog className="text-mechanical-accentCyan w-8 h-8" />
        <h2 className="text-2xl md:text-3xl font-mono tracking-wider text-white">System Architecture Flow</h2>
      </motion.div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[31px] md:left-1/2 w-px bg-mechanical-border hidden md:block" />
        <div className="space-y-12 relative">
          {processes.map((proc, i) => (
            <motion.div
              key={proc.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex-1 w-full flex justify-end md:justify-center relative">
                <div className={`mechanical-panel p-6 w-full max-w-md ${
                  i % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <h3 className="text-xl font-bold text-white mb-2">{proc.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{proc.desc}</p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-mechanical-dark border-2 border-mechanical-accentCyan shadow-[0_0_15px_rgba(6,182,212,0.3)] flex items-center justify-center flex-shrink-0">
                <proc.icon className="text-mechanical-accentCyan" />
              </div>

              <div className="flex-1 w-full hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
