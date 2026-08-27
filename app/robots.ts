import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard/", "/onboarding/", "/signup/"],
      },
    ],
    sitemap: "https://fundleaf.co.uk/sitemap.xml",
  };
}
