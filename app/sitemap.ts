import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { journal } from "@/data/journal";
import { tours } from "@/data/tours";
import { site } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/things-to-do", "/packages", "/tours", "/destinations", "/experiences", "/gallery", "/news", "/journal", "/book-a-taxi", "/plan-my-trip", "/contact"];
  return [
    ...staticRoutes.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() })),
    ...tours.map((tour) => ({ url: `${site.url}/packages/${tour.slug}`, lastModified: new Date() })),
    ...tours.map((tour) => ({ url: `${site.url}/tours/${tour.slug}`, lastModified: new Date() })),
    ...destinations.map((destination) => ({ url: `${site.url}/destinations/${destination.slug}`, lastModified: new Date() })),
    ...experiences.map((experience) => ({ url: `${site.url}/things-to-do/${experience.slug}`, lastModified: new Date() })),
    ...experiences.map((experience) => ({ url: `${site.url}/experiences/${experience.slug}`, lastModified: new Date() })),
    ...journal.map((article) => ({ url: `${site.url}/news/${article.slug}`, lastModified: new Date(article.publishedAt) })),
    ...journal.map((article) => ({ url: `${site.url}/journal/${article.slug}`, lastModified: new Date(article.publishedAt) }))
  ];
}
