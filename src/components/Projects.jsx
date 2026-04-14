"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Cpu, Variable, Target, FlaskConical, Github } from "lucide-react";

const mainProjects = [
  {
    id: "motion-planner",
    title: "Adaptive Motion Planner",
    type: "Digital Twin System",
    problem: "Real-time trajectory optimization lacking safety and robustness.",
    approach: "Simulation-driven system with sim-to-real validation.",
    tech: ["Python", "TensorFlow", "C++", "ROS"],
    outcome: "Enhanced safety in autonomous vehicle modeling.",
    github: "#"
  },
  {
    id: "orion",
    title: "ORION",
    type: "Multi-Modal AI Assistant",
    problem: "Disconnected user interactions lacking real-time memory.",
    approach: "Voice, text, and API-based context engine.",
    tech: ["Python", "NLP", "APIs"],
    outcome: "Personalized task execution and memory retention.",
    github: "https://github.com/Mr-Vicky-06/ORION_PAX"
  },
  {
    id: "unora-music",
    title: "UNORA_MUSIC – AI-Powered Media Platform",
    type: "Flutter Media App",
    problem: "Generic music creation and recommendation lacking advanced local intelligence.",
    approach: "Integrated local Mistral AI agent via Ollama for natural language control.",
    tech: ["Flutter", "Mistral AI", "Ollama", "Audio Processing"],
    outcome: "Personalized music recommendation and real-time audio processing.",
    github: "https://github.com/Mr-Vicky-06/UNORA_MUSIC"
  }
];

export default function Projects() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="space-y-12 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 border-b border-mechanical-border pb-4"
      >
        <Cpu className="text-mechanical-accentCyan w-6 h-6" />
        <h2 className="text-3xl font-mono tracking-wider uppercase text-white">System Deployments</h2>
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
      transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 20 }}
      className={`mechanical-panel cursor-pointer ${isActive ? 'glowing-edge border-mechanical-accentCyan' : 'hover:border-mechanical-accent'}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="p-6 md:p-8 flex items-center justify-between" onClick={onClick}>
        <div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm font-mono text-mechanical-accent uppercase">{project.type}</p>
        </div>
        <motion.div
          animate={{ rotate: isActive ? 90 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-mechanical-accentCyan p-2 border border-mechanical-border rounded-full"
        >
          <ChevronRight />
        </motion.div>
      </div>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-6 md:p-8 pt-0 border-t border-mechanical-border grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#0C1222]">
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <div className="flex items-center gap-2 text-mechanical-accentCyan mb-2">
                    <Target size={16} /> <h4 className="font-mono text-sm uppercase">Problem</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-mechanical-accent mb-2">
                    <FlaskConical size={16} /> <h4 className="font-mono text-sm uppercase">Approach</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.approach}</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
                className="space-y-4 border-l border-mechanical-border/50 pl-0 md:pl-8 flex flex-col justify-between"
              >
                <div>
                  <div>
                    <div className="flex items-center gap-2 text-green-400 mb-2">
                      <Variable size={16} /> <h4 className="font-mono text-sm uppercase">Outcome</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.outcome}</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-mono text-xs text-gray-500 uppercase mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 text-xs font-mono bg-[#1E293B] text-gray-300 rounded border border-mechanical-border">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-mechanical-accent hover:text-mechanical-accentCyan border border-mechanical-border hover:border-mechanical-accentCyan px-4 py-2 rounded-lg transition-all"
                    >
                      <Github size={16} /> View Source Code
                    </a>
                  )}
                </div>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
