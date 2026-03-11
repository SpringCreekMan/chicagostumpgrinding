import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tree Removal Chicago | Safe Tree Removal Across Chicago Suburbs",
  description:
    "Professional tree removal in Chicago and suburbs. Dead, damaged, or dangerous trees removed safely. Full cleanup included. Free quotes. Call (312) 555-0188.",
  alternates: { canonical: `${SITE_URL}/tree-removal` },
};

const FAQ_TR = [
  {
    q: "Do I need a permit to remove a tree in Illinois?",
    a: "Permit requirements vary by municipality. Some Chicago suburbs require permits for trees over a certain diameter on private property. We can advise on local requirements when we assess your property.",
  },
  {
    q: "How much does tree removal cost in Chicago?",
    a: "Tree removal ranges from $400 for small trees to $2,000+ for large, complex removals. Factors include tree height, diameter, location, proximity to structures, and access. We provide free written estimates.",
  },
  {
    q: "Is tree removal included with stump grinding?",
    a: "Tree removal and stump grinding are typically quoted separately. We offer package pricing when you book both services together — ask about combined pricing when you request your estimate.",
  },
  {
    q: "What happens to the wood after tree removal?",
    a: "We can chip branches and haul all debris, leave wood rounds for firewood if you'd like, or a combination. Your preference — we discuss it before the job.",
  },
  {
    q: "Can you remove a tree that's very close to my house?",
    a: "Yes — trees near structures require careful, section-by-section dismantling. This is one of our specialties. We use proper rigging techniques to lower sections safely without damage.",
  },
];

const REMOVAL_AREAS = [
  { href: "/service-areas/hinsdale-tree-service", label: "Hinsdale" },
  { href: "/service-areas/oak-brook-tree-service", label: "Oak Brook" },
  { href: "/service-areas/wheaton-tree-service", label: "Wheaton" },
  { href: "/service-areas/glen-ellyn-tree-service", label: "Glen Ellyn" },
  { href: "/service-areas/elmhurst-tree-service", label: "Elmhurst" },
  { href: "/service-areas/burr-ridge-tree-service", label: "Burr Ridge" },
  { href: "/service-areas/lemont-tree-service", label: "Lemont" },
  { href: "/service-areas/homer-glen-tree-service", label: "Homer Glen" },
];

export default function TreeRemovalPage() {
  return (
    <>
      <Hero
        headline="Safe Tree Removal in Chicago & Suburbs"
        subheadline="Dead, damaged, or dangerous trees removed safely and efficiently. Full cleanup included. Stump grinding available as an add-on."
        variant="service"
        badgeText="Dead & Hazard Tree Removal"
      />

      <section className="section">
        <div className="container">
          <div className="page-layout-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 52, alignItems: 'start' }}>
            <div>
              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">When It&apos;s Time</div>
                <h2 className="section-h2">When to Remove a Tree</h2>
                <p style={{ fontSize: '14.5px', color: 'var(--text-soft)', lineHeight: 1.72, fontWeight: 300, marginBottom: 20 }}>
                  Tree removal is sometimes the only safe option. Our experienced team can assess any tree and give you an honest evaluation — and we&apos;ll always tell you if the tree can be saved with service rather than removed.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {[
                    { icon: "💀", title: "Dead or Dying Trees", desc: "Dead trees are a serious hazard. Falling limbs or the whole tree can cause significant property damage or injury." },
                    { icon: "🌪️", title: "Storm-Damaged Trees", desc: "Partially uprooted or severely damaged trees often cannot be saved and pose ongoing risk." },
                    { icon: "🏠", title: "Trees Near Structures", desc: "Trees that have grown too close to homes, garages, or utility lines may need removal before they cause damage." },
                    { icon: "🦠", title: "Disease or Pest Infestation", desc: "Some diseases and insects (like the Emerald Ash Borer) can make trees unsalvageable." },
                    { icon: "🏗️", title: "Construction or Renovation", desc: "Site clearing for additions, pools, or landscaping projects may require tree removal." },
                  ].map((item) => (
                    <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'var(--green-pale)', borderRadius: 4, padding: '16px 20px', border: '1px solid var(--line)' }}>
                      <span style={{ fontSize: 24 }}>{item.icon}</span>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4 }}>{item.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 48 }}>
                <div className="eyebrow">Our Process</div>
                <h2 className="section-h2">Our Tree Removal Process</h2>
                <ol style={{ listStyle: 'none', padding: 0, margin: 0, marginTop: 20 }}>
                  {[
                    { n: "1", title: "Free Assessment & Quote", desc: "We evaluate the tree, assess risks and access, and provide a written quote before any work." },
                    { n: "2", title: "Permit Coordination", desc: "If your municipality requires a permit, we can advise and help coordinate the process." },
                    { n: "3", title: "Safe Removal", desc: "Our crew uses proper rigging, sectioning, and safety protocols for every removal — especially near structures." },
                    { n: "4", title: "Cleanup & Hauling", desc: "We chip all branches and haul debris. Wood rounds can be left for firewood on request." },
                    { n: "5", title: "Stump Grinding (Optional)", desc: "Complete the job by grinding the stump — we offer combined pricing when booked together." },
                  ].map((step) => (
                    <li key={step.n} style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                      <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--green-dark)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
                        {step.n}
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 4 }}>{step.title}</h3>
                        <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55 }}>{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="eyebrow">Common Questions</div>
              <FAQAccordion items={FAQ_TR} title="" />
            </div>

            <aside style={{ position: 'sticky', top: 24 }}>
              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '28px 24px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Free Tree Removal Quote</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 18 }}>We&apos;ll assess your tree and provide a fair, written estimate at no charge.</p>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'var(--green-mid)', borderColor: 'var(--green-mid)' }}>
                  Request Free Estimate
                </Link>
                <a href={PHONE_HREF} className="btn btn-white-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  {PHONE}
                </a>
              </div>

              <div style={{ background: 'var(--green-pale)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px', marginBottom: 20 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 15, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 8 }}>🚨 Hazardous Tree?</h3>
                <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 12 }}>If a tree is an immediate safety risk, call us now. We can often respond same-day for emergency removals.</p>
                <a href={PHONE_HREF} style={{ fontSize: 13, color: 'var(--green)', fontWeight: 700 }}>{PHONE}</a>
              </div>

              <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '24px 22px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 10 }}>Add Stump Grinding</h3>
                <p style={{ fontSize: 13, color: 'var(--text-soft)', lineHeight: 1.55, marginBottom: 12 }}>Book stump grinding at the same time as your tree removal and save on combined service pricing.</p>
                <Link href="/stump-grinding" style={{ fontSize: 13, color: 'var(--green)', fontWeight: 600 }}>&rsaquo; Learn About Stump Grinding</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <ServiceAreaGrid areas={REMOVAL_AREAS} title="Tree Removal Service Areas" />
        </div>
      </section>

      <CTABanner headline="Need a Tree Removed? Get a Free Quote Today." />
    </>
  );
}
