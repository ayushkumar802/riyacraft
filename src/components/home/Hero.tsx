import Link from 'next/link';
import Image from 'next/image';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <Image
        src="https://didstxzqjqqgyjxr.public.blob.vercel-storage.com/e2c4009b-85ab-4e8e-9e79-371c705b9d0d.jpg"
        alt="Luxury modern living room with custom-designed walnut furniture, sculptural coffee table, and warm neutral tones"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover' }}
      />
      <div className="hero-overlay" aria-hidden="true" />
      <div className="container">
        <div className="hero-content">
          <span className="hero-label">Furniture Design Studio</span>
          <h1 className="hero-title">
            Furniture Designed Around the Way You Live.
          </h1>
          <p className="hero-subtitle">
            Thoughtful, functional and distinctive furniture design for
            residential and commercial spaces.
          </p>
          <div className="hero-buttons">
            <Link href="/portfolio" className="btn btn-primary btn-lg">
              View Our Work
            </Link>
            <Link href="/contact" className="btn btn-outline-primary btn-lg">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
      <ScrollIndicator />
    </section>
  );
}
