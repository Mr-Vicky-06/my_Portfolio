import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="section-padding container" style={{ borderTop: '1px solid var(--glass-border)', marginTop: '80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', marginBottom: '64px' }}>
        <div>
          <h3 className="title-lg text-gradient" style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Vignesh</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>AI Systems & Automation Engineer</p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Digital Twins · Autonomous Systems · Generative AI</p>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <Phone size={18} /> +91-9092759979
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <Mail size={18} /> mageshvignesh2006@gmail.com
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)' }}>
              <MapPin size={18} /> Chennai, India
            </li>
          </ul>
        </div>
        <div>
          <h4 style={{ fontSize: '1rem', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="https://github.com/Mr-Vicky-06/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'var(--transition-smooth)' }} title="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/m-vignesh-677915295" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'var(--transition-smooth)' }} title="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://x.com/VigneshM882457" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', transition: 'var(--transition-smooth)' }} title="X">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
        © {new Date().getFullYear()} Vignesh. Built with Passion & AI.
      </div>
    </footer>
  );
};
