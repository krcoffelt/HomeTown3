"use client";

import { useEffect, useMemo, useRef, useState } from "react";
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
  duration = 2,
  className
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const totalFrames = Math.max(1, Math.round(duration * 60));
    const increment = Math.max(1, Math.floor(value / 60));
    let frame = 0;

    const interval = window.setInterval(() => {
      frame += 1;
      setCurrent((prev) => {
        if (frame >= totalFrames) {
          window.clearInterval(interval);
          return value;
        }
        return Math.min(value, prev + increment);
      });
    }, 1000 / 60);

    return () => window.clearInterval(interval);
  }, [duration, started, value]);

  const displayValue = useMemo(() => `${prefix}${current}${suffix}`, [current, prefix, suffix]);

  return (
    <div ref={ref} className={cn("text-6xl font-bold tracking-tight md:text-7xl", className)}>
      {displayValue}
    </div>
  );
}
