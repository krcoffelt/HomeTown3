'use client';

import { motion } from 'framer-motion';
import { TeamMember } from '@/types/hero';

interface TeamSpotlightProps {
  teamMember: TeamMember;
  onContactClick: () => void;
}

export default function TeamSpotlight({ teamMember, onContactClick }: TeamSpotlightProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
    >
      <div className="mb-4">
        <p className="text-white/70 text-sm font-medium">{teamMember.role}</p>
        <h3 className="text-white text-lg font-semibold">{teamMember.name}</h3>
      </div>
      
      <button
        onClick={onContactClick}
        className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        Let's talk
      </button>
    </motion.div>
  );
}
