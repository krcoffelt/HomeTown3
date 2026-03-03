import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

export function PricingPreview() {
  return (
    <SectionShell className="bg-base text-ink">
      <div className="mb-10">
        <p className="kicker">Pricing</p>
        <h2 className="display-lg mt-4 font-semibold text-white">
          Hometown Website Package
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-12">
        <div className="surface-primary px-7 py-7 text-white md:col-span-8 md:px-10">
          <p className="kicker">This month</p>
          <div className="mt-2 flex items-end gap-4">
            <p className="text-6xl font-semibold tracking-tight">$800</p>
            <p className="mb-2 text-lg text-white/68 line-through">$1,000</p>
          </div>
          <ul className="mt-6 space-y-2 text-base text-white/86">
            <li>Custom multi-page website</li>
            <li>Mobile-first responsive build</li>
            <li>Lead-focused conversion sections</li>
            <li>Local SEO-ready metadata structure</li>
          </ul>
        </div>
        <div className="surface-secondary px-7 py-7 md:col-span-4">
          <p className="kicker">Add-ons</p>
          <ul className="mt-4 space-y-3 text-white/82">
            <li>Google Business Profile Setup</li>
            <li>Logo Design + Mini Brand Kit</li>
            <li>Social Media Management</li>
          </ul>
          <Button href="/contact#form" className="mt-8">
            Get Started
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
