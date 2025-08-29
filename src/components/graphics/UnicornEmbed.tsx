'use client';

import { useEffect, useId, useRef } from 'react';

type Props = {
  className?: string;
  jsonPath?: string; // path under public/, e.g. /unicorn/hero.json
  projectId?: string; // Unicorn embed id
  dpi?: number;
  scale?: number;
  lazy?: boolean;
  production?: boolean;
};

export default function UnicornEmbed({ className = '', jsonPath, projectId, dpi = 1.5, scale = 1, lazy = false, production = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let destroyed = false;
    const init = async () => {
      // Wait for script to be available
      for (let i = 0; i < 120 && !(window as any).UnicornStudio; i++) {
        await new Promise(r => setTimeout(r, 50)); // up to ~6s
      }
      if (destroyed || !(window as any).UnicornStudio) return;

      // Give layout time so container has concrete size
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      if (ref.current) {
        try {
          // Prefer programmatic addScene for both modes
          const params: any = {
            elementId: ref.current.id,
            dpi,
            scale,
            lazyLoad: lazy,
            production,
            interactivity: { mouse: { disableMobile: true, disabled: false } },
            includeLogo: false,
          };
          if (projectId) params.projectId = projectId;
          if (jsonPath) params.filePath = jsonPath;
          await (window as any).UnicornStudio.addScene?.(params);
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
    return () => { destroyed = true; };
  }, [jsonPath, dpi, scale, lazy, projectId]);

  // Stable id across SSR/CSR to avoid hydration mismatch
  const reactId = useId();
  const id = useRef(`unicorn-hero-${reactId}`).current;

  return (
    <div
      id={id}
      ref={ref}
      className={`unicorn-embed ${className}`}
      style={{ width: '100%', height: '100%' }}
      {...(projectId ? { 'data-us-project': projectId } : { 'data-us-project-src': jsonPath })}
      data-us-scale={String(scale)}
      data-us-dpi={String(dpi)}
      data-us-lazyload={String(lazy)}
      data-us-disablemobile="true"
      data-us-disablemouse="false"
      aria-label="Animated background canvas"
    />
  );
}
