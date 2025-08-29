'use client';

import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface RatingDisplayProps {
  rating: number;
  maxRating?: number;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function RatingDisplay({ 
  rating, 
  maxRating = 5, 
  showText = true, 
  size = 'md',
  className = '' 
}: RatingDisplayProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = maxRating - fullStars - (hasHalfStar ? 1 : 0);

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star 
          key={`full-${i}`} 
          className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} 
        />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <StarHalf 
          key="half" 
          className={`${sizeClasses[size]} fill-yellow-400 text-yellow-400`} 
        />
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star 
          key={`empty-${i}`} 
          className={`${sizeClasses[size]} text-gray-300`} 
        />
      );
    }

    return stars;
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Star Rating */}
      <div className="flex items-center gap-1">
        {renderStars()}
      </div>
      
      {/* Rating Text */}
      {showText && (
        <div className="flex items-center gap-1">
          <span className={`font-bold text-gray-900 ${textSizeClasses[size]}`}>
            {rating.toFixed(1)}
          </span>
          <span className={`text-gray-600 ${textSizeClasses[size]}`}>
            /{maxRating}
          </span>
        </div>
      )}
    </div>
  );
}
