import { siteConfig } from '@/config/site';
import type { BreadcrumbItem, Service } from '@/types';

export function generateOrganizationSchema() {
  const sameAs = Object.values(siteConfig.socialLinks).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.seo.defaultDescription,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    address: {
      '@type': 'PostalAddress',
      // TODO: add streetAddress once you have the real workshop/shop address
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: '411001', // Pune main pincode, replace with the exact one later
      addressCountry: 'IN',
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:00',
      },
    ],
    knowsAbout: [
      'Custom wooden furniture',
      'Woodwork',
      'Carpentry',
      'Carpenter in Pune',
      'Furniture maker in Pune',
      'Furniture design',
      'Modular furniture',
      'Modular kitchen',
      'Bedroom furniture',
      'Living room furniture',
      'Office furniture',
      'Residential furniture',
      'Commercial furniture',
    ],
    priceRange: '₹₹',
    // Only included once you add real social profile links in site.ts
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.seo.defaultDescription,
    inLanguage: 'en-IN',
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

export function generateWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: {
      '@id': `${siteConfig.url}/#website`,
    },
    about: {
      '@id': `${siteConfig.url}/#organization`,
    },
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${siteConfig.url}${item.href}` } : {}),
    })),
  };
}

export function generateServiceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription || service.description,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    url: `${siteConfig.url}/services`,
  };
}

// Not used on the home page. Replace "The Designer" with the real name before using it.
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'The Designer',
    jobTitle: 'Furniture Designer',
    description:
      'Professional furniture designer specializing in custom, residential, and commercial furniture design.',
    worksFor: {
      '@id': `${siteConfig.url}/#organization`,
    },
    url: `${siteConfig.url}/about`,
  };
}