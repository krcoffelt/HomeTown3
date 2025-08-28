'use client';

import { servicesData } from '../../../data/services';
import { ServiceCard } from '../../../types/services';

const ServiceCardComponent = ({ service }: { service: ServiceCard }) => {
  return (
    <div className="group cursor-pointer transition-all duration-300 hover:scale-[1.02]">
      <div className="relative">
        {/* Service Number */}
        <div className="mb-4 text-sm font-medium text-gray-600">
          ({service.number})
        </div>
        
        {/* Service Content */}
        <div className="space-y-4">
          {/* Service Title and Description */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {service.description}
            </p>
          </div>
          
          {/* Categories */}
          <div className="space-y-2">
            <div className="text-sm font-medium text-gray-700">Categories</div>
            <div className="flex flex-wrap gap-2">
              {service.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                >
                  {category}
                </span>
              ))}
              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium">
                {service.categoryCount}
              </span>
            </div>
          </div>
        </div>
        
        {/* Service Name at Bottom */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <span className="text-lg font-medium text-gray-900">
            {service.title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection({ className = '' }: { className?: string }) {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-gray-600 mb-2">
            What we do
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl font-bold text-gray-900">
              Services.
            </h2>
            <span className="text-lg text-gray-600">(4)</span>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {servicesData.map((service) => (
            <ServiceCardComponent key={service.id} service={service} />
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
