'use client';

import BaseLayout from '@/components/layout/BaseLayout';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import StatisticsSection from '@/components/sections/StatisticsSection';
import CaseStudySection from '@/components/sections/CaseStudySection';
import PricingSection from '@/components/sections/PricingSection';
import TeamSection from '@/components/sections/TeamSection';
import FAQSection from '@/components/sections/FAQSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import { teamMember } from '@/lib/constants/heroContent';
import { testimonials } from '@/data/testimonials';
import { statistics } from '@/data/statistics';
import { teamMembers } from '@/data/team';

export default function Home() {
  const handleCTAClick = () => {
    // For now, just open the calendly link
    window.open(teamMember.contactInfo.calendly, '_blank');
  };

  return (
    <BaseLayout currentPage="/">
      <HeroSection 
        onCTAClick={handleCTAClick}
        teamMember={teamMember}
      />
      <ProjectsSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <TestimonialsSection testimonials={testimonials} />
      <StatisticsSection statistics={statistics} />
      <CaseStudySection />
      <PricingSection />
      <TeamSection teamMembers={teamMembers} />
      <FAQSection />
      <BlogPreviewSection />
      <ContactFormSection />
      <NewsletterSection />
    </BaseLayout>
  );
}
