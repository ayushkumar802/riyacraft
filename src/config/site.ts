import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'RiyaCrafts',
  tagline: 'Furniture Designed Around the Way You Live',
  description:
    'Thoughtful, functional and distinctive furniture design for residential and commercial spaces. Custom furniture, 3D visualization, and design consultation.',
  // Must match the primary domain in Vercel (www). No trailing slash.
  // NEXT_PUBLIC_SITE_URL on Vercel must be the same value.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.riyacrafts.com',
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'sachin9028273127@gmail.com',
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+91 9028273127',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+91 9028273127',
  address: {
    city: 'Pune',
    state: 'Maharashtra',
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
    defaultTitle: 'RiyaCrafts | Custom Wooden Furniture & Carpenter in Pune',
    defaultDescription:
      'Furniture maker and carpenter in Pune, Maharashtra. RiyaCrafts builds custom wooden furniture and woodwork for homes and offices. Get in touch today.',
    ogImage: '/images/hero/hero-living-room.png',
  },
  serviceAreas: [
    'Pune',
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