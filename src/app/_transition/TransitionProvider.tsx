'use client';

import { AnimatePresence, MotionConfig, motion, useAnimationControls } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState, startTransition } from 'react';
import * as React from 'react';
import { createPortal } from 'react-dom';

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

const TransitionContext = React.createContext<{ navigate: (href: string) => void } | null>(null);

export function usePageTransition() {
  return React.useContext(TransitionContext);
}

export default function TransitionProvider({ children, className, id }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const phaseRef = useRef<'idle' | 'cover' | 'reveal'>('idle');

  // Motion controls for page wrapper and single curtain
  const pageControls = useAnimationControls();
  const curtainControls = useAnimationControls();

  // Jump to top after each route change (Framer sites do this)
  useEffect(() => {
    const id = requestAnimationFrame(() => window.scrollTo(0, 0));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  // Mark mounted so we can safely access document in portal
  useEffect(() => {
    setMounted(true);
  }, []);

  // Page wrapper base variants; actual movement driven by controls
  const pageVariants = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 1, y: 0 },
  } as const;

  const merged = ['min-h-[60vh] bg-transparent pt-20', className].filter(Boolean).join(' ');

  // Programmatic navigation to orchestrate cover -> push -> reveal
  const navigate = React.useCallback(async (href: string) => {
    if (href === pathname || isTransitioning) return;
    setIsTransitioning(true);
    phaseRef.current = 'cover';

    // Reset curtain to bottom and page to rest
    await Promise.all([
      curtainControls.set({ y: '100%' }),
      pageControls.set({ y: 0 }),
    ]);

    // Cover: current page slides up as curtain wipes up
    await Promise.all([
      pageControls.start({ y: -80, transition: { duration: 0.4, ease: [0.44, 0, 0.56, 1] } }),
      curtainControls.start({ y: '0%', transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] } }),
    ]);

    // After fully covered, navigate
    startTransition(() => router.push(href));
  }, [pathname, isTransitioning, pageControls, curtainControls, router]);

  // On route change during a transition: reveal and bring the new page up
  useEffect(() => {
    if (!isTransitioning || phaseRef.current !== 'cover') return;
    phaseRef.current = 'reveal';

    let cancelled = false;
    (async () => {
      await pageControls.set({ y: 120 });
      await Promise.all([
        curtainControls.start({ y: '-100%', transition: { delay: 0.1, duration: 0.5, ease: [0.83, 0, 0.17, 1] } }),
        pageControls.start({ y: 0, transition: { delay: 0.25, duration: 0.7, ease: [0.44, 0, 0.56, 1] } }),
      ]);
      if (!cancelled) {
        await Promise.all([
          curtainControls.set({ y: '100%' }),
          pageControls.set({ y: 0 }),
        ]);
        phaseRef.current = 'idle';
        setIsTransitioning(false);
      }
    })();

    return () => { cancelled = true; };
  }, [pathname]);

  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.5, ease: [0.44, 0.0, 0.56, 1.0] }} // Framer-like easing
    >
      <TransitionContext.Provider value={{ navigate }}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={pathname}
            data-qa="transition-wrapper"
            initial="initial"
            animate={pageControls}
            exit="exit"
            variants={pageVariants}
            className={merged}
            id={id}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        {/* Single full-screen curtain controlled imperatively (client-only) */}
        {mounted && typeof document !== 'undefined' && createPortal(
          <motion.div
            aria-hidden
            className="fixed inset-0 z-[9999] bg-black pointer-events-none"
            initial={{ y: '100%' }}
            animate={curtainControls}
          />,
          document.body
        )}
      </TransitionContext.Provider>
    </MotionConfig>
  );
}
