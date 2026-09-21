'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `site-header ${scrolled || !isHome ? 'scrolled' : ''}`;

  return (
    <>
      <header className={headerClass} role="banner">
        <div className="container d-flex align-items-center justify-content-between w-100">
          <Link href="/" className="header-logo" aria-label={`${siteConfig.name} — Home`}>
            {siteConfig.name}
            <span className='font-weight-light d-block' style={{ fontSize: '0.7rem' }}>{siteConfig.tagline}</span>
          </Link>

          <nav className="d-none d-lg-flex align-items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`header-nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-sm header-cta ms-3">
              Start a Project
            </Link>
          </nav>

          <button
            className="header-toggler d-lg-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={navLinks}
        currentPath={pathname}
      />
    </>
  );
}
