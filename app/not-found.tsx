import Link from "next/link";

export default function NotFound() {
  return (
    <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-soft)' }}>
      <div style={{ textAlign: 'center', padding: '0 20px' }}>
        <div style={{ fontSize: 80, marginBottom: 24 }}>🌳</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--green-dark)', marginBottom: 12 }}>404 — Page Not Found</h1>
        <p style={{ fontSize: 17, color: 'var(--text-soft)', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.6 }}>
          We couldn&apos;t find that page. Let&apos;s get you back to the right place.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-solid" style={{ padding: '12px 24px', fontSize: 15 }}>
            Go Home
          </Link>
          <Link href="/request-quote" className="btn btn-outline" style={{ padding: '12px 24px', fontSize: 15 }}>
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
