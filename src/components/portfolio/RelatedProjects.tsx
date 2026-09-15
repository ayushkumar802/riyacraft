import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

interface RelatedProjectsProps {
  projects: Project[];
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section className="section section-alt" aria-label="Related projects">
      <div className="container">
        <h2 className="section-title mb-5">Related Projects</h2>
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.slug} className="col-md-4">
              <Link href={`/portfolio/${project.slug}`} className="project-card">
                <div className="project-card-image">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="project-card-content">
                  <p className="project-card-category">{project.category}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-link">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
