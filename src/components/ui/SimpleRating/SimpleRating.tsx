'use client';

import React from 'react';

interface SimpleRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export default function SimpleRating({ 
  rating, 
  maxRating = 5, 
  className = '' 
}: SimpleRatingProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-5xl font-bold text-white">
        {rating.toFixed(1)}
      </span>
      <span className="text-2xl text-gray-400">
        /{maxRating}
      </span>
    </div>
  );
}
