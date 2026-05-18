'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const sectors = [
  {
    title: 'Pharmaceutical Companies',
    desc: 'Regulatory affairs, clinical operations, and medical writing teams at pharma companies ranging from generics to innovators.',
    examples: 'Sun Pharma, Cipla, Dr. Reddy\'s, AstraZeneca India, Pfizer, Novartis',
    icon: 'BuildingOffice2Icon',
    count: '60%',
    countLabel: 'of medical writers work in pharma',
  },
  {
    title: 'Contract Research Organisations',
    desc: 'CROs are the largest employers of medical writers globally, offering exposure to diverse therapeutic areas and clients.',
    examples: 'IQVIA, Parexel, Syneos, PPD, Covance, Cognizant Life Sciences',
    icon: 'GlobeAltIcon',
    count: '#1',
    countLabel: 'employer category globally',
  },
  {
    title: 'Medical Device Companies',
    desc: 'Module 2 training prepares you specifically for regulatory writing roles at Class II and Class III device companies.',
    examples: 'Medtronic, Abbott, Becton Dickinson, Stryker, Siemens Healthineers',
    icon: 'CpuChipIcon',
    count: '35%',
    countLabel: 'faster growing than pharma writing',
  },
  {
    title: 'ITES-Healthcare & Publishing',
    desc: 'Medical communications agencies, scientific publishing firms, and healthcare IT companies all hire trained medical writers.',
    examples: 'Indegene, Intas Biopharmaceuticals, Cactus Communications, Editage',
    icon: 'ComputerDesktopIcon',
    count: '2x',
    countLabel: 'salary premium for trained writers',
  },
];

const outcomes = [
  { value: '120h', label: 'Structured Training' },
  { value: '10+', label: 'Document Types Mastered' },
  { value: '4', label: 'Industry Sectors' },
  { value: '100%', label: 'Hands-on Writing' },
];

export default function CareerOutcomesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('active');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="careers" ref={sectionRef} className="py-20 px-6 md:px-10 max-w-7xl mx-auto border-t border-border">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6 reveal">
        <div className="space-y-3">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-primary">
            05 / Career Outcomes
          </p>
          <h2 className="font-display font-light text-foreground leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Companies that hire<br className="hidden md:block" /> medical writers.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          A trained medical writer is sought across pharma, devices, CROs, and healthcare IT — globally.
        </p>
      </div>

      {/* Outcome stats bar */}
      

      {/* Sector cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 spotlight-group">
        {sectors.map((sector, i) => (
          <div
            key={sector.title}
            className={`spotlight-card rounded-2xl border border-border p-8 hover:border-primary/30 transition-all duration-300 group reveal ${
              i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : i === 2 ? 'delay-300' : 'delay-400'
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Icon name={sector.icon as 'BuildingOffice2Icon'} size={22} className="text-primary" />
              </div>
              <div className="text-right">
                <p className="font-display font-light text-primary text-2xl">{sector.count}</p>
                <p className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground max-w-[120px] leading-tight">{sector.countLabel}</p>
              </div>
            </div>
            <h3 className="text-lg font-display font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
              {sector.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{sector.desc}</p>
            <p className="text-[11px] font-mono text-primary/60 leading-relaxed">{sector.examples}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 text-center reveal delay-300">
        <a
          href="#register"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-accent transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
        >
          <Icon name="ArrowRightIcon" size={16} className="text-white" />
          Register Your Interest
        </a>
      </div>
    </section>
  );
}