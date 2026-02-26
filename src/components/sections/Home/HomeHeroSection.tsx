'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import UnicornScene from 'unicornstudio-react/next';

const servicePills = ['Websites', 'Social Media', 'Logos'];
const proofStats = [
  { label: 'Launch Time', value: '7-10 days' },
  { label: 'Flat Price', value: '$800' },
  { label: 'Built For', value: 'Local Business' },
];
const eyebrowStyle = { '--delay': '0.12s' } as CSSProperties;
const heroHeadingStyle = { '--delay': '0.2s' } as CSSProperties;
const heroSubStyle = { '--delay': '0.3s' } as CSSProperties;
const heroCtaStyle = { '--delay': '0.38s' } as CSSProperties;
const heroProofStyle = { '--delay': '0.46s' } as CSSProperties;
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
    <section className="hero agency-hero" id="top">
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
      <div className="hero-inner agency-hero-inner">
        <p className="eyebrow agency-hero-eyebrow" data-hero style={eyebrowStyle}>
          Kansas City Marketing Agency
        </p>
        <h1 data-hero style={heroHeadingStyle}>
          <span className="mask"><span className="mask-text line">Websites that look premium.</span></span>
          <span className="mask"><span className="mask-text line">Flat $800 to launch.</span></span>
        </h1>
        <p className="agency-hero-sub" data-hero style={heroSubStyle}>
          We build high-converting websites first, then support growth with social media management and
          logo design.
        </p>
        <div className="agency-hero-cta" data-hero style={heroCtaStyle}>
          <a className="button primary" href="/contact">Start My $800 Website</a>
          <a className="button ghost" href="#website-package">See What&apos;s Included</a>
        </div>
        <ul className="agency-hero-pills" data-hero style={heroCtaStyle} aria-label="Core services">
          {servicePills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="hero-proof agency-proof-grid" data-hero style={heroProofStyle}>
          {proofStats.map((item) => (
            <article key={item.label} className="agency-proof-card">
              <p className="agency-proof-value">{item.value}</p>
              <p className="agency-proof-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
