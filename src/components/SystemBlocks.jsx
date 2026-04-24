"use client";

import { motion } from "framer-motion";
import { ServerCog, Database, Network, ShieldCheck, Cpu } from "lucide-react";

const processes = [
  {
    title: "01. Data Acquisition",
    icon: Database,
    desc: "Ingestion of multimodal data packets, noise filtration, and structured modeling via Pandas/NumPy."
  },
  {
    title: "02. Algorithm Forge",
    icon: ServerCog,
    desc: "Designing and fine-tuning scalable intelligence leveraging Deep Learning and classical ML frameworks."
  },
  {
    title: "03. Neural Integration",
    icon: Network,
    desc: "Constructing high-performance API pipelines and microservice intelligence routing protocols."
  },
  {
    title: "04. Core Validation",
    icon: ShieldCheck,
    desc: "Validating through digital twins and edge deployment to ensure robust autonomous operation."
  }
];

export default function SystemBlocks() {
  return (
    <section className="space-y-16 relative w-full overflow-hidden py-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <div className="p-3 bg-mechanical-accent/10 border border-mechanical-accent rounded clip-hexagon">
          <Cpu className="text-mechanical-accent w-8 h-8 transformer-glow" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter text-white uppercase">Architectural Flow</h2>
          <p className="text-gray-500 font-mono text-xs tracking-widest leading-none mt-2">PROCESS_PATH: ACTIVATED</p>
        </div>
      </motion.div>

      <div className="relative">
        <div className="absolute top-0 bottom-0 left-[31px] md:left-1/2 w-px bg-gradient-to-b from-transparent via-mechanical-border to-transparent hidden md:block" />
        
        <div className="space-y-20 relative">
          {processes.map((proc, i) => (
            <motion.div
              key={proc.title}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="flex-1 w-full flex justify-end md:justify-center relative">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`relative p-8 w-full max-w-md bg-mechanical-dark/40 border border-mechanical-border hover:border-mechanical-accent transition-all duration-500 clip-mechanical shadow-2xl ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="absolute top-0 left-0 w-2 h-2 bg-mechanical-accent/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-mechanical-accent/40" />
                  
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-mechanical-accent transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {proc.desc}
                  </p>
                </motion.div>
              </div>
              
              <div className="relative z-10 w-20 h-20 rounded-full bg-mechanical-dark border-4 border-mechanical-border flex items-center justify-center flex-shrink-0 group">
                <div className="absolute inset-[-4px] rounded-full border border-mechanical-accent/20 animate-pulse-slow" />
                <proc.icon className="text-mechanical-accent w-8 h-8 group-hover:scale-110 transition-transform" />
              </div>

              <div className="flex-1 w-full hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

