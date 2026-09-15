import { Armchair, Home, Building2, Box } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const previewServices = [
  {
    title: 'Custom Furniture Design',
    description:
      'Bespoke furniture created specifically for your space, requirements and lifestyle.',
    Icon: Armchair,
  },
  {
    title: 'Residential Furniture',
    description:
      'Furniture concepts designed for homes, apartments, villas and luxury residences.',
    Icon: Home,
  },
  {
    title: 'Commercial Furniture',
    description:
      'Furniture solutions for offices, hotels, restaurants, retail and commercial spaces.',
    Icon: Building2,
  },
  {
    title: '3D Visualization',
    description:
      'Realistic 3D concepts to help clients visualize the final furniture before production.',
    Icon: Box,
  },
];

export function ServicesPreview() {
  return (
    <section className="section section-alt" aria-label="Our services">
      <div className="container">
        <SectionHeading
          label="What We Do"
          title="Our Services"
          subtitle="From concept to completion, we offer a comprehensive range of furniture design services."
          centered
        />
        <div className="row g-4">
          {previewServices.map((service, index) => (
            <div key={service.title} className="col-md-6 col-lg-3">
              <AnimateOnScroll delay={index * 0.1}>
                <div className="service-card">
                  <div className="service-card-icon">
                    <service.Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-description">
                    {service.description}
                  </p>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
