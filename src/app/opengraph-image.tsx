import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Hometown — Kansas City $800 Website Setup';
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
            Kansas City websites for local businesses with no current website.
          </div>
          <div style={{ fontSize: 24, opacity: 0.8 }}>
            Launch for $800 and start converting calls and form leads.
          </div>
        </div>
      </div>
    ),
    size
  );
}
