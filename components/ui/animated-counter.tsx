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
  className
}: AnimatedCounterProps) {
  const displayValue = `${prefix}${value}${suffix}`;

  return (
    <div className={cn("text-6xl font-bold tracking-tight md:text-7xl", className)}>
      {displayValue}
    </div>
  );
}
