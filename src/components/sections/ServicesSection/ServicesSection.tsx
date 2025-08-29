'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: number;
  number: string;
  title: string;
  description?: string;
  image?: string;
  categories?: string[];
}

const services: Service[] = [
  {
    id: 1,
    number: '(001)',
    title: 'Web design and development',
    description: 'Modern, responsive, and user-friendly websites designed to engage visitors and drive conversions.',
    image: '/images/services/web-design.jpg',
    categories: ['Packaging design', 'Logo design', 'Rebranding', 'Typography', 'Guidelines', 'Visual identity', '6+']
  },
  {
    id: 2,
    number: '(002)',
    title: 'Social media marketing'
  },
  {
    id: 3,
    number: '(003)',
    title: 'SEO and content marketing'
  }
];

export default function ServicesSection({ className = '' }: { className?: string }) {
  const [expandedService, setExpandedService] = useState<number | null>(1);

  const toggleService = (serviceId: number) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className={`py-24 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full"></div>
            </div>
            <span className="text-white font-medium text-sm">What we do</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <h2 className="text-6xl md:text-8xl font-bold text-white">Services.</h2>
              <span className="text-2xl text-gray-400">(4)</span>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div key={service.id} className="border-b border-gray-800 last:border-b-0">
              <button
                type="button"
                onClick={() => toggleService(service.id)}
                className="w-full py-8 flex items-center justify-between hover:bg-white/5 transition-colors duration-300 group"
                aria-expanded={expandedService === service.id}
                aria-controls={`service-panel-${service.id}`}
                id={`service-toggle-${service.id}`}
              >
                <div className="flex items-center gap-8">
                  <span className="text-3xl font-light text-gray-500">{service.number}</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="text-white text-2xl font-light">
                  {expandedService === service.id ? '−' : '+'}
                </div>
              </button>
              
              <AnimatePresence>
                {expandedService === service.id && service.description && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    role="region"
                    id={`service-panel-${service.id}`}
                    aria-labelledby={`service-toggle-${service.id}`}
                  >
                    <div className="pb-8 pl-20">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Service Image */}
                        <div className="lg:col-span-1">
                          <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-200 rounded-2xl flex items-center justify-center">
                            <div className="text-4xl">🔤</div>
                          </div>
                        </div>
                        
                        {/* Service Content */}
                        <div className="lg:col-span-2 space-y-6">
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {service.description}
                          </p>
                          
                          {/* Categories */}
                          <div>
                            <p className="text-gray-400 text-sm mb-3">Categories</p>
                            <div className="flex flex-wrap gap-2">
                              {service.categories?.map((category, index) => (
                                <span
                                  key={index}
                                  className="px-4 py-2 border border-white/30 rounded-full text-white text-sm hover:bg-white/10 transition-colors"
                                >
                                  {category}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
