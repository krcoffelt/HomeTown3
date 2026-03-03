import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/seo/schema";
import { GtmLoader } from "@/components/analytics/gtm-loader";

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
