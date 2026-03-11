import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tree Service Chicago | Tree Trimming & Pruning Across Chicago Suburbs",
  description:
    "Professional tree service in Chicago and suburbs — trimming, pruning, crown work, and tree health care. Licensed, insured. Free estimates. Call today.",
  alternates: { canonical: `${SITE_URL}/tree-service` },
};

const FAQ_TREE = [
  {
    q: "When is the best time to trim trees in Illinois?",
    a: "Late winter (February–March) is ideal for most deciduous trees in Illinois — before new growth begins. Summer trimming is fine for light work. Avoid fall trimming, which can stimulate growth before frost.",
  },
  {
    q: "How often should I have my trees trimmed?",
    a: "Most ornamental and shade trees benefit from professional trimming every 3–5 years. Fruit trees may need annual pruning. We can advise based on your specific tree species and condition.",
  },
  {
    q: "Do you offer emergency tree service?",
    a: "Yes. Storm damage and hazardous tree situations are prioritized. Call us directly at (630) 716-9336 for emergency response.",
  },
  {
    q: "Can you handle large trees near power lines?",
    a: "We assess every job carefully. For trees actively touching power lines, we coordinate with ComEd or your utility provider as required by Illinois law.",
  },
];

const TREE_AREAS = [
  { href: "/service-areas/hinsdale-tree-service", label: "Hinsdale Tree Service" },
  { href: "/service-areas/glen-ellyn-tree-service", label: "Glen Ellyn Tree Service" },
  { href: "/service-areas/oak-brook-tree-service", label: "Oak Brook Tree Service" },
  { href: "/service-areas/western-springs-tree-service", label: "Western Springs Tree Service" },
  { href: "/service-areas/burr-ridge-tree-service", label: "Burr Ridge Tree Service" },
  { href: "/service-areas/elmhurst-tree-service", label: "Elmhurst Tree Service" },
  { href: "/service-areas/wheaton-tree-service", label: "Wheaton Tree Service" },
  { href: "/service-areas/lemont-tree-service", label: "Lemont Tree Service" },
  { href: "/service-areas/homer-glen-tree-service", label: "Homer Glen Tree Service" },
];

export default function TreeServicePage() {
  return (
    <>
      <Hero
        headline="Professional Tree Service Across Chicago & Suburbs"
        subheadline="Expert tree trimming, pruning, crown reduction, and maintenance to keep your trees healthy and your property safe."
        variant="service"
        badgeText="Tree Trimming & Care"
        backgroundImage="/images/hero-tree-service.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="page-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 52, alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">What We Offer</div>
                <h2 className="section-h2">Our Tree Services</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 24 }}>
                  Chicago Tree &amp; Stump Specialists provides full-service tree care for residential and commercial properties across Chicago&apos;s western and southwestern suburbs. Our certified professionals handle everything from routine annual trimming to major hazard removals.
                </p>
                <div style={{ borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
                  <img src="/images/arborist-trimming.jpg" alt="Arborist with safety harness trimming an oak branch with chainsaw" style={{ width: '100%', height: 'auto', display: 'block' }} />
                </div>
                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  {[
                    { icon: "✂️", title: "Tree Trimming & Pruning", desc: "Remove dead, diseased, or crossing branches. Improve structure and appearance." },
                    { icon: "👑", title: "Crown Thinning & Reduction", desc: "Reduce wind load, improve light penetration, and maintain tree health." },
                    { icon: "⚠️", title: "Hazard Limb Removal", desc: "Safe removal of dead or overhanging branches that threaten property or safety." },
                    { icon: "🌿", title: "Tree Health Assessment", desc: "Expert evaluation of tree condition, disease diagnosis, and treatment recommendations." },
                    { icon: "⛈️", title: "Storm Damage Response", desc: "Emergency cleanup and stabilization after storm events." },
                    { icon: "🪓", title: "Tree Removal", desc: "Complete tree removal when needed. See our dedicated tree removal page." },
                  ].map((s) => (
                    <div key={s.title} style={{ background: 'var(--green-pale)', borderRadius: 4, padding: '20px', border: '1px solid var(--line)' }}>
                      <div style={{ fontSize: 24, marginBottom: 10 }}>{s.icon}</div>
                      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 6 }}>{s.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55 }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">Transparent Pricing</div>
                <h2 className="section-h2">Pricing Overview</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 20 }}>
                  Tree service pricing varies based on tree size, number of trees, access, and scope of work. General ranges for the Chicago area:
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
                  <thead>
                    <tr>
                      {['Service', 'Typical Price'].map((h) => (
                        <th key={h} style={{ background: 'var(--green-dark)', color: '#fff', padding: '14px 18px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'left' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['Small tree trimming (under 25 ft)', '$150 – $300'],
                      ['Medium tree trimming (25–50 ft)', '$300 – $600'],
                      ['Large tree trimming (50+ ft)', '$600 – $1,200+'],
                    ].map((row, ri) => (
                      <tr key={ri}>
                        {row.map((cell, ci) => (
                          <td key={ci} style={{ padding: '13px 18px', borderBottom: ri < 2 ? '1px solid var(--line)' : 'none', fontSize: 14, color: ci === 1 ? 'var(--green)' : 'var(--text-mid)', fontWeight: ci === 1 ? 700 : 400, background: ri % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 10 }}>All pricing includes full cleanup. <Link href="/request-quote" style={{ color: 'var(--green)', fontWeight: 600 }}>Request a free quote</Link> for your specific trees.</p>
              </div>

              <div className="eyebrow">Common Questions</div>
              <FAQAccordion items={FAQ_TREE} title="" />
            </div>

            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '28px 24px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Get a Free Estimate</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 18 }}>Tell us about your trees and we&apos;ll get back to you with a fair, competitive quote.</p>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'var(--green-mid)', borderColor: 'var(--green-mid)' }}>
                  Request Free Estimate
                </Link>
                <a href={PHONE_HREF} className="btn btn-white-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  {PHONE}
                </a>
              </div>

              <div style={{ background: 'var(--green-pale)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>⛈️ Storm Damage?</h3>
                <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 12 }}>Call us immediately for emergency tree service. We prioritize storm response.</p>
                <a href={PHONE_HREF} style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700 }}>{PHONE}</a>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '24px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14 }}>Related Services</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { href: "/tree-removal", label: "Tree Removal" },
                    { href: "/stump-grinding", label: "Stump Grinding" },
                    { href: "/stump-removal", label: "Stump Removal" },
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
          <ServiceAreaGrid areas={TREE_AREAS} title="Tree Service Areas" />
        </div>
      </section>

      <CTABanner headline="Schedule Your Tree Service Today" />
    </>
  );
}
