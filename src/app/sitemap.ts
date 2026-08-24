import type { MetadataRoute } from "next";

import { featuredAreas } from "@/lib/areas";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/areas",
    "/projects",
    "/contact",
    "/privacy-policy",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...featuredAreas.map((area) => ({
      url: `${site.url}/areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
