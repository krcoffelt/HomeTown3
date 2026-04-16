import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";
import { site } from "@/data/site";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { GtmLoader } from "@/components/analytics/gtm-loader";
import { getCoreShareImage } from "@/lib/seo/routes";

const GOOGLE_ADS_ID = "AW-17990702531";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | ${site.brand.fullName}`,
    template: `%s | ${site.brand.fullName}`
  },
  applicationName: site.brand.fullName,
  description: site.description,
  keywords: [
    "Kansas City marketing agency",
    "KC small business website",
    "affordable web design Kansas City",
    "social media marketing KC",
    "Google Ads Kansas City"
  ],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/hometownicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png"
  },
  openGraph: {
    title: "Hometown Marketing Agency — Kansas City Small Business Marketing",
    description: "Custom websites, ads, and social media marketing built for KC small businesses. Starting at $800.",
    type: "website",
    url: site.url,
    siteName: site.brand.fullName,
    images: [
      {
        url: getCoreShareImage("/"),
        alt: site.brand.fullName
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Hometown Marketing Agency — KC Small Business Marketing",
    description: "Affordable websites and marketing for Kansas City businesses. No contracts.",
    images: [getCoreShareImage("/")]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const globalSchema = [organizationSchema(), websiteSchema(), localBusinessSchema()];

  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === "development" && (
          <Script
            src="//unpkg.com/react-grab/dist/index.global.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>
        <StructuredData data={globalSchema} />
        <GtmLoader gtmId={process.env.NEXT_PUBLIC_GTM_ID} googleAdsId={GOOGLE_ADS_ID} />
        {children}
      </body>
    </html>
  );
}
