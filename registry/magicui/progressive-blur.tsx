import { cn } from "@/lib/utils/cn";

type BlurPosition = "top" | "bottom" | "left" | "right";

interface ProgressiveBlurProps {
  position?: BlurPosition;
  height?: string;
  width?: string;
  blurIntensity?: number;
  blurAmount?: string;
  backgroundColor?: string;
  className?: string;
}

export function ProgressiveBlur({
  position = "bottom",
  height = "35%",
  width = "100%",
  blurIntensity = 14,
  blurAmount,
  backgroundColor = "#05070b",
  className
}: ProgressiveBlurProps) {
  const isVertical = position === "top" || position === "bottom";
  const resolvedBlurAmount = blurAmount ?? `${blurIntensity}px`;
  const isTop = position === "top";
  const isBottom = position === "bottom";

  const background =
    isTop
      ? `linear-gradient(to top, transparent, ${backgroundColor})`
      : isBottom
        ? `linear-gradient(to bottom, rgba(5,7,11,0), rgba(5,7,11,0.18) 36%, ${backgroundColor})`
        : `linear-gradient(to right, transparent, ${backgroundColor})`;

  const maskImage =
    isTop
      ? `linear-gradient(to bottom, ${backgroundColor} 50%, transparent)`
      : isBottom
        ? "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.94) 26%, rgba(0,0,0,0.78) 52%, rgba(0,0,0,0.46) 74%, rgba(0,0,0,0.2) 88%, rgba(0,0,0,0) 100%)"
        : undefined;

  const style = {
    backdropFilter: `blur(${resolvedBlurAmount})`,
    WebkitBackdropFilter: `blur(${resolvedBlurAmount})`,
    background,
    maskImage,
    WebkitMaskImage: maskImage,
    opacity: 1,
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
