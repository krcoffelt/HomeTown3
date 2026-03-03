import { cn } from "@/lib/utils/cn";

type BlurPosition = "top" | "bottom" | "left" | "right";

interface ProgressiveBlurProps {
  position?: BlurPosition;
  height?: string;
  width?: string;
  blurIntensity?: number;
  className?: string;
}

export function ProgressiveBlur({
  position = "bottom",
  height = "35%",
  width = "100%",
  blurIntensity = 14,
  className
}: ProgressiveBlurProps) {
  const isVertical = position === "top" || position === "bottom";
  const direction =
    position === "top"
      ? "to bottom"
      : position === "bottom"
        ? "to top"
        : position === "left"
          ? "to right"
          : "to left";

  const style = {
    backdropFilter: `blur(${blurIntensity}px)`,
    WebkitBackdropFilter: `blur(${blurIntensity}px)`,
    backgroundImage: `linear-gradient(${direction}, rgba(5,7,11,0.65), rgba(5,7,11,0.36) 45%, rgba(5,7,11,0))`,
    ...(isVertical ? { height, width: "100%" } : { width, height: "100%" })
  };

  const placement = {
    top: "inset-x-0 top-0",
    bottom: "inset-x-0 bottom-0",
    left: "inset-y-0 left-0",
    right: "inset-y-0 right-0"
  };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute z-20", placement[position], className)}
      style={style}
    />
  );
}
