"use client";
import { useState, FormEvent } from "react";
import { PHONE, PHONE_HREF } from "@/lib/constants";

const SERVICES_LIST = [
  "Stump Grinding",
  "Stump Removal",
  "Tree Service / Trimming",
  "Tree Removal",
  "Not Sure — Need Assessment",
];

const STUMP_SIZES = [
  "Small (under 12 inches)",
  "Medium (12–24 inches)",
  "Large (over 24 inches)",
  "Multiple Stumps",
  "Not Applicable / Tree Service",
];

interface QuoteFormProps {
  compact?: boolean;
}

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    service: "",
    stumpSize: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: 'var(--green-pale)', border: '1px solid var(--green-light)', borderRadius: 4, padding: 32, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>Quote Request Received!</h3>
        <p style={{ fontSize: 15, color: 'var(--text-mid)', marginBottom: 16, lineHeight: 1.6 }}>
          Thank you, {form.name}. We&apos;ll review your request and get back to you within a few hours — usually much sooner.
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-soft)' }}>
          Need faster service? Call us directly at{" "}
          <a href={PHONE_HREF} style={{ fontWeight: 700, color: 'var(--green)' }}>{PHONE}</a>
        </p>
      </div>
    );
  }

  const gridClass = compact ? '' : 'grid-2col';
  const gridStyle = compact
    ? { display: 'grid', gridTemplateColumns: '1fr', gap: 16 }
    : { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 };

  return (
    <form onSubmit={handleSubmit}>
      <div className={gridClass} style={gridStyle}>
        <div>
          <label htmlFor="name" className="form-label">Your Name <span style={{ color: '#c53030' }}>*</span></label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" className="form-input" />
        </div>
        <div>
          <label htmlFor="phone" className="form-label">Phone Number <span style={{ color: '#c53030' }}>*</span></label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(312) 555-0100" className="form-input" />
        </div>
        <div>
          <label htmlFor="email" className="form-label">Email Address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className="form-input" />
        </div>
        <div>
          <label htmlFor="city" className="form-label">City / Suburb <span style={{ color: '#c53030' }}>*</span></label>
          <input id="city" name="city" type="text" required value={form.city} onChange={handleChange} placeholder="Naperville, Hinsdale, etc." className="form-input" />
        </div>
      </div>

      <div style={{ marginTop: 16 }}>
        <label htmlFor="address" className="form-label">Property Address</label>
        <input id="address" name="address" type="text" value={form.address} onChange={handleChange} placeholder="123 Oak St, Chicago, IL 60601" className="form-input" />
      </div>

      <div className={gridClass} style={{ ...gridStyle, marginTop: 16 }}>
        <div>
          <label htmlFor="service" className="form-label">Service Needed <span style={{ color: '#c53030' }}>*</span></label>
          <select id="service" name="service" required value={form.service} onChange={handleChange} className="form-input">
            <option value="">Select a service...</option>
            {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="stumpSize" className="form-label">Approximate Stump Size</label>
          <select id="stumpSize" name="stumpSize" value={form.stumpSize} onChange={handleChange} className="form-input">
            <option value="">Select size...</option>
            {STUMP_SIZES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {!compact && (
        <div style={{ marginTop: 16 }}>
          <label htmlFor="message" className="form-label">Additional Details</label>
          <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Number of stumps, access notes, anything else we should know..." className="form-input" />
        </div>
      )}

      {!compact && (
        <div style={{ border: '2px dashed var(--line)', borderRadius: 4, padding: 16, textAlign: 'center', marginTop: 16 }}>
          <div style={{ fontSize: 24, marginBottom: 4 }}>📷</div>
          <p style={{ fontSize: 13, color: 'var(--text-soft)' }}>
            <span style={{ fontWeight: 700, color: 'var(--text-mid)' }}>Attach a photo</span> (optional) — helps us give a more accurate quote
          </p>
          <p style={{ fontSize: 11, color: 'var(--text-soft)', marginTop: 4 }}>
            Photo upload coming soon — or text a photo to{" "}
            <a href={PHONE_HREF} style={{ textDecoration: 'underline' }}>{PHONE}</a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn btn-solid"
        style={{ width: '100%', justifyContent: 'center', padding: '14px 24px', fontSize: 15, marginTop: 20, opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}
      >
        {loading ? "Submitting..." : "Request Free Quote"}
      </button>

      <p style={{ fontSize: 12, color: 'var(--text-soft)', textAlign: 'center', marginTop: 12 }}>
        We typically respond within 2 hours during business hours. No spam, ever.
      </p>
    </form>
  );
}
