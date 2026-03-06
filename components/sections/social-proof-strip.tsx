import { SectionShell } from "@/components/layout/section-shell";

const stats = [
  { value: "7 Days", label: "Average project turnaround" },
  { value: "50+", label: "Creative projects delivered" },
  { value: "100%", label: "Satisfaction guaranteed" }
];

export function SocialProofStrip() {
  return (
    <SectionShell className="py-14 md:py-20">
      <p className="section-eyebrow text-center text-white/72">
        Trusted by local businesses
      </p>
      <h2 className="mx-auto mt-4 max-w-5xl text-balance text-center display-lg font-semibold text-white">
        Results businesses{" "}
        <span className="font-serif italic font-normal">actually see</span>
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.04)_42%,rgba(255,255,255,0.015)_100%)] px-4 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-[24px] transition duration-300 hover:-translate-y-0.5 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.13)_0%,rgba(255,255,255,0.055)_42%,rgba(255,255,255,0.02)_100%)] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_30px_rgba(0,0,0,0.12)]"
          >
            <p className="text-[clamp(2.4rem,5.8vw,5rem)] font-semibold leading-none text-white">
              {stat.value}
            </p>
            <p className="mt-4 text-xl font-medium text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
