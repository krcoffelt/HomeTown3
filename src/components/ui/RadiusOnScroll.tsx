'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

type RadiusOnScrollProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  startRadius?: number;
  endRadius?: number;
  startScale?: number;
};

export default function RadiusOnScroll({
  children,
  className,
  id,
  startRadius = 34,
  endRadius = 0,
  startScale = 0.965,
}: RadiusOnScrollProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [startInset, setStartInset] = useState(36);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  useEffect(() => {
    const updateInset = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setStartInset(12);
      } else if (width < 1024) {
        setStartInset(24);
      } else {
        setStartInset(42);
      }
    };

    updateInset();
    window.addEventListener('resize', updateInset, { passive: true });
    return () => window.removeEventListener('resize', updateInset);
  }, []);

  const smoothedProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.85,
  });

  const inset = useTransform(smoothedProgress, [0, 0.42], [startInset, 0]);
  const radius = useTransform(smoothedProgress, [0, 0.42], [startRadius, endRadius]);
  const scale = useTransform(smoothedProgress, [0, 0.42], [startScale, 1]);
  const shadowAlpha = useTransform(smoothedProgress, [0, 0.42], [0.18, 0]);
  const borderAlpha = useTransform(smoothedProgress, [0, 0.42], [0.12, 0]);
  const clipPath = useMotionTemplate`inset(0px ${inset}px 0px ${inset}px round ${radius}px)`;
  const boxShadow = useMotionTemplate`0 28px 72px rgba(0, 0, 0, ${shadowAlpha})`;
  const borderColor = useMotionTemplate`rgba(12, 12, 12, ${borderAlpha})`;

  return (
    <motion.section
      ref={sectionRef}
      id={id}
      className={className}
      style={
        prefersReducedMotion
          ? {
              clipPath: `inset(0px ${startInset}px 0px ${startInset}px round ${startRadius}px)`,
              WebkitClipPath: `inset(0px ${startInset}px 0px ${startInset}px round ${startRadius}px)`,
              borderRadius: `${startRadius}px`,
              scale: startScale,
              transformOrigin: 'top center',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'rgba(12, 12, 12, 0.12)',
              boxShadow: '0 28px 72px rgba(0, 0, 0, 0.18)',
            }
          : {
              clipPath,
              WebkitClipPath: clipPath,
              borderRadius: radius,
              scale,
              transformOrigin: 'top center',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor,
              boxShadow,
              willChange: 'transform, border-radius, clip-path',
            }
      }
    >
      {children}
    </motion.section>
  );
}
