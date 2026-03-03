"use client";

import { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type BlurPosition = "top" | "bottom" | "both";

interface ProgressiveBlurProps {
  position?: BlurPosition;
  height?: string;
  width?: string;
  blurLevels?: number[];
  blurIntensity?: number;
  blurAmount?: string;
  backgroundColor?: string;
  className?: string;
  children?: ReactNode;
}

const DESKTOP_LEVELS = [0.5, 1, 2, 4, 8, 12];
const TABLET_LEVELS = [0.5, 1, 2, 4, 6, 8];
const MOBILE_LEVELS = [0.5, 1, 2, 3, 4, 6];

const DESKTOP_HEIGHT = "128px";
const TABLET_HEIGHT = "104px";
const MOBILE_HEIGHT = "84px";

function parseBlurAmount(value?: string): number | null {
  if (!value) return null;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : null;
}

function buildLegacyLevels(maxBlur: number): number[] {
  const multipliers = [0.08, 0.16, 0.28, 0.45, 0.68, 1];
  return multipliers.map((factor) => Number((maxBlur * factor).toFixed(2)));
}

function normalizeBlurLevels(levels: number[]): number[] {
  const sorted = [...levels]
    .map((value) => Number(value))
    .filter((value) => Number.isFinite(value) && value > 0)
    .sort((a, b) => a - b);

  return sorted.length > 0 ? sorted : DESKTOP_LEVELS;
}

export function ProgressiveBlur({
  position = "bottom",
  height,
  width = "100%",
  blurLevels,
  blurIntensity,
  blurAmount,
  backgroundColor = "rgba(8, 12, 20, 0.22)",
  className,
  children
}: ProgressiveBlurProps) {
  const [viewportWidth, setViewportWidth] = useState<number>(1280);
  const [supportsBackdropFilter, setSupportsBackdropFilter] = useState(true);

  useEffect(() => {
    const syncWidth = () => {
      setViewportWidth(window.innerWidth);
    };

    syncWidth();
    window.addEventListener("resize", syncWidth, { passive: true });

    const supportsBackdrop =
      CSS.supports("backdrop-filter: blur(1px)") ||
      CSS.supports("-webkit-backdrop-filter: blur(1px)");
    setSupportsBackdropFilter(supportsBackdrop);

    return () => window.removeEventListener("resize", syncWidth);
  }, []);

  const responsiveDefaults = useMemo(() => {
    if (viewportWidth < 768) {
      return { levels: MOBILE_LEVELS, resolvedHeight: MOBILE_HEIGHT };
    }

    if (viewportWidth < 1024) {
      return { levels: TABLET_LEVELS, resolvedHeight: TABLET_HEIGHT };
    }

    return { levels: DESKTOP_LEVELS, resolvedHeight: DESKTOP_HEIGHT };
  }, [viewportWidth]);

  const resolvedLevels = useMemo(() => {
    if (blurLevels && blurLevels.length > 0) {
      return normalizeBlurLevels(blurLevels);
    }

    const legacyAmount = parseBlurAmount(blurAmount);
    if (legacyAmount) {
      return buildLegacyLevels(legacyAmount);
    }

    if (typeof blurIntensity === "number" && blurIntensity > 0) {
      return buildLegacyLevels(blurIntensity);
    }

    return responsiveDefaults.levels;
  }, [blurAmount, blurIntensity, blurLevels, responsiveDefaults.levels]);

  const resolvedHeight = height ?? responsiveDefaults.resolvedHeight;
  const isBottom = position === "bottom" || position === "both";
  const isTop = position === "top" || position === "both";

  const renderLayerStack = (edge: "top" | "bottom") => {
    if (!supportsBackdropFilter) {
      const fallbackGradient =
        edge === "bottom"
          ? "linear-gradient(to top, rgba(8,12,20,0.34), rgba(8,12,20,0.18) 62%, transparent)"
          : "linear-gradient(to bottom, rgba(8,12,20,0.34), rgba(8,12,20,0.18) 62%, transparent)";

      return (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 select-none"
          style={{
            top: edge === "top" ? 0 : "auto",
            bottom: edge === "bottom" ? 0 : "auto",
            height: resolvedHeight,
            backgroundImage: fallbackGradient
          }}
        />
      );
    }

    const total = resolvedLevels.length;

    return (
      <>
        {resolvedLevels.map((level, index) => {
          // Weak layers extend higher, strong layers stay closer to the edge.
          const coverage = total === 1 ? 100 : 100 - (index / (total - 1)) * 46;
          const edgeSoftness = 86 + ((total - index - 1) / Math.max(1, total - 1)) * 12;
          const mask =
            edge === "bottom"
              ? `linear-gradient(to top, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.08) ${edgeSoftness.toFixed(2)}%, transparent 100%)`
              : `linear-gradient(to bottom, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.72) 36%, rgba(0,0,0,0.35) 68%, rgba(0,0,0,0.08) ${edgeSoftness.toFixed(2)}%, transparent 100%)`;

          return (
            <div
              key={`${edge}-${level}-${index}`}
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 select-none"
              style={{
                top: edge === "top" ? 0 : "auto",
                bottom: edge === "bottom" ? 0 : "auto",
                height: `calc(${resolvedHeight} * ${(coverage / 100).toFixed(4)})`,
                width,
                backgroundColor,
                backdropFilter: `blur(${level}px)`,
                WebkitBackdropFilter: `blur(${level}px)`,
                maskImage: mask,
                WebkitMaskImage: mask
              }}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className={cn("pointer-events-none absolute inset-x-0 select-none", className)}>
      {isTop ? renderLayerStack("top") : null}
      {isBottom ? renderLayerStack("bottom") : null}
      {children}
    </div>
  );
}
