import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { MinorProjects } from './components/MinorProjects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  console.log('App Rendering...');
  return (
    <div style={{ background: '#000', color: '#fff', minHeight: '100vh', width: '100vw', overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <div id="hero">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="minor-projects">
          <MinorProjects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
