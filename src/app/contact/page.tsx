import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle, Clock } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/site';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with our furniture design studio. Request a consultation, discuss a project, or ask us anything about our custom furniture design services.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact | ' + siteConfig.name,
    description:
      'Request a consultation or discuss your furniture design project with us.',
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="page-header-title">Get in Touch</h1>
          <p className="page-header-subtitle">
            Have a furniture project in mind? We would love to hear about it.
            Fill out the form or reach out directly — we typically respond
            within 24 hours.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Form */}
            <div className="col-lg-7">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--fs-2xl)', marginBottom: 'var(--space-6)' }}>
                Request a Consultation
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div className="col-lg-4 offset-lg-1">
              <div className="mb-5">
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-6)' }}>
                  Contact Information
                </h3>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <Mail size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 'var(--fs-sm)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)' }}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <Phone size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 'var(--fs-sm)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                      Phone
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)' }}
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 mb-4">
                  <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <p style={{ fontSize: 'var(--fs-sm)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                      Location
                    </p>
                    <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', marginBottom: 0 }}>
                      {siteConfig.address.city}, {siteConfig.address.state},{' '}
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                {siteConfig.businessHours && (
                  <div className="d-flex align-items-start gap-3 mb-4">
                    <Clock size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <p style={{ fontSize: 'var(--fs-sm)', fontWeight: 500, marginBottom: 'var(--space-1)' }}>
                        Business Hours
                      </p>
                      <p style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-secondary)', marginBottom: 0 }}>
                        {siteConfig.businessHours}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-5" style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--space-6)' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--fs-xs)', fontWeight: 600, letterSpacing: 'var(--ls-wider)', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-4)' }}>
                  Quick Contact
                </h3>
                <div className="d-grid gap-3">
                  <a
                    href={getWhatsAppUrl()}
                    className="btn btn-whatsapp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} className="me-2" />
                    Chat on WhatsApp
                  </a>
                  <a href={`tel:${siteConfig.phone}`} className="btn btn-outline-primary">
                    <Phone size={18} className="me-2" />
                    Call Us
                  </a>
                  <a href={`mailto:${siteConfig.email}`} className="btn btn-outline-primary">
                    <Mail size={18} className="me-2" />
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
