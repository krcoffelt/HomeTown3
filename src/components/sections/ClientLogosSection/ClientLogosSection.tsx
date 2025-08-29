'use client';

import { motion } from 'framer-motion';

const clientLogos = [
  { id: 1, name: 'Geometric Lines', placeholder: '||||' },
  { id: 2, name: 'Warpspeed', placeholder: 'Warpspeed' },
  { id: 3, name: 'Asterisk', placeholder: '✱' },
  { id: 4, name: 'LOCO', placeholder: 'LOCO' },
  { id: 5, name: 'Geometric Shape', placeholder: '◢◣' },
  { id: 6, name: 'Letter N', placeholder: 'N' },
];

export default function ClientLogosSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">Our clients</span>
          </div>
          <span className="text-gray-600 text-sm">(2016-25©)</span>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 aspect-square flex items-center justify-center">
                <div className="text-2xl font-bold text-black group-hover:scale-110 transition-transform duration-300">
                  {logo.placeholder}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}