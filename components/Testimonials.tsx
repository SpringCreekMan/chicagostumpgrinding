interface Testimonial {
  text: string;
  name: string;
  location: string;
  initials: string;
}

interface Props {
  suburb?: string;
  testimonials: Testimonial[];
}

export default function Testimonials({ suburb = 'Chicagoland', testimonials }: Props) {
  return (
    <section style={{ background: 'var(--green-dark)', padding: '72px 0' }}>
      <div className="container">
        <div style={{ color: '#7ecf8e', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, marginBottom: 10 }}>
          Reviews
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.2vw, 36px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', lineHeight: 1.22, marginBottom: 8 }}>
          What {suburb} Homeowners Say
        </h2>
        <p style={{ fontSize: '15.5px', color: 'rgba(255,255,255,.55)', lineHeight: 1.72, fontWeight: 300, maxWidth: 560, marginBottom: 44 }}>
          Trusted by hundreds of homeowners across DuPage, Cook, and Will Counties.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255,255,255,.055)',
                border: '1px solid rgba(255,255,255,.1)',
                borderRadius: 4,
                padding: '28px 26px',
              }}
            >
              <div style={{ color: '#f0b429', letterSpacing: 2, marginBottom: 15, fontSize: 14 }}>
                ★★★★★
              </div>
              <p style={{
                fontSize: '14.5px',
                color: 'rgba(255,255,255,.78)',
                lineHeight: 1.75,
                fontStyle: 'italic',
                fontWeight: 300,
                marginBottom: 22,
                fontFamily: 'var(--font-serif)',
              }}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,.08)' }}>
                <div style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, color: 'rgba(255,255,255,.7)', fontSize: 14, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'rgba(255,255,255,.9)', fontSize: '13.5px' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#7ecf8e' }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testi-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
