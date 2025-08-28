'use client';

import { motion } from 'framer-motion';

export default function PricingSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Simple pricing</p>
          <h2 className="text-5xl md:text-6xl font-light">Pricing.</h2>
        </div>

        {/* Pricing Options */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Per Project Option */}
            <motion.div
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-semibold text-white">Per project</span>
                  <span className="text-xl font-semibold text-white">Monthly</span>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-300 mb-2">
                    Want more traffic and leads? Get marketing and SEO that starts with your goals.
                  </p>
                  <span className="text-2xl font-bold text-white">+$1,490</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="text-4xl font-bold text-white mb-2">$2,490</div>
                <div className="text-gray-400">/project</div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-gray-300">Homepage + up to 4 inner pages</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-gray-300">Design and Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span className="text-gray-300">Mobile-Optimized Design</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-400">Delivery time</span>
                  <span className="text-white font-semibold">3-4 weeks</span>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Get in touch
              </button>
            </motion.div>

            {/* Additional Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Looking for more?</h3>
                <p className="text-gray-300 leading-relaxed">
                  Add marketing, SEO, or content creation—flexible tools to strengthen your project. We'll shape a solution that fits your business, not ours.
                </p>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="text-center">
                  <h4 className="text-xl font-semibold text-white mb-2">George Stern</h4>
                  <p className="text-gray-400">Client Success Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
