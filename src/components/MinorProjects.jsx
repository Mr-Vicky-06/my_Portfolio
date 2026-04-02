import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code, Layers, MessageSquare, Music, Map, ShieldCheck, Layout } from 'lucide-react';

const minorProjects = [
  {
    title: 'GenAI Music App',
    shortDesc: 'Advanced generative AI for music creation and mood-based recommendations.',
    fullDesc: 'Built an advanced generative AI system for music creation, mood-based recommendations, and personalized content generation using deep learning models specialized in audio processing.',
    icon: <Music size={32} />,
    color: '#0071e3',
    tags: ['GenAI', 'Python', 'Audio Processing']
  },
  {
    title: 'JARVIS AI Assistant',
    shortDesc: 'Python-based voice assistant with real-time response and automation.',
    fullDesc: 'Created an intelligent voice assistant integrating various APIs for real-time information retrieval, home automation, and task execution using sophisticated NLP techniques.',
    icon: <MessageSquare size={32} />,
    color: '#ff3b30',
    tags: ['Python', 'NLP', 'APIs']
  },
  {
    title: 'ATMOSPHEREX',
    shortDesc: 'AI platform for personalized travel recommendations and route planning.',
    fullDesc: 'Developed a comprehensive system for personalized travel recommendations and optimized route planning, incorporating weather data and user preferences for a better travel experience.',
    icon: <Map size={32} />,
    color: '#34c759',
    tags: ['React', 'Data Science', 'TravelTech']
  },
  {
    title: 'Intelligent Skin Diagnosis',
    shortDesc: 'Deep learning system for skin disease detection with XAI.',
    fullDesc: 'Developed a deep learning-based system for skin disease detection with explainable AI (XAI) techniques to provide transparent and interpretable predictions for medical use cases.',
    icon: <ShieldCheck size={32} />,
    color: '#5856d6',
    tags: ['Deep Learning', 'XAI', 'Healthcare AI']
  },
  {
    title: 'Product Website Development',
    shortDesc: 'UI/UX focused responsive product websites with modern workflows.',
    fullDesc: 'Designed and developed responsive product websites with modern UI/UX principles, smooth interactions, and optimized performance using rapid prototyping workflows and modern CSS techniques.',
    icon: <Layout size={32} />,
    color: '#af52de',
    tags: ['UI/UX', 'React', 'Rapid Prototyping']
  }
];

export const MinorProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section-padding container">
      <h2 className="title-lg text-gradient" style={{ textAlign: 'center', marginBottom: '64px' }}>Specialized Projects</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
        {minorProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
            onClick={() => setSelectedProject(project)}
            style={{
              padding: '32px',
              borderRadius: '24px',
              background: 'var(--card-bg)',
              border: '1px solid var(--glass-border)',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              transition: 'var(--transition-smooth)'
            }}
          >
            <div style={{ color: project.color }}>{project.icon}</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{project.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.shortDesc}</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {project.tags.slice(0, 2).map((tag, idx) => (
                <span key={idx} style={{ fontSize: '0.75rem', padding: '4px 8px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              zIndex: 2000
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '600px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--glass-border)',
                borderRadius: '32px',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <X size={20} />
              </button>
              
              <div style={{ color: selectedProject.color, marginBottom: '24px' }}>{selectedProject.icon}</div>
              <h2 className="title-lg" style={{ marginBottom: '24px', fontSize: '2.5rem' }}>{selectedProject.title}</h2>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '32px' }}>{selectedProject.fullDesc}</p>
              
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} style={{ padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', fontSize: '0.875rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="#" style={{ padding: '12px 24px', background: selectedProject.color, borderRadius: '24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ExternalLink size={18} /> View Case Study
                </a>
                <a href="#" style={{ padding: '12px 24px', border: '1px solid var(--glass-border)', borderRadius: '24px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)' }}>
                  <Code size={18} /> Source Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
