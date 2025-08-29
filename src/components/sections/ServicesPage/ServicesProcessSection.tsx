'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    id: 1,
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We start by understanding your business goals, target audience, and unique challenges to develop a tailored approach.',
    details: [
      'Business analysis and goal setting',
      'Competitor research and market analysis',
      'Target audience identification',
      'Strategic roadmap creation'
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Design & Planning',
    description: 'Our team creates detailed plans and designs that align with your brand vision and business objectives.',
    details: [
      'Wireframing and prototyping',
      'Visual design and branding',
      'Content strategy development',
      'Technical architecture planning'
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Development & Implementation',
    description: 'We bring your project to life using modern technologies and best practices for optimal performance.',
    details: [
      'Agile development methodology',
      'Quality assurance testing',
      'Performance optimization',
      'Security implementation'
    ]
  },
  {
    id: 4,
    number: '04',
    title: 'Launch & Optimization',
    description: 'We ensure successful deployment and provide ongoing support to maximize your return on investment.',
    details: [
      'Soft launch and testing',
      'Performance monitoring',
      'User feedback analysis',
      'Continuous optimization'
    ]
  }
];

export default function ServicesProcessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">Our process</span>
          </div>
          
          {/* Main Content - Center */}
          <div className="text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-black">Hometown methodology</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 max-w-4xl mx-auto leading-tight">
              How we deliver exceptional service results.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven process ensures every project is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
        </div>
        
        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                {/* Step Header */}
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl font-light text-gray-400 mb-4 block">{step.number}</span>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-black mb-3 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Details */}
                <div className="space-y-3">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="text-black text-lg font-light">+</span>
                      <span className="text-gray-700 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Process Image Placeholder */}
                <div className="mt-6 w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Process {step.number}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black rounded-2xl p-8 max-w-2xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Ready to start your project?</h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how our proven process can help achieve your business goals.
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors duration-300 font-medium">
              Start Your Project
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
