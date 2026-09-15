import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { projects, getProjectBySlug, getRelatedProjects } from '@/data/projects';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RelatedProjects } from '@/components/portfolio/RelatedProjects';
import { CTASection } from '@/components/ui/CTASection';
import { generateWebPageSchema } from '@/lib/structured-data';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.title} | Custom Furniture Design`,
    description: project.description.slice(0, 160),
    alternates: {
      canonical: `/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description.slice(0, 160),
      url: `${siteConfig.url}/portfolio/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 800,
          alt: project.title,
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description.slice(0, 160),
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedProjects(slug, 3);

  const pageSchema = generateWebPageSchema({
    title: project.title,
    description: project.description,
    url: `${siteConfig.url}/portfolio/${project.slug}`,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <div className="page-header">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Portfolio', href: '/portfolio' },
              { label: project.title },
            ]}
          />
          <div className="row">
            <div className="col-lg-8">
              <p className="project-card-category mb-3">{project.category}</p>
              <h1 className="page-header-title">{project.title}</h1>
              <p className="page-header-subtitle">{project.description}</p>
              <div className="d-flex flex-wrap gap-4 mt-4" style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)' }}>
                {project.location && (
                  <span className="d-flex align-items-center gap-1">
                    <MapPin size={14} /> {project.location}
                  </span>
                )}
                {project.year && (
                  <span className="d-flex align-items-center gap-1">
                    <Calendar size={14} /> {project.year}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main project image */}
      <section className="section-sm">
        <div className="container">
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--color-bg-alt)' }}>
            <Image
              src={project.coverImage}
              alt={project.images[0]?.alt || project.title}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              {project.designConcept && (
                <>
                  <h2 className="section-title">Design Concept</h2>
                  <p style={{ fontSize: 'var(--fs-md)', lineHeight: 'var(--lh-relaxed)', color: 'var(--color-secondary)' }}>
                    {project.designConcept}
                  </p>
                </>
              )}
            </div>
            <div className="col-lg-4 offset-lg-1">
              {project.materials && project.materials.length > 0 && (
                <div className="mb-5">
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                    Materials
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.materials.map((material) => (
                      <li key={material} style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border)' }}>
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.dimensions && (
                <div className="mb-5">
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                    Dimensions
                  </h3>
                  <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)' }}>
                    {project.dimensions}
                  </p>
                </div>
              )}

              {project.services && project.services.length > 0 && (
                <div className="mb-5">
                  <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                    Services Provided
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.services.map((service) => (
                      <li key={service} style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', padding: 'var(--space-2) 0', borderBottom: '1px solid var(--color-border)' }}>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <Link href="/contact" className="btn btn-primary w-100">
                Discuss a Similar Project <ArrowRight size={14} className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional images */}
      {project.images.length > 1 && (
        <section className="section-sm">
          <div className="container">
            <div className="row g-4">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="col-md-6">
                  <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', backgroundColor: 'var(--color-bg-alt)' }}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedProjects projects={relatedProjects} />

      <CTASection
        title="Interested in a custom furniture project?"
        subtitle="Let us design something considered and beautiful for your space."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        showWhatsApp
      />
    </>
  );
}
