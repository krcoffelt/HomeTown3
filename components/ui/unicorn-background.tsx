"use client";

import { useEffect, useId, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

const UNICORN_PROJECT_ID = "PVJQdbYBsTLPWybdgA4H";
const UNICORN_SDK_URL =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

type UnicornScene = {
  destroy?: () => void;
};

type UnicornStudioGlobal = {
  addScene?: (options: {
    elementId: string;
    projectId: string;
    scale?: number;
    dpi?: number;
    fps?: number;
    lazyLoad?: boolean;
    production?: boolean;
  }) => Promise<UnicornScene> | UnicornScene;
};

declare global {
  interface Window {
    UnicornStudio?: UnicornStudioGlobal;
  }
}

let sdkLoadPromise: Promise<void> | null = null;

function ensureUnicornSdk(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.UnicornStudio?.addScene) return Promise.resolve();
  if (sdkLoadPromise) return sdkLoadPromise;

  sdkLoadPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-unicorn-sdk="true"]'
    );

    if (existingScript) {
      if (window.UnicornStudio?.addScene || existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Unicorn SDK failed to load")), {
        once: true
      });
      return;
    }

    const script = document.createElement("script");
    script.src = UNICORN_SDK_URL;
    script.async = true;
    script.defer = true;
    script.dataset.unicornSdk = "true";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("Unicorn SDK failed to load"));
    document.head.appendChild(script);
  });

  return sdkLoadPromise;
}

interface UnicornBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function UnicornBackground({ children, className }: UnicornBackgroundProps) {
  const [sceneReady, setSceneReady] = useState(false);
  const reactId = useId();
  const elementId = useMemo(() => `hero-unicorn-${reactId.replace(/:/g, "")}`, [reactId]);

  useEffect(() => {
    let isActive = true;
    let scene: UnicornScene | null = null;

    const mountScene = async () => {
      try {
        await ensureUnicornSdk();
        if (!isActive) return;

        const api = window.UnicornStudio;
        if (!api?.addScene) return;

        const mounted = await api.addScene({
          elementId,
          projectId: UNICORN_PROJECT_ID,
          scale: 1,
          dpi: 1.5,
          fps: 60,
          lazyLoad: true,
          production: process.env.NODE_ENV === "production"
        });

        if (!isActive) {
          mounted?.destroy?.();
          return;
        }

        scene = mounted;
        setSceneReady(true);
      } catch {
        setSceneReady(false);
      }
    };

    void mountScene();

    return () => {
      isActive = false;
      scene?.destroy?.();
    };
  }, [elementId]);

  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div id={elementId} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,16,37,0.38)_0%,rgba(5,7,11,0.6)_100%)]" />
      {!sceneReady ? (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(58,101,235,0.35),transparent_45%),radial-gradient(circle_at_82%_10%,rgba(136,164,255,0.28),transparent_44%),radial-gradient(circle_at_52%_78%,rgba(35,86,233,0.24),transparent_52%),linear-gradient(180deg,#071025_0%,#05070b_100%)]" />
      ) : null}
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
