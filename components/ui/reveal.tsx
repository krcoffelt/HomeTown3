"use client";

import { motion } from "framer-motion";
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
  direction: _direction = "up",
  duration = 0.6
}: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={false}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
