import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className="glass-morphism"
      style={{
        position: 'fixed',
        top: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'calc(100% - 48px)',
        maxWidth: '1200px',
        height: '64px',
        borderRadius: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
        zIndex: 1000,
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.5)' : 'none',
        transition: 'var(--transition-smooth)'
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>Vignesh</div>
      <div style={{ display: 'flex', gap: '32px' }}>
        <a href="#about" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}>About</a>
        <a href="#projects" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}>Projects</a>
        <a href="#minor-projects" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}>Specialized</a>
        <a href="#experience" style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}>Journey</a>
      </div>
    </motion.nav>
  );
};
