import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-image">
        <Image
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="blog-card-meta">
        <span>{post.category}</span>
        <span>{formatDate(post.publishedDate)}</span>
        <span>{post.readingTime} min read</span>
      </div>
      <h3 className="blog-card-title">{post.title}</h3>
      <p className="blog-card-excerpt">{post.excerpt}</p>
    </Link>
  );
}
