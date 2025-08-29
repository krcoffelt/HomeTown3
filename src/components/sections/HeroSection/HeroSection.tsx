'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { heroVariants, taglineVariants } from '@/lib/animations/heroAnimations';
const UnicornHomeWrapper = dynamic(() => import('@/components/UnicornHomeWrapper'), { ssr: false });
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
      className="relative min-h-screen overflow-hidden bg-white"
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Rounded Corner Wrapper - Main Container */}
      <div className="absolute inset-6 md:inset-8 lg:inset-12">
        <div className="relative w-full h-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          {/* Hero Gradient Background - Inside rounded container */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden">
              <UnicornHomeWrapper />
            </div>
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/10 rounded-3xl" />
          </div>
          {/* Decorative Plus Symbols */}
          <div className="absolute top-8 left-8 text-white/30 text-2xl font-light">+</div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white/30 text-2xl font-light">+</div>
          <div className="absolute top-8 right-8 text-white/30 text-2xl font-light">+</div>
          <div className="absolute bottom-8 right-8 text-white/30 text-2xl font-light">+</div>

          {/* Main Content Grid */}
          <div className="relative h-full flex flex-col">
            {/* Center Logo */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Logo variant="hero" animate={true} />
              </div>
            </div>

            {/* Service Tags - Right Side */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
              <div className="flex flex-col space-y-3">
                {heroContent.serviceTags.map((service, index) => (
                  <motion.span
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: serviceTagsVisible ? 1 : 0, x: serviceTagsVisible ? 0 : 20 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    className="px-4 py-2 bg-transparent border border-white/30 rounded-full text-white text-sm font-normal hover:bg-white/10 transition-all duration-300 whitespace-nowrap"
                  >
                    {service}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Main Tagline - Lower Left */}
            <div className="absolute bottom-20 left-8 max-w-lg hidden md:block">
              <motion.div
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
              >
                <p className="text-white text-lg leading-relaxed">
                  No generic websites. No empty<br />
                  marketing promises. Just tools and strategies that<br />
                  help your business grow and your brand shine.
                </p>
              </motion.div>
            </div>

            {/* CTA Button - Center Bottom */}
            <div className="flex justify-center pb-16">
              <CTAButton onClick={onCTAClick}>
                {heroContent.ctaButton}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Profile Card */}
      <div className="fixed bottom-6 right-6 z-50">
        <TeamSpotlight 
          teamMember={teamMember} 
          onContactClick={onCTAClick} 
        />
      </div>

      {/* Footer Branding - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-white/60 text-sm">
          © 2025 Hometown
        </p>
      </div>

    </motion.section>
  );
}
