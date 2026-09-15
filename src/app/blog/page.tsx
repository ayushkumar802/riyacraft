import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { blogPosts } from '@/data/blog-posts';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { BlogCard } from '@/components/blog/BlogCard';
import { CTASection } from '@/components/ui/CTASection';
import { AnimateOnScroll } from '@/components/ui/AnimateOnScroll';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on furniture design — from choosing materials and understanding the design process to custom furniture ideas for your home or commercial space.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | ' + siteConfig.name,
    description:
      'Furniture design insights, guides, and ideas from our studio.',
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="page-header-title">Journal</h1>
          <p className="page-header-subtitle">
            Thoughts on furniture design, materials, process, and the decisions
            that shape the spaces we live and work in.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row g-4">
            {blogPosts.map((post, index) => (
              <div key={post.slug} className="col-md-6 col-lg-4">
                <AnimateOnScroll delay={index * 0.1}>
                  <BlogCard post={post} />
                </AnimateOnScroll>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a furniture project in mind?"
        subtitle="Let's create something beautiful together."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        showWhatsApp
      />
    </>
  );
}
