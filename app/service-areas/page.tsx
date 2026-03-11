import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner } from "@/components/UIComponents";
import { SUBURBS } from "@/data/suburbs";
import { SITE_URL } from "@/lib/constants";

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
      />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-12">
          {/* Stump Grinding Areas */}
          <div>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">Stump Grinding Service Areas</h2>
            <p className="text-gray-600 mb-6">Professional stump grinding and stump removal across Chicago&apos;s suburbs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {stumpGrindingAreas.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/service-areas/${suburb.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-navy-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-navy-900 group-hover:text-orange-600 transition-colors">
                      {suburb.city}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {suburb.county} Co.
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{suburb.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-orange-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Page →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Tree Service Areas */}
          <div>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-2">Tree Service Areas</h2>
            <p className="text-gray-600 mb-6">Expert tree trimming, pruning, and removal across Chicago&apos;s suburbs.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {treeServiceAreas.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/service-areas/${suburb.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-navy-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-navy-900 group-hover:text-orange-600 transition-colors">
                      {suburb.city}
                    </h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {suburb.county} Co.
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{suburb.intro}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-orange-600 text-sm font-semibold group-hover:gap-2 transition-all">
                    View Page →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Coverage note */}
          <div className="bg-brand-light rounded-xl p-8 border border-gray-200 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">Don&apos;t See Your City?</h2>
            <p className="text-gray-700 leading-relaxed mb-5 max-w-2xl mx-auto">
              We serve the entire Chicago metro area and surrounding suburbs in DuPage, Cook, and Will Counties. Even if your city isn&apos;t listed, give us a call — chances are we cover your area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote" className="btn-primary justify-center">
                Request a Quote
              </Link>
              <a href="tel:+13125550188" className="btn-secondary justify-center">
                📞 (312) 555-0188
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
