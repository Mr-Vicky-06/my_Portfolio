"use client";

import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Code2 } from "lucide-react";

const techs = [
  { slug: "html5", name: "html5" },
  { slug: "css3", name: "css3", useDevicon: true },
  { slug: "javascript", name: "javascript" },
  { slug: "typescript", name: "typescript" },
  { slug: "nextdotjs", color: "FFFFFF" },
  { slug: "react", name: "react" },
  { slug: "threedotjs", color: "FFFFFF" },
  { slug: "tailwindcss", name: "tailwindcss" },
  { slug: "nodedotjs", name: "nodedotjs" },
  { slug: "fastapi", name: "fastapi" },
  { slug: "python", name: "python" },
  { slug: "cplusplus", name: "cplusplus" },
  { slug: "java", name: "java", useDevicon: true },
  { slug: "tensorflow", name: "tensorflow" },
  { slug: "pytorch", name: "pytorch" },
  { slug: "huggingface", name: "huggingface" },
  { slug: "git", name: "git" },
  { slug: "github", color: "FFFFFF" },
  { slug: "docker", name: "docker" },
  { slug: "linux", name: "linux" },
  { slug: "arduino", name: "arduino" },
  { slug: "flutter", name: "flutter" },
  { slug: "opencv", name: "opencv" }
];

export default function TechStack() {
  return (
    <section className="space-y-12 relative py-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <div className="p-3 bg-white text-black transformer-glow shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          <Code2 className="w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Technical Stack</h2>
          <p className="text-gray-500 font-mono text-xs tracking-widest leading-none mt-2">SYSTEM_CAPABILITIES: OPTIMIZED_NODES</p>
        </div>
      </motion.div>

      <div className="mechanical-panel p-10 bg-black/40 border-white/5 shadow-2xl relative overflow-hidden group">
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-8 items-center justify-items-center">
          {techs.map((tech, idx) => (
            <motion.div
              key={tech.slug}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.3, zIndex: 50 }}
              transition={{ delay: idx * 0.01, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="relative cursor-pointer p-1"
              title={tech.slug.toUpperCase()}
            >
              <img 
                src={
                  tech.useDevicon 
                    ? `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.name}/${tech.name}-original.svg`
                    : tech.color 
                      ? `https://cdn.simpleicons.org/${tech.slug}/${tech.color}`
                      : `https://cdn.simpleicons.org/${tech.slug}`
                } 
                alt={tech.slug}
                className="w-10 h-10 md:w-12 md:h-12 object-contain hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300"
                onError={(e) => { 
                  e.target.src = `https://cdn.simpleicons.org/${tech.slug}`; 
                }}
              />
            </motion.div>
          ))}
          
          <motion.div 
            whileHover={{ scale: 1.2 }}
            className="w-12 h-12 border-2 border-white/20 bg-white/5 flex items-center justify-center font-black text-[10px] text-white clip-mechanical shadow-2xl"
            title="CARLA SIMULATOR"
          >
            CARLA
          </motion.div>
        </div>

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-white/5 to-transparent h-1 animate-[scan_4s_linear_infinite]" />
      </div>
    </section>
  );
}






