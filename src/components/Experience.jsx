import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    type: 'Experience',
    title: 'Infosys Springboard Internship',
    date: 'Aug 2025 – Oct 2025',
    description: 'Developed an AI-based shipment prediction model improving logistics efficiency.'
  },
  {
    type: 'Experience',
    title: 'AICTE Shell Edunet Internship',
    date: 'Jun 2025 – Jul 2025',
    description: 'Worked on AI and data analytics solutions focused on sustainability.'
  },
  {
    type: 'Achievement',
    title: 'KPIT Sparkle 2026 Finalist',
    date: 'Top 16 / 18,114+ Teams',
    description: 'Finalist as Team Lead, demonstrating strong problem-solving and system design skills.'
  }
];

export const Experience = () => {
  return (
    <section className="section-padding container">
      <h2 className="title-lg text-gradient" style={{ textAlign: 'center', marginBottom: '64px' }}>Journey & Milestones</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            style={{
              padding: '40px',
              borderRadius: '24px',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{ position: 'absolute', top: '16px', right: '16px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--accent-color)', border: '1px solid var(--accent-color)', padding: '4px 8px', borderRadius: '4px' }}>
              {item.type}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ color: 'var(--accent-color)', fontWeight: 500, fontSize: '0.875rem', marginBottom: '16px' }}>{item.date}</p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
