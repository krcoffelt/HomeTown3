'use client';

type ScrollBlurOverlayProps = {
  active?: boolean;
};

const blurLayers = [
  {
    blur: 7,
    mask: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.65) 38%, rgba(0,0,0,0.15) 80%, transparent 100%)',
  },
  {
    blur: 4,
    mask: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 50%, transparent 100%)',
  },
  {
    blur: 2,
    mask: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 46%, transparent 100%)',
  },
];

export default function ScrollBlurOverlay({ active = true }: ScrollBlurOverlayProps) {
  if (!active) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 pointer-events-none z-30"
      style={{ height: 'min(12vh, 104px)' }}
    >
      {blurLayers.map(({ blur, mask }, index) => (
        <div
          key={index}
          className="absolute inset-0"
          style={{
            backdropFilter: `blur(${blur}px)`,
            WebkitBackdropFilter: `blur(${blur}px)`,
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        />
      ))}
    </div>
  );
}
