'use client';

import { useState, FormEvent } from 'react';
import { PHONE, PHONE_HREF } from '@/lib/constants';

interface Props {
  suburb?: string;
  county?: string;
}

export default function QuoteFormSidebar({ suburb = 'Chicago Area', county = 'DuPage County' }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: wire to real backend — POST to /api/quote or Formspree
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
    setLoading(false);
  }

  return (
    <aside style={{
      position: 'sticky',
      top: 88,
      background: 'var(--white)',
      border: '1px solid var(--line)',
      borderRadius: 4,
      borderTop: '3px solid var(--green)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ padding: '22px 24px', background: 'var(--green)', color: '#fff' }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, marginBottom: 4 }}>
          Get a Free Estimate
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,.75)', fontWeight: 300 }}>
          {suburb} &amp; {county} · Same-week scheduling
        </p>
      </div>

      <div style={{ padding: 24 }}>
        {submitted ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: 40, marginBottom: 14 }}>✅</div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--green-dark)', marginBottom: 8 }}>
              Request Received!
            </h4>
            <p style={{ fontSize: 14, color: 'var(--text-soft)', lineHeight: 1.65 }}>
              We&apos;ll be in touch shortly — usually same day. Or call us now:
            </p>
            <a href={PHONE_HREF} style={{ display: 'block', marginTop: 14, fontWeight: 700, color: 'var(--green)', fontSize: 16 }}>
              {PHONE}
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <FormGroup label="Your Name">
              <input className="form-input" type="text" placeholder="First & Last Name" required />
            </FormGroup>
            <FormGroup label="Phone Number">
              <input className="form-input" type="tel" placeholder="(630) 555-0000" required />
            </FormGroup>
            <FormGroup label="Email Address">
              <input className="form-input" type="email" placeholder="you@example.com" />
            </FormGroup>
            <FormGroup label="Property Address">
              <input className="form-input" type="text" placeholder={`Street address in ${suburb}`} required />
            </FormGroup>
            <FormGroup label="Service Needed">
              <select className="form-input">
                <option>Stump Grinding</option>
                <option>Stump Removal</option>
                <option>Tree Trimming</option>
                <option>Tree Removal</option>
                <option>Not Sure</option>
              </select>
            </FormGroup>
            <FormGroup label="Approx. Stump Size">
              <select className="form-input">
                <option>Small (under 12&quot;)</option>
                <option>Medium (12–24&quot;)</option>
                <option>Large (24–36&quot;)</option>
                <option>Extra Large (36&quot;+)</option>
                <option>Multiple stumps</option>
              </select>
            </FormGroup>
            <FormGroup label="Message (optional)">
              <textarea className="form-input" placeholder="Any details about your job..." />
            </FormGroup>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-solid"
              style={{ width: '100%', justifyContent: 'center', padding: 13, fontSize: '14.5px', borderRadius: 3, opacity: loading ? 0.7 : 1 }}
            >
              {loading ? 'Sending…' : 'Submit Request'}
            </button>

            <p style={{ fontSize: '11.5px', color: 'var(--text-soft)', marginTop: 10, textAlign: 'center', fontStyle: 'italic' }}>
              Or call us directly:{' '}
              <a href={PHONE_HREF} style={{ color: 'var(--green)', fontWeight: 700 }}>{PHONE}</a>
            </p>
          </form>
        )}
      </div>
    </aside>
  );
}

function FormGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label className="form-label">{label}</label>
      {children}
    </div>
  );
}
