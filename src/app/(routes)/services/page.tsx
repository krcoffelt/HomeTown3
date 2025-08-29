'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import ServicesHeroSection from '@/components/sections/ServicesPage/ServicesHeroSection';
import ServicesOverviewSection from '@/components/sections/ServicesPage/ServicesOverviewSection';
import DetailedServicesSection from '@/components/sections/ServicesPage/DetailedServicesSection';
import ServicesProcessSection from '@/components/sections/ServicesPage/ServicesProcessSection';
import ServicesPricingSection from '@/components/sections/ServicesPage/ServicesPricingSection';
import ServicesTestimonialsSection from '@/components/sections/ServicesPage/ServicesTestimonialsSection';
import ServicesCTASection from '@/components/sections/ServicesPage/ServicesCTASection';

export default function Services() {
  const handleCTAClick = () => {
    // For now, just scroll to contact section or open contact form
    const ctaSection = document.getElementById('services-cta');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServicesHeroSection onCTAClick={handleCTAClick} />
      <ServicesOverviewSection />
      <DetailedServicesSection />
      <ServicesProcessSection />
      <ServicesPricingSection />
      <ServicesTestimonialsSection />
      <ServicesCTASection />
    </>
  );
}
