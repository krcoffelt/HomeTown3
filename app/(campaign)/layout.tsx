export default function CampaignLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-full bg-white px-5 py-3 font-bold text-black shadow-elevated focus:not-sr-only"
      >
        Skip to main content
      </a>
      <main id="main-content" className="overflow-x-hidden" tabIndex={-1}>
        {children}
      </main>
    </>
  );
}
