import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered ? 'text-center' : '', 'mb-5', className)}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className={cn('section-subtitle', centered ? 'centered' : '')}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
