'use client';
import Skills from '@/components/Skills';

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <section className="relative z-10 py-16 bg-transparent">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">My Skills</h1>
          <Skills />
        </div>
      </section>
    </div>
  );
}