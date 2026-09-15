import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { blogPosts, getBlogPostBySlug, getRelatedPosts } from '@/data/blog-posts';
import { formatDate } from '@/lib/utils';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RelatedArticles } from '@/components/blog/RelatedArticles';
import { CTASection } from '@/components/ui/CTASection';
import { generateArticleSchema } from '@/lib/structured-data';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate || post.publishedDate,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          alt: post.featuredImageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateArticleSchema(post)),
        }}
      />

      <div className="page-header">
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title },
            ]}
          />
          <div className="row">
            <div className="col-lg-8">
              <p className="project-card-category mb-3">{post.category}</p>
              <h1 className="page-header-title">{post.title}</h1>
              <div className="d-flex flex-wrap gap-4 mt-4" style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)' }}>
                <span className="d-flex align-items-center gap-1">
                  <User size={14} /> {post.author}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Calendar size={14} /> {formatDate(post.publishedDate)}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <Clock size={14} /> {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <section className="section-sm">
        <div className="container">
          <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', backgroundColor: 'var(--color-bg-alt)' }}>
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <article
                className="article-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedArticles posts={relatedPosts} />

      <CTASection
        title="Need help with your furniture project?"
        subtitle="Our design team is ready to help you create something exceptional."
        primaryLabel="Request a Consultation"
        primaryHref="/contact"
        showWhatsApp
      />
    </>
  );
}
