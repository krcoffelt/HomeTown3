import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { blogPosts, plannedBlogTopics } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const postImages: Record<string, string> = {
  "website-design-cost-kansas-city": "/images/work/LupiDocsScreenshot.webp",
  "ministry-website-design-project-salvation": "/images/work/project-salvation.jpg",
  "what-should-a-contractor-website-include": "/images/ZJCarpentry_Screenshot.webp",
  "website-builder-vs-custom-website-for-small-businesses": "/images/WrappedUpMoving_screenshot.webp"
};

const editorialTags = ["Website Pricing", "Small Business Websites", "Contractor Websites", "Home Services", "Website Redesign", "Local SEO"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T12:00:00`));
}

export const metadata = createPageMetadata(
  "Website Design & SEO Blog Kansas City",
  "Practical website design, SEO, pricing, and marketing advice for Kansas City small-business owners.",
  "/blog"
);

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const secondaryPosts = blogPosts.filter((post) => post.href !== featuredPost?.href);
  const latestPosts = secondaryPosts.length > 0 ? secondaryPosts : blogPosts;
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  const schema = [
    webPageSchema({
      name: "Hometown Blog",
      description: "Website design and marketing advice for Kansas City small-business owners.",
      path: "/blog"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" }
    ])
  ];

  return (
    <div className="overflow-x-hidden bg-[#f9f9f9] text-foreground">
      <StructuredData data={schema} />

      <section className="relative isolate overflow-hidden bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <Image
          src="/images/hero-bg-desktop.jpg"
          alt="Kansas City skyline at sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/10" />
        <div className="site-container relative z-10">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-primary-foreground/86 backdrop-blur">
              Kansas City Marketing Agency
            </p>
            <h1 className="mt-6 font-display text-[2.45rem] font-bold leading-[1.04] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              Website design and marketing advice for Kansas City small businesses
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/78 md:text-xl">
              Practical guides on websites, local SEO, pricing, and lead flow for owners who need clearer marketing decisions.
            </p>
          </div>
        </div>
      </section>

      <SectionShell className="bg-[#f9f9f9]">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_350px]">
          <main className="min-w-0">
            {featuredPost ? (
              <Link href={featuredPost.href} className="group block">
                <article>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-[#e2e8f0] bg-secondary">
                    <Image
                      src={postImages[featuredPost.slug] ?? "/images/hero-bg-desktop.jpg"}
                      alt={`${featuredPost.title} featured image`}
                      fill
                      sizes="(max-width: 1024px) 92vw, 760px"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{featuredPost.category}</span>
                      <span className="text-sm text-muted-foreground">{formatDate(featuredPost.publishedAt)}</span>
                      <span className="text-sm text-muted-foreground">{featuredPost.readingTime}</span>
                    </div>
                    <h2 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground transition group-hover:text-accent md:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{featuredPost.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent transition group-hover:gap-3">
                      Read full guide
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              </Link>
            ) : null}

            <div className="my-14 h-px bg-[#e2e8f0]" />

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Recent Articles</h2>
              <div className="mt-8 grid gap-9">
                {latestPosts.map((post) => (
                  <Link key={post.href} href={post.href} className="group grid gap-6 md:grid-cols-[190px_minmax(0,1fr)]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-[#e2e8f0] bg-secondary">
                      <Image
                        src={postImages[post.slug] ?? "/images/hero-bg-desktop.jpg"}
                        alt={`${post.title} article image`}
                        fill
                        sizes="(max-width: 768px) 92vw, 190px"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>
                    <article className="self-center">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{post.category}</span>
                        <span className="text-sm text-muted-foreground">{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground transition group-hover:text-accent">
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          </main>

          <aside className="space-y-10 lg:pt-0">
            <section className="rounded-lg border border-[#e2e8f0] bg-white p-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Start Here</h2>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "Website Design Kansas City", href: "/services/website-design" },
                  { label: "Website design cost in Kansas City", href: "/website-design-cost-kansas-city" },
                  { label: "Small business website design Kansas City", href: "/services/small-business-websites" },
                  { label: "View Website Work", href: "/work" }
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="group flex items-center justify-between gap-4 rounded-md border border-[#e2e8f0] bg-[#f9f9f9] px-4 py-3 text-sm font-bold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    {link.label}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </section>

            <section className="rounded-lg bg-accent p-7 text-accent-foreground">
              <h2 className="text-2xl font-bold tracking-tight">Weekly Local Growth</h2>
              <p className="mt-3 text-sm leading-relaxed text-accent-foreground/82">
                Get practical website, SEO, and paid ads notes for Kansas City small-business decisions.
              </p>
              <form className="mt-6 space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="h-12 w-full rounded-md border-0 bg-white px-4 text-sm text-foreground outline-none ring-0 placeholder:text-muted-foreground focus:ring-2 focus:ring-white/50"
                />
                <button className="h-12 w-full rounded-md bg-black px-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-black/85">
                  Subscribe Now
                </button>
              </form>
            </section>

            <section>
              <h2 className="border-b border-[#e2e8f0] pb-4 text-2xl font-bold tracking-tight text-foreground">Categories</h2>
              <div className="mt-5 grid gap-3">
                {categories.map((category) => {
                  const count = blogPosts.filter((post) => post.category === category).length;
                  return (
                    <div key={category} className="flex items-center justify-between gap-4 text-sm text-foreground">
                      <span>{category}</span>
                      <span className="rounded bg-[#eeeeee] px-2 py-1 text-xs font-bold text-muted-foreground">{count}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="rounded-lg bg-[#f3f3f4] p-7">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">About Hometown</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Hometown builds websites and marketing systems for Kansas City small businesses that need clearer visibility and better lead flow.
              </p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-accent transition hover:gap-3">
                Learn our story
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Tags</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {editorialTags.map((tag) => (
                  <span key={tag} className="rounded bg-[#eeeeee] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="border-b border-[#e2e8f0] pb-4 text-2xl font-bold tracking-tight text-foreground">Upcoming Topics</h2>
              <div className="mt-5 grid gap-3">
                {plannedBlogTopics.map((topic) => (
                  <Link key={topic.title} href={topic.target} className="group block border-b border-[#e2e8f0] pb-4 last:border-b-0">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{topic.category}</span>
                    <span className="mt-2 flex items-start justify-between gap-3 text-sm font-bold leading-snug text-foreground transition group-hover:text-accent">
                      {topic.title}
                      <ArrowRightIcon className="mt-0.5 h-4 w-4 shrink-0" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </SectionShell>

      <section className="bg-black py-20 text-primary-foreground">
        <div className="site-container text-center">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            Need the website before the reading list?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/70">
            Start with a custom Kansas City small-business website, then use the blog to make better next-step marketing decisions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/services/website-design" className="h-14 px-8">
              Website Design Service
            </Button>
            <Button href="/contact#form" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
              Ask About a Website
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
