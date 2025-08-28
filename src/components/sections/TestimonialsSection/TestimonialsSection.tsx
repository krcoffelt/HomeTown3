'use client';

import React from 'react';
import { Testimonial } from '@/types/testimonials';
import SimpleRating from '@/components/ui/SimpleRating';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 mb-2">Testimonials</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">Experiences.</h2>
            <p className="text-sm text-gray-500">©2025</p>
          </div>
        </div>

        {/* Rating and Stats */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Left Side - Rating */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <SimpleRating rating={4.9} />
            </div>
            <p className="text-lg text-gray-700">
              We've delivered <span className="font-semibold">56+ projects</span> that help companies generate real results.
            </p>
          </div>

          {/* Right Side - Stats */}
          <div className="text-center md:text-right">
            <div className="mb-4">
              <p className="text-2xl font-bold text-gray-900">fabrica®</p>
            </div>
            <div className="mb-4">
              <p className="text-4xl font-bold text-gray-900">56+</p>
              <p className="text-sm text-gray-600">Trusted by clients worldwide</p>
            </div>
            <a 
              href="https://tally.so" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Leave a review
            </a>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {testimonial.clientName}
                </h3>
                <p className="text-sm text-gray-600">
                  {testimonial.clientCompany}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {testimonial.testimonialText}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
