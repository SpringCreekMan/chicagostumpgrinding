// CTA Banner
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
}

export function CTABanner({
  headline = "Ready for a Stump-Free Yard?",
  subtext = "Get a free, no-obligation estimate. We respond fast — usually within a few hours.",
}: CTABannerProps) {
  return (
    <section style={{ background: 'var(--green-dark)', padding: '70px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(45,122,65,.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ color: '#7ecf8e', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, marginBottom: 14 }}>Get Started Today</div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 14, lineHeight: 1.2 }}>
          {headline}
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300, marginBottom: 36 }}>
          {subtext}
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/request-quote" className="btn btn-white">Request Free Estimate</Link>
          <a href={PHONE_HREF} className="btn btn-white-outline">{PHONE}</a>
        </div>
      </div>
    </section>
  );
}

// Service Card
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      style={{ background: 'var(--white)', padding: '32px 26px 28px', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'background .16s', border: '1px solid var(--line)', borderRadius: 4 }}
      className="service-card"
    >
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: 20 }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10, lineHeight: 1.3 }}>{title}</h3>
      <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{description}</p>
      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 5 }}>
        Learn More
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
      <style>{`.service-card:hover { background: var(--green-pale) !important; }`}</style>
    </Link>
  );
}

// Service Area Grid
interface AreaLink {
  href: string;
  label: string;
  sub?: string;
}

export function ServiceAreaGrid({ areas, title }: { areas: AreaLink[]; title?: string }) {
  return (
    <div>
      {title && <h2 className="section-h2" style={{ marginBottom: 24 }}>{title}</h2>}
      <div className="cols-4" style={{ columns: 4, columnGap: 24, marginTop: title ? 0 : 36 }}>
        {areas.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            style={{ display: 'block', fontSize: 14, color: 'var(--green)', fontWeight: 600, padding: '5px 0', borderBottom: '1px solid var(--line)', marginBottom: 0, transition: 'color .13s', breakInside: 'avoid' }}
            className="area-link"
          >
            ›&nbsp; {a.label}
          </Link>
        ))}
      </div>
      <style>{`.area-link:hover { color: var(--green-dark) !important; }`}</style>
    </div>
  );
}

// Breadcrumbs
interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `https://www.chicagostumpgrinding.com${c.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && <span style={{ opacity: .4 }}>&rsaquo;</span>}
            {c.href ? (
              <Link href={c.href} style={{ color: 'inherit' }}>{c.label}</Link>
            ) : (
              <span>{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
