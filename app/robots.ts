import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://jibin-homepage-draft.jibinjohnv.chatgpt.site/sitemap.xml",
  };
}
