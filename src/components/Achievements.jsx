"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Zap } from "lucide-react";

const achievements = [
  {
    title: "KPIT Sparkle 2026 Finalist",
    highlight: "Top 16 / 18,114+ teams",
    role: "Team Lead",
    description: "Demonstrated strong problem-solving and system design skills in a highly competitive national innovation challenge.",
    icon: Trophy
  },
  {
    title: "CMRIT 24hr Hackathon",
    highlight: "AI Solution Builder",
    role: "Participant",
    description: "Built an AI-based solution under strict time constraints in a competitive environment.",
    icon: Zap
  },
  {
    title: "Tech Conference – BIT",
    highlight: "AI & Emerging Tech",
    role: "Delegate",
    description: "Explored advancements in AI, data science, and emerging engineering technologies alongside industry experts.",
    icon: Award
  }
];

export default function Achievements() {
  return (
    <section className="space-y-8 relative pb-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 border-b border-mechanical-border pb-4"
      >
        <Trophy className="text-mechanical-accentCyan w-6 h-6" />
        <h2 className="text-3xl font-mono tracking-wider uppercase text-white">Milestones & Achievements</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="mechanical-panel p-6 hover:glowing-edge flex flex-col group h-full"
          >
            <div className="mb-4 p-3 bg-mechanical-dark rounded-lg inline-block border border-mechanical-border group-hover:border-mechanical-accentCyan transition-colors self-start">
              <ach.icon className="w-6 h-6 text-mechanical-accent" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-mechanical-accentCyan transition-colors">{ach.title}</h3>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-mono px-2 py-1 bg-mechanical-border text-gray-300 rounded">{ach.highlight}</span>
              <span className="text-xs font-mono text-mechanical-accent">{ach.role}</span>
            </div>
            <p className="text-sm text-gray-400 mt-auto leading-relaxed">{ach.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
