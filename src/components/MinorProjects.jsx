"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

// The Chess_AI is added as requested, alongside other minor projects from the resume
const minorProjects = [
  {
    title: "Chess AI Engine",
    description: "An artificial intelligence system utilizing evaluation heuristics or ML techniques to optimally play chess.",
    github: "https://github.com/Mr-Vicky-06/Chess_AI",
    tags: ["Python", "AI", "Algorithms"]
  },
  {
    title: "JARVIS 0.7 Assistant",
    description: "Python-based voice assistant integrating multiple APIs for real-time automation and querying.",
    github: "https://github.com/Mr-Vicky-06/JARVIS0.7",
    tags: ["Python", "Voice APIs"]
  },
  {
    title: "ATMOSPHEREX",
    description: "Personalized AI travel platform with optimized route planning.",
    github: "#",
    tags: ["Machine Learning", "Routing"]
  },
  {
    title: "Eco-Driving Tracker",
    description: "Driving pattern analyzer to estimate emissions and promote sustainable habits.",
    github: "#",
    tags: ["Data Analytics", "IoT simulation"]
  },
  {
    title: "Intelligent Skin Diagnosis",
    description: "Deep learning system for skin disease detection using explainable AI to ensure interpretable predictions.",
    github: "https://github.com/Mr-Vicky-06/Skin_Disease",
    tags: ["TensorFlow", "XAI", "Computer Vision"]
  },
  {
    title: "Flowchart Argo",
    description: "Algorithm-based flowchart mapping and generation framework.",
    github: "https://github.com/Mr-Vicky-06/floatChar_argo",
    tags: ["Logic Mapping", "Flowchart", "Algo"]
  },
  {
    title: "Corvette E-Ray Product UI",
    description: "Sleek, high-performance product website mockups specifically targeting automotive UX design.",
    github: "https://github.com/Mr-Vicky-06/Chevrolet_Corvette_E-Ray",
    tags: ["Web Design", "UI/UX", "Product"]
  }
];

export default function MinorProjects() {
  return (
    <section className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        <FolderGit2 className="text-mechanical-accent w-6 h-6" />
        <h2 className="text-2xl font-mono tracking-wider uppercase text-gray-300">Subsidiary Modules</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {minorProjects.map((proj, idx) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="mechanical-panel p-6 group transition-all duration-300 hover:glowing-edge"
          >
            <div className="flex justify-between items-start mb-4">
              <FolderGit2 className="text-mechanical-border group-hover:text-mechanical-accentCyan transition-colors" />
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">{proj.title}</h3>
            <p className="text-sm text-gray-400 mb-6 flex-grow">{proj.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {proj.tags.map(tag => (
                <span key={tag} className="text-[10px] font-mono text-mechanical-accent bg-mechanical-accent/10 px-2 py-1 rounded">
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
