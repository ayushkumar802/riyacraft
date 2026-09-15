import Image from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  fill?: boolean;
  className?: string;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  className,
  sizes,
}: OptimizedImageProps) {
  if (!alt) {
    console.warn('OptimizedImage: alt text is required for accessibility');
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={cn(className)}
        sizes={sizes || '100vw'}
        style={{ objectFit: 'cover' }}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={cn(className)}
      sizes={sizes}
    />
  );
}
