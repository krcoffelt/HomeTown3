'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project, FilterState, PROJECT_CATEGORIES, SAMPLE_PROJECTS } from '@/types/projects';

export default function ProjectsSection() {
  // Filter state management
  const [filterState, setFilterState] = useState<FilterState>({
    search: '',
    selectedCategory: 'All'
  });

  // Filter persistence
  useEffect(() => {
    const savedFilters = localStorage.getItem('projectFilters');
    if (savedFilters) {
      setFilterState(JSON.parse(savedFilters));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('projectFilters', JSON.stringify(filterState));
  }, [filterState]);

  // Advanced filtering and search logic
  const filteredProjects = useMemo(() => {
    let filtered = SAMPLE_PROJECTS.filter(project => {
      // Search filter
      if (filterState.search && 
          !project.name.toLowerCase().includes(filterState.search.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (filterState.selectedCategory !== 'All' && 
          !project.categories.includes(filterState.selectedCategory)) {
        return false;
      }
      
      return true;
    });
    
    return filtered;
  }, [filterState]);

  // Handle filter changes
  const handleSearchChange = (value: string) => {
    setFilterState(prev => ({ ...prev, search: value }));
  };

  const handleCategoryChange = (category: string) => {
    setFilterState(prev => ({ ...prev, selectedCategory: category }));
  };

  // Handle project click
  const handleProjectClick = (project: Project) => {
    // For now, just log the click - in a real app this would navigate
    console.log('Project clicked:', project.name);
    // window.open(project.url, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="relative mb-16">
          {/* Project Count - Top Left */}
          <div className="absolute top-0 left-0">
            <span className="text-lg text-gray-600">(27)</span>
          </div>
          
          {/* Main Heading - Center */}
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-bold text-black mb-2">Projects.</h2>
            <p className="text-lg text-gray-600">©2025</p>
          </div>
          
          {/* Description - Top Right */}
          <div className="absolute top-0 right-0 max-w-sm hidden lg:block">
            <p className="text-gray-600 leading-relaxed">
              We've helped businesses across industries achieve their goals. Here are some of our recent projects.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Boltshift Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100 to-amber-200 aspect-[4/3] flex items-center justify-center">
              {/* Project Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-100"></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Project Content */}
              <div className="relative z-10 text-center text-white">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">⚡</span>
                  </div>
                  <span className="text-2xl font-bold">Boltshift</span>
                </div>
              </div>
              
              {/* Top metadata */}
              <div className="absolute top-6 left-6">
                <span className="text-black font-medium">Boltshift.</span>
              </div>
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-6 right-20">
                <span className="text-gray-700 text-sm">/2025</span>
              </div>
            </div>
          </div>
          
          {/* Ephemeral Project */}
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-100 to-cyan-200 aspect-[4/3] flex items-center justify-center">
              {/* Project Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-100"></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Project Content */}
              <div className="relative z-10 text-center text-white">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black font-bold text-lg">🔗</span>
                  </div>
                  <span className="text-2xl font-bold">Ephemeral</span>
                </div>
              </div>
              
              {/* Top metadata */}
              <div className="absolute top-6 left-6">
                <span className="text-black font-medium">Ephemeral.</span>
              </div>
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-6 right-20">
                <span className="text-gray-700 text-sm">/2025</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
