"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, Download, ExternalLink } from "lucide-react";
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Mechanical fragments forming an abstract core
function CoreFragments({ assembled }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
      groupRef.current.rotation.z = Math.sin(time * 0.05) * 0.05;

      groupRef.current.children.forEach((child, i) => {
        if (!child.userData.initialPos) return;

        const targetPos = child.userData.initialPos;
        const explodedPos = child.userData.explodedPos;
        
        const target = assembled ? targetPos : explodedPos;
        child.position.lerp(target, 0.05);

        if (assembled) {
          child.position.y = targetPos.y + Math.sin(time * 1.5 + i) * 0.03;
        }
      });
    }
  });

  const parts = [];
  for (let i = 0; i < 25; i++) {
    const phi = Math.acos(-1 + (2 * i) / 25);
    const theta = Math.sqrt(25 * Math.PI) * phi;
    const r = 2.0;

    const x = r * Math.cos(theta) * Math.sin(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(phi);

    const initialPos = new THREE.Vector3(x, y, z);
    const explodedPos = initialPos.clone().multiplyScalar(4 + Math.random() * 3);

    parts.push(
      <mesh
        key={i}
        userData={{ initialPos, explodedPos }}
        position={explodedPos}
        castShadow
      >
        <boxGeometry args={[0.3, 0.2, 0.5]} />
        <meshStandardMaterial
          color={i % 4 === 0 ? "#D92121" : i % 4 === 1 ? "#0047AB" : "#4B5563"}
          metalness={0.9}
          roughness={0.1}
          emissive={i % 8 === 0 ? "#06B6D4" : "#000000"}
          emissiveIntensity={4}
        />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      <mesh userData={{ initialPos: new THREE.Vector3(0,0,0), explodedPos: new THREE.Vector3(0,0,0) }}>
        <sphereGeometry args={[1.0, 32, 32]} />
        <meshStandardMaterial color="#0A0F1C" metalness={1} roughness={0.1} />
      </mesh>
      {parts}
    </group>
  );
}

function ProfileHUD() {
  return (
    <div className="relative group perspective-[1000px]">
      {/* Mechanical frame */}
      <div className="absolute -inset-4 border-2 border-optimus-blue/30 clip-mechanical animate-pulse" />
      <div className="absolute -inset-2 border border-optimus-red/50 clip-mechanical" />
      
      {/* Scanning visor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-optimus-blue/50 z-20 animate-[scan_3s_linear_infinite] shadow-[0_0_15px_#0047AB]" />

      <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden clip-mechanical bg-mechanical-dark border-2 border-mechanical-border group-hover:border-optimus-red transition-all duration-500 shadow-optimus-glow">
        <img 
          src="/certificates/vignesh_profile.png" 
          alt="Vignesh Profile"
          className="w-full h-full object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-optimus-blue/40 to-transparent" />
        
        {/* HUD Elements */}
        <div className="absolute top-2 left-2 flex gap-1">
          <div className="w-1 h-3 bg-optimus-red animate-pulse" />
          <div className="w-1 h-3 bg-optimus-red/60" />
          <div className="w-1 h-3 bg-optimus-red/30" />
        </div>
        
        <div className="absolute bottom-4 right-4 text-[10px] font-mono text-optimus-blue flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity">
          <span>STATUS: ONLINE</span>
          <span>CORE: STABLE</span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [assembled, setAssembled] = useState(false);
  const [showResume, setShowResume] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAssembled(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const titleWords = ["Vignesh", "/", "AI", "Engineer"];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const childVariant = {
    visible: { opacity: 1, y: 0, rotateX: 0 },
    hidden: { opacity: 0, y: 40, rotateX: 90 },
  };

  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between gap-12 py-12">
      <div className="flex-1 z-10 space-y-8">
        <motion.div
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight text-white flex flex-wrap gap-x-4 gap-y-2 perspective-[1000px] leading-tight"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="whitespace-nowrap flex">
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  variants={childVariant}
                  className="inline-block"
                  style={{ transformOrigin: "bottom" }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-1 w-32 bg-gradient-to-r from-optimus-red to-optimus-blue origin-left"
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-xl leading-relaxed"
          >
            AI/ML engineering student specializing in building <span className="text-optimus-blue font-bold">real-time intelligent systems</span> and applied AI solutions. Experienced in end-to-end machine learning pipelines and multi-modal assistants.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button 
              onClick={() => setShowResume(true)}
              className="px-8 py-3 bg-optimus-red text-white font-bold tracking-widest uppercase flex items-center gap-3 hover:bg-white hover:text-optimus-red shadow-[0_0_20px_rgba(217,33,33,0.3)] transition-all transform active:scale-95"
            >
              <FileText size={20} /> View Resume
            </button>
            
            <div className="px-6 py-3 border border-white/10 text-gray-500 font-mono text-xs flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              SYSTEM_READY_V.06
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 w-full h-[60vh] md:h-[80vh] relative flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#D92121" />
            <directionalLight position={[-10, -10, -5]} intensity={1} color="#0047AB" />
            
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
              <CoreFragments assembled={assembled} />
            </Float>
            
            <Sparkles count={50} scale={10} size={1} color="#06B6D4" opacity={0.3} speed={0.2} />
          </Canvas>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 1, duration: 1, type: "spring" }}
          className="relative z-10"
        >
          <ProfileHUD />
        </motion.div>
      </div>
      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl h-full max-h-[90vh] bg-mechanical-dark border-2 border-optimus-blue/30 flex flex-col clip-mechanical"
            >
              {/* Header */}
              <div className="p-4 border-b border-optimus-blue/20 flex items-center justify-between bg-black/40">
                <div className="flex items-center gap-3">
                  <FileText className="text-optimus-blue" />
                  <span className="font-mono text-xs text-white uppercase tracking-widest">TACTICAL_RESUME_SYNC.pdf</span>
                </div>
                <div className="flex items-center gap-4">
                  <a 
                    href="/certificates/Resume.pdf" 
                    download
                    className="p-2 text-gray-400 hover:text-optimus-blue transition-colors"
                    title="Download Protocol"
                  >
                    <Download size={20} />
                  </a>
                  <button 
                    onClick={() => setShowResume(false)}
                    className="p-2 text-gray-400 hover:text-optimus-red transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>

              {/* PDF Container */}
              <div className="flex-1 overflow-hidden bg-[#1a1a1a]">
                <iframe 
                  src="/certificates/Resume.pdf#toolbar=0" 
                  className="w-full h-full border-none"
                  title="Resume Viewer"
                />
              </div>

              <div className="p-4 bg-black/40 border-t border-optimus-blue/20 flex justify-between items-center text-[10px] font-mono text-gray-500">
                <span>INTEL_ENCRYPTION: SHIELDED</span>
                <span>SYSTEM_OVERRIDE_ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
