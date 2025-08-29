'use client';

import { motion } from 'framer-motion';

const servicesStats = [
  {
    id: 1,
    number: '50+',
    label: 'Websites launched and optimized'
  },
  {
    id: 2,
    number: '200+',
    label: 'Marketing campaigns executed'
  },
  {
    id: 3,
    number: '95%',
    label: 'Client retention rate'
  },
  {
    id: 4,
    number: '3x',
    label: 'Average ROI increase for clients'
  }
];

export default function ServicesOverviewSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {servicesStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-black mb-6">
                {stat.number}
              </div>
              <p className="text-gray-600 leading-tight text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="text-center max-w-4xl mx-auto space-y-10">
          <div>
            <span className="text-3xl font-bold text-black mb-6 block">Our Services Impact</span>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Every service we deliver is designed to create lasting value and drive measurable results.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Our approach combines <span className="font-semibold text-black">strategic thinking</span> with <span className="font-semibold text-black">creative execution</span>, 
              ensuring that every service delivers maximum impact for your business goals and long-term growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From initial consultation to final delivery, we maintain transparent communication and deliver 
              solutions that exceed expectations while staying true to your brand vision.
            </p>
          </div>
        </div>

        {/* Services Preview Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Web Development',
              description: 'Custom, responsive websites built for performance',
              icon: '🚀'
            },
            {
              title: 'Social Marketing',
              description: 'Strategic campaigns that build community',
              icon: '📱'
            },
            {
              title: 'SEO Strategy',
              description: 'Data-driven optimization for search visibility',
              icon: '📈'
            },
            {
              title: 'Brand Identity',
              description: 'Cohesive visual systems that tell your story',
              icon: '🎨'
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}