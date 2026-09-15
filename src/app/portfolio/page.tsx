import type { Metadata } from 'next';
import { Suspense } from 'react';
import { siteConfig } from '@/config/site';
import { projects, getProjectsByCategory } from '@/data/projects';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { PortfolioFilters } from '@/components/portfolio/PortfolioFilters';
import { ProjectGrid } from '@/components/portfolio/ProjectGrid';
import { CTASection } from '@/components/ui/CTASection';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our furniture design portfolio — custom residential and commercial furniture projects designed with precision, purpose, and craft.',
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Portfolio | ' + siteConfig.name,
    description:
      'Explore our furniture design portfolio — custom residential and commercial furniture projects.',
    url: `${siteConfig.url}/portfolio`,
    images: [{ url: siteConfig.seo.ogImage }],
  },
};

interface PortfolioPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function PortfolioPage({ searchParams }: PortfolioPageProps) {
  const params = await searchParams;
  const category = params.category || 'All';
  const filteredProjects =
    category === 'All' ? projects : getProjectsByCategory(category);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Portfolio' }]} />
          <h1 className="page-header-title">Our Portfolio</h1>
          <p className="page-header-subtitle">
            A collection of furniture design projects across residential and
            commercial spaces — each designed with intention and craft.
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
