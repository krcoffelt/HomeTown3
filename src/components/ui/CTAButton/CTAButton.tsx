'use client';

import { motion } from 'framer-motion';

interface CTAButtonProps {
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ 
  onClick, 
  variant = 'primary', 
  children, 
  className = '' 
}: CTAButtonProps) {
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    tap: { scale: 0.95 }
  };

  const baseClasses = "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 cursor-pointer";
  
  const variantClasses = variant === 'primary' 
    ? "bg-white text-black hover:bg-gray-100" 
    : "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses} ${className}`}
      onClick={onClick}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
}

