"use client";

import { useEffect, useId, useRef } from "react";

type Props = {
  className?: string;
  jsonPath?: string; // path under public/, e.g. /unicorn/hero.json
  projectId?: string; // Unicorn embed id
  dpi?: number;
  scale?: number;
  lazy?: boolean;
  production?: boolean;
};

export default function UnicornEmbed({ className = "", jsonPath, projectId, dpi = 1.5, scale = 1, lazy = false, production = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<any | null>(null);

  useEffect(() => {
    let destroyed = false;
    const init = async () => {
      // Wait for script to be available
      for (let i = 0; i < 200 && !(window as any).UnicornStudio; i++) {
        await new Promise((r) => setTimeout(r, 50)); // up to ~10s
      }
      if (destroyed || !(window as any).UnicornStudio) return;

      // Give layout time so container has concrete size
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      if (ref.current) {
        try {
          // Avoid duplicate scenes on re-mounts
          const existing = (window as any).UnicornStudio?.scenes?.find?.(
            (s: any) => s?.element?.id === ref.current!.id
          );
          if (existing) {
            sceneRef.current = existing;
            return;
          }

          // Prefer programmatic addScene for both modes
          const params: any = {
            elementId: ref.current.id,
            dpi,
            scale,
            fps: 60,
            lazyLoad: lazy,
            production,
            fixed: false,
            interactivity: { mouse: { disableMobile: true, disabled: false } },
            includeLogo: false,
          };
          if (projectId) params.projectId = projectId;
          if (jsonPath) params.filePath = jsonPath;
          const scene = await (window as any).UnicornStudio.addScene?.(params);
          sceneRef.current = scene || null;
          return;
        } catch (e) {
          // fall through to declarative init
        }
      }

      // Declarative path
      try {
        await (window as any).UnicornStudio.init?.();
      } catch (e) {}
    };
    init();
    return () => {
      destroyed = true;
      try {
        // Clean up scene to free GPU resources on unmount
        sceneRef.current?.destroy?.();
        sceneRef.current = null;
      } catch {}
    };
  }, [jsonPath, dpi, scale, lazy, projectId]);

  // Stable id across SSR/CSR to avoid hydration mismatch
  const reactId = useId();
  const id = useRef(`unicorn-hero-${reactId}`).current;

  return (
    <div
      id={id}
      ref={ref}
      className={`unicorn-embed ${className}`}
      style={{ width: "100%", height: "100%" }}
      {...(projectId
        ? { "data-us-project": projectId }
        : { "data-us-project-src": jsonPath })}
      data-us-scale={String(scale)}
      data-us-dpi={String(dpi)}
      data-us-lazyload={String(lazy)}
      data-us-disablemobile="true"
      data-us-disablemouse="false"
      aria-label="Animated background canvas"
    />
  );
}
