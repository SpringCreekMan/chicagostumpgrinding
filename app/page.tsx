import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceCard, Testimonials, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import {
  SERVICES,
  WHY_CHOOSE_US,
  PROCESS_STEPS,
  TESTIMONIALS,
  HOME_FAQ,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chicago Stump Grinding | Professional Stump Removal & Tree Service",
  description:
    "Fast, professional stump grinding, stump removal, and tree service across Chicago and suburbs. Serving Naperville, Hinsdale, Wheaton, and more. Free quotes.",
  alternates: { canonical: SITE_URL },
};

const FEATURED_AREAS = [
  { href: "/service-areas/naperville-stump-grinding", label: "Naperville", sub: "Stump Grinding" },
  { href: "/service-areas/hinsdale-stump-grinding", label: "Hinsdale", sub: "Stump Grinding" },
  { href: "/service-areas/wheaton-stump-grinding", label: "Wheaton", sub: "Stump Grinding" },
  { href: "/service-areas/downers-grove-stump-grinding", label: "Downers Grove", sub: "Stump Grinding" },
  { href: "/service-areas/glen-ellyn-stump-grinding", label: "Glen Ellyn", sub: "Stump Grinding" },
  { href: "/service-areas/oak-brook-stump-grinding", label: "Oak Brook", sub: "Stump Grinding" },
  { href: "/service-areas/elmhurst-stump-grinding", label: "Elmhurst", sub: "Stump Grinding" },
  { href: "/service-areas/la-grange-stump-grinding", label: "La Grange", sub: "Stump Grinding" },
  { href: "/service-areas/lemont-stump-grinding", label: "Lemont", sub: "Stump Grinding" },
  { href: "/service-areas/homer-glen-stump-grinding", label: "Homer Glen", sub: "Stump Grinding" },
  { href: "/service-areas/burr-ridge-stump-grinding", label: "Burr Ridge", sub: "Stump Grinding" },
  { href: "/service-areas/darien-stump-grinding", label: "Darien", sub: "Stump Grinding" },
];

// JSON-LD LocalBusiness schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE_NAME,
  description:
    "Professional stump grinding, stump removal, and tree service across Chicago and surrounding suburbs.",
  url: SITE_URL,
  telephone: "+13125550188",
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
      />

      {/* SERVICES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Our Services</h2>
            <p className="section-sub mt-2 max-w-2xl mx-auto">
              From a single stump to complete tree removal — we handle it all with professional equipment and a commitment to clean, careful work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.slug}
                icon={s.icon}
                title={s.title}
                description={s.description}
                href={`/${s.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Chicago Homeowners Choose Us</h2>
            <p className="section-sub mt-2 max-w-2xl mx-auto">
              We&apos;re a local, owner-operated business — not a franchise. That means faster service, better communication, and work you can count on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="flex gap-4 bg-white rounded-xl p-6 border border-gray-200 card-hover">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">How It Works</h2>
            <p className="section-sub mt-2">Simple, straightforward, and stress-free from start to finish.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.step} className="relative">
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-navy-900 text-white rounded-xl flex items-center justify-center font-display text-2xl font-black mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="section-title mb-2">Service Areas</h2>
            <p className="section-sub">
              We serve Chicago and the surrounding suburbs in DuPage, Cook, and Will Counties.
            </p>
          </div>
          <ServiceAreaGrid areas={FEATURED_AREAS} />
          <div className="mt-6 text-center">
            <Link href="/service-areas" className="btn-secondary">
              View All Service Areas
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title">What Our Customers Say</h2>
            <p className="section-sub mt-2">Hundreds of satisfied homeowners across Chicagoland.</p>
          </div>
          <Testimonials testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4">
          <FAQAccordion items={HOME_FAQ} title="Common Questions" />
          <div className="mt-6 text-center">
            <Link href="/faq" className="text-orange-600 font-semibold hover:text-orange-700 transition-colors">
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTABanner
        headline="Get Your Free Stump Grinding Quote Today"
        subtext="No obligation. We respond fast and provide upfront, honest pricing."
      />
    </>
  );
}
