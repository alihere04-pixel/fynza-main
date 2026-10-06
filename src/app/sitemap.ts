import type { MetadataRoute } from "next";

// /etsy will be added when the Etsy tool is live.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://fynza.store/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://fynza.store/tiktok', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];
}
