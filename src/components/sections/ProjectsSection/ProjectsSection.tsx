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
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-2xl font-light text-gray-400">(27)</span>
            <h2 className="text-5xl md:text-6xl font-light">Projects.</h2>
            <span className="text-2xl font-light text-gray-400">©2025</span>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've helped businesses across industries achieve their goals. Here are some of our recent projects.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-center">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search..."
                value={filterState.search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/20 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={filterState.selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="appearance-none px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/20 transition-colors cursor-pointer pr-10"
              >
                {PROJECT_CATEGORIES.map((category) => (
                  <option key={category} value={category} className="bg-black text-white">
                    {category}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="sync">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-white/90 transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((category) => (
                        <span
                          key={category}
                          className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80 group-hover:bg-white/20 transition-colors"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span>/</span>
                      <span className="text-lg">{project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-400">
              No projects found matching your criteria.
            </p>
            <button
              onClick={() => setFilterState({ search: '', selectedCategory: 'All' })}
              className="mt-4 px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
