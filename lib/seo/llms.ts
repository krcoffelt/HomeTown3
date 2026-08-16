import { blogPosts } from "@/data/blog";
import { industries } from "@/data/industries";
import { locations } from "@/data/locations";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { site } from "@/data/site";

function absoluteUrl(path: string) {
  return path.startsWith("http://") || path.startsWith("https://") ? path : `${site.url}${path}`;
}

function linkLine(title: string, path: string, description: string) {
  return `- [${title}](${absoluteUrl(path)}): ${description.replaceAll("\n", " ")}`;
}

function section(title: string, links: string[]) {
  return `## ${title}\n\n${links.join("\n")}`;
}

export function getLlmsTxt() {
  const serviceLinks = services.map((service) =>
    linkLine(
      service.title,
      `/services/${service.slug}`,
      service.shortDescription
    )
  );

  const industryLinks = industries.map((industry) =>
    linkLine(industry.title, `/industries/${industry.slug}`, industry.seoDescription)
  );

  const caseStudyLinks = projects
    .filter((project) => project.problem && project.solution && project.result)
    .map((project) =>
      linkLine(`${project.clientName} Case Study`, `/case-studies/${project.slug}`, project.summary)
    );

  const guideLinks = blogPosts.map((post) => linkLine(post.title, post.href, post.excerpt));

  const locationLinks = locations.map((location) =>
    linkLine(`${location.title} Website Design`, `/locations/${location.slug}`, location.seoDescription)
  );

  const companyLinks = [
    linkLine("Free Marketing Audit", "/contact", "Schedule a consultation to identify the clearest website, SEO, or paid-ads opportunity."),
    linkLine("Portfolio", "/work", "Selected website work and links to completed case studies."),
    linkLine("About Hometown", "/about", "Background on Hometown Marketing Agency and its approach.")
  ];

  return [
    `# ${site.brand.fullName}`,
    `> ${site.description}`,
    `Canonical site: ${site.url}\n\nHometown serves small businesses across the Kansas City metro. The linked live pages are the source of truth for service scope, availability, service areas, conversion-focused marketing, and project results.`,
    section("Services", serviceLinks),
    section("Industries", industryLinks),
    section("Case Studies", caseStudyLinks),
    section("Guides", guideLinks),
    section("Company", companyLinks),
    section("Optional", locationLinks)
  ].join("\n\n") + "\n";
}
