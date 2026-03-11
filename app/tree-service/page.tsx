import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL } from "@/lib/constants";

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
    a: "Yes. Storm damage and hazardous tree situations are prioritized. Call us directly at (312) 555-0188 for emergency response.",
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
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Our Tree Services</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Chicago Tree & Stump Specialists provides full-service tree care for residential and commercial properties across Chicago&apos;s western and southwestern suburbs. Our certified professionals handle everything from routine annual trimming to major hazard removals.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "✂️", title: "Tree Trimming & Pruning", desc: "Remove dead, diseased, or crossing branches. Improve structure and appearance." },
                    { icon: "👑", title: "Crown Thinning & Reduction", desc: "Reduce wind load, improve light penetration, and maintain tree health." },
                    { icon: "⚠️", title: "Hazard Limb Removal", desc: "Safe removal of dead or overhanging branches that threaten property or safety." },
                    { icon: "🌿", title: "Tree Health Assessment", desc: "Expert evaluation of tree condition, disease diagnosis, and treatment recommendations." },
                    { icon: "⛈️", title: "Storm Damage Response", desc: "Emergency cleanup and stabilization after storm events." },
                    { icon: "🪓", title: "Tree Removal", desc: "Complete tree removal when needed. See our dedicated tree removal page." },
                  ].map((s) => (
                    <div key={s.title} className="bg-brand-light rounded-lg p-5 border border-gray-200">
                      <div className="text-2xl mb-2">{s.icon}</div>
                      <h3 className="font-semibold text-navy-900 mb-1">{s.title}</h3>
                      <p className="text-gray-600 text-sm">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Pricing Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Tree service pricing varies based on tree size, number of trees, access, and scope of work. General ranges for the Chicago area:
                </p>
                <div className="bg-navy-50 border border-navy-200 rounded-lg p-5 text-sm text-gray-700 space-y-2">
                  <div className="flex justify-between border-b border-navy-100 pb-2">
                    <span>Small tree trimming (under 25 ft)</span>
                    <span className="font-semibold">$150 – $300</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-100 pb-2">
                    <span>Medium tree trimming (25–50 ft)</span>
                    <span className="font-semibold">$300 – $600</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Large tree trimming (50+ ft)</span>
                    <span className="font-semibold">$600 – $1,200+</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">All pricing includes full cleanup. <Link href="/request-quote" className="text-orange-600 underline">Request a free quote</Link> for your specific trees.</p>
              </div>

              <FAQAccordion items={FAQ_TREE} title="Tree Service FAQs" />
            </div>

            <aside className="space-y-6">
              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-3">Get a Free Estimate</h3>
                <p className="text-navy-300 text-sm mb-4">Tell us about your trees and we&apos;ll get back to you with a fair, competitive quote.</p>
                <Link href="/request-quote" className="btn-primary w-full justify-center mb-3 text-sm">
                  Request Free Estimate
                </Link>
                <a href="tel:+13125550188" className="btn-outline-white w-full justify-center text-sm">
                  📞 (312) 555-0188
                </a>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
                <h3 className="font-semibold text-orange-900 mb-2">⛈️ Storm Damage?</h3>
                <p className="text-orange-800 text-sm mb-3">Call us immediately for emergency tree service. We prioritize storm response.</p>
                <a href="tel:+13125550188" className="text-orange-700 font-bold text-sm underline">(312) 555-0188</a>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/tree-removal", label: "Tree Removal" },
                    { href: "/stump-grinding", label: "Stump Grinding" },
                    { href: "/stump-removal", label: "Stump Removal" },
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
          <ServiceAreaGrid areas={TREE_AREAS} title="Tree Service Areas" />
        </div>
      </section>

      <CTABanner headline="Schedule Your Tree Service Today" />
    </>
  );
}
