import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { StructuredData } from "@/components/seo/structured-data";
import { site } from "@/data/site";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { GtmLoader } from "@/components/analytics/gtm-loader";
import { ConsentBanner } from "@/components/analytics/consent-banner";
import { MotionProvider } from "@/components/motion/motion-provider";
import { getCoreShareImage } from "@/lib/seo/routes";

const GOOGLE_ADS_ID = "AW-17990702531";

const fontSans = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight"
});

const fontSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-instrument-serif"
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | ${site.brand.seoName}`,
    template: `%s | ${site.brand.seoName}`
  },
  applicationName: site.brand.fullName,
  description: site.description,
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
    title: "Hometown Marketing Agency — Kansas City Website Design",
    description: "Conversion-focused websites, SEO, and Google and Meta ads for Kansas City small businesses, with real lead and conversion tracking.",
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
    title: "Hometown Marketing Agency — Kansas City Website Design",
    description: "Small-business marketing built for real leads, clear data, real rankings, and measurable results.",
    images: [getCoreShareImage("/")]
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const globalSchema = [organizationSchema(), websiteSchema(), localBusinessSchema()];

  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
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
        <ConsentBanner />
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
