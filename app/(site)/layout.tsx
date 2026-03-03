import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProgressiveBlur } from "@/registry/magicui/progressive-blur";

export default function SiteLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <ProgressiveBlur
        position="bottom"
        height="26%"
        blurIntensity={16}
        className="!fixed z-30"
      />
      <ProgressiveBlur
        position="top"
        height="14%"
        blurIntensity={14}
        className="!fixed z-30"
      />
      <Footer />
    </>
  );
}
