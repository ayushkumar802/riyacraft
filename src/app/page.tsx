import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Hero } from '@/components/home/Hero';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { DesignPhilosophy } from '@/components/home/DesignPhilosophy';
import { ProcessSection } from '@/components/home/ProcessSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Testimonials } from '@/components/home/Testimonials';
import { HomeCTA } from '@/components/home/HomeCTA';

export const metadata: Metadata = {
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.defaultDescription,
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <ServicesPreview />
      <DesignPhilosophy />
      <ProcessSection />
      <WhyChooseUs />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
