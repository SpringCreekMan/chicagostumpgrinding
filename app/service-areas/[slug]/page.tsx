import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, Breadcrumbs } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import QuoteForm from "@/components/QuoteForm";
import { SUBURBS, getSuburbBySlug, getNearbySuburbs } from "@/data/suburbs";
import { SITE_URL, PHONE_HREF, PHONE } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return SUBURBS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const suburb = getSuburbBySlug(params.slug);
  if (!suburb) return {};
  return {
    title: suburb.metaTitle,
    description: suburb.metaDescription,
    alternates: { canonical: `${SITE_URL}/service-areas/${suburb.slug}` },
  };
}

function getSuburbFAQ(city: string, service: string) {
  return [
    {
      q: `How much does ${service.toLowerCase()} cost in ${city}?`,
      a: `Most residential ${service.toLowerCase()} jobs in ${city} cost between $150 and $400. Price depends on stump size, root complexity, and access. We provide free, no-obligation quotes for all ${city} properties.`,
    },
    {
      q: `How quickly can you schedule ${service.toLowerCase()} in ${city}?`,
      a: `We typically offer same-week scheduling for ${city} area customers. Call (312) 555-0188 or request a quote online and we'll confirm availability quickly.`,
    },
    {
      q: `Do you clean up after ${service.toLowerCase()} in ${city}?`,
      a: `Yes — cleanup is always included. We rake and blow the work area clean. Wood chips can be left for mulch or hauled away at your preference.`,
    },
    {
      q: `Are you licensed and insured for work in ${city}, IL?`,
      a: `Yes. Chicago Stump Grinding is fully licensed and insured for residential and commercial work throughout ${city} and all of the surrounding Chicago suburbs.`,
    },
  ];
}

export default function SuburbPage({ params }: Props) {
  const suburb = getSuburbBySlug(params.slug);
  if (!suburb) notFound();

  const nearbyData = getNearbySuburbs(params.slug, suburb.nearbySuburbs);
  const isStumpGrinding = suburb.serviceType === "stump-grinding";
  const servicePageHref = isStumpGrinding ? "/stump-grinding" : "/tree-service";

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${suburb.serviceLabel} in ${suburb.city}, IL`,
    provider: {
      "@type": "LocalBusiness",
      name: "Chicago Stump Grinding",
      url: SITE_URL,
      telephone: "+13125550188",
    },
    areaServed: {
      "@type": "City",
      name: suburb.city,
      containedInPlace: {
        "@type": "State",
        name: "Illinois",
      },
    },
    description: suburb.metaDescription,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero */}
      <Hero
        headline={`${suburb.city} ${suburb.serviceLabel} & ${isStumpGrinding ? "Stump Removal" : "Tree Removal"}`}
        subheadline={suburb.intro}
        variant="suburb"
        badgeText={`Serving ${suburb.city}, ${suburb.state}`}
      />

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumbs
            crumbs={[
              { label: "Home", href: "/" },
              { label: "Service Areas", href: "/service-areas" },
              { label: `${suburb.city} ${suburb.serviceLabel}` },
            ]}
          />
        </div>
      </div>

      {/* Main Content */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                  {suburb.serviceLabel} in {suburb.city}, {suburb.state}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">{suburb.intro}</p>
                <p className="text-gray-700 leading-relaxed">{suburb.bodyParagraph}</p>
              </div>

              {/* Common jobs */}
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Common {suburb.serviceLabel} Jobs in {suburb.city}
                </h2>
                <ul className="space-y-2">
                  {suburb.commonJobs.map((job) => (
                    <li key={job} className="flex items-start gap-3 text-gray-700">
                      <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">→</span>
                      {job}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing */}
              <div className="bg-brand-light rounded-xl p-6 border border-gray-200">
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">
                  {suburb.serviceLabel} Pricing in {suburb.city}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {isStumpGrinding
                    ? `Most residential stump grinding jobs in ${suburb.city} cost between $150 and $400 per stump. Price is based primarily on stump diameter, with adjustments for root complexity and access. Multi-stump discounts are available.`
                    : `Tree service pricing in ${suburb.city} depends on tree size, number of trees, scope of work, and access. Small tree trimming starts around $150–$300; larger trees and full removals are quoted individually.`}
                </p>
                <Link href="/pricing" className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors">
                  View Full Pricing Guide →
                </Link>
              </div>

              {/* Why local matters */}
              <div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                  Why Choose a Local {suburb.serviceLabel} Company in {suburb.city}?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A local company knows {suburb.city}&apos;s neighborhoods, soil conditions, and tree species. We&apos;re not a national franchise that books jobs in bulk and sends whoever&apos;s available — we&apos;re a local team that shows up on time, communicates clearly, and stands behind our work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Free on-site estimates",
                    "Same-week scheduling",
                    "Fully insured crew",
                    "Cleanup always included",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                      <span className="text-green-600 font-bold">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearby areas */}
              {nearbyData.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">
                    Nearby Service Areas
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {nearbyData.map((nearby) => (
                      <Link
                        key={nearby.slug}
                        href={`/service-areas/${nearby.slug}`}
                        className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-navy-400 hover:bg-navy-50 transition-all text-sm font-medium text-navy-800"
                      >
                        <span className="text-orange-500">📍</span>
                        {nearby.city} {nearby.serviceLabel}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-3">
                    <Link href="/service-areas" className="text-sm text-orange-600 font-semibold hover:text-orange-700">
                      View All Service Areas →
                    </Link>
                  </div>
                </div>
              )}

              {/* FAQ */}
              <FAQAccordion
                items={getSuburbFAQ(suburb.city, suburb.serviceLabel)}
                title={`${suburb.serviceLabel} FAQs — ${suburb.city}, IL`}
              />
            </div>

            {/* Sidebar with quote form */}
            <aside className="space-y-6">
              <div className="bg-white rounded-xl border-2 border-navy-900 p-6 shadow-lg sticky top-24">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-1">
                  Free Quote — {suburb.city}
                </h3>
                <p className="text-gray-500 text-sm mb-5">
                  Tell us about your {suburb.serviceLabel.toLowerCase()} needs and we&apos;ll respond fast.
                </p>
                <QuoteForm compact />
              </div>

              <div className="bg-navy-900 text-white rounded-xl p-5">
                <p className="text-navy-300 text-sm mb-2">Prefer to call?</p>
                <a href={PHONE_HREF} className="text-xl font-bold text-white flex items-center gap-2 hover:text-orange-400 transition-colors">
                  📞 {PHONE}
                </a>
                <p className="text-navy-400 text-xs mt-1">Mon–Sat 7am–7pm</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-navy-900 mb-3 text-sm">Also Available in {suburb.city}</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href={servicePageHref} className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">
                      → {suburb.serviceLabel} (overview)
                    </Link>
                  </li>
                  {isStumpGrinding ? (
                    <>
                      <li><Link href="/stump-removal" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">→ Stump Removal</Link></li>
                      <li><Link href="/tree-service" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">→ Tree Service</Link></li>
                      <li><Link href="/tree-removal" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">→ Tree Removal</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link href="/tree-removal" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">→ Tree Removal</Link></li>
                      <li><Link href="/stump-grinding" className="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1">→ Stump Grinding</Link></li>
                    </>
                  )}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Ready for ${suburb.serviceLabel} in ${suburb.city}?`}
        subtext="Get a free quote today. Fast response, fair pricing, clean results."
      />
    </>
  );
}
