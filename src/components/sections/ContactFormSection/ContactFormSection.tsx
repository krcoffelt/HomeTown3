'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="text-2xl font-light text-gray-400">Hometown</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Have a project in mind?
            </h2>
          </div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                  Your name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                  E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/30 transition-colors duration-200 resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              <p>
                By submitting, you agree to our{' '}
                <a href="/legal/terms-of-service" className="text-white hover:underline">
                  Terms
                </a>
                {' '}and{' '}
                <a href="/legal/privacy-policy" className="text-white hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
