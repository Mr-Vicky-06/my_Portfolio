import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Award, BookOpen, GraduationCap, BriefcaseMedical } from 'lucide-react';

const certificationData = [
  {
    category: 'Internships',
    icon: <BriefcaseMedical size={24} />,
    items: [
      { id: 1, name: 'Infosys Springboard Internship', image: '/certificates/cert_1.png' },
      { id: 2, name: 'AICTE Shell Edunet Internship', image: '/certificates/cert_2.png' }
    ]
  },
  {
    category: 'NPTEL',
    icon: <BookOpen size={24} />,
    items: [
      { id: 3, name: 'Python for Data Science', image: '/certificates/cert_3.png' },
      { id: 4, name: 'Computer Networks', image: '/certificates/cert_4.png' },
      { id: 5, name: 'Cloud Computing', image: '/certificates/cert_5.png' },
      { id: 6, name: 'Soft Skills', image: '/certificates/cert_6.png' }
    ]
  },
  {
    category: 'Oracle',
    icon: <Award size={24} />,
    items: [
      { id: 7, name: 'AI Foundations', image: '/certificates/cert_7.png' },
      { id: 8, name: 'Generative AI', image: '/certificates/cert_8.png' },
      { id: 9, name: 'Data Science', image: '/certificates/cert_9.png' },
      { id: 10, name: 'OCI Certification', image: '/certificates/cert_10.png' }
    ]
  },
  {
    category: 'Infosys Springboard',
    icon: <GraduationCap size={24} />,
    items: [
      { id: 11, name: 'Artificial Intelligence', image: '/certificates/cert_11.png' },
      { id: 12, name: 'Machine Learning', image: '/certificates/cert_12.png' },
      { id: 13, name: 'Deep Learning', image: '/certificates/cert_13.png' },
      { id: 14, name: 'Reinforcement Learning', image: '/certificates/cert_14.png' },
      { id: 15, name: 'Neural Networks', image: '/certificates/cert_15.png' }
    ]
  },
  {
    category: 'Achievements',
    icon: <Award size={24} />,
    items: [
      { id: 16, name: 'CMRIT Hackathon', image: '/certificates/cert_16.png' },
      { id: 17, name: 'BIT Tech Conference', image: '/certificates/cert_17.png' },
      { id: 18, name: 'Innovation Challenge', image: '/certificates/cert_18.png' },
      { id: 19, name: 'KPIT Sparkle 2026 Finalist', image: '/certificates/kpit_sparkle_2026.jpg' }
    ]
  }
];

export const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="section-padding container">
      <h2 className="title-lg text-gradient" style={{ textAlign: 'center', marginBottom: '64px' }}>Certifications & Honors</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {certificationData.map((section, index) => (
          <div key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ color: 'var(--accent-color)' }}>{section.icon}</div>
              <h3 style={{ fontSize: '2rem', fontWeight: 600 }}>{section.category}</h3>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', 
              gap: '24px' 
            }}>
              {section.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedCert(item)}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--glass-border)',
                    cursor: 'pointer',
                    position: 'relative',
                    aspectRatio: '4/3'
                  }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      opacity: 0.8,
                      transition: 'var(--transition-smooth)'
                    }} 
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Certificate'; }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '20px',
                    background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff' }}>{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(20px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
              zIndex: 3000
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                style={{ 
                  position: 'absolute', 
                  top: '-40px', 
                  right: 1, 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer', 
                  color: '#fff' 
                }}
              >
                <X size={32} />
              </button>
              
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name} 
                style={{ width: '100%', height: 'auto', maxHeight: '80vh', objectFit: 'contain', borderRadius: '16px' }} 
              />
              <div style={{ textAlign: 'center', marginTop: '24px' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: '#fff' }}>{selectedCert.name}</h3>
                <a href={selectedCert.image} target="_blank" download style={{ color: 'var(--accent-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <ExternalLink size={18} /> Download High Quality
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
