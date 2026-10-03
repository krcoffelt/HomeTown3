import Image from "next/image";
import Link from "next/link";
import { ScrollWords } from "@/components/motion/scroll-words";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";
import { site } from "@/data/site";

const pillars = [
  { title: "Real data", body: "Every site and campaign is wired to track calls, forms, and bookings from day one." },
  { title: "Real rankings", body: "See where you rank, which searches matter, and where the next opportunity is." },
  { title: "Real clarity", body: "You work directly with the person doing the work. Plain English, no smoke." }
];

export function Manifesto() {
  return (
    <section aria-label="Why Hometown" className="bg-background py-24 md:py-40">
      <div className="site-container">
        <div className="grid gap-10 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">{homepageCopy.whyHometown.badge}</p>
          <ScrollWords
            className="font-display text-[clamp(1.85rem,4.2vw,4rem)] font-medium leading-[1.08] tracking-[-0.04em] md:col-span-9"
            text="We're a Kansas City studio for owner-led businesses. We build websites that convert, SEO that earns real rankings, and ads tied to qualified leads — then show you exactly what's working, in plain English."
            accentWords={["convert", "rankings", "leads"]}
          />
        </div>

        <div className="mt-20 grid gap-12 md:mt-32 md:grid-cols-12">
          <div className="md:col-span-3">
            <Link href="/about" className="group block w-full max-w-[15rem]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-secondary">
                <Image
                  src={site.founder.image}
                  alt={`${site.founder.name}, founder of Hometown Marketing Agency`}
                  fill
                  sizes="240px"
                  className="object-cover object-top grayscale transition duration-700 ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                />
              </div>
              <p className="mt-4 flex items-center justify-between text-sm">
                <span>
                  <span className="font-medium">{site.founder.name}</span>
                  <span className="block text-muted-foreground">Founder</span>
                </span>
                <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </p>
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[1rem] bg-foreground/10 sm:grid-cols-3 md:col-span-9 md:self-end">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} data-reveal="up" style={{ ["--reveal-delay" as string]: `${index * 90}ms` }} className="bg-background p-6 pt-8 md:p-8">
                <h3 className="mt-16 text-2xl font-semibold tracking-[-0.035em]">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
