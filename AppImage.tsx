import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import ProgramOverviewSection from './components/ProgramOverviewSection';
import FacultySection from './components/FacultySection';
import CurriculumSection from './components/CurriculumSection';
import CareerOutcomesSection from './components/CareerOutcomesSection';
import RegistrationSection from './components/RegistrationSection';

export const metadata: Metadata = {
  title: 'Elwords — Medical Writing Academy',
  description:
    'Job-oriented medical writing training for life-science graduates and professionals. 120-hour program covering clinical, regulatory, and safety writing.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Elwords Medical Writing Academy',
    description:
      'From academic knowledge to industry-ready medical writing skills. Advanced 120-hour program by Dr. Selvastine Selvaraj.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                name: 'Elwords Medical Writing Academy',
                url: 'https://elwords.in',
                email: 'selvastine.selvaraj@gmail.com',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Bangalore',
                  addressCountry: 'IN',
                },
                founder: {
                  '@type': 'Person',
                  name: 'Dr. Selvastine Selvaraj',
                  jobTitle: 'Founder, Trainer and Consultant',
                },
              },
              {
                '@type': 'WebPage',
                name: 'Elwords Medical Writing Academy',
                description:
                  'Job-oriented medical writing training for life-science graduates and professionals.',
                url: 'https://elwords.in',
              },
              {
                '@type': 'Course',
                name: 'Advanced Medical Writing Program',
                description:
                  '120-hour hands-on medical writing program covering preclinical, clinical, regulatory, safety, and device writing.',
                provider: {
                  '@type': 'Organization',
                  name: 'Elwords Medical Writing Academy',
                },
                timeRequired: 'PT120H',
                educationalLevel: 'Professional',
                inLanguage: 'en',
              },
            ],
          }),
        }}
      />

      <Header />

      <main>
        <HeroSection />
        <MissionSection />
        <ProgramOverviewSection />
        <FacultySection />
        <CurriculumSection />
        <CareerOutcomesSection />
        <RegistrationSection />
      </main>

      <Footer />
    </>
  );
}