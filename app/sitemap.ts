import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/research", "/skills-specializations", "/continuing-education", "/publications", "/conferences", "/blog", "/contact"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: route === "/blog" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : .8,
  }));
}
