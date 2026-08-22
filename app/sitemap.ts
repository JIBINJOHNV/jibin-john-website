import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jibin-homepage-draft.jibinjohnv.chatgpt.site";
  return ["", "/about", "/research", "/skills-specializations", "/continuing-education", "/publications", "/conferences", "/blog", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: route === "/blog" ? "weekly" as const : "monthly" as const,
    priority: route === "" ? 1 : .8,
  }));
}
