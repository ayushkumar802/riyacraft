import type { Testimonial } from '@/types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="testimonial-card">
      <span className="testimonial-quote-mark" aria-hidden="true">&ldquo;</span>
      <p className="testimonial-text">{testimonial.quote}</p>
      <div>
        <p className="testimonial-author">{testimonial.name}</p>
        <p className="testimonial-role">
          {testimonial.projectType}
          {testimonial.location && ` · ${testimonial.location}`}
        </p>
      </div>
    </div>
  );
}
