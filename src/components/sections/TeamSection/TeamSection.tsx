'use client';

import React from 'react';
import { TeamMember } from '@/types/team';
import Image from 'next/image';

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <p className="text-2xl font-bold text-gray-900 mb-4">fabrica®</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The faces behind the projects.
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-lg text-gray-700 mb-4">
              Be part of our mission
            </p>
            <p className="text-lg text-gray-700 mb-6">
              If you're ready to create and collaborate, we'd love to hear from you.
            </p>
            <a 
              href="mailto:hello@fabrica.com"
              className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Apply now
            </a>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe great work comes <span className="font-semibold">from collaboration.</span> That's why we work closely with each other to ensure every project meets your goals and exceeds expectations.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="text-center group"
            >
              {/* Member Image */}
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Member Info */}
              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-1">
                  {member.role}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  at fabrica®
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
