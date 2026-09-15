import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'modern-minimalist-tv-unit',
    title: 'Modern Minimalist TV Unit',
    category: 'Living Room',
    subcategory: 'Residential',
    location: 'Downtown Residence',
    year: '2024',
    description:
      'A sleek, custom-designed TV unit in natural walnut wood with integrated cable management, hidden storage compartments, and a floating shelf design that brings a sense of calm to the living room.',
    designConcept:
      'The concept centered on creating a piece that disappears into the architecture of the room while providing all the functional storage a modern living space requires. Clean horizontal lines and the warmth of walnut wood create a grounding element in an otherwise light, airy interior.',
    coverImage: '/images/projects/modern-tv-unit.png',
    images: [
      {
        src: '/images/projects/modern-tv-unit.png',
        alt: 'Custom walnut TV unit in a modern living room with clean lines and hidden storage',
        width: 1200,
        height: 800,
      },
      {
        src: '/images/hero/hero-living-room.png',
        alt: 'Full living room view showing the TV unit integrated with surrounding furniture',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['Natural Walnut Wood', 'Matte Black Metal', 'Tempered Glass', 'Soft-close Hardware'],
    dimensions: 'W: 2400mm × H: 450mm × D: 400mm',
    services: ['Custom Furniture Design', '3D Furniture Visualization', 'Furniture Design Consultation'],
    featured: true,
  },
  {
    slug: 'luxury-master-bedroom-suite',
    title: 'Luxury Master Bedroom Suite',
    category: 'Bedroom',
    subcategory: 'Residential',
    location: 'Private Villa',
    year: '2024',
    description:
      'A complete bedroom furniture suite featuring an upholstered bed frame with integrated nightstands, a custom oak dresser with ribbed detailing, and a cozy reading corner — all designed to create a sanctuary of rest.',
    designConcept:
      'This suite was conceived as a single cohesive environment rather than a collection of individual pieces. The palette of light oak, cream linen, and warm neutrals creates a serene atmosphere. Every element — from the nightstand height to the headboard angle — was calibrated for comfort and visual harmony.',
    coverImage: '/images/projects/luxury-bedroom.png',
    images: [
      {
        src: '/images/projects/luxury-bedroom.png',
        alt: 'Luxury master bedroom with custom upholstered bed frame and oak dresser',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['Light Oak Wood', 'Belgian Linen', 'Brushed Brass Hardware', 'Natural Stone'],
    dimensions: 'Bed: W: 1800mm × L: 2100mm | Dresser: W: 1600mm × H: 800mm',
    services: ['Residential Furniture Design', 'Custom Furniture Design', '3D Furniture Visualization'],
    featured: true,
  },
  {
    slug: 'executive-office-desk-system',
    title: 'Executive Office Desk System',
    category: 'Office',
    subcategory: 'Commercial',
    location: 'Corporate Headquarters',
    year: '2023',
    description:
      'A commanding L-shaped executive desk system in dark walnut with brass accents, paired with custom built-in shelving. Designed for a corner office with floor-to-ceiling views, the desk balances authority with approachability.',
    designConcept:
      'The brief called for a workspace that communicates leadership without intimidation. The result is an expansive desk with generous work surfaces, discreet cable routing, and brass detailing that catches light throughout the day. The matching shelving unit provides both display and storage, anchoring the office with warmth.',
    coverImage: '/images/projects/executive-office.png',
    images: [
      {
        src: '/images/projects/executive-office.png',
        alt: 'Executive L-shaped walnut desk with brass accents in a corporate office',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['Dark American Walnut', 'Brushed Brass', 'Full-grain Leather', 'Smoked Glass'],
    dimensions: 'L-desk: W: 2200mm × D: 900mm | Shelving: W: 3000mm × H: 2600mm',
    services: ['Commercial Furniture Design', 'Custom Furniture Design', 'Furniture Concept Development'],
    featured: true,
  },
  {
    slug: 'modular-kitchen-storage',
    title: 'Modular Kitchen Storage',
    category: 'Kitchen',
    subcategory: 'Residential',
    location: 'Urban Apartment',
    year: '2024',
    description:
      'A modular kitchen storage system combining handleless matte white cabinets with natural oak open shelving and a waterfall marble island. Designed to maximize storage in a compact urban kitchen without compromising on beauty.',
    designConcept:
      'In a city apartment where every centimeter counts, this kitchen system was designed as a series of modular elements that can adapt to the space. The contrast between clean white surfaces and the warmth of oak shelving creates visual depth, while the marble island serves as both prep surface and casual dining spot.',
    coverImage: '/images/projects/modular-kitchen.png',
    images: [
      {
        src: '/images/projects/modular-kitchen.png',
        alt: 'Modern modular kitchen with white handleless cabinets and oak open shelving',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['Matte White Laminate', 'Natural Oak', 'Calacatta Marble', 'Stainless Steel'],
    dimensions: 'Kitchen Run: 3600mm | Island: W: 1800mm × D: 900mm',
    services: ['Modular Furniture Design', 'Residential Furniture Design', '3D Furniture Visualization'],
    featured: true,
  },
  {
    slug: 'boutique-hotel-lobby-furniture',
    title: 'Boutique Hotel Lobby Furniture',
    category: 'Commercial',
    location: 'Heritage Hotel',
    year: '2023',
    description:
      'A complete lobby furniture collection for a boutique heritage hotel, featuring a curved marble reception desk, bespoke velvet lounge seating, brass-framed side tables, and custom pendant lighting. Every piece reflects the building\'s character while meeting modern hospitality standards.',
    designConcept:
      'The hotel occupies a renovated heritage building, and the furniture needed to honor its architectural history while feeling unmistakably contemporary. The curved reception desk mirrors the building\'s arched windows, while the deep velvet seating invites guests to linger. Brass accents and sculptural lighting add a sense of occasion.',
    coverImage: '/images/projects/hotel-lobby.png',
    images: [
      {
        src: '/images/projects/hotel-lobby.png',
        alt: 'Boutique hotel lobby with curved marble reception desk and velvet seating',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['Dark Marble', 'Velvet Upholstery', 'Brushed Brass', 'Solid Timber', 'Hand-blown Glass'],
    dimensions: 'Reception Desk: W: 3600mm curved | Lounge Area: 5m × 4m',
    services: ['Commercial Furniture Design', 'Bespoke Furniture Design', 'Furniture Concept Development'],
    featured: true,
  },
  {
    slug: 'bespoke-walnut-bookshelf',
    title: 'Bespoke Walnut Bookshelf',
    category: 'Custom Furniture',
    subcategory: 'Residential',
    location: 'Private Study',
    year: '2024',
    description:
      'A floor-to-ceiling bespoke bookshelf in American walnut with asymmetric compartments, integrated LED lighting, a sliding library ladder, and a mix of open and closed storage. Designed to house a personal library of over 800 books.',
    designConcept:
      'This bookshelf was designed as the centerpiece of a private study. The asymmetric layout creates visual interest while optimizing storage for books of different sizes. Integrated lighting highlights displayed objects, and the rolling ladder adds both function and character. A concealed cabinet section provides storage for personal items.',
    coverImage: '/images/projects/walnut-bookshelf.png',
    images: [
      {
        src: '/images/projects/walnut-bookshelf.png',
        alt: 'Floor-to-ceiling bespoke walnut bookshelf with library ladder and integrated lighting',
        width: 1200,
        height: 800,
      },
    ],
    materials: ['American Walnut', 'Blackened Steel', 'LED Lighting', 'Soft-close Hardware'],
    dimensions: 'W: 4200mm × H: 3000mm × D: 350mm',
    services: ['Bespoke Furniture Design', 'Custom Furniture Design', '3D Furniture Visualization'],
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === 'All') return projects;
  return projects.filter(
    (p) => p.category === category || p.subcategory === category
  );
}

export function getRelatedProjects(currentSlug: string, limit = 3): Project[] {
  const current = getProjectBySlug(currentSlug);
  if (!current) return projects.slice(0, limit);
  return projects
    .filter(
      (p) =>
        p.slug !== currentSlug &&
        (p.category === current.category || p.subcategory === current.subcategory)
    )
    .slice(0, limit);
}

export const portfolioCategories = [
  'All',
  'Residential',
  'Commercial',
  'Bedroom',
  'Living Room',
  'Kitchen',
  'Office',
  'Custom Furniture',
  'Modular Furniture',
] as const;
