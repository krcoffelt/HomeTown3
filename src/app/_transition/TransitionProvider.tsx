'use client';

import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as React from 'react';

/**
 * Fabrica-like route transition:
 * - Cross-fade + slight vertical slide
 * - White backdrop during fade
 * - Persistent header (place outside this wrapper)
 * - Respects prefers-reduced-motion
 *
 * Props accept common <main> attributes so we can preserve existing classes/ids.
 */
type Props = React.PropsWithChildren<{
  className?: string;
  id?: string;
}>;

export default function TransitionProvider({ children, className, id }: Props) {
  const pathname = usePathname();

  // Jump to top after each route change (Framer sites do this)
  useEffect(() => {
    const id = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  const variants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -40 },
  };

  const merged = ['min-h-[60vh] bg-white', className].filter(Boolean).join(' ');

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.5, ease: [0.44, 0.0, 0.56, 1.0] }} // Framer-like easing
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          className={merged}
          id={id}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </MotionConfig>
  );
}
