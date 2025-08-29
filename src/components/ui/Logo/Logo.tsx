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
        <div className="flex items-center justify-center mb-2">
          <span className="text-5xl md:text-7xl lg:text-8xl font-bold text-white">Hometown</span>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-2xl font-bold text-black">Hometown</span>
    </div>
  );
}
