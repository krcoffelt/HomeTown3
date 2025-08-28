'use client';

import { motion } from 'framer-motion';

const processSteps = [
  {
    id: "01",
    title: "The team that communicates every step",
    image: "/images/process/communication.jpg"
  },
  {
    id: "02", 
    title: "Customized solutions for your unique needs",
    image: "/images/process/customization.jpg"
  },
  {
    id: "03",
    title: "Transparent pricing with no hidden fees",
    image: "/images/process/pricing.jpg"
  },
  {
    id: "04",
    title: "Proven track record with measurable results",
    image: "/images/process/results.jpg"
  }
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">About us</p>
          <div className="mb-6">
            <span className="text-2xl font-light text-gray-400">fabrica®</span>
            <h2 className="text-5xl md:text-6xl font-light mt-2">
              How we launch websites and marketing campaigns.
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            See how our team combines creativity, technology, and strategy to build powerful digital solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="mb-6">
                  <span className="text-4xl font-light text-gray-400 mb-4 block">"{step.id}"</span>
                  
                  {/* Placeholder for image */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg mb-6 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Process Image {step.id}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <motion.button
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Watch showreel
          </motion.button>
        </div>
      </div>
    </section>
  );
}
