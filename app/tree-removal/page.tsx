import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { CTABanner, ServiceAreaGrid } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL } from "@/lib/constants";

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

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">When to Remove a Tree</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tree removal is sometimes the only safe option. Our experienced team can assess any tree and give you an honest evaluation — and we&apos;ll always tell you if the tree can be saved with service rather than removed.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: "💀", title: "Dead or Dying Trees", desc: "Dead trees are a serious hazard. Falling limbs or the whole tree can cause significant property damage or injury." },
                    { icon: "🌪️", title: "Storm-Damaged Trees", desc: "Partially uprooted or severely damaged trees often cannot be saved and pose ongoing risk." },
                    { icon: "🏠", title: "Trees Near Structures", desc: "Trees that have grown too close to homes, garages, or utility lines may need removal before they cause damage." },
                    { icon: "🦠", title: "Disease or Pest Infestation", desc: "Some diseases and insects (like the Emerald Ash Borer) can make trees unsalvageable." },
                    { icon: "🏗️", title: "Construction or Renovation", desc: "Site clearing for additions, pools, or landscaping projects may require tree removal." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start bg-brand-light rounded-lg p-4 border border-gray-200">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <h3 className="font-semibold text-navy-900">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Our Tree Removal Process</h2>
                <ol className="space-y-4">
                  {[
                    { n: "1", title: "Free Assessment & Quote", desc: "We evaluate the tree, assess risks and access, and provide a written quote before any work." },
                    { n: "2", title: "Permit Coordination", desc: "If your municipality requires a permit, we can advise and help coordinate the process." },
                    { n: "3", title: "Safe Removal", desc: "Our crew uses proper rigging, sectioning, and safety protocols for every removal — especially near structures." },
                    { n: "4", title: "Cleanup & Hauling", desc: "We chip all branches and haul debris. Wood rounds can be left for firewood on request." },
                    { n: "5", title: "Stump Grinding (Optional)", desc: "Complete the job by grinding the stump — we offer combined pricing when booked together." },
                  ].map((step) => (
                    <li key={step.n} className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-navy-900 text-white font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.n}
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-900">{step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <FAQAccordion items={FAQ_TR} title="Tree Removal FAQs" />
            </div>

            <aside className="space-y-6">
              <div className="bg-navy-900 text-white rounded-xl p-6">
                <h3 className="font-display text-xl font-bold mb-3">Free Tree Removal Quote</h3>
                <p className="text-navy-300 text-sm mb-4">We&apos;ll assess your tree and provide a fair, written estimate at no charge.</p>
                <Link href="/request-quote" className="btn-primary w-full justify-center mb-3 text-sm">
                  Request Free Estimate
                </Link>
                <a href="tel:+13125550188" className="btn-outline-white w-full justify-center text-sm">
                  📞 (312) 555-0188
                </a>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="font-semibold text-red-900 mb-2">🚨 Hazardous Tree?</h3>
                <p className="text-red-800 text-sm mb-3">If a tree is an immediate safety risk, call us now. We can often respond same-day for emergency removals.</p>
                <a href="tel:+13125550188" className="text-red-700 font-bold text-sm underline">(312) 555-0188</a>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-display text-lg font-bold text-navy-900 mb-3">Add Stump Grinding</h3>
                <p className="text-gray-600 text-sm mb-3">Book stump grinding at the same time as your tree removal and save on combined service pricing.</p>
                <Link href="/stump-grinding" className="text-sm text-orange-600 hover:text-orange-700 font-medium">
                  → Learn About Stump Grinding
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4">
          <ServiceAreaGrid areas={REMOVAL_AREAS} title="Tree Removal Service Areas" />
        </div>
      </section>

      <CTABanner headline="Need a Tree Removed? Get a Free Quote Today." />
    </>
  );
}
