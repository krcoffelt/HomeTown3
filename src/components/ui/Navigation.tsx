'use client';

import Link from 'next/link';
import { NavigationProps } from '@/types/navigation';

export default function Navigation({ items, currentPage, isMobile = false }: NavigationProps) {
  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {items.map((item) => {
        const isActive = currentPage === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative transition-colors duration-200 ${
              isActive
                ? 'text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <span className="flex items-center space-x-2">
              <span>{item.label}</span>
              {item.count && (
                <span className="text-sm text-gray-500">({item.count})</span>
              )}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-100 transition-transform duration-200" />
            )}
            {!isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
