import { CTASection } from '@/components/ui/CTASection';

export function HomeCTA() {
  return (
    <CTASection
      title="Have a furniture idea in mind?"
      subtitle="Let's turn your idea into a considered piece of furniture."
      primaryLabel="Start a Project"
      primaryHref="/contact"
      showWhatsApp
    />
  );
}
