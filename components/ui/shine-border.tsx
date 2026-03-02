import { cn } from "@/lib/utils/cn";

interface ShineBorderProps {
  className?: string;
  borderWidth?: number;
  duration?: number;
  shineColor?: string[];
}

export function ShineBorder({
  className,
  borderWidth = 1,
  duration = 12,
  shineColor = ["#7da7ff", "#6ae8f4", "#c3abff"]
}: ShineBorderProps) {
  const gradient = `conic-gradient(from 0deg, ${shineColor.join(", ")})`;

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        "[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [mask-composite:exclude]",
        "[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] [-webkit-mask-composite:xor]",
        className
      )}
      style={{
        padding: `${borderWidth}px`,
        backgroundImage: gradient,
        animation: `spin ${duration}s linear infinite`
      }}
    />
  );
}
