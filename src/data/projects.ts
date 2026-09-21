import type { Project } from '@/types';
import { getData } from '@/lib/fetchData';
import { PROJECTS_SHEET_ID } from '@/config/constant';

// Helper to convert sheet data to proper types
function normalizeProject(item: any): Project {
  return {
    ...item,
    images: [],
    // Sheet sends comma-separated strings, convert to arrays
    materials: typeof item.materials === 'string'
      ? item.materials.split(',').map((s: string) => s.trim())
      : item.materials || [],
    services: typeof item.services === 'string'
      ? item.services.split(',').map((s: string) => s.trim())
      : item.services || [],
    featured: item.featured === true || item.featured === 'TRUE',
  };
}

// Fetch all projects
export async function getProjects(): Promise<Project[]> {
  const data = await getData(PROJECTS_SHEET_ID);
  if (!data) return [];
  return data.map(normalizeProject);
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const projects = await getProjects();
  return projects.filter((p) => p.featured);
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
  const projects = await getProjects();
  if (category === 'All') return projects;
  return projects.filter(
    (p) => p.category === category || p.subcategory === category
  );
}

export async function getRelatedProjects(currentSlug: string, limit = 3): Promise<Project[]> {
  const projects = await getProjects();
  const current = projects.find((p) => p.slug === currentSlug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        (p.category === current.category || p.subcategory === current.subcategory)
    )
    .slice(0, limit);
}

export const portfolioCategories = [
  'All',
  'Residential',
  'Commercial',
  'Bedroom',
  'Living Room',
  'Kitchen',
  'Office',
  'Custom Furniture',
  'Modular Furniture',
] as const;
