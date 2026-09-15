import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/site';
import { SocialLinks } from '@/components/ui/SocialLinks';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/services', label: 'Custom Furniture Design' },
  { href: '/services', label: 'Residential Furniture' },
  { href: '/services', label: 'Commercial Furniture' },
  { href: '/services', label: '3D Visualization' },
  { href: '/services', label: 'Furniture Consultation' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="row g-5">
          {/* About Column */}
          <div className="col-lg-4 col-md-6">
            <h2 className="footer-title">{siteConfig.name}</h2>
            <p className="footer-description">{siteConfig.description}</p>
            <div className="mt-4">
              <a
                href={getWhatsAppUrl()}
                className="btn btn-whatsapp btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="col-lg-2 col-md-6">
            <h3 className="footer-heading">Navigation</h3>
            <nav aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Services</h3>
            {serviceLinks.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Column */}
          <div className="col-lg-3 col-md-6">
            <h3 className="footer-heading">Contact</h3>
            <div className="footer-contact-item">
              <Mail size={16} className="footer-contact-icon" />
              <a href={`mailto:${siteConfig.email}`} className="footer-link">
                {siteConfig.email}
              </a>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <a href={`tel:${siteConfig.phone}`} className="footer-link">
                {siteConfig.phone}
              </a>
            </div>
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" />
              <span>
                {siteConfig.address.city}, {siteConfig.address.state},{' '}
                {siteConfig.address.country}
              </span>
            </div>
            {siteConfig.businessHours && (
              <p className="mt-3" style={{ fontSize: 'var(--fs-xs)', color: 'rgba(255,255,255,0.4)' }}>
                {siteConfig.businessHours}
              </p>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright mb-0">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          {/* <SocialLinks /> */}
        </div>
      </div>
    </footer>
  );
}
