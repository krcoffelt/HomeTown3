'use client';

import { motion } from 'framer-motion';

interface ServiceTagsProps {
  services: string[];
  isVisible: boolean;
}

export default function ServiceTags({ services, isVisible }: ServiceTagsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="mb-16 flex flex-wrap justify-center gap-4"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {services.map((service, index) => (
        <motion.span
          key={service}
          variants={tagVariants}
          className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-all duration-300 cursor-pointer"
        >
          {service}
        </motion.span>
      ))}
    </motion.div>
  );
}
