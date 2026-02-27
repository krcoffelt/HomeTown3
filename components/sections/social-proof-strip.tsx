import { SectionShell } from "@/components/layout/section-shell";

const stats = [
  { value: "2 Days", label: "Average project turnaround" },
  { value: "500+", label: "Creative projects delivered" },
  { value: "20 Hours", label: "Staff hours saved per week" }
];

export function SocialProofStrip() {
  return (
    <SectionShell className="border-y border-line bg-surface py-14 md:py-20">
      <p className="section-eyebrow text-center text-muted">
        Trusted by local businesses
      </p>
      <h2 className="mx-auto mt-4 max-w-5xl text-balance text-center display-lg font-semibold text-ink">
        Results businesses{" "}
        <span className="font-serif italic font-normal">actually see</span>
      </h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-[clamp(2.4rem,5.8vw,5rem)] font-semibold leading-none text-ink">
              {stat.value}
            </p>
            <p className="mt-4 text-xl font-medium text-text">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
        <span>Plate KC</span>
        <span>Lupi Docs</span>
        <span>Jose Isai Valdez</span>
        <span>5-star client feedback</span>
      </div>
    </SectionShell>
  );
}
