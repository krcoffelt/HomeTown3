'use client';

import { useEffect } from 'react';
import SiteShell from '@/components/site/SiteShell';
import {
  CaseStudiesPreviewSection,
  HomeHeroSection,
  ProgramsPreviewSection,
  StoryFeatureSection,
} from '@/components/sections/Home';

export default function HomePageClient() {
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
      <main className="home-main">
        <HomeHeroSection />
        <ProgramsPreviewSection />
        <CaseStudiesPreviewSection />
        <StoryFeatureSection />
      </main>
    </SiteShell>
  );
}
