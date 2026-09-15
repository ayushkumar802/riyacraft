export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  subcategory?: string;
  location?: string;
  year?: string;
  description: string;
  designConcept?: string;
  coverImage: string;
  images: ProjectImage[];
  materials?: string[];
  dimensions?: string;
  services?: string[];
  featured?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export type ProjectCategory =
  | 'Residential'
  | 'Commercial'
  | 'Bedroom'
  | 'Living Room'
  | 'Kitchen'
  | 'Office'
  | 'Custom Furniture'
  | 'Modular Furniture';

export interface Service {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  projectType: string;
  quote: string;
  location?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  projectType: string;
  budget: string;
  message: string;
  honeypot?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: {
    street?: string;
    city: string;
    state: string;
    country: string;
    postalCode?: string;
  };
  socialLinks: {
    instagram?: string;
    pinterest?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
    behance?: string;
  };
  seo: {
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    ogImage: string;
  };
  serviceAreas: string[];
  businessHours?: string;
}
