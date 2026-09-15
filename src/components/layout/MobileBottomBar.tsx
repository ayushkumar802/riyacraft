'use client';

import Link from 'next/link';
import { MessageCircle, Phone, Mail } from 'lucide-react';
import { siteConfig, getWhatsAppUrl } from '@/config/site';

export function MobileBottomBar() {
  return (
    <div className="mobile-bottom-bar" role="navigation" aria-label="Quick contact actions">
      <div className="container d-flex justify-content-around">
        <a
          href={getWhatsAppUrl()}
          className="mobile-bottom-bar-link whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle size={20} />
          <span>WhatsApp</span>
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          className="mobile-bottom-bar-link"
          aria-label="Call us"
        >
          <Phone size={20} />
          <span>Call</span>
        </a>
        <Link
          href="/contact"
          className="mobile-bottom-bar-link"
          aria-label="Send us an enquiry"
        >
          <Mail size={20} />
          <span>Enquire</span>
        </Link>
      </div>
    </div>
  );
}
