import type { Metadata } from "next";
import Link from "next/link";
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
      <section style={{ position: 'relative', background: 'var(--green-deep)', padding: '64px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 12 }}>
            Request Your Free Quote
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300, maxWidth: 520, margin: '0 auto' }}>
            Fill out the form below and we&apos;ll get back to you with a fair, upfront price — no obligation, no surprises.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 52, alignItems: 'start' }}>
            {/* Form */}
            <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: 32 }}>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 24 }}>Your Project Details</h2>
              <QuoteForm />
            </div>

            {/* Info sidebar */}
            <aside>
              <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 28, border: '1px solid var(--line)', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 18 }}>What Happens Next?</h3>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { n: "1", text: "We receive your request and review the details." },
                    { n: "2", text: "We call or text you back — usually within 2 hours during business hours." },
                    { n: "3", text: "We schedule a free on-site visit at your convenience." },
                    { n: "4", text: "You receive a written, firm quote. No pressure, no obligation." },
                  ].map((step) => (
                    <li key={step.n} style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                      <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--green-dark)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>
                        {step.n}
                      </div>
                      <p style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.5, paddingTop: 4 }}>{step.text}</p>
                    </li>
                  ))}
                </ol>
              </div>

              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '24px 22px', marginBottom: 20 }}>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginBottom: 8 }}>Prefer to call?</p>
                <a href={PHONE_HREF} style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', gap: 8 }}>
                  {PHONE}
                </a>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,.35)', marginTop: 6 }}>Mon–Sat, 7am–7pm</p>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 14 }}>What to include in your request:</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "How many stumps (or trees)",
                    "Approximate size/diameter",
                    "Your city or suburb",
                    "Any access notes (gate width, stairs, etc.)",
                    "Preferred timing",
                  ].map((tip) => (
                    <li key={tip} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'var(--text-mid)', padding: '5px 0' }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
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
