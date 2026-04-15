import type { Metadata } from "next";
import { site } from "@/data/site";

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  brandOverride?: string
): Metadata {
  const url = `${site.url}${path}`;
  const brand = brandOverride ?? site.brand.fullName;
  const titled = title.includes(brand) ? title : `${title} | ${brand}`;
  return {
    title: {
      absolute: titled
    },
    description,
    robots: {
      index: true,
      follow: true
    },
    alternates: { canonical: url },
    openGraph: {
      title: titled,
      description,
      type: "website",
      url,
      siteName: brand,
      images: [
        {
          url: site.brand.socialImage,
          alt: site.brand.fullName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: titled,
      description,
      images: [site.brand.socialImage]
    }
  };
}
