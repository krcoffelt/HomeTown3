'use client';

import { motion } from 'framer-motion';

const serviceTestimonials = [
  {
    id: 1,
    type: 'result',
    stat: '300%',
    description: 'Increase in organic traffic after our SEO service implementation',
    client: 'TechStart Inc.'
  },
  {
    id: 2,
    type: 'testimonial',
    name: 'Sarah Mitchell',
    company: 'GrowthCo',
    avatar: 'SM',
    rating: 5,
    quote: 'Their email marketing campaigns transformed our customer engagement. We saw a 40% increase in conversions within the first month.',
    service: 'Email Marketing'
  },
  {
    id: 3,
    type: 'testimonial',
    name: 'Marcus Johnson',
    company: 'InnovateLab',
    avatar: 'MJ',
    rating: 5,
    quote: 'The website they built exceeded our expectations. Modern, fast, and perfectly aligned with our brand vision.',
    service: 'Web Development'
  },
  {
    id: 4,
    type: 'company',
    brand: 'Hometown services',
    clientCount: '200+',
    rating: 5,
    trustText: 'Successful service deliveries',
    highlight: '98% satisfaction rate'
  },
  {
    id: 5,
    type: 'testimonial',
    name: 'Elena Rodriguez',
    company: 'BrandBuilder Co',
    avatar: 'ER',
    rating: 5,
    quote: 'Our complete brand transformation was seamless. The new identity perfectly captures who we are and where we\'re going.',
    service: 'Branding'
  },
  {
    id: 6,
    type: 'result',
    stat: '150%',
    description: 'ROI improvement through strategic social media campaigns',
    client: 'RetailPlus'
  }
];

const StarRating = ({ rating, color = 'orange' }: { rating: number; color?: string }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-${color}-400 ${i < rating ? 'opacity-100' : 'opacity-30'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function ServicesTestimonialsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Section Indicator - Top Left */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-black font-medium text-sm">Service results</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-2">Results.</h2>
            <p className="text-lg text-gray-600">Real outcomes from our service partnerships</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${
                testimonial.type === 'result' ? 'bg-gradient-to-br from-black to-gray-800 text-white' : ''
              }`}
            >
              {/* Result Card */}
              {testimonial.type === 'result' && (
                <>
                  <div className="mb-6">
                    <div className="text-5xl font-bold text-white mb-2">{testimonial.stat}</div>
                    <p className="text-gray-300 leading-relaxed text-base">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="text-sm text-gray-400">
                    — {testimonial.client}
                  </div>
                </>
              )}

              {/* Company Info Card */}
              {testimonial.type === 'company' && (
                <>
                  <div className="mb-6">
                    <span className="text-xl font-bold text-black">{testimonial.brand}</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{String.fromCharCode(65 + i)}</span>
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium text-black">{testimonial.clientCount}</span>
                  </div>
                  
                  <StarRating rating={testimonial.rating!} />
                  <p className="text-sm text-gray-600 mt-3 mb-4">{testimonial.trustText}</p>
                  <div className="text-lg font-semibold text-black mb-4">{testimonial.highlight}</div>
                  
                  <button className="w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors duration-300 font-medium">
                    View Case Studies
                  </button>
                </>
              )}

              {/* Testimonial Card */}
              {testimonial.type === 'testimonial' && (
                <>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-black">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.company}</p>
                      </div>
                    </div>
                    <span className="text-2xl font-light">+</span>
                  </div>
                  
                  <StarRating rating={testimonial.rating!} />
                  <p className="text-gray-700 mt-4 mb-4 leading-relaxed text-base">
                    {testimonial.quote}
                  </p>
                  
                  <div className="text-sm text-blue-600 font-medium">
                    {testimonial.service} Service
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
