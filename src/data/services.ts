import type { Service } from '@/types';

export const services: Service[] = [
  {
    slug: 'custom-furniture-design',
    title: 'Custom Furniture Design',
    description:
      'Bespoke furniture created specifically for your space, requirements and lifestyle.',
    longDescription:
      'Every custom piece begins with understanding how you live. We design furniture that fits your space precisely — not just dimensionally, but in character and function. From initial sketches to final specifications, each element is considered with purpose and care.',
    icon: 'Armchair',
    features: [
      'Space-specific design solutions',
      'Material selection guidance',
      'Detailed technical drawings',
      'Production-ready specifications',
      'Craftsman liaison support',
    ],
  },
  {
    slug: 'residential-furniture-design',
    title: 'Residential Furniture Design',
    description:
      'Furniture concepts designed for homes, apartments, villas and luxury residences.',
    longDescription:
      'Residential furniture should feel like it belongs — to the space, to the light, and to the people who use it. We design for homes of all scales, from compact apartments to expansive villas, always prioritizing comfort, proportion, and lasting quality.',
    icon: 'Home',
    features: [
      'Living room furniture design',
      'Bedroom furniture suites',
      'Dining and kitchen furniture',
      'Study and home office design',
      'Outdoor furniture concepts',
    ],
  },
  {
    slug: 'commercial-furniture-design',
    title: 'Commercial Furniture Design',
    description:
      'Furniture solutions for offices, hotels, restaurants, retail and commercial spaces.',
    longDescription:
      'Commercial furniture must perform under pressure while maintaining visual impact. We design for hospitality, corporate, and retail environments — creating pieces that withstand daily use while reinforcing your brand identity and spatial experience.',
    icon: 'Building2',
    features: [
      'Office workstation design',
      'Hotel and hospitality furniture',
      'Restaurant and café furniture',
      'Retail display and fixtures',
      'Reception and lobby furniture',
    ],
  },
  {
    slug: 'modular-furniture-design',
    title: 'Modular Furniture Design',
    description:
      'Flexible, configurable furniture systems that adapt to your evolving needs.',
    longDescription:
      'Modular furniture offers the freedom to reconfigure and adapt as your needs change. We design modular systems with precise engineering and beautiful aesthetics — shelving, storage, seating, and workspace systems that grow with you.',
    icon: 'LayoutGrid',
    features: [
      'Configurable shelving systems',
      'Modular storage solutions',
      'Adaptable workspace furniture',
      'Expandable seating systems',
      'Knock-down furniture design',
    ],
  },
  {
    slug: 'bespoke-furniture-design',
    title: 'Bespoke Furniture Design',
    description:
      'One-of-a-kind furniture pieces designed as individual works of craftsmanship.',
    longDescription:
      'Bespoke design is for those who want something truly singular. These are statement pieces — a dining table that becomes the center of family life, a desk that defines a workspace, a cabinet that holds meaning as well as objects. Each piece is designed as a unique creation.',
    icon: 'Gem',
    features: [
      'One-of-a-kind designs',
      'Artisan collaboration',
      'Premium material sourcing',
      'Heritage craftsmanship',
      'Detailed finish specifications',
    ],
  },
  {
    slug: '3d-furniture-visualization',
    title: '3D Furniture Visualization',
    description:
      'Realistic 3D concepts to help clients visualize the final furniture before production.',
    longDescription:
      'Seeing is believing. Our 3D visualization service produces photorealistic renderings that let you experience your furniture in context before a single cut is made. We create detailed 3D models that capture materials, lighting, and proportion with precision.',
    icon: 'Box',
    features: [
      'Photorealistic 3D renders',
      'Material and finish visualization',
      'Contextual room renders',
      'Multiple angle views',
      'Revision and iteration support',
    ],
  },
  {
    slug: 'furniture-concept-development',
    title: 'Furniture Concept Development',
    description:
      'From initial idea to refined concept — developing your furniture vision with clarity.',
    longDescription:
      'Great furniture starts with a strong concept. Our concept development service helps you refine a vague idea into a clear, actionable design direction. We explore form, function, material, and context — producing mood boards, sketches, and initial layouts.',
    icon: 'Lightbulb',
    features: [
      'Mood board creation',
      'Concept sketching',
      'Material and palette exploration',
      'Spatial planning',
      'Design direction refinement',
    ],
  },
  {
    slug: 'furniture-design-consultation',
    title: 'Furniture Design Consultation',
    description:
      'Expert guidance on furniture selection, material choices, and design direction.',
    longDescription:
      'Sometimes you need a knowledgeable perspective before committing to a direction. Our consultation service provides expert advice on furniture selection, material choices, spatial planning, and design direction — whether you are furnishing a single room or an entire property.',
    icon: 'MessageSquare',
    features: [
      'Space assessment',
      'Furniture selection advice',
      'Material and finish guidance',
      'Budget planning support',
      'Vendor and craftsman recommendations',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
