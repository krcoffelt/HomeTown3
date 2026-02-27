'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import UnicornScene from 'unicornstudio-react/next';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import RadiusOnScroll from '@/components/ui/RadiusOnScroll';
import { siteConfig } from '@/lib/seo';

const eyebrowStyle = { '--delay': '0.12s' } as CSSProperties;
const heroHeadingStyle = { '--delay': '0.2s' } as CSSProperties;
const heroSubStyle = { '--delay': '0.3s' } as CSSProperties;
const heroCtaStyle = { '--delay': '0.38s' } as CSSProperties;
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
    <RadiusOnScroll className="hero agency-hero" id="top">
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
          Kansas City Website Setup
        </p>
        <h1 data-hero style={heroHeadingStyle}>
          <span className="mask"><span className="mask-text line">No website yet? Launch in days.</span></span>
          <span className="mask"><span className="mask-text line">Built for Kansas City businesses.</span></span>
        </h1>
        <p className="agency-hero-sub" data-hero style={heroSubStyle}>
          We build conversion-focused websites for Kansas City businesses, then layer social and logo support as you grow.
        </p>
        <div className="agency-hero-cta" data-hero style={heroCtaStyle}>
          <a className="button primary" href="/contact">Start My Website</a>
          <TrackedPhoneLink
            href={`tel:${siteConfig.phoneE164}`}
            eventName="click_call_cta_section"
            location="homepage_hero"
            className="button ghost"
          >
            Call {siteConfig.phoneDisplay}
          </TrackedPhoneLink>
        </div>
      </div>
    </RadiusOnScroll>
  );
}
