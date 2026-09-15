import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TestimonialCard } from '@/components/ui/TestimonialCard';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function Testimonials() {
  return (
    <section className="section section-alt" aria-label="Client testimonials">
      <div className="container">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          subtitle="Feedback from clients who trusted us with their furniture design projects."
          centered
        />
        <div className="row g-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={testimonial.id} className="col-md-6 col-lg-4">
              <AnimateOnScroll delay={index * 0.1}>
                <TestimonialCard testimonial={testimonial} />
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
