import { siteConfig } from '@/config/site';
import type {BreadcrumbItem, Service } from '@/types';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}${siteConfig.seo.ogImage}`,
    logo: `${siteConfig.url}/images/logo.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      addressCountry: siteConfig.address.country,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
    priceRange: '$$',
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
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
