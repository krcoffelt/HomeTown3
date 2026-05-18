import type { Metadata } from "next";
import { site } from "@/data/site";
import { getCoreShareImage } from "@/lib/seo/routes";

interface MetadataOptions {
  image?: string;
  openGraphType?: "website" | "article";
}

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  brandOverride?: string,
  options?: MetadataOptions
): Metadata {
  const url = `${site.url}${path}`;
  const brand = brandOverride ?? site.brand.shortName;
  const titled = title.includes(brand) ? title : `${title} | ${brand}`;
  const image = options?.image ?? getCoreShareImage(path);
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
      type: options?.openGraphType ?? "website",
      url,
      siteName: brand,
      images: [
        {
          url: image,
          alt: site.brand.fullName
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: titled,
      description,
      images: [image]
    }
  };
}
