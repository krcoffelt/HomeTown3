'use client';

import { type ReactNode, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

type RadiusOnScrollProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  minRadius?: number;
  maxRadius?: number;
};

export default function RadiusOnScroll({
  children,
  className,
  id,
  minRadius = 0,
  maxRadius = 34,
}: RadiusOnScrollProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    mass: 0.24,
  });

  const radiusProgress = useTransform(smoothedProgress, [0, 0.9], [minRadius, maxRadius]);
  const radius = useTransform(radiusProgress, (value) => `${value}px`);

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      style={
        prefersReducedMotion
          ? {
              borderBottomLeftRadius: `${maxRadius}px`,
              borderBottomRightRadius: `${maxRadius}px`,
            }
          : {
              borderBottomLeftRadius: radius,
              borderBottomRightRadius: radius,
            }
      }
    >
      {children}
    </motion.section>
  );
}
