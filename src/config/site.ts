import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'RiyaCrafts',
  tagline: 'Furniture Designed Around the Way You Live',
  description:
    'Thoughtful, functional and distinctive furniture design for residential and commercial spaces. Custom furniture, 3D visualization, and design consultation.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://riyacrafts.com/',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'sachin9028273127@gmail.com',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+9028273127',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+9028273127',
  address: {
    city: 'Ranchi',
    state: 'Jharkhand',
    country: 'India',
  },
  socialLinks: {
    // instagram: 'https://instagram.com/your-handle',
    // pinterest: 'https://pinterest.com/your-handle',
    // linkedin: 'https://linkedin.com/company/your-handle',
    // behance: 'https://behance.net/your-handle',
  },
  seo: {
    titleTemplate: '%s | RiyaCrafts',
    defaultTitle: 'RiyaCrafts — Custom Furniture Design',
    defaultDescription:
      'Professional furniture design studio specializing in custom, residential, and commercial furniture. Bespoke designs crafted with precision and purpose.',
    ogImage: '/images/hero/hero-living-room.png',
  },
  serviceAreas: [
    'Ranchi',
    'Pune',
    'Hazaribag',
  ],
  businessHours: 'Monday – Saturday, 9:00 AM – 7:00 PM',
};

export const whatsappMessage =
  "Hi, I'm interested in your furniture design services. I'd like to discuss a project.";

export function getWhatsAppUrl(message?: string): string {
  const phone = siteConfig.whatsapp.replace(/[^0-9+]/g, '');
  const text = encodeURIComponent(message || whatsappMessage);
  return `https://wa.me/${phone.replace('+', '')}?text=${text}`;
}
