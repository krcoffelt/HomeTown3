import { ImageResponse } from "next/og";
import { getLocationBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import { site } from "@/data/site";

export const runtime = "edge";

const coreOgCopy: Record<string, { eyebrow: string; title: string; description: string }> = {
  home: {
    eyebrow: "Kansas City Small Business Marketing",
    title: "Affordable websites and marketing built for KC small businesses.",
    description: "Custom websites, ads, social media, and design from a team that keeps things practical."
  },
  services: {
    eyebrow: "Services",
    title: "Websites, ads, social media, SEO, design, and tracking support.",
    description: "Everything Hometown offers to help small businesses look established and get more leads."
  },
  work: {
    eyebrow: "Our Work",
    title: "Real website work for real Kansas City businesses.",
    description: "A look at recent Hometown builds across restaurants, music, publishing, and home services."
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Transparent pricing without surprise invoices.",
    description: "See the $800 website offer and the supporting marketing services available beyond the build."
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk through your business with a real person.",
    description: "No bloated pitch deck. Just a direct conversation about websites, ads, or marketing support."
  },
  about: {
    eyebrow: "About Hometown",
    title: "A small business marketing partner built around clarity and direct work.",
    description: "Meet the team, the service area, and the approach behind Hometown Marketing Agency."
  },
  locations: {
    eyebrow: "Service Areas",
    title: "Marketing support for businesses across the Kansas side of the KC metro.",
    description: "Explore the first Hometown location pages for Overland Park, Olathe, Leawood, Lenexa, and Shawnee."
  },
  offer: {
    eyebrow: "$800 Website Offer",
    title: "Professional small business websites for $800.",
    description: "A focused landing page for service businesses that need a clean, credible website fast."
  },
  privacy: {
    eyebrow: "Privacy Policy",
    title: "How Hometown handles privacy and lead information.",
    description: "The privacy policy for the Hometown website and lead forms."
  },
  terms: {
    eyebrow: "Terms of Service",
    title: "The terms that govern use of the Hometown website.",
    description: "Terms of service for Hometown Marketing Agency."
  },
  cookies: {
    eyebrow: "Cookie Policy",
    title: "How cookies and analytics are used on the Hometown site.",
    description: "Cookie and tracking policy for Hometown Marketing Agency."
  }
};

function getOgCopy(slug: string) {
  if (slug.startsWith("service-")) {
    const service = getServiceBySlug(slug.replace("service-", ""));
    if (service) {
      return {
        eyebrow: "Service",
        title: service.title,
        description: service.seoDescription ?? service.description
      };
    }
  }

  if (slug.startsWith("location-")) {
    const location = getLocationBySlug(slug.replace("location-", ""));
    if (location) {
      return {
        eyebrow: `${location.city}, ${location.state}`,
        title: location.heroTitle,
        description: location.heroDescription
      };
    }
  }

  return (
    coreOgCopy[slug] ?? {
      eyebrow: site.brand.fullName,
      title: site.title,
      description: site.description
    }
  );
}

export async function GET(_request: Request, context: { params: Promise<{ slug: string }> }) {
  const { slug } = await context.params;
  const copy = getOgCopy(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 30%), linear-gradient(135deg, #0a0a0a 0%, #111827 100%)",
          color: "#ffffff",
          padding: "76px",
          fontFamily: "Helvetica, Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "14px 22px",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.14)",
            color: "#93c5fd",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase"
          }}
        >
          {copy.eyebrow}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: "980px" }}>
          <div style={{ fontSize: 72, lineHeight: 1.03, fontWeight: 800 }}>{copy.title}</div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.78)" }}>{copy.description}</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 28, fontWeight: 800 }}>{site.brand.fullName}</div>
          <div style={{ fontSize: 24, color: "rgba(255,255,255,0.6)" }}>{site.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
