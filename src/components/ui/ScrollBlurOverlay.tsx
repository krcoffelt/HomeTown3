'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollBlurOverlay() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScrollable = docHeight - windowHeight;
      const progress = Math.min(scrollTop / totalScrollable, 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // More gradual blur intensity - increased overall blur
  const maxBlur = Math.max(8, 20 - scrollProgress * 10);
  
  return (
    <motion.div
      className="fixed inset-x-0 bottom-0 pointer-events-none z-40"
      style={{
        height: '10vh', // 20% of viewport
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Multiple blur layers for gradient effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, rgba(255,255,255,0.1) 0%, transparent 100%)`,
          backdropFilter: `blur(${maxBlur}px)`,
          WebkitBackdropFilter: `blur(${maxBlur}px)`,
          mask: `linear-gradient(to top, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)`,
          WebkitMask: `linear-gradient(to top, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 80%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${maxBlur * 0.6}px)`,
          WebkitBackdropFilter: `blur(${maxBlur * 0.6}px)`,
          mask: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)`,
          WebkitMask: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.1) 70%, transparent 100%)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${maxBlur * 0.3}px)`,
          WebkitBackdropFilter: `blur(${maxBlur * 0.3}px)`,
          mask: `linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`,
          WebkitMask: `linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)`,
        }}
      />
    </motion.div>
  );
}