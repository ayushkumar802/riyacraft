import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description:
      'We begin with a conversation to understand your space, needs, lifestyle, and design preferences.',
  },
  {
    number: '02',
    title: 'Concept',
    description:
      'We develop initial design concepts with mood boards, sketches, and material suggestions.',
  },
  {
    number: '03',
    title: 'Design Development',
    description:
      'The chosen concept is refined with precise dimensions, materials, and technical specifications.',
  },
  {
    number: '04',
    title: '3D Visualization',
    description:
      'Photorealistic 3D renders allow you to see the furniture in context before production.',
  },
  {
    number: '05',
    title: 'Final Design & Production Support',
    description:
      'Complete production-ready drawings and craftsman liaison to ensure the design intent is preserved.',
  },
];

export function ProcessSection() {
  return (
    <section className="section section-alt" aria-label="Our process">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <SectionHeading
              label="How We Work"
              title="Our Process"
              subtitle="A methodical, collaborative approach that reduces risk and ensures every detail is considered."
            />
          </div>
          <div className="col-lg-6 offset-lg-1">
            {steps.map((step, index) => (
              <AnimateOnScroll key={step.number} delay={index * 0.1}>
                <div className="process-step">
                  <span className="process-step-number">{step.number}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-description">{step.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
