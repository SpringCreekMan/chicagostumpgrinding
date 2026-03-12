import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import {
  SERVICES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  TESTIMONIALS,
  HOME_FAQ,
  SITE_NAME,
  SITE_URL,
  PHONE,
  PHONE_HREF,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chicago Stump Grinding | Professional Stump Removal & Tree Service",
  description:
    "Fast, professional stump grinding, stump removal, and tree service across Chicago and suburbs. Serving Naperville, Hinsdale, Wheaton, and more. Free quotes.",
  alternates: { canonical: SITE_URL },
};

const FEATURED_AREAS = [
  { href: "/service-areas/naperville-stump-grinding", label: "Naperville" },
  { href: "/service-areas/hinsdale-stump-grinding", label: "Hinsdale" },
  { href: "/service-areas/wheaton-stump-grinding", label: "Wheaton" },
  { href: "/service-areas/downers-grove-stump-grinding", label: "Downers Grove" },
  { href: "/service-areas/glen-ellyn-stump-grinding", label: "Glen Ellyn" },
  { href: "/service-areas/oak-brook-stump-grinding", label: "Oak Brook" },
  { href: "/service-areas/elmhurst-stump-grinding", label: "Elmhurst" },
  { href: "/service-areas/la-grange-stump-grinding", label: "La Grange" },
  { href: "/service-areas/lemont-stump-grinding", label: "Lemont" },
  { href: "/service-areas/homer-glen-stump-grinding", label: "Homer Glen" },
  { href: "/service-areas/burr-ridge-stump-grinding", label: "Burr Ridge" },
  { href: "/service-areas/darien-stump-grinding", label: "Darien" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "Professional stump grinding, stump removal, and tree service across Chicago and surrounding suburbs.",
  url: SITE_URL,
  telephone: "+16307169336",
  email: "info@chicagostumpgrinding.com",
  areaServed: {
    "@type": "State",
    name: "Illinois",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
  serviceType: ["Stump Grinding", "Stump Removal", "Tree Service", "Tree Removal"],
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* HERO */}
      <Hero
        headline="Chicago Stump Grinding & Stump Removal"
        subheadline="Fast, professional stump grinding and tree service across Chicago and surrounding suburbs. Free estimates. Same-week service."
        showTrustBadges
        backgroundImage="/images/hero-home.jpg"
      />

      {/* SERVICES — 1px separator grid matching mockup */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <div className="eyebrow">What We Do</div>
            <h2 className="section-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Our Services</h2>
            <p className="section-sub" style={{ maxWidth: 560, margin: '0 auto' }}>
              From a single stump to complete tree removal — we handle it all with professional equipment and a commitment to clean, careful work.
            </p>
          </div>
          <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)', borderRadius: 5, overflow: 'hidden', marginTop: 44 }}>
            {SERVICES.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`} style={{ background: 'var(--white)', padding: '32px 26px 28px', display: 'flex', flexDirection: 'column', textDecoration: 'none', color: 'inherit', transition: 'background .16s' }} className="service-tile">
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--green-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18, fontSize: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10, lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65, flex: 1, marginBottom: 20 }}>{s.description}</p>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 5 }}>
                  Learn More
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <style>{`.service-tile:hover { background: var(--green-pale) !important; }`}</style>
      </section>

      {/* WHY CHOOSE US — numbered circles matching mockup */}
      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">Why Choose Us</div>
          <h2 className="section-h2">Why Chicago Homeowners Choose Us</h2>
          <p className="section-sub">
            We&apos;re a local, owner-operated business — not a franchise. That means faster service, better communication, and work you can count on.
          </p>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 48 }}>
            {WHY_CHOOSE_US.map((item, i) => (
              <div key={item.title} style={{ padding: '32px 28px', background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4 }}>
                <div style={{ width: 36, height: 36, background: 'var(--green-dark)', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
                  {i + 1}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 9 }}>{item.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.68 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 0 }}>
            <div className="eyebrow">Our Process</div>
            <h2 className="section-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>How It Works</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Simple, straightforward, and stress-free from start to finish.</p>
          </div>
          <div className="flex-steps" style={{ display: 'flex', gap: 0, position: 'relative', marginTop: 48 }}>
            <div className="process-line" style={{ position: 'absolute', top: 28, left: 'calc(12.5%)', right: 'calc(12.5%)', height: 1, background: 'var(--line)' }} />
            {PROCESS_STEPS.map((step) => (
              <div key={step.step} style={{ flex: 1, textAlign: 'center', padding: '0 12px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, margin: '0 auto 20px', position: 'relative', zIndex: 1, border: '3px solid var(--bg-soft)' }}>
                  {step.step}
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 9 }}>{step.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65 }}>{step.body}</p>
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 40 }}>
            <div style={{ borderRadius: 4, overflow: 'hidden' }}>
              <img src="/images/free-estimate-measure.jpg" alt="Arborist measuring a tree stump diameter with tape measure while writing an estimate on clipboard" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>Step 2: Free on-site estimate — no obligation.</p>
            </div>
            <div style={{ borderRadius: 4, overflow: 'hidden' }}>
              <img src="/images/vermeer-sc70tx.jpg" alt="Vermeer SC70TX tracked stump grinder — commercial-grade equipment used on every job" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>Step 3: Professional equipment on every job.</p>
            </div>
            <div style={{ borderRadius: 4, overflow: 'hidden' }}>
              <img src="/images/cleanup-wood-chips.jpg" alt="Crew member raking wood chips and debris after stump grinding — full cleanup included" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', display: 'block' }} />
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8, textAlign: 'center', fontStyle: 'italic' }}>Step 4: Full cleanup — always included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS — column list with › prefix matching mockup */}
      <section className="section section-warm">
        <div className="container">
          <div className="eyebrow">Where We Work</div>
          <h2 className="section-h2">Service Areas</h2>
          <p className="section-sub">
            We serve Chicago and the surrounding suburbs in DuPage, Cook, and Will Counties.
          </p>
          <div className="cols-4" style={{ columns: 4, columnGap: 24, marginTop: 36 }}>
            {FEATURED_AREAS.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                style={{ display: 'block', fontSize: 14, color: 'var(--green)', fontWeight: 600, padding: '5px 0', borderBottom: '1px solid var(--line)', marginBottom: 0, transition: 'color .13s', breakInside: 'avoid' }}
                className="area-link"
              >
                ›&nbsp; {a.label}
              </Link>
            ))}
            <Link href="/service-areas" style={{ display: 'block', fontSize: 14, color: 'var(--green)', fontWeight: 700, padding: '12px 0 5px', breakInside: 'avoid' }}>
              View All Service Areas →
            </Link>
          </div>
          <style>{`.area-link:hover { color: var(--green-dark) !important; }`}</style>
        </div>
      </section>

      {/* SATISFIED CUSTOMER */}
      <section style={{ padding: '56px 0', background: 'var(--bg-soft)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div className="eyebrow">Happy Homeowners</div>
          <h2 className="section-h2" style={{ marginLeft: 'auto', marginRight: 'auto' }}>See the Difference</h2>
          <div style={{ borderRadius: 4, overflow: 'hidden', marginTop: 28, marginBottom: 20 }}>
            <img src="/images/satisfied-walkthrough.jpg" alt="Satisfied homeowners smiling as they inspect the clean wood chip bed where their tree stump was ground down" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <p style={{ fontSize: 14, color: 'var(--text-soft)', fontWeight: 300, lineHeight: 1.7 }}>
            The best part of every job — walking homeowners through the finished result. Clean, flat, and ready for whatever comes next.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials testimonials={TESTIMONIALS} />

      {/* TEAM TRUST */}
      <section style={{ padding: '56px 0', background: 'var(--bg-soft)' }}>
        <div className="container" style={{ maxWidth: 800, textAlign: 'center' }}>
          <div style={{ borderRadius: 4, overflow: 'hidden', marginBottom: 20 }}>
            <img src="/images/crew-team.jpg" alt="Chicago Stump Grinding crew in matching green polos standing in front of their service truck" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <p style={{ fontSize: 14, color: 'var(--text-soft)', fontWeight: 300, lineHeight: 1.7 }}>
            Our crew arrives on time, in uniform, with professional equipment — ready to get the job done right.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="eyebrow">Common Questions</div>
          <FAQAccordion items={HOME_FAQ} title="" />
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <Link href="/faq" style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>
              See All FAQs &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position: 'relative', padding: '70px 0', textAlign: 'center', overflow: 'hidden', background: 'var(--green-dark)' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/satisfied-walkthrough.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(45,122,65,.3) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ color: '#7ecf8e', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, marginBottom: 14 }}>Get Started Today</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 14, lineHeight: 1.2 }}>
            Get Your Free Stump Grinding Quote Today
          </h2>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300, marginBottom: 36 }}>
            No obligation. We respond fast and provide upfront, honest pricing.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/request-quote" className="btn btn-white">Request Free Estimate</Link>
            <a href={PHONE_HREF} className="btn btn-white-outline">{PHONE}</a>
          </div>
        </div>
      </section>
    </>
  );
}
