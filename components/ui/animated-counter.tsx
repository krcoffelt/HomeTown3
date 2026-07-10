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
  duration: _duration = 1.2,
  className
}: AnimatedCounterProps) {
  return (
    <div className={cn("text-6xl font-bold tracking-tight md:text-7xl", className)}>
      {prefix}
      <span>{value}</span>
      {suffix}
    </div>
  );
}
