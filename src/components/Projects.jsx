import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'Digital Twin Motion Planner',
    description: 'Designed a simulation-driven system for autonomous vehicles enabling real-time trajectory optimization and sim-to-real validation.',
    image: '/project_digital_twin_1775104776446.png',
    tags: ['Python', 'Simulation', 'Autonomous Systems']
  },
  {
    title: 'ORION AI Assistant',
    description: 'Developed an intelligent assistant supporting voice, text, and API-based automation with contextual memory for real-time task execution.',
    image: '/project_orion_1775104795411.png',
    tags: ['NLP', 'AI', 'Voice Assistant']
  },
  {
    title: 'Eco Driving System',
    description: 'Built a system to analyze driving patterns and estimate emissions to promote sustainable driving.',
    image: '/project_eco_1775104830964.png',
    tags: ['Data Science', 'Sustainability', 'Analytics']
  }
];

export const Projects = () => {
  return (
    <section className="section-padding container">
      <h2 className="title-lg text-gradient" style={{ textAlign: 'center', marginBottom: '64px' }}>Impact & Innovation</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              gap: '40px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ flex: 1, minWidth: '300px' }}>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>{project.title}</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.6 }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {project.tags.map((tag, idx) => (
                  <span key={idx} style={{ padding: '6px 12px', border: '1px solid var(--glass-border)', borderRadius: '24px', fontSize: '0.875rem' }}>{tag}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: 1.5, minWidth: '300px', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
