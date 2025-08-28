'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { heroVariants, taglineVariants } from '@/lib/animations/heroAnimations';
import { HeroSectionProps } from '@/types/hero';
import Logo from '@/components/ui/Logo/Logo';
import ServiceTags from './ServiceTags';
import CTAButton from '@/components/ui/CTAButton/CTAButton';
import TeamSpotlight from './TeamSpotlight';
import { heroContent } from '@/lib/constants/heroContent';

export default function HeroSection({ onCTAClick, teamMember }: HeroSectionProps) {
  const [serviceTagsVisible, setServiceTagsVisible] = useState(false);

  useEffect(() => {
    // Stagger service tag animations
    const timer = setTimeout(() => {
      setServiceTagsVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo */}
        <div className="mb-12">
          <Logo variant="hero" animate={true} />
        </div>

        {/* Service Tags */}
        <ServiceTags 
          services={heroContent.serviceTags} 
          isVisible={serviceTagsVisible} 
        />

        {/* Main Tagline */}
        <motion.div
          className="mb-16 max-w-5xl mx-auto"
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
            <span className="block mb-4">{heroContent.tagline.main}</span>
            <span className="text-gray-300 font-normal">{heroContent.tagline.sub}</span>
          </h1>
        </motion.div>

        {/* CTA Button */}
        <div className="mb-20">
          <CTAButton onClick={onCTAClick}>
            {heroContent.ctaButton}
          </CTAButton>
        </div>

        {/* Team Spotlight */}
        <div className="max-w-md mx-auto">
          <TeamSpotlight 
            teamMember={teamMember} 
            onContactClick={onCTAClick} 
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-white/20 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-500" />
    </motion.section>
  );
}
