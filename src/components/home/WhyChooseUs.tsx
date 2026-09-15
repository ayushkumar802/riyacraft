import {
  PenTool,
  Users,
  Eye,
  Wrench,
  Monitor,
  MessageSquare,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const reasons = [
  {
    title: 'Custom-Designed Furniture',
    description: 'Every piece is designed specifically for your space and requirements.',
    Icon: PenTool,
  },
  {
    title: 'Client-Focused Approach',
    description: 'Your needs, preferences, and lifestyle drive every design decision.',
    Icon: Users,
  },
  {
    title: 'Attention to Detail',
    description: 'From material selection to finish, every detail is carefully considered.',
    Icon: Eye,
  },
  {
    title: 'Practical & Functional',
    description: 'Beautiful furniture that works hard in everyday life.',
    Icon: Wrench,
  },
  {
    title: 'High-Quality Visualization',
    description: 'Photorealistic 3D renders so you see the result before production.',
    Icon: Monitor,
  },
  {
    title: 'Professional Communication',
    description: 'Clear, responsive communication throughout the entire process.',
    Icon: MessageSquare,
  },
];

export function WhyChooseUs() {
  return (
    <section className="section" aria-label="Why choose us">
      <div className="container">
        <SectionHeading
          label="Why Us"
          title="Why Choose Us"
          subtitle="We combine design expertise with a practical, client-focused approach."
          centered
        />
        <div className="row g-4">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="col-md-6 col-lg-4">
              <AnimateOnScroll delay={index * 0.08}>
                <div className="why-card">
                  <div className="why-card-icon">
                    <reason.Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="why-card-title">{reason.title}</h3>
                  <p className="why-card-description">{reason.description}</p>
                </div>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
