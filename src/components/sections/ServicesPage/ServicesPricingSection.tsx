'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const pricingPlans = {
  'starter': {
    name: 'Starter Package',
    price: '$2,490',
    period: '/project',
    description: 'Perfect for small businesses getting started',
    features: [
      'Website Design & Development',
      'Basic SEO Setup',
      'Social Media Strategy',
      '3 Months Support',
      'Mobile Optimization'
    ],
    popular: false
  },
  'growth': {
    name: 'Growth Package',
    price: '$4,990',
    period: '/project',
    description: 'Ideal for growing businesses ready to scale',
    features: [
      'Everything in Starter',
      'Email Marketing Setup',
      'Advanced SEO Strategy',
      'Social Media Management (3 months)',
      'Brand Identity Package',
      '6 Months Support'
    ],
    popular: true
  },
  'enterprise': {
    name: 'Enterprise Package',
    price: '$9,990',
    period: '/project',
    description: 'Complete solution for established businesses',
    features: [
      'Everything in Growth',
      'E-commerce Development',
      'Advanced Analytics Setup',
      'Full Marketing Automation',
      'Custom Integrations',
      '12 Months Support'
    ],
    popular: false
  }
};

export default function ServicesPricingSection() {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [billingType, setBillingType] = useState<'project' | 'monthly'>('project');

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-medium text-sm">Service pricing</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-2">Pricing.</h2>
            <p className="text-lg text-gray-400">Choose the perfect package for your business</p>
          </div>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setBillingType('project')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                billingType === 'project'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Per Project
            </button>
            <button
              onClick={() => setBillingType('monthly')}
              className={`px-8 py-3 rounded-full transition-all duration-300 text-sm font-medium ${
                billingType === 'monthly'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Monthly Retainer
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(pricingPlans).map(([key, plan], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-black scale-105 border-2 border-white'
                  : 'bg-white/5 border border-white/20 hover:bg-white/10'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-black' : 'text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.popular ? 'text-gray-600' : 'text-gray-400'
                }`}>
                  {plan.description}
                </p>
                <div className="mb-4">
                  <span className={`text-5xl font-bold ${
                    plan.popular ? 'text-black' : 'text-white'
                  }`}>
                    {billingType === 'monthly' ? '$' + (parseInt(plan.price.replace('$', '').replace(',', '')) / 12).toLocaleString() : plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.popular ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {billingType === 'monthly' ? '/month' : plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className={`text-xl ${
                      plan.popular ? 'text-black' : 'text-white'
                    }`}>+</span>
                    <span className={`text-sm ${
                      plan.popular ? 'text-gray-700' : 'text-gray-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full px-6 py-4 rounded-full font-medium transition-all duration-300 ${
                plan.popular
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-4">Need a custom solution?</p>
          <button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-all duration-300">
            Contact for Custom Pricing
          </button>
        </div>
      </div>
    </section>
  );
}