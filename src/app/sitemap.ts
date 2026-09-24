import type { MetadataRoute } from "next";

import { projects } from "@/data/projects";
import { researchProjects } from "@/data/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://i2prod.ca";

  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/research",
    "/about",
    "/contact",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const researchPages = researchProjects.map((research) => ({
    url: `${baseUrl}/research/${research.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...projectPages, ...researchPages];
}