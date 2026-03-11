import type { Metadata } from "next";
import QuoteForm from "@/components/QuoteForm";
import { PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request a Free Quote | Chicago Stump Grinding",
  description:
    "Request a free stump grinding or tree service estimate in Chicago and suburbs. We respond fast — usually within a few hours during business hours.",
  alternates: { canonical: `${SITE_URL}/request-quote` },
};

export default function RequestQuotePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Request Your Free Quote
          </h1>
          <p className="text-navy-300 text-lg max-w-xl mx-auto">
            Fill out the form below and we&apos;ll get back to you with a fair, upfront price — no obligation, no surprises.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Your Project Details</h2>
              <QuoteForm />
            </div>

            {/* Info sidebar */}
            <aside className="lg:col-span-2 space-y-6">
              <div className="bg-brand-light rounded-xl p-6 border border-gray-200">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    { n: "1", text: "We receive your request and review the details." },
                    { n: "2", text: "We call or text you back — usually within 2 hours during business hours." },
                    { n: "3", text: "We schedule a free on-site visit at your convenience." },
                    { n: "4", text: "You receive a written, firm quote. No pressure, no obligation." },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-navy-900 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                        {step.n}
                      </div>
                      <p className="text-gray-700 text-sm pt-0.5">{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-navy-900 text-white rounded-xl p-6">
                <p className="text-navy-300 text-sm mb-2">Prefer to call?</p>
                <a href={PHONE_HREF} className="text-2xl font-bold flex items-center gap-2 hover:text-orange-400 transition-colors">
                  📞 {PHONE}
                </a>
                <p className="text-navy-400 text-xs mt-1">Mon–Sat, 7am–7pm</p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <h3 className="font-semibold text-navy-900 mb-3">What to include in your request:</h3>
                <ul className="space-y-1.5 text-sm text-gray-700">
                  {[
                    "How many stumps (or trees)",
                    "Approximate size/diameter",
                    "Your city or suburb",
                    "Any access notes (gate width, stairs, etc.)",
                    "Preferred timing",
                  ].map((tip) => (
                    <li key={tip} className="flex items-center gap-2">
                      <span className="text-orange-500 text-xs">●</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
