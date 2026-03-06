import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

const addOns = [
  { label: "Google Business Profile Setup", price: "$250" },
  { label: "Logo Design + Mini Brand Kit", price: "$250" },
  { label: "Social Media Management", price: "$499/month" }
];

export function PricingPreview() {
  return (
    <SectionShell className="text-ink">
      <div className="mb-10">
        <h2 className="display-lg font-semibold text-white">Pricing</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-12">
        <div className="rounded-3xl border border-[#5c80f5] bg-[#305cde] px-7 py-7 text-white shadow-[0_16px_40px_rgba(48,92,222,0.3)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_22px_50px_rgba(48,92,222,0.38)] md:col-span-8 md:px-10">
          <p className="section-eyebrow text-white/85">Special this month</p>
          <div className="mt-2 flex items-end gap-4">
            <p className="text-6xl font-semibold tracking-tight">$800</p>
            <p className="mb-2 text-lg text-white/75 line-through">$1,000</p>
          </div>
          <ul className="mt-6 space-y-2 text-base text-white">
            <li>Custom multi-page website</li>
            <li>Mobile-first responsive build</li>
            <li>Lead-focused conversion sections</li>
            <li>Local SEO-ready metadata structure</li>
          </ul>
        </div>
        <div className="surface-secondary px-7 py-7 transition duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25 hover:shadow-[0_18px_40px_rgba(6,11,22,0.45)] md:col-span-4">
          <p className="kicker">Add-ons</p>
          <ul className="mt-4 space-y-4 text-white/82">
            {addOns.map((addOn) => (
              <li key={addOn.label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                <span className="text-sm leading-snug text-white/82">{addOn.label}</span>
                <span className="shrink-0 text-sm font-medium text-white">{addOn.price}</span>
              </li>
            ))}
          </ul>
          <Button href="/contact#form" className="mt-8">
            Get Started
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
