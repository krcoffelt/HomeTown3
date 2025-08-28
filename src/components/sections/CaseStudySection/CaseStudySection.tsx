'use client';

import { motion } from 'framer-motion';

export default function CaseStudySection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Case study</p>
          <h2 className="text-5xl md:text-6xl font-light mb-4">
            UX/UI Redesign, Frontend Optimization.
          </h2>
          <div className="mb-6">
            <span className="text-2xl font-light text-gray-400">fabrica®</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <a 
              href="https://templifica.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Live website
              <span className="w-4 h-4 bg-black rounded-full"></span>
            </a>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From branding to web development and marketing - We do it all.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Left Side - Performance Results */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Performance Boost:</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Page speed</span>
                  <span className="text-green-400 font-semibold">+48%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Bounce rate</span>
                  <span className="text-red-400 font-semibold">-23%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Conversion Rate Improvement:</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">4.2% → 5.9%</div>
                <p className="text-gray-300">Significant improvement in conversion rates</p>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial & Metrics */}
          <div className="space-y-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "Thanks to the redesign, we've seen a steady 60% increase in leads."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">AS</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Angela Smith</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-white mb-2">"100"</div>
                <p className="text-gray-300 text-sm">Pagespeed score</p>
              </div>
              <p className="text-gray-300 text-center">
                We prioritize performance without sacrificing visual appeal or functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Growth Metrics */}
        <div className="text-center">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl font-bold text-white">"0"</span>
              <span className="text-2xl text-gray-400">K</span>
              <span className="text-2xl text-green-400">+30%</span>
            </div>
            <p className="text-gray-300">Quarterly visits</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+1k</div>
              <div className="text-gray-400 text-sm">Dec</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+1.3k</div>
              <div className="text-gray-400 text-sm">Jan</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+1.1k</div>
              <div className="text-gray-400 text-sm">Feb</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+1.5k</div>
              <div className="text-gray-400 text-sm">Feb</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+2.3k</div>
              <div className="text-gray-400 text-sm">Feb</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">+5.9k</div>
              <div className="text-gray-400 text-sm">Mar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
