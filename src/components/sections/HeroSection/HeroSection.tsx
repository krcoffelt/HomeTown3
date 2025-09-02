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
            {/* Center Stack: Logo, Tagline, CTA */}
            <div className="flex-1 flex items-center justify-center px-6">
              <div className="text-center max-w-3xl mx-auto space-y-6">
                <Logo variant="hero" animate={true} />
                <motion.div
                  variants={taglineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <p className="text-white/90 text-base md:text-lg lg:text-xl leading-relaxed">
                    No generic websites. No empty marketing promises. Just tools and strategies that
                    help your business grow and your brand shine.
                  </p>
                </motion.div>
                <div className="flex justify-center pt-2">
                  <CTAButton onClick={onCTAClick}>
                    {heroContent.ctaButton}
                  </CTAButton>
                </div>

                {/* Centered Service Tags - Horizontal, wraps as needed */}
                <ServiceTags services={heroContent.serviceTags} isVisible={serviceTagsVisible} />
              </div>
            </div>

            {/* Removed right-side vertical service tags; now centered above */}

            {/* Removed bottom-left tagline and bottom CTA; both centered above */}
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
