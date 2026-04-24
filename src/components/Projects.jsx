"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Cpu, Variable, Target, FlaskConical, Github, Radio } from "lucide-react";

const mainProjects = [
  {
    id: "motion-planner",
    title: "Digital Twin Motion Planner",
    type: "Simulation-Driven Navigation",
    problem: "Navigating dynamic environments with trajectory optimization, sensor fusion, and real-time decision-making.",
    approach: "Designed a system focusing on sim-to-real validation, enabling adaptive motion planning with improved efficiency and robustness.",
    tech: ["Python", "TensorFlow", "C++", "ROS", "Unity/Isaac Sim"],
    outcome: "Achieved robust autonomous navigation with high-fidelity simulation feedback.",
    github: "https://github.com/Mr-Vicky-06/Digital_twin_auto"
  },
  {
    id: "orion",
    title: "ORION – Multi-Modal AI Assistant",
    type: "LLM Orchestration System",
    problem: "Developing a scalable AI assistant capable of multi-input workflows and real-time execution.",
    approach: "Leveraged large language model orchestration with a FastAPI backend. Incorporated contextual memory and modular architecture.",
    tech: ["Python", "NLP", "FastAPI", "Transformers"],
    outcome: "Improved response relevance and efficient handling of complex user tasks.",
    github: "https://github.com/Mr-Vicky-06/ORION_PAX"
  },
  {
    id: "unora-music",
    title: "UNORA – AI Media Platform",
    type: "Intelligent Interface",
    problem: "Generic media interaction lacking natural language control and personalized local intelligence.",
    approach: "Engineered a Flutter platform integrating local Mistral via Ollama for voice-driven interaction and audio processing.",
    tech: ["Flutter", "Mistral AI", "Ollama", "Audio Processing"],
    outcome: "Enhanced user experience through real-time audio control and AI-powered recommendations.",
    github: "https://github.com/Mr-Vicky-06/UNORA_MUSIC"
  }
];

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="space-y-12 relative py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 border-b border-soundwave-navy pb-6"
      >
        <div className="p-3 bg-soundwave-gold rounded-full transformer-glow shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          <Radio className="text-soundwave-navy w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Projects</h2>
          <p className="text-soundwave-gold font-mono text-sm tracking-widest leading-none mt-2">COMM_LINK: ACTIVE_NODES</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6">
        {mainProjects.map((project, index) => (
          <ProjectPanel 
            key={project.id}
            project={project}
            isActive={activeId === project.id}
            onClick={() => setActiveId(activeId === project.id ? null : project.id)}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectPanel({ project, isActive, onClick, index }) {
  return (
    <motion.div
      layout
      transition={{ duration: 0.6, type: "spring", stiffness: 120, damping: 20 }}
      className={`group relative overflow-hidden clip-mechanical bg-mechanical-dark border ${isActive ? 'border-soundwave-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]' : 'border-soundwave-navy/30 hover:border-soundwave-gold/60'} transition-all duration-500`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Soundwave Grid Texture */}
      <div className={`absolute inset-0 opacity-5 pointer-events-none tech-grid transition-opacity ${isActive ? 'opacity-20' : ''}`} />

      <div className="p-6 md:p-10 flex items-center justify-between cursor-pointer" onClick={onClick}>
        <div className="flex items-center gap-6">
          <div className={`hidden md:flex w-12 h-12 items-center justify-center border-2 ${isActive ? 'border-soundwave-gold bg-soundwave-gold text-soundwave-navy' : 'border-soundwave-navy text-soundwave-gold'} transition-all rounded`}>
            <span className="font-black font-mono">0{index + 1}</span>
          </div>
          <div>
            <h3 className={`text-xl md:text-3xl font-bold ${isActive ? 'text-soundwave-gold' : 'text-white'} transition-colors mb-1`}>{project.title}</h3>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <div key={i} className={`w-1 h-3 ${isActive ? 'bg-soundwave-gold' : 'bg-soundwave-navy/40'}`} />)}
              </div>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">{project.type}</p>
            </div>
          </div>
        </div>
        
        <motion.div
          animate={{ rotate: isActive ? 180 : 0, scale: isActive ? 1.2 : 1 }}
          className={`${isActive ? 'text-soundwave-gold' : 'text-soundwave-navy'} transition-colors`}
        >
          <ChevronRight size={32} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-soundwave-navy/20"
          >
            <div className="p-6 md:p-10 pt-4 grid grid-cols-1 md:grid-cols-2 gap-10 bg-soundwave-navy/5">
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-soundwave-gold/30">
                  <div className="absolute left-[-2px] top-0 w-[6px] h-[6px] bg-soundwave-gold" />
                  <h4 className="font-mono text-xs text-soundwave-gold uppercase mb-2 tracking-widest">Problem Objective</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div className="relative pl-6 border-l-2 border-soundwave-navy/30">
                  <h4 className="font-mono text-xs text-soundwave-navy uppercase mb-2 tracking-widest">Architectural Approach</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.approach}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <div className="p-4 bg-black/40 border border-soundwave-navy/20 mb-6">
                    <h4 className="font-mono text-[10px] text-gray-500 uppercase mb-3 px-2 border-b border-soundwave-navy/10 pb-2">Technical Core Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-[10px] font-mono bg-soundwave-navy/20 text-soundwave-gold rounded-sm border border-soundwave-gold/10 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-1 h-auto bg-green-500/50" />
                    <div>
                      <h4 className="font-mono text-xs text-green-400 uppercase mb-1 tracking-widest">Execution Outcome</h4>
                      <p className="text-gray-300 text-sm leading-relaxed italic">"{project.outcome}"</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/btn relative overflow-hidden flex items-center justify-center gap-3 px-6 py-3 bg-soundwave-gold text-soundwave-navy font-bold text-sm uppercase tracking-tighter hover:bg-white transition-all transform active:scale-95"
                    >
                      <Github size={18} />
                      Access Node Data
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

