import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { blogPosts, plannedBlogTopics } from "@/data/blog";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Blog | Website Design & Marketing Advice for Kansas City Small Businesses",
  "Practical website design, SEO, pricing, and marketing advice for Kansas City small-business owners.",
  "/blog"
);

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const secondaryPosts = blogPosts.filter((post) => post.href !== featuredPost?.href);
  const latestPosts = secondaryPosts.length > 0 ? secondaryPosts : blogPosts;

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
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Hometown Blog</p>
            <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
              Website design and marketing advice for Kansas City small businesses
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/76 md:text-xl">
              Practical guides on websites, local SEO, pricing, and lead flow for owners who need clearer marketing decisions.
            </p>
          </div>
        </div>
      </section>

      {featuredPost ? (
        <SectionShell>
          <Link
            href={featuredPost.href}
            className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
          >
            <article className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="bg-foreground p-7 text-primary-foreground md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured Guide</p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">{featuredPost.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-primary-foreground/72">{featuredPost.excerpt}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredPost.targetKeywords.map((keyword) => (
                    <span key={keyword} className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-primary-foreground/72">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between p-7 md:p-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{featuredPost.category}</p>
                  <div className="mt-6 grid gap-4">
                    {[
                      "See what a practical small-business website budget covers",
                      "Understand when a project costs more than the starting price",
                      "Compare DIY, freelancer, small agency, and larger agency options"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                  Read the guide
                  <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>
            </article>
          </Link>
        </SectionShell>
      ) : null}

      <SectionShell className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Latest</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Published guides.</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              New posts will be added here as the SEO content plan builds out.
            </p>
          </div>

          <div className="grid gap-4">
            {latestPosts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-accent"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{post.category}</p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground">{post.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <p className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">{post.readingTime}</p>
                </div>
              </Link>
            ))}

            {secondaryPosts.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border bg-secondary/50 p-5">
                <p className="text-sm font-bold text-foreground">More posts are queued in the SEO plan.</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The next guides should cover website pricing, contractor websites, and redesign decisions.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="dark-panel p-7 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/60">Upcoming Topics</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">The next guides should support buyer-intent searches.</h2>
            </div>
            <div className="grid gap-3">
              {plannedBlogTopics.map((topic) => (
                <Link
                  key={topic.title}
                  href={topic.target}
                  className="group flex flex-col gap-2 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/[0.04] px-5 py-4 transition hover:-translate-y-0.5 hover:border-accent sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{topic.category}</p>
                    <p className="mt-2 text-base font-bold text-primary-foreground">{topic.title}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-primary-foreground/72 transition group-hover:text-accent">
                    Related page
                    <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-4xl font-bold tracking-tight md:text-5xl">Need the website before the reading list?</p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/72">
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
      </SectionShell>
    </div>
  );
}
