import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hometown — Kansas City Marketing Studio",
  description: "Kansas City marketing for small businesses: websites, local visibility, social systems, and ads that convert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
