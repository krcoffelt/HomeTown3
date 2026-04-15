import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
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
