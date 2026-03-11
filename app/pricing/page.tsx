import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner } from "@/components/UIComponents";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stump Grinding Pricing | Chicago Stump Grinding Cost Guide",
  description:
    "Honest, upfront pricing for stump grinding, stump removal, and tree service in Chicago and suburbs. See typical costs and what affects your quote.",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const pricingTable = [
  { service: "Small Stump Grinding (under 12\u2033)", low: "$150", high: "$200", note: "Most common ornamental stumps" },
  { service: "Medium Stump Grinding (12\u201324\u2033)", low: "$200", high: "$300", note: "Average shade tree stump" },
  { service: "Large Stump Grinding (24\u201336\u2033)", low: "$300", high: "$400", note: "Large hardwoods, oaks" },
  { service: "Extra Large Stump (36\u2033+)", low: "$400", high: "$600+", note: "Quoted individually" },
  { service: "Additional Stumps (same visit)", low: "$75", high: "$150 each", note: "Multi-stump discount applied" },
  { service: "Stump Removal (small)", low: "$250", high: "$400", note: "Full root extraction" },
  { service: "Stump Removal (large)", low: "$500", high: "$900+", note: "Varies by root extent" },
  { service: "Tree Trimming (small tree)", low: "$150", high: "$300", note: "Under 25 ft" },
  { service: "Tree Trimming (medium)", low: "$300", high: "$600", note: "25\u201350 ft" },
  { service: "Tree Removal (small)", low: "$400", high: "$700", note: "Under 25 ft, easy access" },
  { service: "Tree Removal (large)", low: "$800", high: "$2,000+", note: "Height, location dependent" },
];

export default function PricingPage() {
  return (
    <>
      <Hero
        headline="Upfront Stump Grinding & Tree Service Pricing"
        subheadline="We believe in transparent, fair pricing. These ranges reflect typical costs in the Chicago metro area. Your actual quote is always free and in writing."
        variant="service"
        showTrustBadges={false}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div className="eyebrow">Cost Guide</div>
          <h2 className="section-h2">Chicago Area Pricing Guide</h2>
          <p className="section-sub" style={{ marginBottom: 32 }}>All prices include equipment, labor, and cleanup. Final quotes are provided after an on-site assessment.</p>

          <div style={{ overflow: 'auto', borderRadius: 4, border: '1px solid var(--line)', boxShadow: '0 1px 4px rgba(0,0,0,.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Service', 'Low', 'High', 'Notes'].map((h) => (
                    <th key={h} style={{ background: 'var(--green-dark)', color: '#fff', padding: '14px 18px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'left' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={row.service}>
                    <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--line)', fontSize: 14, fontWeight: 600, color: 'var(--green-dark)', background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{row.service}</td>
                    <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--line)', fontSize: 14, color: 'var(--text-mid)', background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{row.low}</td>
                    <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--line)', fontSize: 14, color: 'var(--text-mid)', background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{row.high}</td>
                    <td style={{ padding: '13px 18px', borderBottom: '1px solid var(--line)', fontSize: 12, color: 'var(--text-soft)', background: i % 2 === 0 ? 'var(--white)' : 'var(--green-pale)' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: 36, background: 'var(--green-pale)', borderRadius: 4, padding: 28, border: '1px solid var(--line)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 16 }}>What Affects Your Price?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { factor: "Stump Diameter", note: "Primary pricing factor — measured at ground level" },
                { factor: "Root Complexity", note: "Extensive surface roots add time and cost" },
                { factor: "Wood Species", note: "Hardwoods (oak, hickory) take more time than softwoods" },
                { factor: "Access", note: "Tight spaces or difficult terrain may require smaller equipment" },
                { factor: "Depth Required", note: "Deeper grinding for hardscape costs more" },
                { factor: "Number of Stumps", note: "Multi-stump discounts available" },
              ].map((f) => (
                <div key={f.factor} style={{ display: 'flex', gap: 10, fontSize: 13 }}>
                  <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>&rsaquo;</span>
                  <div>
                    <span style={{ fontWeight: 700, color: 'var(--green-dark)' }}>{f.factor}:</span>{" "}
                    <span style={{ color: 'var(--text-soft)' }}>{f.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <p style={{ fontSize: 15, color: 'var(--text-mid)', marginBottom: 18 }}>Ready for a real quote? We provide free, written estimates — no pressure.</p>
            <Link href="/request-quote" className="btn btn-solid" style={{ padding: '13px 28px', fontSize: 15 }}>
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
