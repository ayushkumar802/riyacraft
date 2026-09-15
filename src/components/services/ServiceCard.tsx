import * as LucideIcons from 'lucide-react';
import type { Service } from '@/types';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

type LucideIconName = keyof typeof LucideIcons;

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const IconComponent = (LucideIcons[service.icon as LucideIconName] as React.ComponentType<{ size?: number; strokeWidth?: number }>) || LucideIcons.Shapes;

  return (
    <AnimateOnScroll delay={index * 0.08}>
      <div className="service-card">
        <div className="service-card-icon">
          <IconComponent size={32} strokeWidth={1.5} />
        </div>
        <h3 className="service-card-title">{service.title}</h3>
        <p className="service-card-description mb-4">{service.description}</p>
        {service.features.length > 0 && (
          <ul style={{ paddingLeft: 'var(--space-5)', margin: 0 }}>
            {service.features.map((feature) => (
              <li
                key={feature}
                style={{
                  fontSize: 'var(--fs-sm)',
                  color: 'var(--color-secondary)',
                  marginBottom: 'var(--space-1)',
                  lineHeight: 'var(--lh-relaxed)',
                }}
              >
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </AnimateOnScroll>
  );
}
