'use client';

import { useEffect } from 'react';
import SiteShell from '@/components/site/SiteShell';
import {
  CaseStudiesPreviewSection,
  ContactCtaSection,
  CulturePreviewSection,
  HomeHeroSection,
  PricingPlansSection,
  ProcessTimelineSection,
  ProgramsPreviewSection,
  StoryFeatureSection,
} from '@/components/sections/Home';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('loaded');
    return () => {
      document.body.classList.remove('loaded');
    };
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <SiteShell>
      <main>
        <HomeHeroSection />
        <ProgramsPreviewSection />
        <CaseStudiesPreviewSection />
        <StoryFeatureSection />
        <CulturePreviewSection />
        <PricingPlansSection />
        <ProcessTimelineSection />
        <ContactCtaSection />
      </main>
    </SiteShell>
  );
}
