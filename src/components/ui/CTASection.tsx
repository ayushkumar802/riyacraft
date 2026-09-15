import Link from 'next/link';
import { getWhatsAppUrl } from '@/config/site';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showWhatsApp?: boolean;
  dark?: boolean;
  className?: string;
}

export function CTASection({
  title,
  subtitle,
  primaryLabel = 'Start a Project',
  primaryHref = '/contact',
  secondaryLabel,
  secondaryHref,
  showWhatsApp = false,
  dark = false,
  className,
}: CTASectionProps) {
  return (
    <section className={cn(dark ? 'section-dark' : '', 'cta-section', className)}>
      <div className="container">
        <h2 className="cta-title">{title}</h2>
        <p className={cn('cta-subtitle', dark ? '' : '')}>{subtitle}</p>
        <div className="cta-buttons">
          <Link href={primaryHref} className="btn btn-primary btn-lg">
            {primaryLabel}
          </Link>
          {showWhatsApp && (
            <a
              href={getWhatsAppUrl()}
              className="btn btn-whatsapp btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp Us
            </a>
          )}
          {secondaryLabel && secondaryHref && (
            <Link href={secondaryHref} className="btn btn-outline-primary btn-lg">
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
