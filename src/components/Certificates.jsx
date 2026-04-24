"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { X, ExternalLink, ShieldCheck, Maximize2, Zap } from "lucide-react";

const certData = [
  {
    id: "infosys",
    name: "Infosys Springboard",
    symbol: "INF",
    images: ["/certificates/info_1.png", "/certificates/info_2.png", "/certificates/info_3.png", "/certificates/info_4.png", "/certificates/info_5.png"],
    type: "collection"
  },
  {
    id: "oracle",
    name: "Oracle Academy",
    symbol: "ORA",
    images: ["/certificates/ora_1.png", "/certificates/ora_2.png", "/certificates/ora_3.png", "/certificates/ora_4.png"],
    type: "collection"
  },
  {
    id: "nptel",
    name: "NPTEL",
    symbol: "NPT",
    images: ["/certificates/nptel_1.png", "/certificates/nptel_2.png", "/certificates/nptel_3.png", "/certificates/nptel_4.png"],
    type: "collection"
  },
  {
    id: "internship",
    name: "Internships",
    symbol: "INT",
    images: ["/certificates/intern_1.png", "/certificates/intern_2.png"],
    type: "collection"
  },
  {
    id: "competitions",
    name: "Competitions",
    symbol: "CMP",
    images: ["/certificates/vels.png", "/certificates/cmrit.png", "/certificates/kpit_sparkle_2026.jpg"],
    type: "collection"
  },
  {
    id: "qualcomm",
    name: "Qualcomm Academy",
    symbol: "QAC",
    links: [
      { title: "Technical Foundations", url: "https://academy.qualcomm.com/course-catalog/Program-Portal-AI-Upskilling-Certificate-Technical-Foundations" },
      { title: "Model to App", url: "https://academy.qualcomm.com/course-catalog/Program-Portal-AI-Upskilling-Certificate-Development-from-Model-to-App" }
    ],
    type: "links"
  }
];

export default function Certificates() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);

  const handleEsc = useCallback((event) => {
    if (event.key === "Escape") {
      if (expandedImage) {
        setExpandedImage(null);
      } else {
        setSelectedGroup(null);
      }
    }
  }, [expandedImage]);

  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [handleEsc]);

  return (
    <section className="space-y-12 relative py-10">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-6"
      >
        <div className="p-3 bg-bumblebee-yellow rounded-lg transformer-glow">
          <ShieldCheck className="text-bumblebee-black w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold tracking-tighter uppercase text-white">Validation Modules</h2>
          <p className="text-bumblebee-yellow/60 font-mono text-sm tracking-widest">SUB-SYSTEM: VERIFIED_CREDENTIALS</p>
        </div>
      </motion.div>

      {/* Symbol Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {certData.map((group) => (
          <motion.div
            key={group.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -10 }}
            className="group cursor-pointer"
            onClick={() => setSelectedGroup(group)}
          >
            <div className="mechanical-panel bg-mechanical-dark border-mechanical-border group-hover:border-bumblebee-yellow p-8 flex flex-col items-center gap-4 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-1 bg-bumblebee-yellow/10 border-b border-l border-mechanical-border">
                <Zap className="w-3 h-3 text-bumblebee-yellow" />
              </div>
              <div className="text-4xl font-black text-bumblebee-yellow/20 group-hover:text-bumblebee-yellow transition-colors duration-500 font-mono tracking-tighter">
                {group.symbol}
              </div>
              <span className="text-xs font-mono text-gray-500 group-hover:text-white uppercase text-center tracking-widest leading-tight">
                {group.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Collection Overlay */}
      <AnimatePresence>
        {selectedGroup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-mechanical-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="w-full max-w-6xl h-full max-h-[85vh] mechanical-panel border-bumblebee-yellow/30 bg-mechanical-dark/50 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-6 border-b border-mechanical-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-bumblebee-yellow flex items-center justify-center rounded clip-hexagon">
                    <span className="text-bumblebee-black font-black font-mono">{selectedGroup.symbol[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase">{selectedGroup.name}</h3>
                    <p className="text-xs text-bumblebee-yellow font-mono">FILE_COUNT: {selectedGroup.images?.length || selectedGroup.links?.length}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedGroup(null)}
                  className="p-2 hover:bg-bumblebee-yellow hover:text-bumblebee-black transition-colors rounded"
                >
                  <X />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                {selectedGroup.type === "collection" ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {selectedGroup.images.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.02 }}
                        className="relative group aspect-video cursor-zoom-in"
                        onClick={() => setExpandedImage(img)}
                      >
                        <div className="absolute inset-0 border border-bumblebee-yellow/20 group-hover:border-bumblebee-yellow transition-all z-10 pointer-events-none" />
                        <img src={img} alt="Certificate" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" />
                        <div className="absolute top-2 right-2 bg-mechanical-dark/80 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 className="w-4 h-4 text-bumblebee-yellow" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
                    {selectedGroup.links.map((link, idx) => (
                      <a 
                        key={idx} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-8 mechanical-panel bg-yellow-500/5 hover:bg-yellow-500/10 border-bumblebee-yellow/10 hover:border-bumblebee-yellow transition-all flex flex-col gap-4 group"
                      >
                        <div className="flex justify-between items-start">
                          <Zap className="text-bumblebee-yellow" />
                          <ExternalLink className="w-5 h-5 text-bumblebee-yellow opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <h4 className="text-2xl font-bold text-white group-hover:text-bumblebee-yellow transition-colors leading-tight">
                          {link.title}
                        </h4>
                        <span className="text-xs font-mono text-gray-500">QUALCOMM_ACADEMY_SOURCE</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setExpandedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={expandedImage}
              className="max-w-full max-h-full shadow-2xl"
            />
            <div className="absolute top-6 right-6 flex items-center gap-4">
              <span className="text-xs font-mono text-white bg-black p-2 border border-white/20">Press ESC to exit scan</span>
              <button 
                onClick={() => setExpandedImage(null)}
                className="p-2 bg-white text-black rounded"
              >
                <X />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

