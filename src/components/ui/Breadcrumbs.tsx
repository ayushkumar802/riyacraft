import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';
import { generateBreadcrumbSchema } from '@/lib/structured-data';

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbItem[] = [{ label: 'Home', href: '/' }, ...items];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(allItems)),
        }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol>
          {allItems.map((item, index) => (
            <li key={index}>
              {index > 0 && (
                <ChevronRight size={12} className="separator" aria-hidden="true" />
              )}
              {item.href && index < allItems.length - 1 ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current="page">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
