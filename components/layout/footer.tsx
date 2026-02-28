import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-line bg-base px-5 py-12 text-ink md:px-8">
      <div className="mx-auto w-full max-w-shell">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 rounded-lg border border-line bg-surface p-6 md:flex-row md:items-center">
          <div>
            <p className="section-eyebrow text-muted">Final step</p>
            <p className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">
              Ready for a premium website that actually converts?
            </p>
          </div>
          <Button
            href="/contact#form"
            className="border-white/20 text-ink hover:border-white/40 hover:bg-white/8"
            variant="secondary"
          >
            Get Started
          </Button>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/HometownLogo_white2026.png"
              alt="Hometown"
              width={180}
              height={38}
              className="h-8 w-auto md:h-9"
            />
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Premium, lead-focused website design for Kansas City service
              businesses.
            </p>
            <p className="mt-2 text-xs uppercase tracking-[0.1em] text-muted">
              Hometown Marketing Agency, Kansas City
            </p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.12em] text-muted">
              Navigation
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-white/85 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-white/85 hover:text-white">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-white/85 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/85 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-[0.12em] text-muted">
              Contact
            </h3>
            <ul className="mt-3 space-y-2 text-white/85">
              <li>{site.location}</li>
              <li>
                <a href={`tel:${site.contactPhone}`}>{site.contactPhone}</a>
              </li>
              <li>
                <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
