"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { OrbitControls, Environment, Float, Sparkles } from "@react-three/drei";
import * as THREE from "three";

// Mechanical fragments forming an abstract core
function CoreFragments({ assembled }) {
  const groupRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.2;
      groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.1;

      groupRef.current.children.forEach((child, i) => {
        if (!child.userData.initialPos) return;

        const targetPos = child.userData.initialPos;
        const explodedPos = child.userData.explodedPos;
        
        // Interpolate between exploded and assembled state
        const target = assembled ? targetPos : explodedPos;
        child.position.lerp(target, 0.05);

        if (assembled) {
          // slight breathing effect
          child.position.y = targetPos.y + Math.sin(time * 2 + i) * 0.05;
        }
      });
    }
  });

  const parts = [];
  for (let i = 0; i < 20; i++) {
    const phi = Math.acos(-1 + (2 * i) / 20);
    const theta = Math.sqrt(20 * Math.PI) * phi;

    const r = 1.5;
    const x = r * Math.cos(theta) * Math.sin(phi);
    const y = r * Math.sin(theta) * Math.sin(phi);
    const z = r * Math.cos(phi);

    const initialPos = new THREE.Vector3(x, y, z);
    const explodedPos = initialPos.clone().multiplyScalar(3 + Math.random() * 2);

    parts.push(
      <mesh
        key={i}
        userData={{ initialPos, explodedPos }}
        position={explodedPos}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[0.4, 0.3, 0.6]} />
        <meshStandardMaterial
          color={i % 3 === 0 ? "#06B6D4" : "#1E293B"}
          metalness={0.8}
          roughness={0.2}
          envMapIntensity={2}
        />
      </mesh>
    );
  }

  return (
    <group ref={groupRef}>
      {/* Central orb */}
      <mesh userData={{ initialPos: new THREE.Vector3(0,0,0), explodedPos: new THREE.Vector3(0,0,0) }}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#0A0F1C" metalness={1} roughness={0.1} />
      </mesh>
      {parts}
    </group>
  );
}

export default function Hero() {
  const [assembled, setAssembled] = useState(false);
  
  useEffect(() => {
    // Trigger assembly after short delay corresponding to title animation
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
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 z-10 space-y-6">
        <motion.div
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white flex flex-wrap gap-x-4 gap-y-2 perspective-[1000px] leading-tight"
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

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-xl text-mechanical-accent max-w-xl border-l-2 border-mechanical-accent pl-4 font-mono uppercase tracking-widest"
        >
          Building intelligent, scalable digital systems
        </motion.p>
      </div>

      <div className="flex-1 w-full h-[50vh] md:h-[80vh] relative z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#06B6D4" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#3B82F6" />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <CoreFragments assembled={assembled} />
          </Float>
          
          <Sparkles count={100} scale={10} size={2} color="#06B6D4" opacity={0.2} speed={0.4} />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
