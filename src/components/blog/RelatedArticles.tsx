import type { BlogPost } from '@/types';
import { BlogCard } from './BlogCard';

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="section section-alt" aria-label="Related articles">
      <div className="container">
        <h2 className="section-title mb-5">Related Articles</h2>
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.slug} className="col-md-6 col-lg-4">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
