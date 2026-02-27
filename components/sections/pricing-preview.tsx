import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PricingPreview() {
  return (
    <SectionShell className="bg-base text-ink">
      <div className="mb-10">
        <p className="section-eyebrow text-muted">Pricing</p>
        <h2 className="display-lg mt-4 font-semibold text-ink">
          Hometown Website Package
        </h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-canvas text-[#0f1219] md:col-span-2">
          <p className="section-eyebrow text-black/60">
            This month
          </p>
          <p className="mt-2 text-6xl font-semibold tracking-tight text-black">$800</p>
          <p className="mt-2 text-lg text-black/65">Regularly $999</p>
          <ul className="mt-6 space-y-2 text-base text-black/85">
            <li>Custom multi-page website</li>
            <li>Mobile-first responsive build</li>
            <li>Lead-focused conversion sections</li>
            <li>Local SEO-ready metadata structure</li>
          </ul>
        </Card>
        <Card className="bg-surface">
          <p className="section-eyebrow text-muted">Add-ons</p>
          <ul className="mt-4 space-y-3 text-text">
            <li>Google Business Profile Setup - $250</li>
            <li>Logo Design + Mini Brand Kit - $250</li>
            <li>Social Media Management - $499/mo</li>
          </ul>
          <Button href="/contact#form" className="mt-8">
            Get Started
          </Button>
        </Card>
      </div>
    </SectionShell>
  );
}
