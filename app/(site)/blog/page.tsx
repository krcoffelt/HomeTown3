import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { PageIntro } from "@/components/layout/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { blogPosts, plannedBlogTopics } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

const postImages: Record<string, string> = {
  "website-design-cost-kansas-city": "/images/work/LupiDocsScreenshot.webp",
  "ministry-website-design-project-salvation": "/images/work/project-salvation.jpg",
  "what-should-a-contractor-website-include": "/images/ZJCarpentry_Screenshot.webp",
  "website-builder-vs-custom-website-for-small-businesses": "/images/WrappedUpMoving_screenshot.webp"
};

const editorialTags = ["Lead Generation", "Small Business Websites", "Contractor Websites", "Home Services", "Conversion Tracking", "Local SEO"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(new Date(`${date}T12:00:00`));
}

export const metadata = createPageMetadata(
  "Website Design & SEO Blog Kansas City",
  "Practical website, SEO, paid advertising, conversion tracking, and lead-generation advice for Kansas City small-business owners.",
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
    <div className="overflow-x-clip bg-background text-foreground">
      <StructuredData data={schema} />

      <PageIntro
        badge="The Hometown journal"
        title="Website design and marketing advice for Kansas City small businesses"
        subtitle="Practical guides on websites, local SEO, paid ads, conversion tracking, and lead flow for owners who need clearer marketing decisions."
      />

      {featuredPost ? (
        <SectionShell className="pb-0 md:pb-0">
          <Link href={featuredPost.href} className="group grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-secondary lg:col-span-7">
              <Image
                src={featuredPost.image ?? postImages[featuredPost.slug] ?? "/images/hero-bg-desktop.jpg"}
                alt={featuredPost.imageAlt ?? `${featuredPost.title} featured image`}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 56vw"
                className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
              />
              <span className="mono-label absolute left-4 top-4 rounded-full bg-ink px-3 py-1.5 text-primary-foreground">Featured</span>
            </div>
            <article className="lg:col-span-5">
              <p className="mono-label flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                <span className="text-accent">{featuredPost.category}</span>
                <span>{formatDate(featuredPost.publishedAt)}</span>
                <span>{featuredPost.readingTime}</span>
              </p>
              <h2 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.5rem)] font-semibold leading-[1] tracking-[-0.045em] transition-colors group-hover:text-accent">
                {featuredPost.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{featuredPost.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-3 font-medium">
                Read the full guide
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-primary-foreground transition-colors group-hover:bg-accent">
                  <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </span>
              </span>
            </article>
          </Link>
        </SectionShell>
      ) : null}

      <SectionShell>
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          <section aria-labelledby="recent-heading" className="min-w-0 lg:col-span-8">
            <div className="flex items-end justify-between border-b border-foreground/12 pb-6">
              <h2 id="recent-heading" className="section-title">
                Recent <span className="serif-accent">articles</span>
              </h2>
              <span className="mono-label text-muted-foreground">{latestPosts.length} posts</span>
            </div>
            <ul>
              {latestPosts.map((post, index) => (
                <Reveal as="li" key={post.href} delay={(index % 4) * 0.05} className="border-b border-foreground/12">
                  <Link href={post.href} className="group grid gap-6 py-8 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-center">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[0.9rem] bg-secondary">
                      <Image
                        src={post.image ?? postImages[post.slug] ?? "/images/hero-bg-desktop.jpg"}
                        alt={post.imageAlt ?? `${post.title} article image`}
                        fill
                        sizes="(max-width: 640px) 92vw, 180px"
                        className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.06]"
                      />
                    </div>
                    <article className="flex items-start justify-between gap-6">
                      <div>
                        <p className="mono-label flex flex-wrap gap-x-4 text-muted-foreground">
                          <span className="text-accent">{post.category}</span>
                          <span>{formatDate(post.publishedAt)}</span>
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold leading-[1.1] tracking-[-0.035em] transition-colors group-hover:text-accent md:text-[1.75rem]">
                          {post.title}
                        </h3>
                        <p className="mt-3 line-clamp-2 leading-relaxed text-muted-foreground">{post.excerpt}</p>
                      </div>
                      <ArrowUpRightIcon className="mt-1 hidden h-5 w-5 shrink-0 transition-transform duration-500 group-hover:rotate-45 sm:block" />
                    </article>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </section>

          <aside className="grid content-start gap-12 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <section aria-labelledby="start-heading" className="rounded-[1.25rem] bg-ink p-7 text-primary-foreground">
              <h2 id="start-heading" className="mono-label text-primary-foreground/50">
                Start here
              </h2>
              <ul className="mt-5 border-b border-primary-foreground/10">
                {[
                  { label: "Website design Kansas City", href: "/services/website-design" },
                  { label: "Free small business marketing audit", href: "/contact#form" },
                  { label: "View website work", href: "/work" },
                  { label: "Learn our story", href: "/about" }
                ].map((link) => (
                  <li key={link.label} className="border-t border-primary-foreground/10">
                    <Link href={link.href} className="group flex items-center justify-between gap-4 py-3.5 transition-colors hover:text-[hsl(229_100%_75%)]">
                      {link.label}
                      <ArrowUpRightIcon className="h-4 w-4 shrink-0 transition-transform duration-500 group-hover:rotate-45" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-primary-foreground/55">
                Hometown builds websites and marketing systems for Kansas City small businesses that need clearer visibility and better lead
                flow.
              </p>
            </section>

            <section aria-labelledby="categories-heading">
              <h2 id="categories-heading" className="mono-label text-muted-foreground">
                Categories
              </h2>
              <ul className="mt-4 border-b border-foreground/12">
                {categories.map((category) => {
                  const count = blogPosts.filter((post) => post.category === category).length;
                  return (
                    <li key={category} className="flex items-center justify-between gap-4 border-t border-foreground/12 py-3">
                      <span>{category}</span>
                      <span className="font-mono text-xs text-muted-foreground">{count}</span>
                    </li>
                  );
                })}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Topics">
                {editorialTags.map((tag) => (
                  <li key={tag} className="rounded-full border border-foreground/15 px-3 py-1.5 text-xs">
                    {tag}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="upcoming-heading">
              <h2 id="upcoming-heading" className="mono-label text-muted-foreground">
                Upcoming topics
              </h2>
              <ul className="mt-4 border-b border-foreground/12">
                {plannedBlogTopics.map((topic) => (
                  <li key={topic.title} className="border-t border-foreground/12">
                    <Link href={topic.target} className="group block py-4">
                      <span className="mono-label text-accent">{topic.category}</span>
                      <span className="mt-2 flex items-start justify-between gap-3 font-medium leading-snug transition-colors group-hover:text-accent">
                        {topic.title}
                        <ArrowUpRightIcon className="mt-0.5 h-4 w-4 shrink-0" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </SectionShell>

      <ContactCta
        title="Need the website before the reading list?"
        accentText="before the reading list?"
        body="Start with a custom Kansas City small-business website, then use the blog to make better next-step marketing decisions."
        links={[{ href: "/services/website-design", label: "Website Design Service" }]}
      />
    </div>
  );
}
