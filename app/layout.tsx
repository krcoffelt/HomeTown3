import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/seo/schema";
import { GtmLoader } from "@/components/analytics/gtm-loader";

const GOOGLE_ADS_ID = "AW-17990702531";

const sans = localFont({
  src: [
    {
      path: "../public/fonts/Manrope-Variable.ttf",
      weight: "200 800",
      style: "normal"
    }
  ],
  variable: "--font-sans",
  display: "swap"
});

const serif = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Variable.ttf",
      weight: "300 700",
      style: "normal"
    }
  ],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | ${site.brand.fullName}`,
    template: `%s | ${site.brand.fullName}`
  },
  applicationName: site.brand.fullName,
  description: site.description,
  icons: {
    icon: "/hometownicon.svg",
    shortcut: "/hometownicon.svg",
    apple: "/favicon.ico"
  },
  openGraph: {
    siteName: site.brand.fullName
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  const localBusiness = localBusinessSchema();
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
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} strategy="beforeInteractive" />
        <Script id="google-ads-base-tag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>
      <body className={`${sans.variable} ${serif.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
        <GtmLoader gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        {children}
      </body>
    </html>
  );
}
