'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';
import { siteConfig } from '@/config/site';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
}

export function MobileMenu({ isOpen, onClose, links, currentPath }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus the close button when menu opens
      setTimeout(() => closeRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={menuRef}
        className={`mobile-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="mobile-menu-header">
          <span className="header-logo" style={{ color: 'var(--color-primary)' }}>
            {siteConfig.name}
          </span>
          <button
            ref={closeRef}
            className="mobile-menu-close"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-menu-nav" aria-label="Mobile navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-menu-link ${currentPath === link.href ? 'active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <Link
            href="/contact"
            className="btn btn-primary w-100 mb-3"
            onClick={onClose}
          >
            Start a Project
          </Link>
          <a
            href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}`}
            className="btn btn-whatsapp w-100"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </>
  );
}
