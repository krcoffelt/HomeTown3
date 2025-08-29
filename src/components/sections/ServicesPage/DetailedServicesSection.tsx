'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const services = [
  {
    id: 1,
    number: '01',
    title: 'Web Design & Development',
    shortDescription: 'Custom websites and web applications built with modern technologies.',
    longDescription: 'We create stunning, responsive websites that not only look great but perform exceptionally. Our development process includes user experience design, responsive layouts, performance optimization, and modern web technologies like React, Next.js, and TypeScript.',
    features: [
      'Responsive Design',
      'Performance Optimization',
      'SEO Implementation',
      'Content Management Systems',
      'E-commerce Solutions',
      'Analytics Integration'
    ],
    deliverables: [
      'Custom Website Design',
      'Full Development & Testing',
      'Mobile Optimization',
      'Performance Report',
      '3 Months Support'
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Social Media Marketing',
    shortDescription: 'Strategic social media campaigns that build brand awareness and engagement.',
    longDescription: 'Our social media marketing drives real results through strategic content creation, community management, and data-driven campaigns across all major platforms. We focus on building authentic connections with your audience.',
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Paid Social Advertising',
      'Influencer Partnerships',
      'Analytics & Reporting',
      'Brand Voice Development'
    ],
    deliverables: [
      'Social Media Strategy',
      'Monthly Content Calendar',
      'Paid Campaign Management',
      'Performance Analytics',
      'Monthly Strategy Sessions'
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'SEO & Content Marketing',
    shortDescription: 'Search engine optimization and content strategies that drive organic traffic.',
    longDescription: 'We help your business rank higher in search results through technical SEO, strategic content creation, and comprehensive optimization. Our approach combines technical expertise with compelling storytelling.',
    features: [
      'Technical SEO Audit',
      'Keyword Research & Strategy',
      'Content Creation & Optimization',
      'Link Building Campaigns',
      'Local SEO Optimization',
      'Performance Monitoring'
    ],
    deliverables: [
      'SEO Audit Report',
      'Content Strategy Plan',
      'Monthly Content Creation',
      'Backlink Acquisition',
      'Monthly Ranking Reports'
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Email Marketing',
    shortDescription: 'Strategic email campaigns that nurture leads and drive conversions through targeted messaging.',
    longDescription: 'Our email marketing services help you build stronger relationships with your audience through personalized, data-driven campaigns. We create compelling email experiences that convert subscribers into customers and keep them engaged long-term.',
    features: [
      'Email Campaign Strategy',
      'List Building & Segmentation',
      'Template Design & Development',
      'Automated Workflow Creation',
      'A/B Testing & Optimization',
      'Performance Analytics & Reporting'
    ],
    deliverables: [
      'Email Marketing Strategy',
      'Custom Email Templates',
      'Automated Campaign Setup',
      'Monthly Campaign Reports',
      'Optimization Recommendations'
    ]
  },
  {
    id: 5,
    number: '05',
    title: 'Branding & Identity',
    shortDescription: 'Complete brand identity systems including logos, guidelines, and visual assets.',
    longDescription: 'We craft distinctive brand identities that capture your essence and resonate with your audience. From logo design to comprehensive brand guidelines, we create cohesive visual systems that stand the test of time.',
    features: [
      'Brand Strategy Development',
      'Logo Design & Variations',
      'Color Palette & Typography',
      'Brand Guidelines Creation',
      'Marketing Collateral Design',
      'Digital Asset Library'
    ],
    deliverables: [
      'Brand Strategy Document',
      'Complete Logo Package',
      'Brand Guidelines Manual',
      'Marketing Templates',
      'Digital Asset Library'
    ]
  }
];

export default function DetailedServicesSection() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">Our services</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">Services.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive measurable results.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl border-2 transition-all duration-500 ease-in-out overflow-hidden cursor-pointer ${
                expandedService === service.id
                  ? 'bg-black border-black'
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => toggleService(service.id)}
            >
              <div className="p-8">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className={`text-3xl font-light transition-colors duration-500 ${
                      expandedService === service.id ? 'text-white/60' : 'text-gray-400'
                    }`}>
                      {service.number}
                    </span>
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
                        expandedService === service.id ? 'text-white' : 'text-black'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <motion.div
                    animate={{ 
                      rotate: expandedService === service.id ? 45 : 0,
                      color: expandedService === service.id ? '#ffffff' : '#000000'
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-light cursor-pointer"
                  >
                    +
                  </motion.div>
                </div>

                {/* Short Description - Always Visible */}
                <p className={`text-base leading-relaxed mb-6 transition-colors duration-500 ${
                  expandedService === service.id ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.shortDescription}
                </p>

                {/* Expanded Content */}
                <AnimatePresence>
                  {expandedService === service.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      {/* Detailed Description */}
                      <div className="mb-8">
                        <p className="text-gray-300 text-base leading-relaxed">
                          {service.longDescription}
                        </p>
                      </div>

                      {/* Features & Deliverables Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-4">What's Included</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="text-white text-lg font-light">+</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-white font-semibold text-lg mb-4">Deliverables</h4>
                          <ul className="space-y-2">
                            {service.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                <span className="text-white text-lg font-light">→</span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-8 pt-6 border-t border-white/20">
                        <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
                          Get Started with {service.title}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}