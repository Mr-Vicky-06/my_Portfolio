"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Box } from "lucide-react";

const minorProjects = [
  {
    title: "Eco-Driving Tracker",
    description: "Developed machine learning models to analyze driving behavior and estimate emissions, providing data-driven insights for sustainable mobility optimization.",
    github: "#",
    tags: ["Data Analytics", "Emissions", "ML"]
  },
  {
    title: "Skin Disease Diagnosis (XAI)",
    description: "Built a deep learning-based diagnostic system using MobileNetV2, enhanced with Grad-CAM visualization for interpretable medical predictions.",
    github: "https://github.com/Mr-Vicky-06/Skin_Disease",
    tags: ["MobileNetV2", "Grad-CAM", "Healthcare"]
  },
  {
    title: "JARVIS 0.7 Assistant",
    description: "Python-based voice assistant integrating multiple APIs for real-time automation and querying, demonstrating applied understanding of modern AI paradigms.",
    github: "https://github.com/Mr-Vicky-06/JARVIS0.7",
    tags: ["Python", "Voice APIs"]
  },
  {
    title: "Flowchart Argo",
    description: "Algorithm-based flowchart mapping and generation framework designed for efficient logic visualization and system architectural flow.",
    github: "https://github.com/Mr-Vicky-06/floatChar_argo",
    tags: ["Logic Mapping", "Flowchart", "Algo"]
  },
  {
    title: "Chess AI Engine",
    description: "An artificial intelligence system utilizing evaluation heuristics and ML techniques to optimally play chess with optimized performance.",
    github: "https://github.com/Mr-Vicky-06/Chess_AI",
    tags: ["Python", "AI", "Algorithms"]
  },
  {
    title: "Corvette E-Ray Product UI",
    description: "Sleek, high-performance product website mockups specifically targeting automotive UX design and intelligent interfaces.",
    github: "https://github.com/Mr-Vicky-06/Chevrolet_Corvette_E-Ray",
    tags: ["Web Design", "UI/UX", "Automotive"]
  }
];

export default function MinorProjects() {
  return (
    <section className="space-y-12 relative py-12">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <div className="p-3 bg-bumblebee-yellow rounded transition-transform hover:rotate-12">
          <Box className="text-bumblebee-black w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Mini Projects</h2>
          <p className="text-bumblebee-yellow/60 font-mono text-sm tracking-widest">UNIT: MINOR_REPO_LOG</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {minorProjects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col mechanical-panel p-6 bg-mechanical-dark/40 border-bumblebee-yellow/10 hover:border-bumblebee-yellow transition-all duration-300 group shadow-xl"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-10 h-10 border border-bumblebee-yellow/20 flex items-center justify-center group-hover:border-bumblebee-yellow transition-colors">
                <FolderGit2 className="text-bumblebee-yellow/40 group-hover:text-bumblebee-yellow transition-colors w-5 h-5" />
              </div>
              {proj.github && (
                <a 
                  href={proj.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 hover:bg-bumblebee-yellow hover:text-bumblebee-black transition-all rounded-sm border border-transparent hover:border-bumblebee-yellow"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-bumblebee-yellow transition-colors leading-tight">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-8 flex-grow leading-relaxed font-medium">{proj.description}</p>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-bumblebee-yellow/5">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono font-bold text-bumblebee-yellow/70 uppercase">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

