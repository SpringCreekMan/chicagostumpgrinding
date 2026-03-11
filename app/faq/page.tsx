import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/UIComponents";
import FAQAccordion from "@/components/FAQAccordion";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Stump Grinding FAQ | Common Questions Answered",
  description:
    "Answers to frequently asked questions about stump grinding, stump removal, and tree service in Chicago and suburbs. Cost, process, timing, and more.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

const FAQS_GRINDING = [
  {
    q: "How much does stump grinding cost in Chicago?",
    a: "Most residential stump grinding jobs in the Chicago area cost between $150 and $400, depending on stump diameter, wood species, and accessibility. We provide free on-site estimates so you know the exact price before we start.",
  },
  {
    q: "What is the difference between stump grinding and stump removal?",
    a: "Stump grinding uses a machine to chip the stump down below grade, leaving roots in the ground to decompose. Stump removal extracts the entire stump and root system. Grinding is faster, less expensive, and right for most homeowners. Removal is recommended for replanting or construction.",
  },
  {
    q: "How deep do you grind the stump?",
    a: "We grind 8–12 inches below grade by default — deep enough for grass seeding and most landscaping. Deeper grinding (12–18+ inches) is available for projects requiring hardscaping, concrete, or replanting.",
  },
  {
    q: "How long does stump grinding take?",
    a: "Most single stumps are completed in 30–90 minutes. Small stumps may take 15–30 minutes; large hardwood stumps can take up to 2 hours. Multiple stumps add roughly 20–45 minutes each.",
  },
  {
    q: "Do you clean up the wood chips after grinding?",
    a: "Yes — cleanup is always included. We rake and blow the work area clean. You can keep the chips for garden mulch or we can haul them away.",
  },
  {
    q: "Can you grind stumps in tight or hard-to-reach spaces?",
    a: "Yes. We have compact stump grinders that fit through standard 36-inch gates. We assess access when we visit to quote and bring the right equipment for your situation.",
  },
  {
    q: "Will stump grinding damage my lawn or landscaping?",
    a: "We take precautions to protect surrounding turf and plantings. Some minor disturbance near the stump is unavoidable, but we aim to minimize it. We'll walk the area with you after the job.",
  },
  {
    q: "Do I need to call JULIE (Illinois 811) before stump grinding?",
    a: "We handle that. For any job where grinding depth or root reach could contact underground utilities, we call JULIE to have lines marked before we start.",
  },
  {
    q: "Can I plant grass over a ground stump area?",
    a: "Yes. Remove the wood chips, fill with topsoil, level, and seed. New grass typically establishes in 3–6 weeks. See our blog post on planting grass after stump grinding for step-by-step guidance.",
  },
  {
    q: "Do you do commercial stump grinding?",
    a: "Yes. We serve commercial properties, HOAs, municipalities, and property management companies. Contact us for commercial project pricing.",
  },
];

const FAQS_TREE = [
  {
    q: "When is the best time to trim trees in Illinois?",
    a: "Late winter (February–March) is ideal for most species — before spring growth begins. Light maintenance pruning can be done any time. Avoid heavy pruning in fall, which can encourage growth before frost.",
  },
  {
    q: "How do I know if a tree is dangerous?",
    a: "Signs of a hazardous tree include large dead branches, deep cracks in the trunk, leaning suddenly, fungal growth at the base, or exposed roots. When in doubt, have a professional assess it.",
  },
  {
    q: "Do you offer emergency tree service?",
    a: "Yes. Storm damage and hazardous tree situations are handled with priority. Call us directly at (312) 555-0188 for emergency response.",
  },
  {
    q: "Is tree removal covered by homeowner's insurance?",
    a: "Tree removal may be covered if the tree fell due to a covered event (storm, lightning) and damaged a structure. Elective removal is typically not covered. We can provide documentation for insurance claims.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-navy-300 text-lg">
            Everything you want to know about stump grinding, stump removal, and tree service in Chicago and suburbs.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 space-y-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Stump Grinding & Removal</h2>
            <FAQAccordion items={FAQS_GRINDING} title="" showSchema />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-6">Tree Service & Removal</h2>
            <FAQAccordion items={FAQS_TREE} title="" showSchema={false} />
          </div>

          <div className="bg-brand-light rounded-xl p-6 border border-gray-200 text-center">
            <p className="text-gray-700 mb-4">Still have questions? We&apos;re happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary justify-center">
                Contact Us
              </Link>
              <a href="tel:+13125550188" className="btn-secondary justify-center">
                📞 (312) 555-0188
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
