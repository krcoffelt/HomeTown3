'use client';

import React from 'react';
import { motion } from 'framer-motion';

const statistics = [
  {
    id: 1,
    number: '3m+',
    label: 'Ad impressions managed'
  },
  {
    id: 2,
    number: '27+',
    label: 'Successful projects launched'
  },
  {
    id: 3,
    number: '98%',
    label: 'Client satisfaction rate'
  },
  {
    id: 4,
    number: '50k+',
    label: 'Monthly visitors driven through SEO'
  }
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-6">
                {stat.number}
              </div>
              <p className="text-gray-600 leading-tight text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <div>
            <span className="text-3xl font-bold text-black mb-6 block">Hometown</span>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every project we take on is designed for long-term success.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach is <span className="font-semibold text-black">simple:</span> we focus <span className="font-semibold text-black">on</span> functionality, speed, 
              and clarity, ensuring that every project serves a clear purpose without unnecessary complexity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We don't overpromise or use flashy marketing language. We simply build well-designed, 
              functional websites and strategies that help businesses succeed.
            </p>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="mt-20 w-full h-80 bg-gradient-to-r from-gray-800 to-black rounded-3xl flex items-center justify-center">
          <span className="text-white/60 text-base">Artistic Bottom Image</span>
        </div>
      </div>
    </section>
  );
}
