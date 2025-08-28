'use client';

import { processSteps } from '../../../data/process';
import { ProcessStep } from '../../../types/process';
import Image from 'next/image';

const ProcessStepComponent = ({ step }: { step: ProcessStep }) => {
  return (
    <div className="group">
      <div className="relative">
        {/* Step Number */}
        <div className="text-2xl font-bold text-gray-900 mb-4">
          "{step.number}"
        </div>
        
        {/* Step Content */}
        <div className="space-y-4">
          {/* Step Image */}
          <div className="relative w-full h-48 rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow duration-300">
            <Image
              src={step.image}
              alt={step.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Step Title */}
          <h3 className="text-lg font-medium text-gray-900 leading-tight">
            {step.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default function ProcessSection({ className = '' }: { className?: string }) {
  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-600 mb-2">
            About us
          </div>
          <div className="mb-4">
            <span className="text-lg font-medium text-gray-900">fabrica®</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How we launch websites and marketing campaigns.
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our team combines creativity, technology, and strategy to build powerful digital solutions.
          </p>
        </div>
        
        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step) => (
            <ProcessStepComponent key={step.id} step={step} />
          ))}
        </div>
        
        {/* Watch Showreel Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-300 group">
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch showreel
          </button>
          <div className="text-sm text-gray-500 mt-2">(2016-25©)</div>
        </div>
      </div>
    </section>
  );
}
