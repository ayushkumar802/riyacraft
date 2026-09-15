'use client';

import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/config/site';

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl()}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
