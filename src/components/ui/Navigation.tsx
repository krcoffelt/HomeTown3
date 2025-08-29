'use client';

import Link from 'next/link';
import * as React from 'react';
import { usePageTransition } from '@/app/_transition/TransitionProvider';
import { NavigationProps } from '@/types/navigation';

export default function Navigation({ items, currentPage, isMobile = false }: NavigationProps) {
  const transition = usePageTransition();
  return (
    <nav className={`${isMobile ? 'flex flex-col space-y-4' : 'flex items-center space-x-8'}`}>
      {items.map((item) => {
        const isActive = currentPage === item.href;
        const onClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
          if (!transition) return; // fallback to default
          if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return; // allow new tabs
          e.preventDefault();
          transition.navigate(item.href);
        };
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`group relative transition-colors duration-200 ${
              isActive
                ? 'text-black'
                : 'text-gray-600 hover:text-black'
            }`}
            aria-current={isActive ? 'page' : undefined}
            onClick={onClick}
          >
            <span className="flex items-center space-x-2">
              <span>{item.label}</span>
              {item.count && (
                <span className="text-sm text-gray-500">({item.count})</span>
              )}
            </span>
            {isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform scale-x-100 transition-transform duration-200" />
            )}
            {!isActive && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
