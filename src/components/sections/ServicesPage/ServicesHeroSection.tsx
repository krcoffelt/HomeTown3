'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const serviceTags = [
  'Web Development',
  'Social Media',
  'SEO Strategy',
  'Brand Identity'
];

interface ServicesHeroSectionProps {
  onCTAClick: () => void;
}

export default function ServicesHeroSection({ onCTAClick }: ServicesHeroSectionProps) {
  const [serviceTagsVisible, setServiceTagsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setServiceTagsVisible(true);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="relative min-h-screen overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Rounded Corner Wrapper - Main Container */}
      <div className="absolute inset-6 md:inset-8 lg:inset-12">
        <div className="relative w-full h-full bg-black/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          {/* Services Gradient Background - Inside rounded container */}
          <div className="absolute inset-0">
            <img
              src="/images/services-hero-bg.png"
              alt="Services Gradient Background"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* Subtle overlay for better text contrast */}
            <div className="absolute inset-0 bg-black/20 rounded-3xl" />
          </div>

          {/* Decorative Plus Symbols */}
          <div className="absolute top-8 left-8 text-white/30 text-2xl font-light">+</div>
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white/30 text-2xl font-light">+</div>
          <div className="absolute top-8 right-8 text-white/30 text-2xl font-light">+</div>
          <div className="absolute bottom-8 right-8 text-white/30 text-2xl font-light">+</div>

          {/* Main Content Grid */}
          <div className="relative h-full flex flex-col">
            {/* Center Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">Services</span>
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">by Hometown</div>
                </motion.div>
              </div>
            </div>

            {/* Service Tags - Right Side */}
            <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:block">
              <div className="flex flex-col space-y-3">
                {serviceTags.map((service, index) => (
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-white text-lg leading-relaxed">
                  Comprehensive digital solutions that<br />
                  transform your business and drive<br />
                  measurable growth in today's market.
                </p>
              </motion.div>
            </div>

            {/* CTA Button - Center Bottom */}
            <div className="flex justify-center pb-16">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                onClick={onCTAClick}
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Services
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-10">
        <p className="text-gray-600 text-sm">© 2025 Hometown</p>
      </div>
    </motion.section>
  );
}
