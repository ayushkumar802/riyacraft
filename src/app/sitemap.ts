import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getProjects } from '@/data/projects';

// Refresh at most once an hour so new projects appear without a redeploy
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1 },
    { url: `${baseUrl}/portfolio`, priority: 0.9 },
    { url: `${baseUrl}/services`, priority: 0.8 },
    { url: `${baseUrl}/about`, priority: 0.7 },
    { url: `${baseUrl}/contact`, priority: 0.8 },
  ];

  // If the Google Sheet can't be reached, still return the static pages
  let projectPages: MetadataRoute.Sitemap = [];
  try {
    const projects = await getProjects();
    projectPages = projects
      .filter((project) => project.slug)
      .map((project) => ({
        url: `${baseUrl}/portfolio/${project.slug}`,
        priority: 0.8,
      }));
  } catch (error) {
    console.error('Sitemap: failed to load projects', error);
  }

  return [...staticPages, ...projectPages];
}