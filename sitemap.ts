'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

const domains = [
  {
    id: 'preclinical',
    number: '01',
    title: 'Preclinical Writing',
    desc: 'Study reports, pharmacology summaries, toxicology write-ups — the foundation of the drug development dossier.',
    span: 'col-span-1 md:col-span-1 row-span-2',
    tall: true,
    icon: 'BeakerIcon',
    bg: 'bg-primary',
    textColor: 'text-white',
    subColor: 'text-white/70',
    numColor: 'text-white/30',
  },
  {
    id: 'clinical',
    number: '02',
    title: 'Clinical Trial Writing',
    desc: 'Protocols, Clinical Study Reports (CSR), Informed Consent Forms (ICF), Investigator Brochures (IB).',
    span: 'col-span-1 md:col-span-2 row-span-1',
    tall: false,
    icon: 'ClipboardDocumentListIcon',
    bg: 'bg-card',
    textColor: 'text-foreground',
    subColor: 'text-muted-foreground',
    numColor: 'text-border',
  },
  {
    id: 'regulatory',
    number: '03',
    title: 'Regulatory Submissions',
    desc: 'CTD/eCTD modules, NDA/BLA/MAA documents, Module 2 summaries and overviews.',
    span: 'col-span-1 md:col-span-1 row-span-1',
    tall: false,
    icon: 'DocumentCheckIcon',
    bg: 'bg-secondary',
    textColor: 'text-foreground',
    subColor: 'text-muted-foreground',
    numColor: 'text-primary/20',
  },
  {
    id: 'safety',
    number: '04',
    title: 'Safety & Pharmacovigilance',
    desc: 'Individual Case Safety Reports (ICSRs), PSURs, Risk Management Plans.',
    span: 'col-span-1 md:col-span-1 row-span-1',
    tall: false,
    icon: 'ShieldCheckIcon',
    bg: 'bg-card',
    textColor: 'text-foreground',
    subColor: 'text-muted-foreground',
    numColor: 'text-border',
  },
  {
    id: 'publications',
    number: '05',
    title: 'Scientific Publications',
    desc: 'Journal manuscripts, poster abstracts, conference presentations following ICMJE guidelines.',
    span: 'col-span-1 md:col-span-2 row-span-1',
    tall: false,
    icon: 'NewspaperIcon',
    bg: 'bg-muted',
    textColor: 'text-foreground',
    subColor: 'text-muted-foreground',
    numColor: 'text-border',
  },
  {
    id: 'style',
    number: '06',
    title: 'Style Guides & Lay Summaries',
    desc: 'AMA/APA referencing, writing style guides, lay summaries for patients and the general public.',
    span: 'col-span-1 md:col-span-1 row-span-1',
    tall: false,
    icon: 'BookOpenIcon',
    bg: 'bg-accent',
    textColor: 'text-white',
    subColor: 'text-white/70',
    numColor: 'text-white/20',
  },
];

export default function ProgramOverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef?.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <section id="program" ref={sectionRef} className="py-20 px-6 md:px-10 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6 reveal">
        <div className="space-y-3">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-primary">
            02 / Writing Domains
          </p>
          <h2 className="font-display font-light text-foreground leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            End-to-end writing across<br className="hidden md:block" /> the product lifecycle.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Every document type you will encounter in a medical writing career — written, reviewed, and mastered during training.
        </p>
      </div>

      {/* Bento Grid
          AUDIT:
          Row 1: [col-1: Preclinical cs-1 rs-2] [col-2+3: ClinicalTrials cs-2 rs-1]
          Row 2: [col-1: FILLED(Preclinical)] [col-2: Regulatory cs-1 rs-1] [col-3: Safety cs-1 rs-1]
          Row 3: [col-1+2: Publications cs-2 rs-1] [col-3: StyleGuides cs-1 rs-1]
          Placed 6/6 ✓
      */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)] spotlight-group">
        {/* Card 1: Preclinical — col-1, row-span-2 */}
        <div
          className="spotlight-card md:col-span-1 md:row-span-2 rounded-2xl p-8 flex flex-col justify-between border border-border bg-primary reveal delay-100"
        >
          <div>
            <span className="text-5xl font-display font-light text-white/30">01</span>
            <div className="mt-6 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon name="BeakerIcon" size={20} className="text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-2">Preclinical Writing</h3>
            <p className="text-sm text-white/70 leading-relaxed">Study reports, pharmacology summaries, toxicology write-ups — the foundation of the drug development dossier.</p>
          </div>
        </div>

        {/* Card 2: Clinical Trial — col-2+3, row-1 */}
        <div
          className="spotlight-card md:col-span-2 rounded-2xl p-8 flex flex-col justify-between border border-border bg-card reveal delay-200"
        >
          <div className="flex justify-between items-start">
            <span className="text-4xl font-display font-light text-border">02</span>
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name="ClipboardDocumentListIcon" size={20} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Clinical Trial Writing</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Protocols, Clinical Study Reports (CSR), Informed Consent Forms (ICF), Investigator Brochures (IB).</p>
          </div>
        </div>

        {/* Card 3: Regulatory — col-2, row-2 */}
        <div
          className="spotlight-card md:col-span-1 rounded-2xl p-8 flex flex-col justify-between border border-border bg-secondary reveal delay-200"
        >
          <div className="flex justify-between items-start">
            <span className="text-4xl font-display font-light text-primary/20">03</span>
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon name="DocumentCheckIcon" size={20} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Regulatory Submissions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">CTD/eCTD modules, NDA/BLA/MAA documents, Module 2 summaries.</p>
          </div>
        </div>

        {/* Card 4: Safety — col-3, row-2 */}
        <div
          className="spotlight-card md:col-span-1 rounded-2xl p-8 flex flex-col justify-between border border-border bg-card reveal delay-300"
        >
          <div className="flex justify-between items-start">
            <span className="text-4xl font-display font-light text-border">04</span>
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Icon name="ShieldCheckIcon" size={20} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Safety & Pharmacovigilance</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">ICSRs, PSURs, Risk Management Plans, signal detection narratives.</p>
          </div>
        </div>

        {/* Card 5: Publications — col-1+2, row-3 */}
        <div
          className="spotlight-card md:col-span-2 rounded-2xl p-8 flex flex-col justify-between border border-border bg-muted reveal delay-200"
        >
          <div className="flex justify-between items-start">
            <span className="text-4xl font-display font-light text-border">05</span>
            <div className="w-10 h-10 rounded-xl bg-card flex items-center justify-center">
              <Icon name="NewspaperIcon" size={20} className="text-primary" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-foreground mb-2">Scientific Publications</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">Journal manuscripts, poster abstracts, conference presentations following ICMJE guidelines.</p>
          </div>
        </div>

        {/* Card 6: Style Guides — col-3, row-3 */}
        <div
          className="spotlight-card md:col-span-1 rounded-2xl p-8 flex flex-col justify-between border border-border bg-accent reveal delay-300"
        >
          <div className="flex justify-between items-start">
            <span className="text-4xl font-display font-light text-white/20">06</span>
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <Icon name="BookOpenIcon" size={20} className="text-white" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-display font-medium text-white mb-2">Style Guides & Lay Summaries</h3>
            <p className="text-sm text-white/70 leading-relaxed">AMA/APA referencing, writing style guides, lay summaries for patients.</p>
          </div>
        </div>
      </div>
    </section>
  );
}