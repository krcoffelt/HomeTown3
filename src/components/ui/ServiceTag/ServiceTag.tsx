'use client';

import { motion } from 'framer-motion';
import { serviceTagVariants } from '@/lib/animations/heroAnimations';
import { ServiceTagProps } from '@/types/hero';

export default function ServiceTag({ service, index, isVisible }: ServiceTagProps) {
  return (
    <motion.div
      className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm md:text-base backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer"
      variants={serviceTagVariants}
      custom={index}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.4)"
      }}
      transition={{ duration: 0.2 }}
    >
      {service}
    </motion.div>
  );
}

