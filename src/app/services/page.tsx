import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/ui/CTASection';
import { generateServiceSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Professional furniture design services including custom furniture design, residential and commercial furniture, 3D visualization, and design consultation.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Services | ' + siteConfig.name,
    description:
      'Professional furniture design services — custom, residential, commercial, modular, bespoke, and 3D visualization.',
    url: `${siteConfig.url}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      {services.map((service) => (
        <script
          key={service.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema(service)),
          }}
        />
      ))}

      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1 className="page-header-title">Our Services</h1>
          <p className="page-header-subtitle">
            From initial concept to production-ready design, we offer a
            comprehensive range of furniture design services for residential
            and commercial projects.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={service.slug} className="col-md-6 col-lg-4">
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />

      <CTASection
        title="Ready to discuss your project?"
        subtitle="Tell us about your furniture design needs and let us create something exceptional for your space."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        showWhatsApp
        dark
      />
    </>
  );
}
