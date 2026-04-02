import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedObject = () => {
  const mesh = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.cos(t / 4) / 2;
    mesh.current.rotation.y = Math.sin(t / 4) / 2;
    mesh.current.rotation.z = Math.sin(t / 4) / 2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={mesh} args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#0071e3"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export const Hero = () => {
  return (
    <section className="section-padding container" style={{ minHeight: '100svh', display: 'flex', alignItems: 'center', position: 'relative' }}>
      <div className="hero-content">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
           style={{
             width: 'clamp(180px, 20vw, 220px)',
             height: 'clamp(180px, 20vw, 220px)',
             borderRadius: '50%',
             overflow: 'hidden',
             border: '4px solid var(--glass-border)',
             boxShadow: '0 0 40px rgba(0, 113, 227, 0.2)',
             flexShrink: 0
           }}
        >
          <img 
            src="/certificates/vignesh_profile.png" 
            alt="Vignesh" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }}
            onError={(e) => { e.target.parentElement.style.display = 'none'; }}
          />
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: 'var(--accent-color)', fontWeight: 500, marginBottom: '16px' }}
          >
            AI Systems & Automation Engineer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="title-xl text-gradient"
          >
            Vignesh
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', maxWidth: '600px' }}
          >
            Digital Twins · Autonomous Systems · Generative AI
          </motion.p>
        </div>
      </div>
      <div style={{ position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)', width: '600px', height: '600px', opacity: 0.8 }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} color="#0071e3" intensity={2} />
          <Suspense fallback={null}>
            <AnimatedObject />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};
