import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL } from "@/lib/constants";

// ── STUMP REMOVAL PAGE ──────────────────────────────────────────────────────
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
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">What Is Stump Removal?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stump removal is the complete extraction of a tree stump and its root system from the ground. Unlike stump grinding — which leaves roots in place — stump removal clears everything, leaving a hole that can be backfilled for a truly fresh start.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  It&apos;s more labor-intensive and costs more than grinding, but it&apos;s the right choice for specific situations where a completely clean excavation is needed.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">When to Choose Stump Removal Over Grinding</h2>
                <div className="space-y-3">
                  {[
                    { title: "New Construction", desc: "Building a foundation, driveway, or patio where roots would interfere." },
                    { title: "Replanting", desc: "You want to plant a new tree in exactly the same spot." },
                    { title: "Root Problems", desc: "Roots are heaving pavers, blocking drainage, or damaging structures." },
                    { title: "Complete Landscaping Renovation", desc: "You need a fully cleared area for a total redesign." },
                  ].map((c) => (
                    <div key={c.title} className="flex gap-4 bg-brand-light rounded-lg p-4 border border-gray-200">
                      <span className="text-orange-600 font-bold mt-0.5 flex-shrink-0">→</span>
                      <div>
                        <span className="font-semibold text-navy-900">{c.title}:</span>{" "}
                        <span className="text-gray-700 text-sm">{c.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Pricing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stump removal costs more than stump grinding due to the added labor and equipment requirements. Typical range in the Chicago area is <strong>$300–$800+ per stump</strong>, depending on size and root extent.
                </p>
                <p className="text-sm text-gray-500">
                  Not sure if you need grinding or removal?{" "}
                  <Link href="/blog/stump-grinding-vs-stump-removal" className="text-orange-600 underline">
                    Read our comparison guide
                  </Link>{" "}
                  or <Link href="/contact" className="text-orange-600 underline">ask us directly</Link>.
                </p>
              </div>

              <FAQAccordion items={FAQ_REMOVAL} title="Stump Removal FAQs" />
            </div>

            <aside className="space-y-6">
              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-3">Get Your Free Quote</h3>
                <p className="text-navy-300 text-sm mb-4">We&apos;ll assess your stump and advise on grinding vs. removal.</p>
                <Link href="/request-quote" className="btn-primary w-full justify-center mb-3 text-sm">
                  Request Free Estimate
                </Link>
                <a href="tel:+13125550188" className="btn-outline-white w-full justify-center text-sm">
                  📞 (312) 555-0188
                </a>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/stump-grinding", label: "Stump Grinding" },
                    { href: "/tree-removal", label: "Tree Removal" },
                    { href: "/tree-service", label: "Tree Service" },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
                        → {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <ServiceAreaGrid areas={AREAS_REMOVAL} title="Serving These Chicago Suburbs" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
