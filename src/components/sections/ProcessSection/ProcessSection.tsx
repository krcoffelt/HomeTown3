'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'The team that communicates every step',
    image: '/images/process/team-communication.jpg'
  },
  {
    id: 2,
    number: '02', 
    title: 'Customized solutions for your unique needs',
    image: '/images/process/customized-solutions.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'Transparent pricing with no hidden fees',
    image: '/images/process/transparent-pricing.jpg'
  },
  {
    id: 4,
    number: '04',
    title: 'Proven track record with measurable results',
    image: '/images/process/proven-results.jpg'
  }
];

export default function ProcessSection({ className = '' }: { className?: string }) {
  return (
    <section className={`py-24 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">About us</span>
          </div>
          
          {/* Main Content - Center */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">Hometown</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 max-w-4xl mx-auto leading-tight">
              How we launch websites and marketing campaigns.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how our team combines creativity, technology, and strategy to build powerful digital solutions.
            </p>
          </div>
        </div>
        
        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                <div className="mb-4">
                  <span className="text-2xl font-light text-gray-400 mb-4 block">{step.number}</span>
                  
                  {/* Process Image Placeholder */}
                  <div className="w-full h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Process {step.number}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-black leading-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="w-full h-64 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center">
          <span className="text-white/60 text-sm">Artistic Background Image</span>
        </div>
      </div>
    </section>
  );
}
