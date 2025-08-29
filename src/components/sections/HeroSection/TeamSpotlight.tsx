'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { TeamMember } from '@/types/hero';

interface TeamSpotlightProps {
  teamMember: TeamMember;
  onContactClick: () => void;
}

export default function TeamSpotlight({ teamMember, onContactClick }: TeamSpotlightProps) {
  const initials = useMemo(() => {
    const parts = teamMember.name.split(' ').filter(Boolean);
    return parts.slice(0, 2).map(p => p[0]).join('').toUpperCase();
  }, [teamMember.name]);
  return (
    <motion.div
      className="bg-white rounded-2xl p-4 shadow-lg max-w-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      {/* Profile Section */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-sm">{initials}</span>
        </div>
        <div className="text-left">
          <p className="text-gray-600 text-xs">Team Lead</p>
          <h3 className="text-black font-semibold text-sm">{teamMember.name}</h3>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="space-y-2">
        <button
          onClick={onContactClick}
          className="w-full px-4 py-2 bg-black text-white font-medium rounded-full text-sm hover:bg-gray-800 transition-colors duration-200"
        >
          Let's talk
        </button>
      </div>
    </motion.div>
  );
}
