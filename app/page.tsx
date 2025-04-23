'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import AnimatedBackground from '@/components/AnimatedBackground';




export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      {/* Uncomment if GalaxyScene is needed instead of AnimatedBackground */}
      {/* <GalaxyScene /> */}
    </div>
  );
}