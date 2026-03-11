import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSuburbBySlug, getSuburbsByService, getNearbySuburbs } from '@/data/suburbs';
import QuoteFormSidebar from '@/components/QuoteFormSidebar';
import TabSection from '@/components/TabSection';
import Testimonials from '@/components/Testimonials';
import { PHONE, PHONE_HREF, TESTIMONIALS } from '@/lib/constants';

// ─── STATIC PARAMS ────────────────────────────────────────
export async function generateStaticParams() {
  const allSlugs = [
    ...getSuburbsByService('stump-grinding').map((s) => ({ slug: s.slug })),
    ...getSuburbsByService('tree-service').map((s) => ({ slug: s.slug })),
  ];
  return allSlugs;
}

// ─── METADATA ─────────────────────────────────────────────
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const suburb = getSuburbBySlug(params.slug);
  if (!suburb) return {};

  const serviceLabel = suburb.serviceType === 'stump-grinding' ? 'Stump Grinding' : 'Tree Service';
  const title = `${serviceLabel} in ${suburb.name}, IL | Chicago Stump Grinding`;
  const description = `Professional ${serviceLabel.toLowerCase()} in ${suburb.name}, IL. Free estimates, same-week scheduling, full cleanup included. Serving ${suburb.county} County homeowners.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://chicagostumpgrinding.com/service-areas/${params.slug}`,
    },
    openGraph: { title, description, type: 'website' },
  };
}

