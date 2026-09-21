import Image from 'next/image';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

const principles = [
  { title: 'Functionality', text: 'Every design decision serves a practical purpose.' },
  { title: 'Materiality', text: 'Careful selection of materials for beauty and longevity.' },
  { title: 'Proportion', text: 'Balanced relationships between form, scale and space.' },
  { title: 'Craftsmanship', text: 'Precision in detail and respect for the making process.' },
  { title: 'Comfort', text: 'Furniture that feels as good as it looks.' },
  { title: 'Timelessness', text: 'Designs that age gracefully, never trend-driven.' },
];

export function DesignPhilosophy() {
  return (
    <section className="section" aria-label="Design philosophy">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <AnimateOnScroll>
              <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden' }}>
                <Image
                  src="https://didstxzqjqqgyjxr.public.blob.vercel-storage.com/fdc9e959-6512-474e-b2fa-7080dbabfa00.jpg"
                  alt="Close-up detail of hand-crafted walnut wood joinery showing precision craftsmanship"
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </AnimateOnScroll>
          </div>
          <div className="col-lg-6">
            <AnimateOnScroll delay={0.2}>
              <span className="section-label">Our Approach</span>
              <h2 className="section-title">Design Philosophy</h2>
              <p className="section-subtitle mb-5">
                From the first sketch to the final detail, every piece is designed around
                proportion, function and the character of its space.
              </p>
              <div className="row g-4">
                {principles.map((item) => (
                  <div key={item.title} className="col-sm-6">
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-md)', marginBottom: 'var(--space-1)' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: 'var(--fs-sm)', marginBottom: 0 }}>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
