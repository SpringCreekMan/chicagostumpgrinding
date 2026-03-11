import type { Metadata } from "next";
import Link from "next/link";
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
      {/* Page header */}
      <section style={{ position: 'relative', background: 'var(--green-deep)', padding: '64px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 12 }}>
            Contact Us
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,.6)', fontWeight: 300 }}>
            Have a question or ready to book? We&apos;re easy to reach.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 52 }}>
            <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 28, border: '1px solid var(--line)', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📞</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>Call or Text</h3>
              <a href={PHONE_HREF} style={{ color: 'var(--green)', fontWeight: 700, fontSize: 17 }}>
                {PHONE}
              </a>
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8 }}>Mon–Sat, 7am–7pm</p>
            </div>
            <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 28, border: '1px solid var(--line)', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>✉️</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>Email Us</h3>
              <a href={`mailto:${EMAIL}`} style={{ color: 'var(--green)', fontWeight: 600, fontSize: 14, wordBreak: 'break-all' }}>
                {EMAIL}
              </a>
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8 }}>We reply within a few hours</p>
            </div>
            <div style={{ background: 'var(--green-pale)', borderRadius: 4, padding: 28, border: '1px solid var(--line)', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>📍</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>Service Area</h3>
              <p style={{ fontSize: 14, color: 'var(--text-mid)' }}>Chicago &amp; Suburbs</p>
              <p style={{ fontSize: 12, color: 'var(--text-soft)', marginTop: 8 }}>DuPage, Cook &amp; Will Counties</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div className="eyebrow">Get Started</div>
            <h2 className="section-h2" style={{ marginBottom: 10 }}>Need a Quote?</h2>
            <p style={{ fontSize: 15, color: 'var(--text-soft)', marginBottom: 24 }}>The fastest way to get pricing is to request a free estimate.</p>
            <Link href="/request-quote" className="btn btn-solid" style={{ padding: '13px 28px', fontSize: 15 }}>
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
