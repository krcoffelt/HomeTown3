"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({ children, className, strength = 0.3 }: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 350, damping: 15, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 350, damping: 15, mass: 0.5 });

  return (
    <motion.div
      className={cn("inline-flex", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        x.set(offsetX * strength);
        y.set(offsetY * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
