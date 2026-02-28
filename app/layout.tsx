import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { localBusinessSchema } from "@/lib/seo/schema";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | ${site.brand.fullName}`,
    template: `%s | ${site.brand.fullName}`
  },
  applicationName: site.brand.fullName,
  description: site.description,
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
        {children}
      </body>
    </html>
  );
}
