'use client';

import React, { useEffect, useRef } from 'react';

export default function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrubRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef?.current;
    const scrub = scrubRef?.current;
    if (!section || !scrub) return;

    const handleScroll = () => {
      const rect = section?.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      let percentage = (windowHeight - rect?.top) / (windowHeight + rect?.height * 0.5);
      percentage = Math.max(0, Math.min(1, percentage));
      const position = 100 - percentage * 100;
      scrub.style.backgroundPosition = `${position}% 0`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 px-6 md:px-10 bg-background border-t border-border relative overflow-hidden"
    >
      {/* Parallax background */}
      <div id="parallax-bg" aria-hidden="true" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-primary mb-8">
          Our Mission
        </p>

        <h2
          ref={scrubRef}
          className="font-display font-light leading-[1.1] tracking-tight scroll-scrub-text"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)', backgroundPosition: '100% 0' }}
        >
          We empower life-science graduates to develop the confidence, the mindset, and the hands-on writing skills required to succeed in the global medical writing and clinical research job market.
        </h2>

        <div className="mt-12 h-16 w-px bg-gradient-to-b from-primary/40 to-transparent mx-auto" />
      </div>
    </section>
  );
}