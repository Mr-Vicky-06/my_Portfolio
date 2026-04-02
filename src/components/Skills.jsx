import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: 'AI/ML', items: ['TensorFlow', 'NLP', 'Deep Learning', 'Reinforcement Learning', 'Neural Networks'] },
  { category: 'Programming', items: ['Python', 'C++', 'Java', 'Pandas', 'NumPy'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Power BI', 'Colab', 'Vite', 'React'] }
];

export const Skills = () => {
  return (
    <section className="section-padding container">
      <h2 className="title-lg text-gradient" style={{ textAlign: 'center', marginBottom: '64px' }}>Skills & Expertise</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>{skill.category}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {skill.items.map((item, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
