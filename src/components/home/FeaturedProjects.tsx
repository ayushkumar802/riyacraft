import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getFeaturedProjects } from '@/data/projects';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export function FeaturedProjects() {
  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <section className="section" aria-label="Featured projects">
      <div className="container">
        <SectionHeading
          label="Portfolio"
          title="Selected Work"
          subtitle="A curated selection of furniture design projects across residential and commercial spaces."
          centered
        />
        <div className="row g-4">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={index < 2 ? 'col-md-6' : 'col-md-6 col-lg-4'}
            >
              <AnimateOnScroll delay={index * 0.1}>
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="project-card"
                >
                  <div className="project-card-image">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes={index < 2 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="project-card-content">
                    <p className="project-card-category">{project.category}</p>
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-description">
                      {project.description.slice(0, 120)}…
                    </p>
                    <span className="project-card-link">
                      View Project <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimateOnScroll>
            </div>
          ))}
        </div>
        <div className="text-center mt-5">
          <Link href="/portfolio" className="btn btn-outline-primary btn-lg">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
