import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/i18n";
import { services } from "@/content/services";
import { projects } from "@/content/projects";

/**
 * Sitemap (§10): all pages, all services, all projects, for every live locale.
 * Alternates carry hreflang so the structure is ready for `en` once it launches.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Locale-relative paths and their crawl hints.
  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/projects", priority: 0.8, freq: "monthly" },
    { path: "/methodology", priority: 0.7, freq: "yearly" },
    { path: "/about", priority: 0.7, freq: "yearly" },
    { path: "/reviews", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.6, freq: "yearly" },
  ];

  const servicePaths = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.8,
    freq: "monthly" as const,
  }));

  const projectPaths = projects.map((p) => ({
    path: `/projects/${p.slug}`,
    priority: 0.6,
    freq: "monthly" as const,
  }));

  const all = [...staticPaths, ...servicePaths, ...projectPaths];

  const url = (locale: string, path: string) => {
    const clean = path === "/" ? "" : path.replace(/^\//, "");
    return `${SITE_URL}/${locale}${clean ? `/${clean}` : ""}`;
  };

  return all.flatMap(({ path, priority, freq }) =>
    LOCALES.map((locale) => ({
      url: url(locale, path),
      lastModified: now,
      changeFrequency: freq,
      priority,
      alternates: {
        languages: Object.fromEntries([
          ...LOCALES.map((l) => [l, url(l, path)]),
          ["x-default", url(DEFAULT_LOCALE, path)],
        ]),
      },
    }))
  );
}
