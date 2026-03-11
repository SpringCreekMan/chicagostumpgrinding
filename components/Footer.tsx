import Link from 'next/link';
import { SITE_NAME, PHONE, PHONE_HREF, EMAIL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer style={{ background: '#07150a' }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '2.2fr 1fr 1fr 1fr',
        gap: 44,
        padding: '56px 30px 44px',
      }}>
        {/* Brand column */}
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 19, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.1em', color: 'rgba(255,255,255,.35)', fontWeight: 600, marginBottom: 18 }}>
            Chicago Tree &amp; Stump Specialists
          </div>
          <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,.42)', lineHeight: 1.72, marginBottom: 22, maxWidth: 270, fontWeight: 300 }}>
            Locally owned stump grinding and tree service across Chicago&apos;s western and southwestern suburbs.
            Professional, insured, and accountable on every job.
          </p>
          <a href={PHONE_HREF} style={{ color: '#7ecf8e', fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.128.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.17 9.91a16 16 0 006.92 6.92l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            {PHONE}
          </a>
        </div>

        {/* Services */}
        <FooterCol title="Services" links={[
          { label: 'Stump Grinding', href: '/stump-grinding' },
          { label: 'Stump Removal',  href: '/stump-removal' },
          { label: 'Tree Trimming',  href: '/tree-service' },
          { label: 'Tree Removal',   href: '/tree-removal' },
          { label: 'Pricing',        href: '/pricing' },
        ]} />

        {/* Service Areas */}
        <FooterCol title="Service Areas" links={[
          { label: 'Naperville',    href: '/service-areas/naperville-stump-grinding' },
          { label: 'Hinsdale',     href: '/service-areas/hinsdale-stump-grinding' },
          { label: 'Wheaton',      href: '/service-areas/wheaton-stump-grinding' },
          { label: 'Downers Grove', href: '/service-areas/downers-grove-stump-grinding' },
          { label: 'Elmhurst',     href: '/service-areas/elmhurst-stump-grinding' },
          { label: 'All Areas →',  href: '/service-areas' },
        ]} />

        {/* Company */}
        <FooterCol title="Company" links={[
          { label: 'About Us',     href: '/about' },
          { label: 'FAQ',          href: '/faq' },
          { label: 'Blog',         href: '/blog' },
          { label: 'Get a Quote',  href: '/request-quote' },
          { label: 'Contact',      href: '/contact' },
        ]} />
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,.07)',
        padding: '18px 30px',
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        color: 'rgba(255,255,255,.25)',
        flexWrap: 'wrap',
        gap: 8,
      }}>
        <span>© {new Date().getFullYear()} {SITE_NAME} · Licensed &amp; Insured · Serving DuPage, Cook &amp; Will Counties</span>
        <span>chicagostumpgrinding.com</span>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          footer .container { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '.12em', fontWeight: 700, color: 'rgba(255,255,255,.5)', marginBottom: 16 }}>
        {title}
      </div>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          style={{ display: 'block', fontSize: '13.5px', color: 'rgba(255,255,255,.42)', marginBottom: 9, fontWeight: 300, transition: 'color .13s' }}
          className="footer-link"
        >
          {link.label}
        </Link>
      ))}
      <style>{`.footer-link:hover { color: #7ecf8e !important; }`}</style>
    </div>
  );
}
