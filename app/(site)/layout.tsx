import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function SiteLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-background px-5 py-3 font-bold text-foreground shadow-elevated focus:not-sr-only"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="overflow-x-hidden" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
