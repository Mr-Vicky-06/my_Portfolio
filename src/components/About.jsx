import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section className="section-padding container" style={{ textAlign: 'center', position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "url('/about_abstract_bg_1775104734039.png') no-repeat center center",
          backgroundSize: 'cover',
          borderRadius: '24px',
          padding: '80px 40px',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        }}
      >
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="title-lg text-gradient" style={{ marginBottom: '24px' }}>AI Engineering Focus</h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Aspiring AI and Data Science engineer with a strong focus on digital twin systems, autonomous motion planning, and generative AI applications. Finalist at KPIT Sparkle 2026. Experienced in rapid prototyping and building scalable AI-driven systems.
          </p>
        </div>
      </motion.div>
    </section>
  );
};
