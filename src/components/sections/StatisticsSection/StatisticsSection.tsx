'use client';

import React from 'react';
import { Statistic } from '@/types/statistics';

interface StatisticsSectionProps {
  statistics: Statistic[];
}

export default function StatisticsSection({ statistics }: StatisticsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((statistic) => (
            <div 
              key={statistic.id} 
              className="text-center"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-gray-900">
                  {statistic.prefix && <span>{statistic.prefix}</span>}
                  {statistic.number}
                  {statistic.suffix && <span>{statistic.suffix}</span>}
                </span>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {statistic.label}
              </p>
              {statistic.description && (
                <p className="text-xs text-gray-500 mt-2">
                  {statistic.description}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Content */}
        <div className="mt-16 text-center">
          <div className="mb-8">
            <p className="text-2xl font-bold text-gray-900 mb-4">fabrica®</p>
            <p className="text-lg text-gray-700">
              Every project we take on is designed for long-term success.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our approach is <span className="font-semibold">"simple:"</span> we focus <span className="font-semibold">"on"</span> functionality, speed, and clarity, ensuring that every project serves a clear purpose without unnecessary complexity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't overpromise or use flashy marketing language. We simply build well-designed, functional websites and strategies that help businesses succeed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
