'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const heroSlides = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_10ccbef3a-1776861918110.png",
  alt: 'Medical researcher reviewing clinical documents under cool laboratory lighting, dark blue-green tones, sterile environment'
},
{
  src: "https://images.unsplash.com/photo-1606206605628-0a09580d44a1",
  alt: 'Close-up of scientific laboratory glassware and research documents in dim blue-teal lighting environment'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_157ab3c9e-1764651562342.png",
  alt: 'Medical professional working on clinical trial documentation at desk in low-key laboratory setting, dark atmospheric tones'
}];


const stats = [
{ label: 'Training Hours', value: '120+', icon: '⏱' },
{ label: 'Writing Domains', value: '7', icon: '✍' },
{ label: 'Career Sectors', value: '4+', icon: '🏢' }];


export default function HeroSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const currentSlideRef = useRef(0);

  // Text reveal on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add('reveal-active');
      }
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Carousel
  useEffect(() => {
    const slides = slidesRef.current.filter(Boolean);
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      slides[currentSlideRef.current]?.classList.remove('active');
      currentSlideRef.current = (currentSlideRef.current + 1) % slides.length;
      slides[currentSlideRef.current]?.classList.add('active');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Spotlight effect on stats
  useEffect(() => {
    const group = document.querySelector('.hero-spotlight-group');
    if (!group) return;

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      group.querySelectorAll<HTMLElement>('.spotlight-card').forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${mouseEvent.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${mouseEvent.clientY - rect.top}px`);
      });
    };

    group.addEventListener('mousemove', handleMouseMove);
    return () => group.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
      {/* Image carousel area — 9 cols */}
      <div className="col-span-1 md:col-span-9 relative overflow-hidden min-h-[60vh] md:min-h-screen">
        {/* Carousel slides */}
        {heroSlides.map((slide, i) =>
        <div
          key={i}
          ref={(el) => {if (el) slidesRef.current[i] = el;}}
          className={`carousel-slide ${i === 0 ? 'active' : ''}`}>
          
            <AppImage
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width: 768px) 100vw, 75vw"
            className="object-cover"
            priority={i === 0} />
          
          </div>
        )}

        {/* Dark gradient scrim — critical for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/20 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10 pointer-events-none" />

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full z-20 pt-32 md:pt-0">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 border border-white/20 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] text-white/90 font-sans font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            Advanced Medical Writing Program
          </span>

          <h1
            ref={titleRef}
            className="font-display font-light text-white leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)' }}>
            
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content">Master</span>
            </span>
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-100" style={{ color: 'rgba(20,184,166,0.9)' }}>Medical</span>
            </span>
            <span className="text-reveal-wrapper">
              <span className="text-reveal-content delay-200">Writing</span>
            </span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-white/75 max-w-lg leading-relaxed font-sans reveal active">
            120-hour hands-on program — from preclinical documents to regulatory submissions. Job-ready from day one.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 reveal active delay-300">
            <a
              href="#register"
              className="px-7 py-3.5 rounded-full bg-primary text-white font-semibold text-sm uppercase tracking-wider hover:bg-accent transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-primary/30">
              
              Enroll Now
            </a>
            <a
              href="#program"
              className="px-7 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
              
              Explore Program
            </a>
          </div>
        </div>

        {/* Section label */}
        <div className="absolute top-24 left-8 md:top-28 md:left-12 z-20 opacity-40">
          <span className="font-mono text-xs text-white/60 tracking-widest uppercase">01 / Intro</span>
        </div>
      </div>

      {/* Stats sidebar — 3 cols */}
      <div className="col-span-1 md:col-span-3 bg-background border-l border-border hero-spotlight-group flex md:flex-col">
        {stats.map((stat, i) =>
        <div
          key={stat.label}
          className={`spotlight-card flex-1 md:flex-none p-6 md:p-8 flex flex-col justify-center border-border ${
          i < stats.length - 1 ? 'border-r md:border-r-0 md:border-b' : ''} hover:bg-secondary transition-colors duration-300`
          }>
          
            <span className="text-2xl mb-3">{stat.icon}</span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
              {stat.label}
            </span>
            <span
            className="font-display font-light text-foreground tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            
              {stat.value}
            </span>
          </div>
        )}
      </div>
    </section>);

}