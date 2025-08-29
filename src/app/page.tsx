'use client';

import HeroSection from '@/components/sections/HeroSection';
import ClientLogosSection from '@/components/sections/ClientLogosSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import { teamMember } from '@/lib/constants/heroContent';
// These sections render their own content and don't take props
// TeamSection uses its own internal data; no props needed

export default function Home() {
  const handleCTAClick = () => {
    // For now, just open the calendly link
    window.open(teamMember.contactInfo.calendly, '_blank');
  };

  return (
    <>
      <HeroSection 
        onCTAClick={handleCTAClick}
        teamMember={teamMember}
      />
      <ClientLogosSection />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <StatisticsSection />
    </>
  );
}
