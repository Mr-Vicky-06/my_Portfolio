"use client";

import { useEffect, useState } from "react";
// Deployment Sync: 2026-04-24T11:58:00
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import MinorProjects from "../components/MinorProjects";
import SystemBlocks from "../components/SystemBlocks";
import ExperienceTimer from "../components/ExperienceTimer";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";
import ContactForm from "../components/ContactForm";

import Education from "../components/Education";
import TechStack from "../components/TechStack";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-mechanical-dark text-foreground overflow-hidden selection:bg-mechanical-accentCyan selection:text-black relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 tech-grid opacity-20" />
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-24 flex flex-col gap-32">
        <Hero />
        <Education />
        <ExperienceTimer />
        <SystemBlocks />
        <Projects />
        <TechStack />
        <MinorProjects />
        <Certificates />
        <Achievements />
        <ContactForm />
      </div>
    </main>
  );
}
