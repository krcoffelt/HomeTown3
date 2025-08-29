import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import BaseLayout from '@/components/layout/BaseLayout';
import TransitionProvider from '@/app/_transition/TransitionProvider';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hometown - Creative Design & Development",
  description: "Hometown is a creative studio focused on branding, web design, and digital marketing. Let's build something amazing together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <BaseLayout>
          <TransitionProvider>
            {children}
          </TransitionProvider>
        </BaseLayout>
      </body>
    </html>
  );
}
