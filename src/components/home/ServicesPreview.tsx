import { Armchair, Home, Building2, Box } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const previewServices = [
  {
    title: 'Custom Wooden Furniture',
    description:
      'Bespoke wooden furniture and custom carpentry made specifically for your space, requirements and lifestyle.',
    Icon: Armchair,
  },
  {
    title: 'Residential Furniture',
    description:
      'Bedroom, living room, kitchen and vanity furniture designed for homes, apartments and villas in Ranchi.',
    Icon: Home,
  },
  {
    title: 'Commercial Furniture',
    description:
      'Office furniture and woodwork for offices, hotels, restaurants, retail and commercial spaces.',
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
          title="Wooden Furniture & Woodwork Services in Ranchi"
          subtitle="From concept to completion, we design and build custom and modular wooden furniture, including modular kitchens, for homes and businesses."
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