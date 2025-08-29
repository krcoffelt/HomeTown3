'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Newsletter */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Newsletter</h3>
                <p className="text-gray-300 leading-relaxed">
                  Join our newsletter and stay updated on the latest trends in digital design.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email *"
                    required
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Right Side - Contact Info & Mission */}
            <div className="space-y-8">
              <div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Whether you're looking to build a stunning website, boost your brand, or drive measurable results, we're here to help.
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