// ─── PAGE ─────────────────────────────────────────────────
export default function SuburbPage({ params }: { params: { slug: string } }) {
  const suburb = getSuburbBySlug(params.slug);
  if (!suburb) notFound();

  const isStump = suburb.serviceType === 'stump-grinding';
  const serviceLabel = isStump ? 'Stump Grinding' : 'Tree Service';
  const nearby = getNearbySuburbs(params.slug, 6);

  // JSON-LD schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${serviceLabel} in ${suburb.name}, IL`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Chicago Stump Grinding',
      telephone: PHONE,
      url: 'https://chicagostumpgrinding.com',
      areaServed: { '@type': 'City', name: suburb.name, addressRegion: 'IL' },
    },
    areaServed: suburb.name,
    description: suburb.metaDescription,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: 520, display: 'flex', alignItems: 'stretch', background: 'var(--green-deep)', overflow: 'hidden' }}>
        {/* Background layers */}
        {suburb.heroImage ? (
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${suburb.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.55 }} />
        ) : (
          <>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />

            {/* Tree silhouette SVG layer */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 520' preserveAspectRatio='xMidYMax slice'%3E%3Cellipse cx='900' cy='260' rx='120' ry='160' fill='%230f3318' opacity='.7'/%3E%3Cellipse cx='1050' cy='240' rx='100' ry='180' fill='%230d2c14' opacity='.8'/%3E%3Cellipse cx='780' cy='280' rx='90' ry='130' fill='%23102e1a' opacity='.6'/%3E%3Cellipse cx='950' cy='290' rx='140' ry='200' fill='%231a4a28' opacity='.85'/%3E%3Cellipse cx='1100' cy='270' rx='110' ry='220' fill='%23143820' opacity='.9'/%3E%3Cellipse cx='820' cy='310' rx='100' ry='160' fill='%231d5030' opacity='.75'/%3E%3Cellipse cx='1000' cy='360' rx='180' ry='260' fill='%23214a2c' opacity='.95'/%3E%3Cellipse cx='1150' cy='340' rx='150' ry='280' fill='%231a3d22' opacity='.95'/%3E%3Crect x='990' y='400' width='20' height='120' fill='%230d1f12' rx='3'/%3E%3Crect x='1140' y='420' width='18' height='100' fill='%230d1f12' rx='3'/%3E%3Crect x='810' y='390' width='14' height='130' fill='%230d1f12' rx='3'/%3E%3C/svg%3E")`,
              backgroundSize: 'cover', backgroundPosition: 'bottom right', pointerEvents: 'none',
            }} />

            {/* Sunlight shaft */}
            <div style={{
              position: 'absolute', top: -60, left: '38%', width: 340, height: '120%',
              background: 'linear-gradient(170deg, rgba(255,220,100,.04) 0%, rgba(255,220,100,.0) 100%)',
              transform: 'rotate(-8deg)', pointerEvents: 'none',
            }} />
          </>
        )}

        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,26,13,.88) 0%, rgba(7,26,13,.70) 42%, rgba(7,26,13,.15) 100%)' }} />

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', paddingTop: 64, paddingBottom: 64 }}>
          <div style={{ maxWidth: 580 }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: 12, color: 'rgba(255,255,255,.45)', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 18, display: 'flex', alignItems: 'center', gap: 8 }}>
              <Link href="/" style={{ color: 'inherit' }}>Home</Link>
              <span style={{ opacity: .4 }}>›</span>
              <Link href="/service-areas" style={{ color: 'inherit' }}>Service Areas</Link>
              <span style={{ opacity: .4 }}>›</span>
              <span>{suburb.name}</span>
            </nav>

            {/* Location badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 2, padding: '5px 13px 5px 10px', fontSize: 12, fontWeight: 700, color: '#7ecf8e', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 22 }}>
              <PinIcon /> {suburb.name}, IL · {suburb.county} County
            </div>

            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, letterSpacing: '-.02em', marginBottom: 20 }}>
              {serviceLabel} &amp; Tree Service in{' '}
              <em style={{ fontStyle: 'italic', color: '#8fd99e' }}>{suburb.name}</em>
            </h1>

            <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,.72)', lineHeight: 1.72, fontWeight: 300, marginBottom: 34, maxWidth: 490 }}>
              {suburb.heroSubtitle || `Professional ${serviceLabel.toLowerCase()} for ${suburb.name} homeowners. Same-week scheduling, free on-site estimates, and full cleanup always included.`}
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
              <Link href="/request-quote" style={{ background: 'var(--green-mid)', color: '#fff', padding: '13px 26px', borderRadius: 3, fontSize: '14.5px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background .15s', border: '2px solid var(--green-mid)' }}>
                Request Free Estimate <ArrowIcon />
              </Link>
              <a href={PHONE_HREF} style={{ color: 'rgba(255,255,255,.85)', background: 'transparent', border: '2px solid rgba(255,255,255,.3)', padding: '11px 24px', borderRadius: 3, fontSize: '14.5px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <PhoneIcon /> {PHONE}
              </a>
            </div>

            {/* Trust signals */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.1)' }}>
              {['Free On-Site Estimates', 'Same-Week Availability', 'Fully Insured', 'Cleanup Included'].map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#5dc97a', flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating specialist card */}
        <div className="hero-card-float" style={{ position: 'absolute', right: 30, bottom: 40, zIndex: 3, background: 'rgba(255,255,255,.96)', borderRadius: 4, padding: '20px 22px', boxShadow: '0 8px 32px rgba(0,0,0,.28)', width: 240, borderTop: '3px solid var(--green)' }}>
          <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '.1em', color: 'var(--text-soft)', fontWeight: 700, marginBottom: 8 }}>Your Local Specialist</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 2 }}>{suburb.name} Service Area</div>
          <div style={{ fontSize: '12.5px', color: 'var(--text-soft)', marginBottom: 14 }}>Serving all of {suburb.name} &amp; {suburb.county} County</div>
          <a href={PHONE_HREF} style={{ fontSize: '13.5px', color: 'var(--green)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <PhoneIcon size={14} /> {PHONE}
          </a>
          <Link href="/request-quote" style={{ display: 'block', textAlign: 'center', background: 'var(--green)', color: '#fff', padding: '9px 0', borderRadius: 3, fontSize: '12.5px', fontWeight: 700, letterSpacing: '.02em' }}>
            Request a Free Estimate
          </Link>
        </div>
      </section>

      {/* ── GREEN INTRO BAR ───────────────────────────────── */}
      <div style={{ background: 'var(--green)', padding: '22px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,.85)', fontWeight: 300, maxWidth: 700, lineHeight: 1.6 }}>
            Our team provides <strong style={{ color: '#fff', fontWeight: 700 }}>{serviceLabel.toLowerCase()} and tree services throughout {suburb.name}, IL</strong> and surrounding {suburb.county} County communities. Professional equipment, local knowledge, and complete cleanup on every job.
          </p>
          <a href={PHONE_HREF} style={{ color: '#fff', fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, whiteSpace: 'nowrap', textDecoration: 'none' }}>{PHONE}</a>
        </div>
      </div>

      {/* ── SERVICES ──────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">What We Do</div>
          <h2 className="section-h2">Tree &amp; Stump Services in {suburb.name}</h2>
          <p className="section-sub">From a single stump to full tree removal — professional equipment, experienced crew, complete cleanup.</p>

          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', borderRadius: 5, overflow: 'hidden', border: '1px solid var(--line)', marginTop: 44 }}>
            {[
              { icon: '⚙️', title: 'Stump Grinding', desc: 'We grind stumps below grade with commercial equipment. The area is left flat, clean, and ready to reseed or landscape over.', href: '/stump-grinding' },
              { icon: '🌿', title: 'Stump Removal', desc: 'Full extraction of the stump and root ball — the right choice before hardscaping, construction, or replanting in the same spot.', href: '/stump-removal' },
              { icon: '✂️', title: 'Tree Trimming & Pruning', desc: `Crown reduction, deadwood removal, and structural pruning to keep your ${suburb.name} trees healthy, safe, and looking their best.`, href: '/tree-service' },
              { icon: '🪓', title: 'Tree Removal', desc: 'Safe removal of hazardous, dead, or unwanted trees. Full debris cleanup included. Stump grinding available as an add-on.', href: '/tree-removal' },
            ].map((svc) => (
              <Link key={svc.href} href={svc.href} style={{ background: 'var(--white)', padding: '32px 26px 28px', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'background .16s' }} className="service-tile">
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: 20 }}>
                  {svc.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10, lineHeight: 1.3 }}>{svc.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{svc.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 5 }}>Learn More <ArrowIcon /></span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.service-tile:hover { background: var(--green-pale) !important; }`}</style>
      </section>

      {/* ── LOCAL EXPERTISE ───────────────────────────────── */}
      <section className="section section-alt">
        <div className="container">
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div className="eyebrow">{suburb.name}, IL</div>
              <h2 className="section-h2">Local Knowledge, Professional Results</h2>
              <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>
                {suburb.localExpertiseParagraph || `${suburb.name}'s mature tree canopy includes large oaks, maples, and cottonwoods — many with root systems that extend 20+ feet. We understand the soil conditions, terrain, and common tree species across ${suburb.name} neighborhoods, and we bring the right equipment for every job.`}
              </p>
              <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.7, marginBottom: 28, fontWeight: 300 }}>
                Whether you&apos;re dealing with a leftover stump from a storm, a tree that&apos;s outgrown its space, or roots threatening your foundation — we&apos;ve handled it all across {suburb.name} and {suburb.county} County.
              </p>
              <Link href="/request-quote" className="btn btn-solid" style={{ fontSize: '14.5px', padding: '12px 24px' }}>
                Get a Free Estimate
              </Link>
            </div>
            <div style={{ borderRadius: 4, overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src={isStump ? '/images/stump-grinder-action.jpg' : '/images/hero-tree-service.jpg'}
                alt={`${serviceLabel} in ${suburb.name}, IL`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TABBED CONTENT (pests / diseases / storm) ─────── */}
      <TabSection
        eyebrow="What to Watch For"
        heading={`Common Tree Problems in ${suburb.name}`}
        subheading={`${suburb.name}'s urban tree canopy faces specific threats. Here's what we see most often in ${suburb.county} County.`}
        tabs={[
          {
            label: 'Pests & Insects',
            items: [
              { title: 'Emerald Ash Borer', description: `${suburb.name} lost many ash trees to EAB over the past decade. Remaining stumps often need grinding to remove habitat and prevent re-sprouting.` },
              { title: 'Asian Longhorned Beetle', description: 'Targets maples, elms, and willows. Signs include exit holes, sawdust-like frass, and yellowing branches. Early removal prevents spread.' },
              { title: 'Spongy Moth', description: 'Defoliates oaks and other hardwoods during outbreak years. Repeated defoliation weakens trees and can lead to removal needs.' },
            ],
          },
          {
            label: 'Diseases',
            items: [
              { title: 'Oak Wilt', description: 'A rapidly fatal fungal disease spreading through Illinois. Infected oaks should be removed promptly and stumps ground to stop root-to-root transmission.' },
              { title: 'Dutch Elm Disease', description: `Still present in ${suburb.county} County elms. Infected trees require prompt removal and stump grinding to prevent spread through connected root systems.` },
              { title: 'Anthracnose', description: 'Common in ash, oak, and maple populations. Usually cosmetic, but chronic infection can weaken structural integrity over time.' },
            ],
          },
          {
            label: 'Storm Damage',
            items: [
              { title: 'Storm-Felled Trees', description: `Illinois storms regularly take down large trees. We provide prompt stump grinding after storm damage in ${suburb.name}, often within 24–48 hours.` },
              { title: 'Root Heave & Lean', description: 'Saturated soils after heavy rain can cause even healthy trees to lean or uproot. We assess, remove, and grind safely on any terrain.' },
              { title: 'Ice & Snow Damage', description: 'Illinois winters split limbs and snap trunks. We handle post-winter cleanup and stump grinding throughout the spring season.' },
            ],
          },
        ]}
      />

      {/* ── WHY CHOOSE + PRICING (side by side with form) ─── */}
      <section className="section section-alt">
        <div className="container">
          {/* Page layout with sticky sidebar */}
          <div className="page-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 52, alignItems: 'start' }}>
            <div>
              {/* Why Choose Us */}
              <div className="eyebrow">Why Choose Us</div>
              <h2 className="section-h2">The Local Difference</h2>
              <p className="section-sub" style={{ marginBottom: 36 }}>
                We&apos;re not a national franchise with a call center. We&apos;re a local Chicagoland team — and it shows in every job we do.
              </p>

              <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 52 }}>
                {[
                  { num: '1', title: 'Truly Local', desc: `We know ${suburb.name}'s neighborhoods and tree species. You deal directly with the crew doing the work — not a dispatcher.` },
                  { num: '2', title: 'Upfront Written Quotes', desc: "We assess your job on-site and give you a firm written price. You'll never see a surprise charge on your invoice." },
                  { num: '3', title: 'Fully Insured', desc: 'Full general liability and equipment insurance on every project. We treat your property as if it were our own.' },
                  { num: '4', title: 'Cleanup Included', desc: 'Wood chips, grindings, and debris are cleared every time. Your yard is left cleaner than we found it — always.' },
                ].map((item) => (
                  <div key={item.num} style={{ padding: '28px 24px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4 }}>
                    <div style={{ width: 36, height: 36, background: 'var(--green-dark)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, marginBottom: 14 }}>
                      {item.num}
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>{item.title}</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Pricing table */}
              <div className="eyebrow">Transparent Pricing</div>
              <h2 className="section-h2">{serviceLabel} Cost in {suburb.name}</h2>
              <p className="section-sub" style={{ marginBottom: 0 }}>
                Pricing is based on stump diameter, wood species, and site access. Most single-stump residential jobs run $150–$400. Every job gets a free written quote.
              </p>

              <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 28, background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
                <thead>
                  <tr>
                    {['Stump Size', 'Diameter', 'Typical Price', 'Est. Time'].map((h) => (
                      <th key={h} style={{ background: 'var(--green-dark)', color: '#fff', padding: '14px 18px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'left' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Small',       'Under 12"', '$100 – $150', '15 – 30 min'],
                    ['Medium',      '12" – 24"', '$175 – $275', '30 – 60 min'],
                    ['Large',       '24" – 36"', '$275 – $400', '60 – 90 min'],
                    ['Extra Large', '36"+',      '$400 – $600+', '90 – 120 min'],
                    ['Additional stumps', 'Any', '$75 – $150 each', 'Varies'],
                  ].map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{ padding: '13px 18px', borderBottom: ri < 4 ? '1px solid var(--line)' : 'none', fontSize: 14, color: ci === 2 ? 'var(--green)' : 'var(--text-mid)', fontWeight: ci === 2 ? 700 : 400, background: ri % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: 13, color: 'var(--text-soft)', marginTop: 10, fontStyle: 'italic' }}>
                All prices include grinding, cleanup, and disposal. Final price confirmed on-site before work begins.
              </p>

              {/* Process steps */}
              <div style={{ marginTop: 48 }}>
                <div className="eyebrow">Our Process</div>
                <h2 className="section-h2">Simple from Start to Finish</h2>
                <div className="flex-steps" style={{ display: 'flex', gap: 0, position: 'relative', marginTop: 32 }}>
                  <div className="process-line" style={{ position: 'absolute', top: 28, left: 'calc(12.5%)', right: 'calc(12.5%)', height: 1, background: 'var(--line)' }} />
                  {[
                    { n: '1', title: 'Request a Quote', desc: 'Call or fill out the online form. We respond same day.' },
                    { n: '2', title: 'Free Estimate',   desc: 'We visit, assess, and give you a firm written price.' },
                    { n: '3', title: 'We Get to Work',  desc: 'Professional crew, right equipment, on time.' },
                    { n: '4', title: 'Clean & Done',    desc: 'Full cleanup. Stump-free yard, ready for what\'s next.' },
                  ].map((step) => (
                    <div key={step.n} style={{ flex: 1, textAlign: 'center', padding: '0 12px' }}>
                      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, margin: '0 auto 20px', position: 'relative', zIndex: 1, border: '3px solid var(--bg-soft)' }}>
                        {step.n}
                      </div>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 9 }}>{step.title}</h4>
                      <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65 }}>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sticky quote form */}
            <QuoteFormSidebar suburb={suburb.name} county={`${suburb.county} County`} />
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <Testimonials suburb={suburb.name} testimonials={TESTIMONIALS} />

      {/* ── SERVICE AREAS ─────────────────────────────────── */}
      <section className="section section-warm">
        <div className="container">
          <div className="eyebrow">Where We Work</div>
          <h2 className="section-h2">{suburb.name} &amp; Surrounding Areas</h2>
          <p className="section-sub" style={{ maxWidth: 760, marginBottom: 36 }}>
            In addition to {suburb.name}, our stump grinding and tree service team covers the following suburbs across DuPage, Cook, and Will Counties.
          </p>

          <div className="cols-4" style={{ columns: 4, columnGap: 24 }}>
            {nearby.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                style={{ display: 'block', fontSize: 14, color: 'var(--green)', fontWeight: 600, padding: '5px 0', borderBottom: '1px solid var(--line)', marginBottom: 0, transition: 'color .13s', breakInside: 'avoid' }}
                className="area-link"
              >
                ›&nbsp; {area.name}
              </Link>
            ))}
            <Link href="/service-areas" style={{ display: 'block', fontSize: 14, color: 'var(--green)', fontWeight: 700, padding: '12px 0 5px', breakInside: 'avoid' }}>
              View All Service Areas →
            </Link>
          </div>
          <style>{`.area-link:hover { color: var(--green-dark) !important; }`}</style>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      {suburb.faqs && suburb.faqs.length > 0 && (
        <section className="section">
          <div className="container" style={{ maxWidth: 760 }}>
            <div className="eyebrow">Common Questions</div>
            <h2 className="section-h2">{serviceLabel} FAQ — {suburb.name}</h2>
            <div style={{ marginTop: 36 }}>
              {suburb.faqs.map((faq, i) => (
                <details key={i} style={{ borderBottom: '1px solid var(--line)', padding: '0' }} className="faq-item">
                  <summary style={{ padding: '18px 0', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {faq.question}
                    <span style={{ fontSize: 20, color: 'var(--green)', flexShrink: 0, marginLeft: 16 }}>+</span>
                  </summary>
                  <div style={{ paddingBottom: 18, fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300 }}>
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
          <style>{`details[open] summary span { transform: rotate(45deg); display: inline-block; }`}</style>
        </section>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section style={{ background: 'var(--green-dark)', padding: '70px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(45,122,65,.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#7ecf8e', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, marginBottom: 14 }}>Get Started Today</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 14, lineHeight: 1.2 }}>
            Ready for a Stump-Free Yard in {suburb.name}?
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300, marginBottom: 36 }}>
            Free estimate, no obligation. We respond same day — usually within a few hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-quote" className="btn btn-white">📋 Request Free Estimate</Link>
            <a href={PHONE_HREF} className="btn btn-white-outline">📞 {PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}

// ─── SMALL ICON COMPONENTS ────────────────────────────────
function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function PhoneIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.128.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.17 9.91a16 16 0 006.92 6.92l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/>
    </svg>
  );
}
