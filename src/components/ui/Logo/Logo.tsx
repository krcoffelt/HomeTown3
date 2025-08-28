'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  variant: 'header' | 'hero';
  animate?: boolean;
  className?: string;
}

export default function Logo({ variant, animate = false, className = '' }: LogoProps) {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  if (variant === 'hero') {
    return (
      <motion.div
        className={`text-center ${className}`}
        variants={animate ? logoVariants : {}}
        initial={animate ? "hidden" : "visible"}
        animate={animate ? "visible" : "visible"}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">fabrica</span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">®</span>
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">Studio</div>
      </motion.div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-2xl font-bold text-white">fabrica</span>
      <span className="text-2xl font-bold text-white">®</span>
    </div>
  );
}

