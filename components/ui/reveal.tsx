"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: Direction;
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const offset = {
    up: { y: 22 },
    down: { y: -22 },
    left: { x: 22 },
    right: { x: -22 },
    none: {}
  }[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={prefersReducedMotion ? false : { opacity: 0, ...offset }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
