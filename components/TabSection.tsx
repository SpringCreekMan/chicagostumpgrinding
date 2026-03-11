'use client';

import { useState } from 'react';

interface TabItem {
  title: string;
  description: string;
}

interface Tab {
  label: string;
  items: TabItem[];
}

interface Props {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  tabs: Tab[];
}

export default function TabSection({ eyebrow, heading, subheading, tabs }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section">
      <div className="container">
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h2 className="section-h2">{heading}</h2>
        {subheading && <p className="section-sub">{subheading}</p>}

        <div style={{ marginTop: 40 }}>
          {/* Tab Nav */}
          <div style={{ display: 'flex', borderBottom: '2px solid var(--line)', gap: 0 }}>
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{
                  padding: '11px 22px',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  color: activeTab === i ? 'var(--green)' : 'var(--text-soft)',
                  cursor: 'pointer',
                  border: 'none',
                  background: 'none',
                  borderBottom: `3px solid ${activeTab === i ? 'var(--green)' : 'transparent'}`,
                  marginBottom: -2,
                  transition: 'color .13s, border-color .13s',
                  letterSpacing: '.01em',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div style={{
            paddingTop: 28,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
          }}>
            {tabs[activeTab].items.map((item, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--line)',
                  borderRadius: 4,
                  padding: '20px 18px',
                  background: 'var(--white)',
                  transition: 'border-color .14s, box-shadow .14s',
                }}
                className="tab-card"
              >
                <h4 style={{ fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 7 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`.tab-card:hover { border-color: var(--green) !important; box-shadow: 0 2px 12px rgba(29,92,46,.08); }`}</style>
    </section>
  );
}
