import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/UIComponents";
import { SITE_NAME, SITE_TAGLINE, SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us | Chicago Stump Grinding & Tree Service",
  description:
    "Learn about Chicago Stump Grinding — a locally owned stump grinding and tree service company serving the Chicago metro area. Fully insured, locally trusted.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-navy-300 text-lg">{SITE_TAGLINE}</p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chicago Stump Grinding is a locally owned and operated stump grinding and tree service company serving the Chicago metropolitan area and surrounding suburbs. We specialize in stump grinding, stump removal, tree trimming, and tree removal for homeowners throughout DuPage, Cook, and Will Counties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We&apos;re not a franchise. We&apos;re a local team that knows Chicagoland&apos;s neighborhoods, tree species, soil conditions, and what homeowners in this area actually need. That means faster responses, clearer communication, and results you can count on.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Our Commitment</h2>
                <ul className="space-y-3">
                  {[
                    { icon: "💲", title: "Honest Pricing", desc: "We quote before we work. No surprises, no upsells, no pressure." },
                    { icon: "🛡️", title: "Fully Insured", desc: "We carry full liability and workers' comp insurance on every job." },
                    { icon: "⚡", title: "Fast & Reliable", desc: "We show up on time and get the job done right, every time." },
                    { icon: "🌱", title: "Yard-First Approach", desc: "We protect your lawn, landscaping, and property during every project." },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <span className="font-semibold text-navy-900">{item.title}: </span>
                        <span className="text-gray-700 text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-brand-light rounded-xl p-8 border border-gray-200">
                <h3 className="font-display text-2xl font-bold text-navy-900 mb-5">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { n: "500+", label: "Stumps Removed" },
                    { n: "5★", label: "Google Rating" },
                    { n: "25+", label: "Suburbs Served" },
                    { n: "100%", label: "Satisfaction Goal" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="font-display text-4xl font-black text-navy-900 mb-1">{stat.n}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-3">Get In Touch</h3>
                <p className="text-navy-300 text-sm mb-4">We&apos;re happy to answer questions, give advice, or schedule a free estimate.</p>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-bold mb-2">
                  📞 {PHONE}
                </a>
                <Link href="/request-quote" className="btn-primary w-full justify-center text-sm mt-3">
                  Request Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
