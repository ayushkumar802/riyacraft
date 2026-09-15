import type { Project } from '@/types';
import { ProjectCard } from './ProjectCard';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-5">
        <p className="text-muted">No projects found in this category.</p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {projects.map((project, index) => (
        <div
          key={project.slug}
          className={index < 2 ? 'col-md-6' : 'col-md-6 col-lg-4'}
        >
          <AnimateOnScroll delay={index * 0.08}>
            <ProjectCard project={project} priority={index < 2} />
          </AnimateOnScroll>
        </div>
      ))}
    </div>
  );
}
