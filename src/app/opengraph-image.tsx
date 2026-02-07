import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hometown — Kansas City Marketing Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#0a0a0a',
          color: '#f2f2f0',
          padding: '64px 72px',
          fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 6, textTransform: 'uppercase', opacity: 0.75 }}>
          Hometown
        </div>
        <div style={{ maxWidth: 900, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 78,
              lineHeight: 0.94,
              letterSpacing: -2,
              fontFamily: 'Times New Roman, Times, serif',
              marginBottom: 16,
            }}
          >
            Make your business the first call locals make.
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>
            Kansas City Marketing Studio
          </div>
        </div>
      </div>
    ),
    size
  );
}
