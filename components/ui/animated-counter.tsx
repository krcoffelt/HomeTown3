"use client";

import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils/cn";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.2,
  className
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      motionValue.set(value);
      return;
    }

    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1]
    });

    return () => controls.stop();
  }, [duration, isInView, motionValue, prefersReducedMotion, value]);

  return (
    <div ref={ref} className={cn("text-6xl font-bold tracking-tight md:text-7xl", className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </div>
  );
}
