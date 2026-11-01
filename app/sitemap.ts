import type { MetadataRoute } from "next";
import { siteUrl, pageSeo } from "./lib/seo";
import { projects } from "./lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: siteUrl, lastModified: now, priority: 1 },
    ...Object.values(pageSeo).map((p) => ({ url: `${siteUrl}${p.path}`, lastModified: now, priority: 0.7 })),
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}`, lastModified: now, priority: 0.6 })),
  ];
}
