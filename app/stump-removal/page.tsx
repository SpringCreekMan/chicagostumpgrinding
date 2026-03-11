import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stump Removal Chicago | Complete Stump & Root Extraction",
  description:
    "Full stump removal in Chicago and suburbs. Complete root extraction for new construction, landscaping, or replanting. Free quotes. Locally owned & insured.",
  alternates: { canonical: `${SITE_URL}/stump-removal` },
};

const FAQ_REMOVAL = [
  {
    q: "What's the difference between stump grinding and stump removal?",
    a: "Stump grinding chips the stump below grade and leaves the roots to decompose. Stump removal extracts the entire stump and root system — it's more invasive but leaves a completely clean slate.",
  },
  {
    q: "When is full stump removal necessary?",
    a: "Full removal is recommended when you're installing hardscaping, pouring concrete nearby, replanting a new tree in the same spot, or when the roots are causing structural problems.",
  },
  {
    q: "How large of a hole will stump removal leave?",
    a: "The hole size depends on the root system spread. Expect a hole roughly the size and depth of the root ball — which can be substantial for large hardwoods. We can backfill with topsoil.",
  },
  {
    q: "Is stump removal covered by homeowner's insurance?",
    a: "It can be, if the tree fell due to a covered event like a storm. For elective removal, it's typically out of pocket. We can provide documentation for insurance claims if needed.",
  },
];

const AREAS_REMOVAL = [
  { href: "/service-areas/naperville-stump-grinding", label: "Naperville" },
  { href: "/service-areas/hinsdale-stump-grinding", label: "Hinsdale" },
  { href: "/service-areas/wheaton-stump-grinding", label: "Wheaton" },
  { href: "/service-areas/downers-grove-stump-grinding", label: "Downers Grove" },
  { href: "/service-areas/oak-brook-stump-grinding", label: "Oak Brook" },
  { href: "/service-areas/elmhurst-stump-grinding", label: "Elmhurst" },
  { href: "/service-areas/lemont-stump-grinding", label: "Lemont" },
  { href: "/service-areas/homer-glen-stump-grinding", label: "Homer Glen" },
];

export default function StumpRemovalPage() {
  return (
    <>
      <Hero
        headline="Complete Stump Removal in Chicago & Suburbs"
        subheadline="Full stump and root extraction for new construction, landscaping renovations, or a completely clean yard. Free on-site estimates."
        variant="service"
        badgeText="Full Root Extraction"
        backgroundImage="/images/hero-stump-grinding.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="page-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 52, alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">About the Service</div>
                <h2 className="section-h2">What Is Stump Removal?</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 16 }}>
                  Stump removal is the complete extraction of a tree stump and its root system from the ground. Unlike stump grinding — which leaves roots in place — stump removal clears everything, leaving a hole that can be backfilled for a truly fresh start.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300 }}>
                  It&apos;s more labor-intensive and costs more than grinding, but it&apos;s the right choice for specific situations where a completely clean excavation is needed.
                </p>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">When to Choose Removal</div>
                <h2 className="section-h2">When to Choose Stump Removal Over Grinding</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
                  {[
                    { title: "New Construction", desc: "Building a foundation, driveway, or patio where roots would interfere." },
                    { title: "Replanting", desc: "You want to plant a new tree in exactly the same spot." },
                    { title: "Root Problems", desc: "Roots are heaving pavers, blocking drainage, or damaging structures." },
                    { title: "Complete Landscaping Renovation", desc: "You need a fully cleared area for a total redesign." },
                  ].map((c) => (
                    <div key={c.title} style={{ display: 'flex', gap: 14, background: 'var(--green-pale)', borderRadius: 4, padding: '16px 20px', border: '1px solid var(--line)' }}>
                      <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>&rsaquo;</span>
                      <div>
                        <span style={{ fontWeight: 700, color: 'var(--green-dark)', fontSize: 14 }}>{c.title}:</span>{" "}
                        <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>{c.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">Transparent Pricing</div>
                <h2 className="section-h2">Pricing</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 16 }}>
                  Stump removal costs more than stump grinding due to the added labor and equipment requirements. Typical range in the Chicago area is <strong style={{ color: 'var(--text)', fontWeight: 700 }}>$300–$800+ per stump</strong>, depending on size and root extent.
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-soft)' }}>
                  Not sure if you need grinding or removal?{" "}
                  <Link href="/blog/stump-grinding-vs-stump-removal" style={{ color: 'var(--green)', fontWeight: 600 }}>Read our comparison guide</Link>{" "}
                  or <Link href="/contact" style={{ color: 'var(--green)', fontWeight: 600 }}>ask us directly</Link>.
                </p>
              </div>

              <div className="eyebrow">Common Questions</div>
              <FAQAccordion items={FAQ_REMOVAL} title="" />
            </div>

            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '28px 24px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Get Your Free Quote</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 18 }}>We&apos;ll assess your stump and advise on grinding vs. removal.</p>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'var(--green-mid)', borderColor: 'var(--green-mid)' }}>
                  Request Free Estimate
                </Link>
                <a href={PHONE_HREF} className="btn btn-white-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  {PHONE}
                </a>
              </div>
              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '24px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14 }}>Related Services</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { href: "/stump-grinding", label: "Stump Grinding" },
                    { href: "/tree-removal", label: "Tree Removal" },
                    { href: "/tree-service", label: "Tree Service" },
                  ].map((s) => (
                    <li key={s.href} style={{ padding: '5px 0' }}>
                      <Link href={s.href} style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>&rsaquo; {s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <ServiceAreaGrid areas={AREAS_REMOVAL} title="Serving These Chicago Suburbs" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
