import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner } from "@/components/UIComponents";
import { SITE_URL } from "@/lib/constants";

// ── PRICING PAGE ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Stump Grinding Pricing | Chicago Stump Grinding Cost Guide",
  description:
    "Honest, upfront pricing for stump grinding, stump removal, and tree service in Chicago and suburbs. See typical costs and what affects your quote.",
  alternates: { canonical: `${SITE_URL}/pricing` },
};

const pricingTable = [
  { service: "Small Stump Grinding (under 12″)", low: "$150", high: "$200", note: "Most common ornamental stumps" },
  { service: "Medium Stump Grinding (12–24″)", low: "$200", high: "$300", note: "Average shade tree stump" },
  { service: "Large Stump Grinding (24–36″)", low: "$300", high: "$400", note: "Large hardwoods, oaks" },
  { service: "Extra Large Stump (36″+)", low: "$400", high: "$600+", note: "Quoted individually" },
  { service: "Additional Stumps (same visit)", low: "$75", high: "$150 each", note: "Multi-stump discount applied" },
  { service: "Stump Removal (small)", low: "$250", high: "$400", note: "Full root extraction" },
  { service: "Stump Removal (large)", low: "$500", high: "$900+", note: "Varies by root extent" },
  { service: "Tree Trimming (small tree)", low: "$150", high: "$300", note: "Under 25 ft" },
  { service: "Tree Trimming (medium)", low: "$300", high: "$600", note: "25–50 ft" },
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
      />

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">Chicago Area Pricing Guide</h2>
          <p className="text-gray-600 mb-8">All prices include equipment, labor, and cleanup. Final quotes are provided after an on-site assessment.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-5 py-3 font-semibold">Service</th>
                  <th className="text-left px-5 py-3 font-semibold">Low</th>
                  <th className="text-left px-5 py-3 font-semibold">High</th>
                  <th className="text-left px-5 py-3 font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingTable.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-medium text-navy-900">{row.service}</td>
                    <td className="px-5 py-3 text-gray-700">{row.low}</td>
                    <td className="px-5 py-3 text-gray-700">{row.high}</td>
                    <td className="px-5 py-3 text-gray-500 hidden sm:table-cell text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-brand-light rounded-xl p-6 border border-gray-200">
            <h3 className="font-display text-xl font-bold text-navy-900 mb-3">What Affects Your Price?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              {[
                { factor: "Stump Diameter", note: "Primary pricing factor — measured at ground level" },
                { factor: "Root Complexity", note: "Extensive surface roots add time and cost" },
                { factor: "Wood Species", note: "Hardwoods (oak, hickory) take more time than softwoods" },
                { factor: "Access", note: "Tight spaces or difficult terrain may require smaller equipment" },
                { factor: "Depth Required", note: "Deeper grinding for hardscape costs more" },
                { factor: "Number of Stumps", note: "Multi-stump discounts available" },
              ].map((f) => (
                <div key={f.factor} className="flex gap-2">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                  <div>
                    <span className="font-semibold text-navy-900">{f.factor}:</span> {f.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-700 mb-4">Ready for a real quote? We provide free, written estimates — no pressure.</p>
            <Link href="/request-quote" className="btn-primary text-base">
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
