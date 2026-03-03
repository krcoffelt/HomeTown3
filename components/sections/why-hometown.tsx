import { SectionShell } from "@/components/layout/section-shell";

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
        <h2 className="display-lg font-semibold text-white">
          Why Hometown
        </h2>
        <p className="max-w-sm text-base leading-relaxed text-white/78">
          A Kansas City website studio built to make local businesses look legit
          and get more inquiries.
        </p>
      </div>
      <div className="surface-secondary divide-y divide-white/12 px-7 py-3 md:px-10">
        {items.map((item, idx) => (
          <div key={item.title} className="grid gap-5 py-5 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-2">
              <span className="section-eyebrow text-[#9bb6ff]">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="md:col-span-4 text-[clamp(1.4rem,2.8vw,2.2rem)] font-medium leading-[1.04] tracking-tight text-white">
              {item.title}
            </h3>
            <p className="md:col-span-6 text-lg leading-relaxed text-white/76">{item.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
