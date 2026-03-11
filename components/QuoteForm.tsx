"use client";
import { useState, FormEvent } from "react";

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
    // Simulate API call — replace with real backend integration
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
    // TODO: POST form data to /api/quote or third-party form handler
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-display text-2xl font-bold text-green-800 mb-2">Quote Request Received!</h3>
        <p className="text-green-700 mb-4">
          Thank you, {form.name}. We&apos;ll review your request and get back to you within a few hours — usually
          much sooner.
        </p>
        <p className="text-sm text-green-600">
          Need faster service? Call us directly at{" "}
          <a href="tel:+13125550188" className="font-semibold underline">
            (312) 555-0188
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(312) 555-0100"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="john@email.com"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
          />
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
            City / Suburb <span className="text-red-500">*</span>
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={form.city}
            onChange={handleChange}
            placeholder="Naperville, Hinsdale, etc."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
          />
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
          Property Address
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handleChange}
          placeholder="123 Oak St, Chicago, IL 60601"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent"
        />
      </div>

      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {/* Service */}
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">
            Service Needed <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent bg-white"
          >
            <option value="">Select a service...</option>
            {SERVICES_LIST.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Stump size */}
        <div>
          <label htmlFor="stumpSize" className="block text-sm font-semibold text-gray-700 mb-1">
            Approximate Stump Size
          </label>
          <select
            id="stumpSize"
            name="stumpSize"
            value={form.stumpSize}
            onChange={handleChange}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent bg-white"
          >
            <option value="">Select size...</option>
            {STUMP_SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      {!compact && (
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Number of stumps, access notes, anything else we should know..."
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy-600 focus:border-transparent resize-none"
          />
        </div>
      )}

      {/* Photo upload placeholder */}
      {!compact && (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <div className="text-2xl mb-1">📷</div>
          <p className="text-sm text-gray-500">
            <span className="font-semibold text-navy-700">Attach a photo</span> (optional) — helps us give a more accurate quote
          </p>
          <p className="text-xs text-gray-400 mt-1">Photo upload coming soon — or text a photo to {" "}
            <a href="tel:+13125550188" className="underline">(312) 555-0188</a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center py-3.5 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </span>
        ) : (
          "Request Free Quote"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We typically respond within 2 hours during business hours. No spam, ever.
      </p>
    </form>
  );
}
