import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const pages = ["", "/tentang", "/proyek", "/kontak"];

  return [
    ...pages.map((page) => ({
      url: new URL(page, baseUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: page ? 0.7 : 1,
    })),
    ...projects.map((project) => ({
      url: new URL(`/proyek/${project.slug}`, baseUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
