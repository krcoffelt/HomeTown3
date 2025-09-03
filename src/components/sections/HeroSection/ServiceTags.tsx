'use client';

import { motion } from 'framer-motion';

interface ServiceTagsProps {
  services: string[];
  isVisible: boolean;
  singleLine?: boolean; // force tags into one line (with overflow on small widths)
}

export default function ServiceTags({ services, isVisible, singleLine = false }: ServiceTagsProps) {
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

  const containerClasses = [
    "mb-12",
    "flex",
    "justify-center",
    "gap-3",
    "w-full",
    "mx-auto",
    "max-w-6xl",
    singleLine ? "flex-nowrap whitespace-nowrap overflow-x-auto lg:overflow-visible" : "flex-wrap",
  ].join(" ");

  return (
    <motion.div
      className={containerClasses}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {services.map((service, index) => (
        <motion.span
          key={service}
          variants={tagVariants}
          className="px-5 py-2.5 bg-transparent border border-white/30 rounded-full text-white text-sm font-normal hover:bg-white/10 transition-all duration-300"
        >
          {service}
        </motion.span>
      ))}
    </motion.div>
  );
}
