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
        height="96px"
        blurAmount="9px"
        backgroundColor="rgba(5, 7, 11, 0.88)"
        className="!fixed !inset-x-0 !bottom-0 z-[90]"
      />
      <Footer />
    </>
  );
}
