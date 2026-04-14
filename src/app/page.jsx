"use client";

import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import MinorProjects from "../components/MinorProjects";
import SystemBlocks from "../components/SystemBlocks";
import ExperienceTimer from "../components/ExperienceTimer";
import Achievements from "../components/Achievements";
import Certificates from "../components/Certificates";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-mechanical-dark text-foreground overflow-hidden selection:bg-mechanical-accentCyan selection:text-black relative">
      {/* Background ambient light and grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f61a_1px,transparent_1px),linear-gradient(to_bottom,#3b82f61a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[60vw] h-[60vw] bg-cyan-900/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-24 flex flex-col gap-32">
        <Hero />
        <SystemBlocks />
        <Projects />
        <MinorProjects />
        <Achievements />
        <ExperienceTimer />
        <Certificates />
        <ContactForm />
      </div>
    </main>
  );
}
