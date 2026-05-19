'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const programs = [
  {
    id: 'foundation',
    type: 'Foundation Course',
    number: '01',
    title: 'Foundation in Medical Writing',
    subtitle: 'An intensive 2-day course covering the fundamentals of medical writing for life-science graduates and professionals.',
    duration: '2 Days',
    durationIcon: 'CalendarDaysIcon',
    level: 'Foundation',
    deliverables: [
      { doc: 'Introduction to Medical Writing', detail: 'Overview of the medical writing profession and career pathways' },
      { doc: 'Regulatory Framework Basics', detail: 'ICH guidelines, FDA, EMA — understanding the regulatory landscape' },
      { doc: 'Document Types Overview', detail: 'Key document categories across the product lifecycle' },
      { doc: 'Writing Style & Language', detail: 'Scientific writing principles, clarity, precision, and conciseness' },
      { doc: 'Referencing & Style Guides', detail: 'AMA/APA referencing, in-text citations, and bibliography' },
      { doc: 'Hands-on Writing Exercise', detail: 'Practical writing session with real-world document templates' },
    ],
    icon: 'AcademicCapIcon',
    accent: 'text-accent',
    badge: 'bg-accent/20 text-accent border-accent/30',
  },
  {
    id: 'biologics',
    type: 'Advanced Program',
    number: '02',
    title: 'Medical Writing for Biologics and Vaccine',
    subtitle: 'Comprehensive 15-day advanced program covering regulatory writing for biologics, biosimilars, and vaccines.',
    duration: '15 Days',
    durationIcon: 'CalendarDaysIcon',
    level: 'Advanced',
    deliverables: [
      { doc: 'Preclinical Study Reports', detail: 'Pharmacology, toxicology, and pharmacokinetics write-ups for biologics' },
      { doc: 'Clinical Trial Protocol', detail: 'Phase I–III study protocol writing for biologics and vaccines' },
      { doc: 'Investigator Brochure (IB)', detail: 'Comprehensive IB drafting using real biologics templates' },
      { doc: 'Informed Consent Form (ICF)', detail: 'Patient-facing ICF aligned to FDA/EMA requirements' },
      { doc: 'Clinical Study Report (CSR)', detail: 'Full ICH E3 CSR for biologics and vaccine trials' },
      { doc: 'BLA/MAA Regulatory Submissions', detail: 'CTD/eCTD modules for biologics license applications' },
      { doc: 'Individual Case Safety Reports', detail: 'ICSR narratives, MedDRA coding for biologics adverse events' },
      { doc: 'Periodic Safety Update Reports', detail: 'PSUR/PBRER structure and writing for biologics' },
      { doc: 'Journal Manuscripts', detail: 'IMRAD structure, authorship, ICMJE compliance for biologics research' },
      { doc: 'Lay Summaries', detail: 'Patient-friendly summaries for vaccine and biologics trials' },
    ],
    icon: 'BeakerIcon',
    accent: 'text-primary',
    badge: 'bg-primary/20 text-primary border-primary/30',
  },
  {
    id: 'nce',
    type: 'Advanced Program',
    number: '03',
    title: 'Medical Writing for NCE and Drugs',
    subtitle: 'Comprehensive 15-day advanced program focused on regulatory writing for new chemical entities and small molecule drugs.',
    duration: '15 Days',
    durationIcon: 'CalendarDaysIcon',
    level: 'Advanced',
    deliverables: [
      { doc: 'Preclinical Study Reports', detail: 'Pharmacology, toxicology, pharmacokinetics write-ups for NCEs' },
      { doc: 'Clinical Trial Protocol', detail: 'Phase I–III study protocol writing to ICH E6(R2)' },
      { doc: 'Investigator Brochure (IB)', detail: 'Comprehensive IB from scratch using real NCE templates' },
      { doc: 'Informed Consent Form (ICF)', detail: 'Patient-facing ICF aligned to FDA/EMA requirements' },
      { doc: 'Clinical Study Report (CSR)', detail: 'Full ICH E3 CSR — the flagship deliverable for NCEs' },
      { doc: 'CTD Module 2 Summaries', detail: 'Nonclinical & clinical overviews and summaries for NDA/ANDA' },
      { doc: 'Individual Case Safety Reports', detail: 'ICSR narratives, MedDRA coding, signal writing' },
      { doc: 'Periodic Safety Update Reports', detail: 'PSUR/PBRER structure and writing for drugs' },
      { doc: 'Journal Manuscripts', detail: 'IMRAD structure, authorship, ICMJE compliance' },
      { doc: 'Lay Summaries', detail: 'EU Clinical Trial Regulation patient-friendly summaries' },
    ],
    icon: 'ClipboardDocumentListIcon',
    accent: 'text-primary',
    badge: 'bg-primary/20 text-primary border-primary/30',
  },
  {
    id: 'devices',
    type: 'Advanced Program',
    number: '04',
    title: 'Medical Writing for Medical Devices',
    subtitle: 'Comprehensive 15-day advanced program covering regulatory writing for Class II/III medical devices under EU MDR and FDA.',
    duration: '15 Days',
    durationIcon: 'CalendarDaysIcon',
    level: 'Advanced',
    deliverables: [
      { doc: 'Design History File (DHF)', detail: 'Device description, intended use, indications for use' },
      { doc: 'Risk Management File', detail: 'ISO 14971 risk analysis and mitigation documentation' },
      { doc: 'Clinical Evaluation Report (CER)', detail: 'EU MDR Annex XIV CER writing from literature' },
      { doc: 'Summary of Safety & Clinical Performance', detail: 'SSCP for implantable/Class III devices' },
      { doc: 'Post-Market Clinical Follow-Up Plan', detail: 'PMCF plan and evaluation report writing' },
      { doc: '510(k) Substantial Equivalence Summary', detail: 'FDA predicate device comparison writing' },
      { doc: 'Investigational Device Exemption', detail: 'IDE application narrative sections' },
      { doc: 'Instructions for Use (IFU)', detail: 'Regulatory-compliant IFU drafting and review' },
      { doc: 'Vigilance Reports', detail: 'MDR/MDV serious incident reports for EU/FDA' },
      { doc: 'Technical Documentation Summary', detail: 'EU MDR Annex II/III technical file summaries' },
    ],
    icon: 'CpuChipIcon',
    accent: 'text-primary',
    badge: 'bg-primary/20 text-primary border-primary/30',
  },
];

