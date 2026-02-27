import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Local and easy to work with",
    body: "Kansas City-based collaboration with direct communication and fast turnarounds."
  },
  {
    title: "Premium design without inflated pricing",
    body: "Senior-level layout and typography quality built for small-business budgets."
  },
  {
    title: "Built for leads",
    body: "Clear messaging hierarchy and CTA structure that drives inquiries."
  },
  {
    title: "Simple process",
    body: "Straightforward scope, focused execution, and no agency complexity."
  }
];

export function WhyHometown() {
  return (
    <SectionShell>
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="display-lg font-semibold text-ink">
          Why Hometown
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-muted">
          A Kansas City website studio built to make local businesses look legit
          and get more inquiries.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item, idx) => (
          <Card
            key={item.title}
            className="group relative min-h-[260px] overflow-hidden bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-8 md:p-10"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#305CDE]/70 via-white/30 to-transparent" />
            <div className="mb-10 flex items-center justify-between">
              <span className="section-eyebrow text-muted transition-colors duration-300 group-hover:text-white/85">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/15 px-2 text-xs text-muted">
                KC
              </span>
            </div>
            <h3 className="max-w-[18ch] text-[clamp(2rem,3.3vw,2.6rem)] font-medium leading-[1.02] tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-muted">
              {item.body}
            </p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
