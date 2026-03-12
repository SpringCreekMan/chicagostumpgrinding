import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stump Grinding Chicago | Professional Stump Grinding Service",
  description:
    "Professional stump grinding in Chicago and suburbs. We grind stumps of all sizes below grade with full cleanup included. Fast scheduling, fair pricing. Free quote.",
  alternates: { canonical: `${SITE_URL}/stump-grinding` },
};

const FAQ = [
  {
    q: "How deep do you grind stumps?",
    a: "Our standard is 8–12 inches below grade — deep enough for grass seeding and most landscaping. We can grind deeper (up to 16+ inches) on request for hardscaping or construction needs.",
  },
  {
    q: "Do you grind surface roots too?",
    a: "Yes. We grind the stump and any large surface roots that are visible and accessible. Extended root grinding beyond the immediate stump area may be quoted as an add-on.",
  },
  {
    q: "What do you do with the wood chips?",
    a: "Chips are left for you to use as mulch, or we can haul them away. Cleanup of the work area is always included at no extra charge.",
  },
  {
    q: "Is stump grinding safe near gas lines or sprinkler systems?",
    a: "We always call JULIE (Illinois 811) before any grinding near potential underground utilities. We also take care around sprinkler systems — let us know if you have one and we'll adjust our approach.",
  },
  {
    q: "Can you grind a stump in a tight space or back yard?",
    a: "Yes. We have equipment sized for tight spaces, including compact grinders that fit through standard 36-inch gates. We'll assess access when we come to quote.",
  },
];

const AREAS = [
  { href: "/service-areas/naperville-stump-grinding", label: "Naperville Stump Grinding" },
  { href: "/service-areas/hinsdale-stump-grinding", label: "Hinsdale Stump Grinding" },
  { href: "/service-areas/wheaton-stump-grinding", label: "Wheaton Stump Grinding" },
  { href: "/service-areas/downers-grove-stump-grinding", label: "Downers Grove Stump Grinding" },
  { href: "/service-areas/glen-ellyn-stump-grinding", label: "Glen Ellyn Stump Grinding" },
  { href: "/service-areas/oak-brook-stump-grinding", label: "Oak Brook Stump Grinding" },
  { href: "/service-areas/elmhurst-stump-grinding", label: "Elmhurst Stump Grinding" },
  { href: "/service-areas/la-grange-stump-grinding", label: "La Grange Stump Grinding" },
  { href: "/service-areas/lemont-stump-grinding", label: "Lemont Stump Grinding" },
  { href: "/service-areas/homer-glen-stump-grinding", label: "Homer Glen Stump Grinding" },
  { href: "/service-areas/burr-ridge-stump-grinding", label: "Burr Ridge Stump Grinding" },
  { href: "/service-areas/darien-stump-grinding", label: "Darien Stump Grinding" },
  { href: "/service-areas/western-springs-stump-grinding", label: "Western Springs Stump Grinding" },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stump Grinding",
  provider: {
    "@type": "LocalBusiness",
    name: "Chicago Stump Grinding",
    url: SITE_URL,
    telephone: "+16307169336",
  },
  areaServed: "Chicago Metropolitan Area, IL",
  description:
    "Professional stump grinding service for residential and commercial properties in Chicago and suburbs. We grind stumps below grade with full cleanup included.",
};

