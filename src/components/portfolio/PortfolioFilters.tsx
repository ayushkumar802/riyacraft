'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { portfolioCategories } from '@/data/projects';

export function PortfolioFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get('category') || 'All';

  const handleFilter = (category: string) => {
    if (category === 'All') {
      router.push('/portfolio', { scroll: false });
    } else {
      router.push(`/portfolio?category=${encodeURIComponent(category)}`, { scroll: false });
    }
  };

  return (
    <div className="portfolio-filters" role="group" aria-label="Filter projects by category">
      {portfolioCategories.map((category) => (
        <button
          key={category}
          className={`portfolio-filter-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleFilter(category)}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
