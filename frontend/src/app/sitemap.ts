import type { MetadataRoute } from "next";
import { SITE_DOMAIN } from "@/lib/config";
import { products } from "@/components/products/product-data";
import { events, articles } from "@/components/education/education-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = "2026-03-10";

  /* ── Static routes ── */
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_DOMAIN, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_DOMAIN}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_DOMAIN}/education`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_DOMAIN}/partnership`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_DOMAIN}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_DOMAIN}/contact`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_DOMAIN}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_DOMAIN}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  /* ── Dynamic: product pages ── */
  const productRoutes: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE_DOMAIN}/products/${p.id}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /* ── Dynamic: event pages ── */
  const eventRoutes: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${SITE_DOMAIN}/education/events/${e.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  /* ── Dynamic: article pages ── */
  const articleRoutes: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_DOMAIN}/education/articles/${a.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...eventRoutes, ...articleRoutes];
}