export default function StumpGrindingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <Hero
        headline="Professional Stump Grinding in Chicago & Suburbs"
        subheadline="We grind stumps of all sizes below grade — fast, clean, and affordable. Fully insured with same-week scheduling available."
        variant="service"
        badgeText="Our Most Popular Service"
        backgroundImage="/images/hero-stump-grinding.jpg"
      />

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div className="page-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 52, alignItems: 'start' }}>
            {/* Main */}
            <div>
              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">About the Service</div>
                <h2 className="section-h2">What Is Stump Grinding?</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 16 }}>
                  Stump grinding is the process of using a powerful rotating cutting wheel to chip a tree stump down below ground level. Unlike stump removal — which excavates the entire root system — stump grinding leaves the roots in place to decompose naturally underground while eliminating the visible stump and preparing the surface for grass, landscaping, or hardscaping.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300 }}>
                  It&apos;s the most cost-effective and efficient way to eliminate a stump, and it&apos;s the method chosen by the vast majority of homeowners in the Chicago area.
                </p>
                <div style={{ borderRadius: 4, overflow: 'hidden', marginTop: 24 }}>
                  <img src="/images/stump-grinder-action.jpg" alt="Professional stump grinding with Vermeer machine" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">What&apos;s Included</div>
                <h2 className="section-h2">Our Stump Grinding Service</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Free on-site assessment and written quote",
                    "Grinding to 8–12 inches below grade (deeper available)",
                    "Surface root grinding around the stump base",
                    "Complete cleanup of wood chips and debris",
                    "Optional chip hauling or leave-in-place for mulch",
                    "Protection of surrounding lawn and landscaping",
                    "Before-and-after confirmation with you",
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, fontSize: '14.5px', color: 'var(--text-mid)', lineHeight: 1.6, padding: '8px 0' }}>
                      <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">Common Situations</div>
                <h2 className="section-h2">When Do You Need Stump Grinding?</h2>
                <div style={{ borderRadius: 4, overflow: 'hidden', marginTop: 16, marginBottom: 20 }}>
                  <img src="/images/stump-before.jpg" alt="Tree stump in backyard lawn — common reason homeowners call for stump grinding" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 20 }}>
                  {[
                    { title: "After Tree Removal", desc: "A tree was taken down and the stump needs to go." },
                    { title: "Safety Hazard", desc: "The stump is a tripping risk for family or guests." },
                    { title: "Lawn Mowing", desc: "You're tired of working around it every time you mow." },
                    { title: "Pest Control", desc: "Decaying stumps attract wood-boring insects and fungi." },
                    { title: "New Landscaping", desc: "You want to plant, pave, or redesign that area." },
                    { title: "Curb Appeal", desc: "An old stump is bringing down your property's look." },
                  ].map((c) => (
                    <div key={c.title} style={{ background: 'var(--green-pale)', borderRadius: 4, padding: '18px 20px', border: '1px solid var(--line)' }}>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{c.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55 }}>{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">Transparent Pricing</div>
                <h2 className="section-h2">Stump Grinding Pricing</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 20 }}>
                  Most residential stump grinding jobs in the Chicago area cost <strong style={{ color: 'var(--text)', fontWeight: 700 }}>$150–$400 per stump</strong>. Price is primarily based on stump diameter, with adjustments for root complexity, access, and wood species.
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
                  <thead>
                    <tr>
                      {['Stump Size', 'Typical Price'].map((h) => (
                        <th key={h} style={{ background: 'var(--green-dark)', color: '#fff', padding: '14px 18px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'left' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Small (under 12")', '$150 – $200'],
                      ['Medium (12–24")', '$200 – $300'],
                      ['Large (24"+)', '$300 – $450'],
                      ['Additional (same visit)', '$75 – $150 each'],
                    ].map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '13px 18px', borderBottom: ri < 3 ? '1px solid var(--line)' : 'none', fontSize: 14, color: ci === 1 ? 'var(--green)' : 'var(--text-mid)', fontWeight: ci === 1 ? 700 : 400, background: ri % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: 13, color: 'var(--text-soft)', marginTop: 10, fontStyle: 'italic' }}>
                  All prices include cleanup. View our full <Link href="/pricing" style={{ color: 'var(--green)', fontWeight: 600 }}>pricing page</Link> or{" "}
                  <Link href="/request-quote" style={{ color: 'var(--green)', fontWeight: 600 }}>request a free quote</Link>.
                </p>
                <div style={{ borderRadius: 4, overflow: 'hidden', marginTop: 24 }}>
                  <img src="/images/stump-after-grind.jpg" alt="Clean backyard after professional stump grinding — wood chips flush with lawn" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8, fontStyle: 'italic' }}>After: a freshly ground stump, flush with the surrounding lawn.</p>
                </div>
              </div>

              <div>
                <div className="eyebrow">Common Questions</div>
                <FAQAccordion items={FAQ} title="" showSchema />
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '28px 24px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Get Your Free Quote</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 18 }}>Tell us about your stump and we&apos;ll get back to you with fast, fair pricing.</p>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'var(--green-mid)', borderColor: 'var(--green-mid)' }}>
                  Request Free Estimate
                </Link>
                <a href={PHONE_HREF} className="btn btn-white-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  {PHONE}
                </a>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '24px 22px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14 }}>Quick Facts</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "Most jobs: 30–90 minutes",
                    "Cleanup always included",
                    "Same-week scheduling available",
                    "All stump sizes welcome",
                    "All tree species handled",
                    "Tight-access equipment available",
                  ].map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-mid)', padding: '6px 0' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderRadius: 4, overflow: 'hidden', border: '1px solid var(--line)', marginBottom: 20 }}>
                <img src="/images/vermeer-sc70tx.jpg" alt="Vermeer SC70TX tracked stump grinder — commercial-grade equipment" style={{ width: '100%', height: 'auto', display: 'block' }} />
                <div style={{ padding: '16px 18px', background: 'var(--white)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4 }}>Our Equipment</h3>
                  <p style={{ fontSize: 12, color: 'var(--text-soft)', lineHeight: 1.55 }}>Commercial Vermeer tracked grinders — fast, powerful, and gentle on your lawn.</p>
                </div>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '24px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14 }}>Related Services</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { href: "/stump-removal", label: "Stump Removal" },
                    { href: "/tree-service", label: "Tree Service" },
                    { href: "/tree-removal", label: "Tree Removal" },
                  ].map((s) => (
                    <li key={s.href} style={{ padding: '5px 0' }}>
                      <Link href={s.href} style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>
                        &rsaquo; {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section section-warm">
        <div className="container">
          <ServiceAreaGrid areas={AREAS} title="Stump Grinding Service Areas" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
