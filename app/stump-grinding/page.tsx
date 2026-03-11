import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL } from "@/lib/constants";

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
    telephone: "+13125550188",
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
      />

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">What Is Stump Grinding?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Stump grinding is the process of using a powerful rotating cutting wheel to chip a tree stump down below ground level. Unlike stump removal — which excavates the entire root system — stump grinding leaves the roots in place to decompose naturally underground while eliminating the visible stump and preparing the surface for grass, landscaping, or hardscaping.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  It&apos;s the most cost-effective and efficient way to eliminate a stump, and it&apos;s the method chosen by the vast majority of homeowners in the Chicago area.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">What&apos;s Included in Our Stump Grinding Service</h2>
                <ul className="space-y-3">
                  {[
                    "Free on-site assessment and written quote",
                    "Grinding to 8–12 inches below grade (deeper available)",
                    "Surface root grinding around the stump base",
                    "Complete cleanup of wood chips and debris",
                    "Optional chip hauling or leave-in-place for mulch",
                    "Protection of surrounding lawn and landscaping",
                    "Before-and-after confirmation with you",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">When Do You Need Stump Grinding?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "After Tree Removal", desc: "A tree was taken down and the stump needs to go." },
                    { title: "Safety Hazard", desc: "The stump is a tripping risk for family or guests." },
                    { title: "Lawn Mowing", desc: "You're tired of working around it every time you mow." },
                    { title: "Pest Control", desc: "Decaying stumps attract wood-boring insects and fungi." },
                    { title: "New Landscaping", desc: "You want to plant, pave, or redesign that area." },
                    { title: "Curb Appeal", desc: "An old stump is bringing down your property's look." },
                  ].map((c) => (
                    <div key={c.title} className="bg-brand-light rounded-lg p-4 border border-gray-200">
                      <h3 className="font-semibold text-navy-900 mb-1">{c.title}</h3>
                      <p className="text-gray-600 text-sm">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Stump Grinding Pricing</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most residential stump grinding jobs in the Chicago area cost <strong>$150–$400 per stump</strong>. Price is primarily based on stump diameter, with adjustments for root complexity, access, and wood species.
                </p>
                <div className="bg-navy-50 border border-navy-200 rounded-lg p-5 mb-4">
                  <h3 className="font-semibold text-navy-900 mb-3">Typical Price Ranges</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between border-b border-navy-100 pb-2">
                      <span>Small stump (under 12&quot;)</span>
                      <span className="font-semibold">$150 – $200</span>
                    </div>
                    <div className="flex justify-between border-b border-navy-100 pb-2">
                      <span>Medium stump (12–24&quot;)</span>
                      <span className="font-semibold">$200 – $300</span>
                    </div>
                    <div className="flex justify-between border-b border-navy-100 pb-2">
                      <span>Large stump (24&quot;+)</span>
                      <span className="font-semibold">$300 – $450</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Multiple stumps (per additional)</span>
                      <span className="font-semibold">$75 – $150 each</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  All prices include cleanup. View our full <Link href="/pricing" className="text-orange-600 underline">pricing page</Link> or{" "}
                  <Link href="/request-quote" className="text-orange-600 underline">request a free quote</Link>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">Frequently Asked Questions</h2>
                <FAQAccordion items={FAQ} title="" showSchema />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-3">Get Your Free Quote</h3>
                <p className="text-navy-300 text-sm mb-4">Tell us about your stump and we&apos;ll get back to you with fast, fair pricing.</p>
                <Link href="/request-quote" className="btn-primary w-full justify-center mb-3 text-sm">
                  Request Free Estimate
                </Link>
                <a href="tel:+13125550188" className="btn-outline-white w-full justify-center text-sm">
                  📞 (312) 555-0188
                </a>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Quick Facts</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {[
                    "Most jobs: 30–90 minutes",
                    "Cleanup always included",
                    "Same-week scheduling available",
                    "All stump sizes welcome",
                    "All tree species handled",
                    "Tight-access equipment available",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-orange-500">●</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Related Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: "/stump-removal", label: "Stump Removal" },
                    { href: "/tree-service", label: "Tree Service" },
                    { href: "/tree-removal", label: "Tree Removal" },
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

      {/* Service Areas */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <ServiceAreaGrid areas={AREAS} title="Stump Grinding Service Areas" />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
