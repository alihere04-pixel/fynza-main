import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://fynza.store/', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://fynza.store/tiktok', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    // Etsy tool
    { url: 'https://fynza.store/etsy', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://fynza.store/etsy/calculator', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://fynza.store/etsy/faq', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://fynza.store/etsy/us', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/uk', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/eu', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/ca', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/au', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/in', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://fynza.store/etsy/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: 'https://fynza.store/etsy/blog/etsy-fees-explained-2026', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/how-much-does-etsy-take', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-profit-calculator-guide', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-offsite-ads-worth-it', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-vs-shopify-fees', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-listing-fee-explained', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-payment-processing-fees-by-country', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/blog/etsy-profit-margin-guide', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://fynza.store/etsy/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://fynza.store/etsy/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://fynza.store/etsy/disclaimer', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ];
}
