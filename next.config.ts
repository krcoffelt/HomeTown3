import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }
        ]
      }
    ];
  },
  async redirects() {
    return [
      {
        source: "/services/logo-and-brand-work",
        destination: "/services/brand-identity",
        permanent: true
      },
      {
        source: "/services/google-business-profile-setup",
        destination: "/services/search-engine-optimization",
        permanent: true
      },
      {
        source: "/services/meta-ads-management",
        destination: "/services/social-media-management",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
