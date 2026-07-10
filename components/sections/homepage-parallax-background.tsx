import Image from "next/image";

export function HomepageParallaxBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Screenshot 2026-03-03 at 11.00.02 AM.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,4,0.26)_0%,rgba(1,2,4,0.54)_38%,rgba(1,2,4,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_24%,rgba(0,0,0,0.38)_56%,rgba(0,0,0,0.62)_100%)]" />
    </div>
  );
}
