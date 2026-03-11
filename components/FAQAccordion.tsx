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
        <h2 className="section-h2">{title}</h2>
      )}

      <div style={{ marginTop: 24 }}>
        {items.map((item, idx) => (
          <details key={idx} style={{ borderBottom: '1px solid var(--line)' }} className="faq-item">
            <summary style={{ padding: '18px 0', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              {item.q}
              <span style={{ fontSize: 20, color: 'var(--green)', flexShrink: 0, marginLeft: 16 }}>+</span>
            </summary>
            <div style={{ paddingBottom: 18, fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300 }}>
              {item.a}
            </div>
          </details>
        ))}
      </div>
      <style>{`details[open] summary span { transform: rotate(45deg); display: inline-block; } details summary::-webkit-details-marker { display: none; }`}</style>
    </div>
  );
}
