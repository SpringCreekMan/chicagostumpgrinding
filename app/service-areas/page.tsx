import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner } from "@/components/UIComponents";
import { SUBURBS } from "@/data/suburbs";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Chicago Stump Grinding & Tree Service",
  description:
    "Chicago Stump Grinding serves homeowners across the Chicago metro area. Find your suburb — Naperville, Hinsdale, Wheaton, Elmhurst, and more.",
  alternates: { canonical: `${SITE_URL}/service-areas` },
};

const stumpGrindingAreas = SUBURBS.filter((s) => s.serviceType === "stump-grinding");
const treeServiceAreas = SUBURBS.filter((s) => s.serviceType === "tree-service");

export default function ServiceAreasPage() {
  return (
    <>
      <Hero
        headline="Stump Grinding & Tree Service — Across Chicagoland"
        subheadline="We serve homeowners and properties across Chicago's western and southwestern suburbs in DuPage, Cook, and Will Counties."
        variant="service"
        showTrustBadges={false}
      />

      <section className="section">
        <div className="container">
          {/* Stump Grinding Areas */}
          <div style={{ marginBottom: 52 }}>
            <div className="eyebrow">Stump Grinding</div>
            <h2 className="section-h2">Stump Grinding Service Areas</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>Professional stump grinding and stump removal across Chicago&apos;s suburbs.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {stumpGrindingAreas.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/service-areas/${suburb.slug}`}
                  style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px', textDecoration: 'none', transition: 'all .14s' }}
                  className="suburb-card"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)' }}>
                      {suburb.city}
                    </h3>
                    <span style={{ fontSize: 11, color: 'var(--text-soft)', background: 'var(--green-pale)', padding: '2px 8px', borderRadius: 2 }}>
                      {suburb.county} Co.
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{suburb.intro}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>View Page &rsaquo;</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tree Service Areas */}
          <div style={{ marginBottom: 52 }}>
            <div className="eyebrow">Tree Care</div>
            <h2 className="section-h2">Tree Service Areas</h2>
            <p className="section-sub" style={{ marginBottom: 28 }}>Expert tree trimming, pruning, and removal across Chicago&apos;s suburbs.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {treeServiceAreas.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/service-areas/${suburb.slug}`}
                  style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px', textDecoration: 'none', transition: 'all .14s' }}
                  className="suburb-card"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)' }}>
                      {suburb.city}
                    </h3>
                    <span style={{ fontSize: 11, color: 'var(--text-soft)', background: 'var(--green-pale)', padding: '2px 8px', borderRadius: 2 }}>
                      {suburb.county} Co.
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{suburb.intro}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)' }}>View Page &rsaquo;</span>
                </Link>
              ))}
            </div>
          </div>
          <style>{`.suburb-card:hover { border-color: var(--green) !important; box-shadow: 0 2px 8px rgba(0,0,0,.06); }`}</style>

          {/* Coverage note */}
          <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 32, border: '1px solid var(--line)', textAlign: 'center' }}>
            <div className="eyebrow">Don&apos;t See Your City?</div>
            <h2 className="section-h2" style={{ marginBottom: 10 }}>We Cover More Than Listed</h2>
            <p style={{ fontSize: 15, color: 'var(--text-soft)', lineHeight: 1.65, marginBottom: 24, maxWidth: 560, margin: '0 auto 24px' }}>
              We serve the entire Chicago metro area and surrounding suburbs in DuPage, Cook, and Will Counties. Even if your city isn&apos;t listed, give us a call — chances are we cover your area.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/request-quote" className="btn btn-solid" style={{ padding: '12px 24px' }}>
                Request a Quote
              </Link>
              <a href={PHONE_HREF} className="btn btn-outline" style={{ padding: '12px 24px' }}>
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
