import { SectionShell } from "@/components/layout/section-shell";

const stats = [
  { value: "7 Days", label: "Average project turnaround" },
  { value: "50+", label: "Creative projects delivered" },
  { value: "100%", label: "Satisfaction guaranteed" }
];

export function SocialProofStrip() {
  return (
    <SectionShell className="border-y border-line bg-surface py-14 md:py-20">
      <p className="section-eyebrow text-center text-white/72">
        Trusted by local businesses
      </p>
      <h2 className="mx-auto mt-4 max-w-5xl text-balance text-center display-lg font-semibold text-white">
        Results businesses{" "}
        <span className="font-serif italic font-normal">actually see</span>
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
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