export default function CurriculumSection() {
  const [activeProgram, setActiveProgram] = useState(0);
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

  const prog = programs[activeProgram];

  return (
    <section id="curriculum" ref={sectionRef} className="py-20 bg-foreground text-white">
      <div className="px-6 md:px-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6 reveal">
          <div className="space-y-3">
            <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-accent">
              04 / Programs
            </p>
            <h2 className="font-display font-light text-white leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              One foundation.<br className="hidden md:block" /> Three advanced paths.
            </h2>
          </div>
          <p className="text-sm text-white/50 max-w-sm leading-relaxed">
            Start with our 2-day foundation course or dive deep with a 15-day advanced program tailored to your specialisation.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap gap-3 mb-10 reveal delay-100">
          {programs.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActiveProgram(i)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeProgram === i
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white/90'
              }`}
            >
              <Icon name={p.icon as 'AcademicCapIcon'} size={16} className={activeProgram === i ? 'text-white' : 'text-white/50'} />
              <span className="truncate max-w-[160px] sm:max-w-none">{p.title}</span>
            </button>
          ))}
        </div>

        {/* Program content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 reveal delay-200">
          {/* Program info */}
          <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Icon name={prog.icon as 'AcademicCapIcon'} size={24} className="text-accent" />
                </div>
                <span className={`text-xs font-mono font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${prog.badge}`}>
                  {prog.type}
                </span>
              </div>
              <span className="text-5xl font-display font-light text-white/10">{prog.number}/</span>
              <h3 className="text-2xl font-display font-medium text-white mt-2 mb-3">{prog.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed mb-6">{prog.subtitle}</p>
              <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                <Icon name="CalendarDaysIcon" size={16} className="text-accent" />
                Duration: {prog.duration}
              </div>
            </div>

            {/* Fee contact block */}
            <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-5">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
                For Fee Enquiries
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-3">
                Contact us directly for program fees and batch schedules.
              </p>
              <a
                href="https://wa.me/918884281010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm font-bold text-white hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="PhoneIcon" size={14} className="text-green-400" />
                </span>
                WhatsApp: +91 8884281010
              </a>
            </div>
          </div>

          {/* Deliverables list */}
          <div className="md:col-span-8 bg-white/3 border border-white/10 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-white/10">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                Documents You Will Write
              </p>
            </div>
            <div className="divide-y divide-white/5">
              {prog.deliverables.map((item, i) => (
                <div
                  key={item.doc}
                  className="flex items-start gap-4 px-6 py-4 hover:bg-white/5 transition-colors duration-200 group"
                >
                  <span className="text-[10px] font-mono text-white/20 mt-1 w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                      {item.doc}
                    </p>
                    <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                  <Icon name="CheckCircleIcon" size={16} className="text-primary/60 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}