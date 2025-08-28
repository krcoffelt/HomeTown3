'use client';

import { motion } from 'framer-motion';

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-lg mb-4">Why choose us</p>
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Proven results for every project, with a focus on design and functionality.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Content */}
          <div>
            <p className="text-xl text-gray-300 mb-8">
              Your digital journey begins with a conversation. Let's talk today.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-sm">LT</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Team Lead at fabrica®</p>
                  <h3 className="text-white text-lg font-semibold">Lauren Thompson</h3>
                </div>
              </div>
              <button className="w-full px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
                Let's talk
              </button>
            </div>
          </div>

          {/* Right Side - Stats */}
          <div>
            <div className="space-y-8">
              <div>
                <p className="text-gray-300 text-lg mb-6">
                  No fluff, just results. Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-400">"0"</span>
                    <span className="text-4xl font-light text-gray-400">+</span>
                  </div>
                  <p className="text-2xl font-light text-gray-400 mb-2">"01"</p>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Successful projects completed
                  </h3>
                  <p className="text-gray-300">
                    We've delivered 50+ projects that help companies generate real results.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-400">"0"</span>
                    <span className="text-4xl font-light text-gray-400">"%</span>
                  </div>
                  <p className="text-2xl font-light text-gray-400 mb-2">"02"</p>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Customer satisfaction rate
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
