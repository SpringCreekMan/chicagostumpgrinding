import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/UIComponents";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Chicago Stump Grinding & Tree Service",
  description:
    "Learn about Chicago Stump Grinding — a locally owned stump grinding and tree service company serving the Chicago metro area. Fully insured, locally trusted.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ position: 'relative', background: 'var(--green-deep)', padding: '64px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 12 }}>
            About {SITE_NAME}
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300 }}>{SITE_TAGLINE}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="two-col-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: 40 }}>
                <div className="eyebrow">Our Story</div>
                <h2 className="section-h2">Who We Are</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 16 }}>
                  Chicago Stump Grinding is a locally owned and operated stump grinding and tree service company serving the Chicago metropolitan area and surrounding suburbs. We specialize in stump grinding, stump removal, tree trimming, and tree removal for homeowners throughout DuPage, Cook, and Will Counties.
                </p>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300 }}>
                  We&apos;re not a franchise. We&apos;re a local team that knows Chicagoland&apos;s neighborhoods, tree species, soil conditions, and what homeowners in this area actually need. That means faster responses, clearer communication, and results you can count on.
                </p>
              </div>

              <div>
                <div className="eyebrow">What We Stand For</div>
                <h2 className="section-h2">Our Commitment</h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { icon: "💲", title: "Honest Pricing", desc: "We quote before we work. No surprises, no upsells, no pressure." },
                    { icon: "🛡️", title: "Fully Insured", desc: "We carry full liability and workers' comp insurance on every job." },
                    { icon: "⚡", title: "Fast & Reliable", desc: "We show up on time and get the job done right, every time." },
                    { icon: "🌱", title: "Yard-First Approach", desc: "We protect your lawn, landscaping, and property during every project." },
                  ].map((item) => (
                    <li key={item.title} style={{ display: 'flex', gap: 14, padding: '10px 0' }}>
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                      <div>
                        <span style={{ fontWeight: 700, color: 'var(--green-dark)', fontSize: 14 }}>{item.title}: </span>
                        <span style={{ fontSize: 13, color: 'var(--text-soft)' }}>{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div style={{ borderRadius: 4, overflow: 'hidden', marginBottom: 24 }}>
                <img src="/images/owner-portrait.jpg" alt="Owner and lead arborist of Chicago Stump Grinding" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 32, border: '1px solid var(--line)', marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 24 }}>By the Numbers</h3>
                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                  {[
                    { n: "500+", label: "Stumps Removed" },
                    { n: "5★", label: "Google Rating" },
                    { n: "25+", label: "Suburbs Served" },
                    { n: "100%", label: "Satisfaction Goal" },
                  ].map((stat) => (
                    <div key={stat.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 36, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4 }}>{stat.n}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-soft)' }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Get In Touch</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 16 }}>We&apos;re happy to answer questions, give advice, or schedule a free estimate.</p>
                <a href={PHONE_HREF} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#7ecf8e', fontWeight: 700, fontSize: 15, marginBottom: 14 }}>
                  {PHONE}
                </a>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', background: 'var(--green-mid)', borderColor: 'var(--green-mid)' }}>
                  Request Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
