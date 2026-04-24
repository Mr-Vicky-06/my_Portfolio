"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Zap, Anchor } from "lucide-react";

const achievements = [
  {
    title: "KPIT Sparkle 2026 Finalist",
    highlight: "Top 16 / 18,114+ teams",
    role: "Project Lead",
    description: "Led the development of a Digital Twin-based motion planning system integrating simulation-driven optimization and real-time decision-making for dynamic environments.",
    icon: Trophy,
    image: "/certificates/kpit_sparkle_2026.jpg",
    accent: "text-megatron-red"
  },
  {
    title: "CMRIT 24hr Hackathon",
    highlight: "Sustainability Focus",
    role: "AI Lead",
    description: "Designed and developed an AI-driven eco-driving and emission estimation system under real-time constraints, focusing on efficiency and sustainability.",
    icon: Zap,
    image: "/certificates/intern_1.png",
    accent: "text-megatron-purple"
  },
  {
    title: "BIT Paper Presentation",
    highlight: "Technical Honor",
    role: "Speaker",
    description: "Presented technical insights on AI-driven intelligent systems and emerging architectures, demonstrating applied understanding of modern AI paradigms.",
    icon: Award,
    image: "/certificates/bannari.png",
    accent: "text-megatron-purple"
  }
];

export default function Achievements() {
  return (
    <section className="space-y-12 relative py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6 border-b border-megatron-gunmetal pb-6"
      >
        <div className="p-3 bg-megatron-purple transformer-glow shadow-megatron-glow">
          <Trophy className="text-white w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Achievements</h2>
          <p className="text-megatron-purple font-mono text-sm tracking-widest leading-none mt-2">UNIT: ACHIEVEMENTS_LOG</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((ach, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="group relative flex flex-col h-full bg-mechanical-dark/40 border border-megatron-gunmetal hover:border-megatron-purple transition-all duration-500 overflow-hidden shadow-2xl"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none tech-grid" />
            
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden bg-black/40">
              <img 
                src={ach.image} 
                alt={ach.title} 
                className="w-full h-full object-contain transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mechanical-dark/60 to-transparent" />
              <div className="absolute top-4 left-4 p-2 bg-mechanical-dark/80 border border-megatron-gunmetal group-hover:border-megatron-purple transition-colors">
                <ach.icon className={`w-5 h-5 ${ach.accent}`} />
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col flex-1 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-megatron-purple/20 text-megatron-purple border border-megatron-purple/30">
                  {ach.role}
                </span>
                <span className="text-[10px] font-mono text-gray-500 uppercase">IDENTIFIED</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-megatron-purple transition-colors">
                {ach.title}
              </h3>
              
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                {ach.description}
              </p>

              <div className="mt-auto pt-4 border-t border-megatron-gunmetal/30 flex items-center justify-between">
                <span className="text-xs font-mono text-megatron-purple tracking-widest font-bold">
                  {ach.highlight}
                </span>
                <div className="flex gap-1">
                  <div className="w-1 h-1 bg-megatron-red" />
                  <div className="w-1 h-3 bg-megatron-purple animate-pulse" />
                </div>
              </div>
            </div>
            
            {/* Side Accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-megatron-gunmetal group-hover:bg-megatron-purple transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

