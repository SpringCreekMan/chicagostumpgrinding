import type { Metadata } from "next";
import { PHONE, PHONE_HREF, EMAIL, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us | Chicago Stump Grinding",
  description:
    "Contact Chicago Stump Grinding for stump grinding, stump removal, and tree service. Call (312) 555-0188 or send us a message for a free estimate.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Contact Us
          </h1>
          <p className="text-navy-300 text-lg">
            Have a question or ready to book? We&apos;re easy to reach.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-brand-light rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">📞</div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Call or Text</h3>
              <a href={PHONE_HREF} className="text-orange-600 font-bold text-lg hover:text-orange-700 transition-colors">
                {PHONE}
              </a>
              <p className="text-gray-500 text-xs mt-2">Mon–Sat, 7am–7pm</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">✉️</div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Email Us</h3>
              <a href={`mailto:${EMAIL}`} className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors break-all">
                {EMAIL}
              </a>
              <p className="text-gray-500 text-xs mt-2">We reply within a few hours</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-4xl mb-3">📍</div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Service Area</h3>
              <p className="text-gray-700 text-sm">Chicago &amp; Suburbs</p>
              <p className="text-gray-500 text-xs mt-2">DuPage, Cook &amp; Will Counties</p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-3">Need a Quote?</h2>
            <p className="text-gray-600 mb-5">The fastest way to get pricing is to request a free estimate.</p>
            <a href="/request-quote" className="btn-primary text-base">
              Request Free Quote →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
