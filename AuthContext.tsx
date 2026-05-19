import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://elwords.in';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}