'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import UnicornScene from 'unicornstudio-react/next';

const proofItems = ['Retail', 'Food & Beverage', 'Home Services', 'Wellness', 'Professional Services'];
const heroHeadingStyle = { '--delay': '0.15s' } as CSSProperties;
const heroProofStyle = { '--delay': '0.35s' } as CSSProperties;
type SceneConfig = { scale: number; dpi: number; fps: 30 | 60; paused: boolean };

export default function HomeHeroSection() {
  const [sceneConfig, setSceneConfig] = useState<SceneConfig>({
    scale: 0.9,
    dpi: 1.25,
    fps: 60,
    paused: false,
  });

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateSceneConfig = () => {
      const nav = navigator as Navigator & { deviceMemory?: number };
      const deviceMemory = nav.deviceMemory ?? 8;
      const cores = nav.hardwareConcurrency ?? 8;
      const isSmallViewport = window.innerWidth < 960;
      const isLowerPowerDevice = deviceMemory <= 4 || cores <= 4;
      const shouldReduceMotion = reducedMotionQuery.matches;
      const useReducedQuality = shouldReduceMotion || isSmallViewport || isLowerPowerDevice;

      setSceneConfig({
        scale: useReducedQuality ? 0.6 : 0.9,
        dpi: useReducedQuality ? 1 : 1.25,
        fps: useReducedQuality ? 30 : 60,
        paused: shouldReduceMotion,
      });
    };

    updateSceneConfig();
    window.addEventListener('resize', updateSceneConfig);
    reducedMotionQuery.addEventListener('change', updateSceneConfig);

    return () => {
      window.removeEventListener('resize', updateSceneConfig);
      reducedMotionQuery.removeEventListener('change', updateSceneConfig);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <UnicornScene
          projectId="67bMayuIex6ZsrkBXpsY"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          scale={sceneConfig.scale}
          dpi={sceneConfig.dpi}
          fps={sceneConfig.fps}
          lazyLoad={true}
          production={true}
          paused={sceneConfig.paused}
          className="hero-unicorn-scene"
          altText="Hero background animation"
          ariaLabel="Hero background animation"
        />
      </div>
      <div className="hero-inner">
        <h1 data-hero style={heroHeadingStyle}>
          <span className="mask">
            <span className="mask-text line">Make your business the first call locals make.</span>
          </span>
        </h1>
        <div className="hero-proof" data-hero style={heroProofStyle}>
          <p className="hero-proof-label">Kansas City Marketing Studio</p>
          <ul className="hero-proof-list" aria-label="Industries served">
            {proofItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
