import type { Metadata } from 'next';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/ui/CTASection';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';
import { generatePersonSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about our furniture design studio — our approach, philosophy, and commitment to creating thoughtful, functional furniture for every space.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | ' + siteConfig.name,
    description:
      'Learn about our furniture design approach, philosophy, and commitment to craftsmanship.',
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    title: 'Design with Purpose',
    text: 'Every design decision must serve a reason — aesthetic, functional, or both. We do not design for decoration alone.',
  },
  {
    title: 'Material Honesty',
    text: 'We respect materials for what they are. Wood should look like wood, metal like metal. Honest material choices create authentic furniture.',
  },
  {
    title: 'Client Collaboration',
    text: 'The best furniture comes from genuine collaboration. We listen carefully, ask the right questions, and design with your life in mind.',
  },
  {
    title: 'Lasting Quality',
    text: 'We design for longevity — both in aesthetics and construction. Furniture should serve you well for decades, not just seasons.',
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generatePersonSchema()),
        }}
      />

      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <h1 className="page-header-title">About the Studio</h1>
          <p className="page-header-subtitle">
            A furniture design practice built on the belief that good design
            improves how people live and work.
          </p>
        </div>
      </div>

      {/* Designer Profile */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <AnimateOnScroll>
                <div style={{ position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                  <Image
                    src="https://didstxzqjqqgyjxr.public.blob.vercel-storage.com/2c5e6066-777a-49cc-96fc-a9d68e106967.jpg"
                    alt="Furniture designer reviewing drawings and material samples in the studio workshop"
                    fill
                    sizes="(max-width: 992px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              </AnimateOnScroll>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <AnimateOnScroll delay={0.2}>
                <span className="section-label">The Studio</span>
                <h2 className="section-title">
                  Furniture That Belongs.
                </h2>
                <p style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-secondary)' }}>
                  {siteConfig.name} is a professional furniture design studio
                  specializing in custom, residential, and commercial furniture.
                  We work with clients who value thoughtful design — people who
                  understand that furniture is not just about filling a room, but
                  about shaping how a space feels and functions.
                </p>
                <p style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-secondary)' }}>
                  From the first conversation to the final specification, our
                  process is collaborative, detail-oriented, and focused on
                  creating furniture that genuinely serves its purpose — pieces
                  that feel like they were always meant to be there.
                </p>
                <p style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-secondary)' }}>
                  We believe in designing furniture around life, not the other
                  way around. Every piece we create balances proportion,
                  function, and materiality — resulting in furniture that is
                  practical, beautiful, and built to last.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <AnimateOnScroll>
                <span className="section-label">Our Values</span>
                <h2 className="section-title">What We Stand For</h2>
                <p className="section-subtitle">
                  These principles guide every project we take on and every
                  design decision we make.
                </p>
              </AnimateOnScroll>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="row g-5">
                {values.map((value, index) => (
                  <div key={value.title} className="col-sm-6">
                    <AnimateOnScroll delay={index * 0.1}>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-lg)', marginBottom: 'var(--space-3)' }}>
                        {value.title}
                      </h3>
                      <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', lineHeight: 'var(--lh-relaxed)', marginBottom: 0 }}>
                        {value.text}
                      </p>
                    </AnimateOnScroll>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="section">
        <div className="container">
          <div className="row text-center g-5">
            {[
              { number: '250+', label: 'Projects Completed' },
              { number: '16+', label: 'Years of Experience' },
              { number: '300+', label: 'Satisfied Clients' },
              { number: '100%', label: 'Custom Designed' },
            ].map((stat, index) => (
              <div key={stat.label} className="col-6 col-lg-3">
                <AnimateOnScroll delay={index * 0.1}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-4xl)', color: 'var(--color-accent)', marginBottom: 'var(--space-2)', lineHeight: 1 }}>
                    {stat.number}
                  </p>
                  <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', letterSpacing: 'var(--ls-wide)', textTransform: 'uppercase', marginBottom: 0 }}>
                    {stat.label}
                  </p>
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's work together."
        subtitle="If you have a furniture project in mind, we would love to hear about it."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
