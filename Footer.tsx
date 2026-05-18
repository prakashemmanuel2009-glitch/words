'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type FormData = {
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  education: string;
  status: string;
  message: string;
};

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  country: '',
  city: '',
  education: '',
  status: '',
  message: '',
};

const educationOptions = [
  'Bachelor\'s in Biology / Life Sciences',
  'Bachelor\'s in Pharmacology',
  'MBBS',
  'Bachelor\'s in Biotechnology',
  'Master\'s in Life Sciences / Biology',
  'Master\'s in Pharmacology',
  'MVSc / DVM (Veterinary)',
  'PhD in Life Sciences',
  'Other Life Science Degree',
];

export default function RegistrationSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.country || !form.education || !form.status) {
      setError('Please fill in all required fields.');
      return;
    }
    // Mock submit handler — connect to backend/email service here
    setSubmitted(true);
  };

  return (
    <section id="register" ref={sectionRef} className="py-20 bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-14 reveal">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-primary mb-3">
            06 / Register
          </p>
          <h2 className="font-display font-light text-foreground leading-tight" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
            Start your medical<br className="hidden md:block" /> writing career today.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Form — left 8 cols */}
          <div className="md:col-span-8 reveal delay-100">
            {submitted ? (
              <div className="bg-card rounded-2xl border border-primary/20 p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Icon name="CheckCircleIcon" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-display font-medium text-foreground mb-3">Enquiry Received!</h3>
                <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                  Thank you for your interest in the Elwords Advanced Medical Writing Program. Dr. Selvastine will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-6">
                {/* Name row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="e.g. Priya"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="e.g. Sharma"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Location row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      Country <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={form.country}
                      onChange={handleChange}
                      placeholder="e.g. India"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="e.g. Bangalore"
                      className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                {/* Education */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Educational Background <span className="text-primary">*</span>
                  </label>
                  <select
                    name="education"
                    value={form.education}
                    onChange={handleChange}
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all appearance-none"
                    required
                  >
                    <option value="">Select your qualification</option>
                    {educationOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                    Current Status <span className="text-primary">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { value: 'fresher', label: 'I am a fresher looking for a job', icon: 'AcademicCapIcon' },
                      { value: 'employed', label: 'I am currently employed', icon: 'BriefcaseIcon' },
                    ].map((opt) => (
                      <label
                        key={opt.value}
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all duration-200 ${
                          form.status === opt.value
                            ? 'border-primary bg-primary/5' :'border-border bg-background hover:border-primary/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="status"
                          value={opt.value}
                          checked={form.status === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          form.status === opt.value ? 'bg-primary' : 'bg-secondary'
                        }`}>
                          <Icon name={opt.icon as 'AcademicCapIcon'} size={16} className={form.status === opt.value ? 'text-white' : 'text-muted-foreground'} />
                        </div>
                        <span className="text-sm font-medium text-foreground leading-tight">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Your Goals / Questions (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your background and what you hope to achieve..."
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500 font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-accent transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2"
                >
                  <Icon name="PaperAirplaneIcon" size={16} className="text-white" />
                  Submit Enquiry
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  We respond within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>

          {/* Contact info — right 4 cols */}
          <div className="md:col-span-4 space-y-5 reveal delay-200">
            {/* Contact card */}
            <div className="bg-card rounded-2xl border border-border p-7">
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-5">Direct Contact</p>

              <div className="space-y-4">
                <div>
                  <p className="text-base font-display font-medium text-foreground">Dr. Selvastine Selvaraj</p>
                  <p className="text-xs font-mono text-primary font-semibold tracking-wider mt-0.5">DVM MVSc</p>
                  <p className="text-sm text-muted-foreground mt-1">Founder, Trainer & Consultant</p>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-3">
                  <a
                    href="mailto:selvastine.selvaraj@gmail.com"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon name="EnvelopeIcon" size={14} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all">
                      selvastine.selvaraj@gmail.com
                    </span>
                  </a>

                  <a
                    href="https://wa.me/918884281010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                      <Icon name="ChatBubbleLeftRightIcon" size={14} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      WhatsApp: +91 88842 81010
                    </span>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPinIcon" size={14} className="text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">Bangalore, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Program highlight card */}
            <div className="bg-primary rounded-2xl p-7 text-white">
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-4">Program Highlights</p>
              <ul className="space-y-3">
                {[
                  '120 hours of structured training',
                  'Hands-on writing — real documents',
                  'End-to-end product lifecycle coverage',
                  'Medicine, Biologics & Device writing',
                  'Style guides, referencing, lay summaries',
                  'Job-oriented curriculum design',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <Icon name="CheckCircleIcon" size={16} className="text-accent flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}