import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fundleaf.co.uk";

  const publicPages = [
    "",
    "/for-charities",
    "/funding-database",
    "/pricing",
    "/resources",
    "/integrations",
    "/features/fundraising-crm",
    "/features/applications",
    "/security",
    "/accessibility",
    "/about",
  ];

  const staticPages = [
    "/resources/how-to-write-a-case-for-support",
    "/resources/restricted-and-unrestricted-funding",
    "/resources/national-lottery-heritage-fund-what-they-look-for",
    "/resources/what-do-funders-look-for",
    "/resources/funding-for-community-groups",
  ];

  const now = new Date();

  return [
    ...publicPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...staticPages.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
