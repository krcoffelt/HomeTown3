'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    type: 'rating',
    rating: 4.9,
    description: "We've delivered 56+ projects that help companies generate real results."
  },
  {
    id: 2,
    type: 'testimonial',
    name: 'James Carter',
    company: 'Wilson & Co',
    avatar: 'JC',
    rating: 5,
    quote: 'Incredible team! They delivered exactly what we needed, on time and beyond expectations.'
  },
  {
    id: 3,
    type: 'testimonial',
    name: 'Anna Martinez',
    company: 'Marketing Director',
    avatar: 'AM',
    rating: 5,
    quote: 'A smooth process from start to finish. Highly professional team!'
  },
  {
    id: 4,
    type: 'company',
    brand: 'Hometown',
    clientCount: '56+',
    rating: 5,
    trustText: 'Trusted by clients worldwide'
  },
  {
    id: 5,
    type: 'testimonial',
    name: 'Emily Davis',
    company: 'CEO',
    avatar: 'ED',
    rating: 5,
    quote: 'Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.'
  }
];

const StarRating = ({ rating, color = 'orange' }: { rating: number; color?: string }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-${color}-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
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
            <span className="text-black font-medium text-sm">Testimonials</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-2">Experiences.</h2>
            <p className="text-lg text-gray-600">©2025</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Rating Card - Spans 1 column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-6">
              <div className="text-5xl font-bold text-black mb-2">4.9<span className="text-2xl text-gray-400">/5</span></div>
            </div>
            <p className="text-gray-600 leading-relaxed text-base">
              We've delivered <span className="font-semibold text-black">56+ projects</span> that help companies generate real results.
            </p>
          </motion.div>

          {/* James Carter Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JC</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">James Carter</h4>
                <p className="text-sm text-gray-600">Wilson & Co</p>
              </div>
              <div className="ml-auto">
                <span className="text-2xl font-light">+</span>
              </div>
            </div>
            <StarRating rating={5} />
            <p className="text-gray-700 mt-4 leading-relaxed text-base">
              Incredible team! They delivered exactly what we needed, on time and beyond expectations.
            </p>
          </motion.div>

          {/* Anna Martinez Testimonial - Large Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-end mb-6">
              <span className="text-2xl font-light">+</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-6 leading-tight">
              A smooth process from start to finish. Highly professional team!
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">AM</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Anna Martinez</h4>
                <p className="text-sm text-gray-600">Marketing Director</p>
              </div>
            </div>
            <div className="mt-4">
              <StarRating rating={5} />
            </div>
          </motion.div>

          {/* Company Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-xl font-bold text-black">Hometown</span>
            </div>
            
            {/* Client Avatars */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-medium">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-black">56+</span>
            </div>
            
            <StarRating rating={5} />
            <p className="text-sm text-gray-600 mt-3 mb-6">Trusted by clients worldwide</p>
            
            <button className="w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium">
              Leave a review
            </button>
          </motion.div>

          {/* Emily Davis Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-end mb-6">
              <span className="text-2xl font-light">+</span>
            </div>
            <StarRating rating={5} />
            <p className="text-gray-700 mt-4 mb-6 leading-relaxed text-base">
              Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">ED</span>
              </div>
              <div>
                <h4 className="font-semibold text-black">Emily Davis</h4>
                <p className="text-sm text-gray-600">CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
