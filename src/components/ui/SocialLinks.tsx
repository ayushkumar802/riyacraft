import { Globe, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function SocialLinks() {
  const links = [
    { url: siteConfig.socialLinks.instagram, label: 'Instagram', Icon: Globe },
    { url: siteConfig.socialLinks.linkedin, label: 'LinkedIn', Icon: ExternalLink },
    { url: siteConfig.socialLinks.pinterest, label: 'Pinterest', Icon: Globe },
    { url: siteConfig.socialLinks.behance, label: 'Behance', Icon: ExternalLink },
  ].filter((l) => l.url);

  return (
    <div className="footer-social">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow us on ${link.label}`}
        >
          <link.Icon size={18} />
        </a>
      ))}
    </div>
  );
}
