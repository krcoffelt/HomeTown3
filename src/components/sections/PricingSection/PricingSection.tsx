'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function PricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'project' | 'monthly'>('project');

  const projectData = {
    price: '$2,490',
    period: '/project',
    features: [
      'Homepage + up to 4 inner pages',
      'Design and Development', 
      'Mobile-Optimized Design'
    ]
  };

  const monthlyData = {
    price: '$1,200',
    period: '/month',
    features: [
      'Unlimited revisions',
      'Priority support',
      'Monthly analytics reports'
    ]
  };

  const currentData = selectedPlan === 'project' ? projectData : monthlyData;

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-medium text-sm">Simple pricing</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-2">Pricing.</h2>
            <p className="text-lg text-gray-400">©2025</p>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setSelectedPlan('project')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                selectedPlan === 'project'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Per project
            </button>
            <button
              onClick={() => setSelectedPlan('monthly')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                selectedPlan === 'monthly'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        {/* Pricing Content */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-transparent border border-white/20 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Left Section */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white leading-tight">
                  Want more traffic and leads?
                </h3>
                <p className="text-gray-300 text-base leading-relaxed">
                  Get marketing and SEO that starts with your goals.
                </p>
              </div>

              {/* Center Section - Price */}
              <div className="text-center">
                <motion.div 
                  key={selectedPlan}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-6xl md:text-7xl font-bold text-white mb-2"
                >
                  {currentData.price}
                </motion.div>
                <div className="text-gray-400 text-lg">{currentData.period}</div>
              </div>

              {/* Right Section - Features */}
              <div className="space-y-4">
                {currentData.features.map((feature, index) => (
                  <motion.div 
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-white text-xl font-light">+</span>
                    <span className="text-white text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center">
              <button className="px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
                Get started today
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}