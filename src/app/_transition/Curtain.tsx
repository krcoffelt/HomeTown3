'use client';
import { motion } from 'framer-motion';

export function Curtain() {
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 bg-white pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: [0.44, 0, 0.56, 1] }}
    />
  );
}
