import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { localSeoCities } from '@/data/localSeoCities';
import { siteConfig } from '@/lib/seo';

const withAbsoluteUrl = (path: string): string =>
  `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: withAbsoluteUrl('/'),
      changeFrequency: 'weekly',
      priority: 1,
      lastModified: now,
    },
    {
      url: withAbsoluteUrl('/contact'),
      changeFrequency: 'weekly',
      priority: 0.95,
      lastModified: now,
    },
    {
      url: withAbsoluteUrl('/case-studies'),
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: now,
    },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((item) => ({
    url: withAbsoluteUrl(item.href),
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: now,
  }));

  const localRoutes: MetadataRoute.Sitemap = localSeoCities.map((city) => ({
    url: withAbsoluteUrl(`/websites/${city.slug}`),
    changeFrequency: 'weekly',
    priority: 0.85,
    lastModified: now,
  }));

  return [...staticRoutes, ...localRoutes, ...caseStudyRoutes];
}
