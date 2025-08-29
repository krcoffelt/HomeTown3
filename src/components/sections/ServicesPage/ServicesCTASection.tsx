'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ServicesCTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="services-cta" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">Get started</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-6">Contact.</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business? Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="seo-content">SEO & Content Marketing</option>
                    <option value="email-marketing">Email Marketing</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Send Project Inquiry
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side - Contact Info & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-black mb-6">Let's discuss your project</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl">📧</span>
                  <div>
                    <p className="font-medium text-black">Email</p>
                    <p className="text-gray-600">services@hometown.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl">📞</span>
                  <div>
                    <p className="font-medium text-black">Phone</p>
                    <p className="text-gray-600">(312) 555-2468</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-black text-xl">⏰</span>
                  <div>
                    <p className="font-medium text-black">Response Time</p>
                    <p className="text-gray-600">Within 24 hours</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full px-6 py-3 border border-black text-black rounded-xl hover:bg-black hover:text-white transition-colors duration-300 font-medium">
                Schedule a Call
              </button>
            </div>

            {/* Why Choose Us */}
            <div>
              <h4 className="text-xl font-bold text-black mb-4">Why choose our services?</h4>
              <ul className="space-y-3">
                {[
                  'Free initial consultation and strategy session',
                  'Transparent pricing with no hidden fees',
                  'Dedicated project manager for your account',
                  'Regular progress updates and reporting',
                  'Post-launch support and optimization'
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="text-black text-lg font-light">+</span>
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
