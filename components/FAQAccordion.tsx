"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  title?: string;
  showSchema?: boolean;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions", showSchema = true }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div>
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}

      {title && (
        <h2 className="section-title mb-2">{title}</h2>
      )}

      <div className="mt-6 space-y-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
              aria-expanded={openIdx === idx}
            >
              <span className="font-semibold text-gray-900 pr-4 text-sm md:text-base">{item.q}</span>
              <svg
                className={`w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-200 ${
                  openIdx === idx ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIdx === idx && (
              <div className="px-5 pb-4 text-gray-600 text-sm md:text-base leading-relaxed border-t border-gray-100">
                <div className="pt-3">{item.a}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
