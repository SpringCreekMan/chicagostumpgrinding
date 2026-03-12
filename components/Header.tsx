'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SITE_NAME, PHONE, PHONE_HREF } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Stump Grinding', href: '/stump-grinding' },
  { label: 'Stump Removal',  href: '/stump-removal' },
  { label: 'Tree Service',   href: '/tree-service' },
  { label: 'Tree Removal',   href: '/tree-removal' },
  { label: 'Service Areas',  href: '/service-areas' },
  { label: 'About',          href: '/about' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ── UTILITY BAR ── */}
      <div style={{ background: 'var(--green-deep)', padding: '9px 0' }}>
        <div className="container util-bar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="util-bar-text" style={{ fontSize: '12.5px', color: 'rgba(255,255,255,.55)', letterSpacing: '.02em' }}>
            Serving DuPage · Cook · Will Counties — Fully Insured · Licensed
          </span>
          <a href={PHONE_HREF} style={{ color: '#fff', fontSize: '13px', fontWeight: 700, letterSpacing: '.04em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <PhoneIcon /> {PHONE}
          </a>
        </div>
      </div>

      {/* ── MAIN HEADER ── */}
      <header style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--line)',
        position: 'sticky',
        top: 0,
        zIndex: 200,
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      }}>
        <div className="container" style={{ height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
            <img src="/images/logo.svg" alt={SITE_NAME} style={{ height: 44, width: 'auto', flexShrink: 0 }} />
            <div style={{ minWidth: 0 }}>
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', letterSpacing: '-.01em', display: 'block', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
                {SITE_NAME}
              </span>
              <span className="header-logo-text" style={{ fontSize: '10.5px', color: 'var(--text-soft)', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginTop: 2 }}>
                Chicago Tree &amp; Stump Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: 2 }} className="desktop-nav">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '6px 13px',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  color: 'var(--text-mid)',
                  borderRadius: 3,
                  transition: 'background .14s, color .14s',
                  letterSpacing: '.01em',
                }}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="header-cta-buttons" style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <a href={PHONE_HREF} className="btn btn-outline" style={{ fontSize: '13.5px' }}>
              <PhoneIcon size={13} /> Call Now
            </a>
            <Link href="/request-quote" className="btn btn-solid" style={{ fontSize: '13.5px' }}>
              Free Estimate
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
            aria-label="Toggle menu"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: 'var(--white)', borderTop: '1px solid var(--line)', padding: '16px 0 20px' }}>
            <div className="container">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', padding: '10px 0', fontSize: 15, fontWeight: 600, color: 'var(--text-mid)', borderBottom: '1px solid var(--line)' }}
                >
                  {link.label}
                </Link>
              ))}
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <a href={PHONE_HREF} className="btn btn-outline" style={{ flex: 1, justifyContent: 'center' }}>{PHONE}</a>
                <Link href="/request-quote" className="btn btn-solid" style={{ flex: 1, justifyContent: 'center' }}>Free Estimate</Link>
              </div>
            </div>
          </div>
        )}
      </header>

      <style>{`
        .nav-link:hover { background: var(--green-light) !important; color: var(--green) !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}

function PhoneIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.128.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.17 9.91a16 16 0 006.92 6.92l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M3 12h18M3 6h18M3 18h18"/>
    </svg>
  );
}
