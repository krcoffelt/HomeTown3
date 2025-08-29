'use client';

import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: 'Lauren Thompson',
    role: 'Team Lead',
    company: 'at Hometown',
    image: '/images/team/lauren-thompson.jpg',
    cardStyle: 'light'
  },
  {
    id: 2,
    name: 'Michael Wilson', 
    role: 'Full Stack Developer',
    company: 'at Hometown',
    image: '/images/team/michael-wilson.jpg',
    cardStyle: 'dark'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    company: 'at Hometown', 
    image: '/images/team/sarah-johnson.jpg',
    cardStyle: 'light'
  },
  {
    id: 4,
    name: 'Christopher Miller',
    role: 'UX/UI Designer',
    company: 'at Hometown',
    image: '/images/team/christopher-miller.jpg',
    cardStyle: 'dark'
  }
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-black mb-4 block">Hometown</span>
              <h2 className="text-4xl md:text-6xl font-bold text-black mb-8 leading-tight">
                The faces behind<br />the projects.
              </h2>
            </div>

            {/* Plus symbols decorative elements */}
            <div className="relative">
              <div className="absolute -top-8 -left-4 text-gray-300 text-2xl">+</div>
              <div className="absolute -top-12 left-32 text-gray-300 text-2xl">+</div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Be part of our mission</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  If you're ready to create and collaborate, we'd love to hear from you.
                </p>
                <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300 font-medium">
                  Apply now
                </button>
              </div>

              <div>
                <p className="text-gray-600 leading-relaxed">
                  We believe great work comes <span className="font-semibold text-black">from collaboration.</span> That's why we work 
                  closely with each other to ensure every project meets your goals and exceeds expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Team Grid */}
          <div className="grid grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`
                  rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative
                  ${member.cardStyle === 'dark' 
                    ? 'bg-black text-white' 
                    : 'bg-white text-black'
                  }
                `}>
                  {/* Plus Icon */}
                  <div className={`absolute top-6 right-6 text-xl font-light ${
                    member.cardStyle === 'dark' ? 'text-white' : 'text-black'
                  }`}>
                    +
                  </div>

                  {/* Member Image Placeholder */}
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-gray-500 text-sm font-medium">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Member Info */}
                  <div className="space-y-1">
                    <p className={`text-sm ${
                      member.cardStyle === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {member.role}
                    </p>
                    <p className={`text-sm ${
                      member.cardStyle === 'dark' ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {member.company}
                    </p>
                    <h3 className={`text-lg font-semibold pt-2 ${
                      member.cardStyle === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                      {member.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
