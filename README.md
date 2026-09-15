# Atelier Furniture Studio — Website

A premium, SEO-optimized furniture design portfolio and lead-generation website built with **Next.js 16**, **TypeScript**, **Bootstrap 5**, and **React-Bootstrap**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs at [http://localhost:3000](http://localhost:3000).

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework, SSR/SSG, routing |
| TypeScript (strict mode) | Type safety |
| Bootstrap 5 + react-bootstrap | Layout grid, responsive utilities |
| Framer Motion | Scroll animations |
| Lucide React | Icon system |
| React Hook Form + Zod | Form validation |
| next/font | Optimized Google Fonts |
| next/image | Image optimization |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata, JSON-LD)
│   ├── page.tsx            # Homepage
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Dynamic XML sitemap
│   ├── robots.ts           # robots.txt
│   ├── globals.css         # Design system & global styles
│   ├── portfolio/          # Portfolio pages
│   ├── services/           # Services page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   └── blog/               # Blog pages
├── components/             # React components
│   ├── layout/             # Header, Footer, MobileMenu, MobileBottomBar
│   ├── home/               # Homepage sections
│   ├── portfolio/          # Portfolio components
│   ├── services/           # Service components
│   ├── blog/               # Blog components
│   ├── contact/            # Contact form
│   └── ui/                 # Shared UI components
├── config/
│   └── site.ts             # Central site configuration
├── data/                   # Content data (CMS-ready)
│   ├── projects.ts         # Portfolio projects
│   ├── services.ts         # Service offerings
│   ├── testimonials.ts     # Client testimonials
│   └── blog-posts.ts       # Blog articles
├── lib/                    # Utilities
│   ├── schemas.ts          # Zod validation schemas
│   ├── structured-data.ts  # JSON-LD generators
│   └── utils.ts            # Helper functions
├── actions/
│   └── contact.ts          # Server Action for contact form
└── types/
    └── index.ts            # TypeScript type definitions
```

## Configuration

All business information is centralized in `src/config/site.ts`. Update this file with your actual details:

- Business name & tagline
- Email, phone, WhatsApp number
- Address & service areas
- Social media links
- SEO defaults

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
NEXT_PUBLIC_BUSINESS_EMAIL=hello@yourdomain.com
NEXT_PUBLIC_BUSINESS_PHONE=+1234567890
```

## Adding Content

### New Portfolio Project

Add a new entry to `src/data/projects.ts`:

```ts
{
  slug: 'your-project-slug',
  title: 'Project Title',
  category: 'Residential',
  location: 'City Name',
  year: '2024',
  description: '...',
  designConcept: '...',
  coverImage: '/images/projects/your-image.png',
  images: [{ src: '...', alt: '...', width: 1200, height: 800 }],
  materials: ['Wood', 'Metal'],
  services: ['Custom Furniture Design'],
  featured: true,
}
```

### New Blog Post

Add a new entry to `src/data/blog-posts.ts` with title, excerpt, HTML content, metadata, and featured image.

### CMS Migration

The data architecture is designed for easy migration to a headless CMS (Sanity, Strapi, Contentful, etc.). Replace the data imports in page components with CMS API calls — the component interfaces remain unchanged.

## SEO Features

- ✅ Unique `<title>` and meta description per page
- ✅ Open Graph & Twitter Card metadata
- ✅ Dynamic XML sitemap (`/sitemap.xml`)
- ✅ robots.txt (`/robots.txt`)
- ✅ JSON-LD structured data (Organization, WebSite, WebPage, BreadcrumbList, Service, Article, Person)
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Canonical URLs
- ✅ Breadcrumb navigation
- ✅ Descriptive image alt text
- ✅ SEO-friendly URLs

## Contact Form

The contact form validates on both client and server using Zod. Submissions are currently logged to the console. To send emails, integrate your preferred provider in `src/actions/contact.ts`:

```ts
// Example: Resend, SendGrid, Nodemailer
await sendEmail({
  to: siteConfig.email,
  subject: `New inquiry from ${sanitized.name}`,
  body: formatEmailBody(sanitized),
});
```

## Performance

- Server Components by default (client components only where interaction is needed)
- Optimized images via `next/image`
- Google Fonts via `next/font` (no layout shift)
- Lazy-loaded below-the-fold images
- Priority loading for hero image
- Minimal client-side JavaScript

## License

Private. All rights reserved.
