'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const faculty = [
{
  name: 'Dr. Selvastine Selvaraj',
  credentials: 'DVM MVSc',
  role: 'Founder, Trainer & Consultant',
  location: 'Bangalore, India',
  email: 'selvastine.selvaraj@gmail.com',
  bio: 'A practising veterinary professional and medical writing specialist with deep expertise in preclinical and clinical documentation. Dr. Selvastine founded Elwords to bridge the gap between academic life sciences education and the demanding standards of the global medical writing industry. His training is built on real documents, real guidelines, and real industry expectations.',
  tags: ['Preclinical Writing', 'Clinical Trials', 'Regulatory Submissions', 'ICF & IB Writing'],
  image: "/assets/images/WhatsApp_Image_2026-05-06_at_4.47.07_PM-1778066291629.jpeg",
  imageAlt: 'Dr. Selvastine Selvaraj - Founder, Trainer and Consultant at Elwords Medical Writing Academy',
  accent: true
},
{
  name: 'Dr. Adesh Saxena',
  credentials: 'PhD',
  role: 'Mentor & Expert Consultant',
  location: 'United States',
  email: null,
  bio: 'A seasoned researcher and industry expert based in the USA with extensive experience in global clinical research and regulatory affairs. Dr. Adesh brings an international perspective to the program, ensuring learners are prepared for opportunities across US, EU, and global markets.',
  tags: ['Clinical Research', 'Regulatory Affairs', 'Global Drug Development', 'Scientific Publishing'],
  image: "/assets/images/WhatsApp_Image_2026-05-06_at_4.45.34_PM-1778066322900.jpeg",
  imageAlt: 'Dr. Adesh Saxena - Mentor and Expert Consultant at Elwords Medical Writing Academy',
  accent: false
}];


export default function FacultySection() {
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
    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="faculty" ref={sectionRef} className="py-20 px-6 md:px-10 max-w-7xl mx-auto border-t border-border">
      {/* Header */}
      <div className="mb-14 reveal">
        <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-primary mb-3">
          03 / Faculty
        </p>
        <h2 className="font-display font-light text-foreground leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Trained by practising<br className="hidden md:block" /> industry experts.
        </h2>
      </div>
      {/* Faculty cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faculty?.map((person, i) =>
        <div
          key={person?.name}
          className={`reveal ${i === 1 ? 'delay-200' : 'delay-100'} rounded-2xl overflow-hidden border border-border group`}>
          
            {/* Image */}
            <div className={`relative overflow-hidden ${person?.accent ? 'h-80' : 'h-80'}`}>
              <AppImage
              src={person?.image}
              alt={person?.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={`object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ${person?.accent ? 'object-top' : 'object-top'}`} />
            
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${person?.accent ? 'bg-primary text-white' : 'bg-accent text-white'}`}>
                  {person?.role}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className={`p-8 ${person?.accent ? 'bg-primary/5' : 'bg-card'}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-display font-medium text-foreground">{person?.name}</h3>
                  <p className="text-sm font-mono text-primary font-semibold tracking-wider">{person?.credentials}</p>
                </div>
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                  <Icon name="MapPinIcon" size={14} className="text-muted-foreground" />
                  {person?.location}
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{person?.bio}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {person?.tags?.map((tag) =>
              <span key={tag} className="px-3 py-1 rounded-full text-[10px] font-semibold bg-secondary text-primary border border-primary/10">
                    {tag}
                  </span>
              )}
              </div>

              {/* Email */}
              {person?.email &&
            <a
              href={`mailto:${person?.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors border-b border-primary/30 hover:border-accent pb-0.5">
              
                  <Icon name="EnvelopeIcon" size={14} className="text-primary" />
                  {person?.email}
                </a>
            }
            </div>
          </div>
        )}
      </div>
    </section>);

}