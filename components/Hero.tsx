import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface HeroProps {
  headline: string;
  subheadline: string;
  badgeText?: string;
  showTrustBadges?: boolean;
  variant?: "home" | "service" | "suburb";
  backgroundImage?: string;
}

export default function Hero({
  headline,
  subheadline,
  badgeText,
  showTrustBadges = true,
  variant = "home",
  backgroundImage,
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section style={{ position: 'relative', minHeight: isHome ? 520 : 340, display: 'flex', alignItems: 'stretch', background: 'var(--green-deep)', overflow: 'hidden' }}>
      {/* Background layers */}
      {backgroundImage ? (
        <>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,26,13,.92) 0%, rgba(7,26,13,.75) 42%, rgba(7,26,13,.35) 100%)' }} />
        </>
      ) : (
        <>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />

          {/* Tree silhouette SVG layer */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 520' preserveAspectRatio='xMidYMax slice'%3E%3Cellipse cx='900' cy='260' rx='120' ry='160' fill='%230f3318' opacity='.7'/%3E%3Cellipse cx='1050' cy='240' rx='100' ry='180' fill='%230d2c14' opacity='.8'/%3E%3Cellipse cx='780' cy='280' rx='90' ry='130' fill='%23102e1a' opacity='.6'/%3E%3Cellipse cx='950' cy='290' rx='140' ry='200' fill='%231a4a28' opacity='.85'/%3E%3Cellipse cx='1100' cy='270' rx='110' ry='220' fill='%23143820' opacity='.9'/%3E%3Cellipse cx='820' cy='310' rx='100' ry='160' fill='%231d5030' opacity='.75'/%3E%3Cellipse cx='1000' cy='360' rx='180' ry='260' fill='%23214a2c' opacity='.95'/%3E%3Cellipse cx='1150' cy='340' rx='150' ry='280' fill='%231a3d22' opacity='.95'/%3E%3Crect x='990' y='400' width='20' height='120' fill='%230d1f12' rx='3'/%3E%3Crect x='1140' y='420' width='18' height='100' fill='%230d1f12' rx='3'/%3E%3Crect x='810' y='390' width='14' height='130' fill='%230d1f12' rx='3'/%3E%3C/svg%3E")`,
            backgroundSize: 'cover', backgroundPosition: 'bottom right', pointerEvents: 'none',
          }} />

          {/* Sunlight shaft */}
          <div style={{
            position: 'absolute', top: -60, left: '38%', width: 340, height: '120%',
            background: 'linear-gradient(170deg, rgba(255,220,100,.04) 0%, rgba(255,220,100,.0) 100%)',
            transform: 'rotate(-8deg)', pointerEvents: 'none',
          }} />

          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(7,26,13,.88) 0%, rgba(7,26,13,.70) 42%, rgba(7,26,13,.15) 100%)' }} />
        </>
      )}

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%', display: 'flex', alignItems: 'center', paddingTop: isHome ? 64 : 48, paddingBottom: isHome ? 64 : 48 }}>
        <div style={{ maxWidth: isHome ? 640 : 700 }}>
          {badgeText && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.15)', borderRadius: 2, padding: '5px 13px', fontSize: 12, fontWeight: 700, color: '#7ecf8e', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 22 }}>
              {badgeText}
            </div>
          )}

          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: isHome ? 'clamp(30px, 4.5vw, 52px)' : 'clamp(26px, 3.5vw, 42px)', fontWeight: 700, color: '#fff', lineHeight: 1.18, letterSpacing: '-.02em', marginBottom: 20 }}>
            {headline}
          </h1>

          <p style={{ fontSize: '16.5px', color: 'rgba(255,255,255,.72)', lineHeight: 1.72, fontWeight: 300, marginBottom: 34, maxWidth: 520 }}>
            {subheadline}
          </p>

          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: showTrustBadges ? 44 : 0 }}>
            <Link href="/request-quote" style={{ background: 'var(--green-mid)', color: '#fff', padding: '13px 26px', borderRadius: 3, fontSize: '14.5px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'background .15s', border: '2px solid var(--green-mid)' }}>
              Get Free Quote <ArrowIcon />
            </Link>
            <a href={PHONE_HREF} style={{ color: 'rgba(255,255,255,.85)', background: 'transparent', border: '2px solid rgba(255,255,255,.3)', padding: '11px 24px', borderRadius: 3, fontSize: '14.5px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <PhoneIcon /> Call {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          {showTrustBadges && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 22px', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,.1)' }}>
              {['Free On-Site Estimates', 'Same-Week Availability', 'Fully Insured', 'Cleanup Included'].map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'rgba(255,255,255,.55)', fontWeight: 500 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#5dc97a', flexShrink: 0 }} />
                  {s}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 4.18 2 2 0 015.09 2h3a2 2 0 012 1.72c.128.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L9.17 9.91a16 16 0 006.92 6.92l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  );
}
