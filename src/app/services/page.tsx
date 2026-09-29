import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { services } from '@/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ServiceCard } from '@/components/services/ServiceCard';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/ui/CTASection';
import { generateServiceSchema } from '@/lib/structured-data';

const pageTitle = 'Wooden Furniture & Woodwork Services in Ranchi';
const pageDescription =
  'Custom wooden furniture and woodwork services in Ranchi, Jharkhand: residential and commercial furniture, 3D visualization and design consultation.';

export const metadata: Metadata = {
  title: pageTitle, // layout template adds " | RiyaCrafts"
  description: pageDescription,
  alternates: {
    canonical: '/services',
  },
  // A page-level openGraph replaces the layout's entirely, so repeat the shared fields
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: siteConfig.name,
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    url: '/services',
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

export default function ServicesPage() {
  return (
    <>
      {services.map((service) => (
        <script
          key={service.slug}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceSchema(service)).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />
      ))}

      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <h1 className="page-header-title">
            Our Wooden Furniture &amp; Woodwork Services
          </h1>
          <p className="page-header-subtitle">
            From initial concept to finished piece, we design and build custom
            and modular wooden furniture, including bedroom, living room,
            kitchen and office furniture, for homes and businesses in Ranchi
            and across Jharkhand.
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