import type { Metadata } from 'next';
import { Suspense } from 'react';
import { siteConfig } from '@/config/site';
import { getProjectsByCategory } from '@/data/projects';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PortfolioFilters } from '@/components/portfolio/PortfolioFilters';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { CTASection } from '@/components/ui/CTASection';

const pageTitle = 'Wooden Furniture Portfolio in Pune';
const pageDescription =
  'Explore custom wooden furniture and woodwork projects by RiyaCrafts in Pune, Maharashtra. Residential and commercial furniture designed with precision and craft.';

export const metadata: Metadata = {
  title: pageTitle, // layout template adds " | RiyaCrafts"
  description: pageDescription,
  alternates: {
    // Filtered URLs like /portfolio?category=Sofas all point to this one page
    canonical: '/portfolio',
  },
  // A page-level openGraph replaces the layout's entirely, so repeat the shared fields
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: '/portfolio',
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
};

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const category = params.category || 'All';
  const filteredProjects = await getProjectsByCategory(category);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Portfolio' }]} />
          <h1 className="page-header-title">Our Wooden Furniture Portfolio</h1>
          <p className="page-header-subtitle">
            A collection of custom wooden furniture and woodwork projects for
            homes and commercial spaces in Pune — each designed with
            intention and craft.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Suspense fallback={null}>
            <PortfolioFilters />
          </Suspense>
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>

      <CTASection
        title="Have a project in mind?"
        subtitle="We would love to hear about your furniture design needs."
        primaryLabel="Get in Touch"
        primaryHref="/contact"
        showWhatsApp
      />
    </>
  );
}