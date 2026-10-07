import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: [
      'https://fynza.store/sitemap.xml',
      'https://fynza.store/tiktok/sitemap.xml',
      'https://fynza.store/etsy/sitemap.xml',
    ],
  };
}
