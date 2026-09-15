import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          priority={priority}
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
  );
}
