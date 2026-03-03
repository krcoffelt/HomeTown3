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
        className="!fixed !inset-0 z-30"
      />
      <Footer />
    </>
  );
}
