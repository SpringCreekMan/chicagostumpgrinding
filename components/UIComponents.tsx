// CTA Banner
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface CTABannerProps {
  headline?: string;
  subtext?: string;
  variant?: "dark" | "orange";
}

export function CTABanner({
  headline = "Ready for a Stump-Free Yard?",
  subtext = "Get a free, no-obligation estimate. We respond fast — usually within a few hours.",
  variant = "dark",
}: CTABannerProps) {
  const bg = variant === "orange" ? "bg-orange-600" : "bg-navy-900";
  const textColor = "text-white";
  const subColor = variant === "orange" ? "text-orange-100" : "text-navy-300";

  return (
    <section className={`${bg} py-14`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-bold ${textColor} mb-3`}>
          {headline}
        </h2>
        <p className={`${subColor} text-lg mb-8`}>{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/request-quote" className="btn-primary py-3.5 px-8 text-base justify-center">
            Get Free Quote
          </Link>
          <a href={PHONE_HREF} className="btn-outline-white py-3.5 px-8 text-base justify-center">
            📞 Call {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}

// Service Card
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border border-gray-200 p-6 card-hover"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-display text-xl font-bold text-navy-900 mb-2 group-hover:text-orange-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>
      <span className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
        Learn More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

// Testimonials
interface Testimonial {
  name: string;
  city: string;
  stars: number;
  text: string;
}

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 card-hover">
          <div className="flex gap-0.5 mb-3">
            {Array.from({ length: t.stars }).map((_, s) => (
              <span key={s} className="text-yellow-400 text-lg">★</span>
            ))}
          </div>
          <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{t.text}&rdquo;</p>
          <div>
            <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
            <p className="text-gray-500 text-xs">{t.city}, IL</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Service Area Grid
interface AreaLink {
  href: string;
  label: string;
  sub?: string;
}

export function ServiceAreaGrid({ areas, title }: { areas: AreaLink[]; title?: string }) {
  return (
    <div>
      {title && <h2 className="section-title mb-6">{title}</h2>}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {areas.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="flex flex-col bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-navy-400 hover:bg-navy-50 transition-all card-hover group"
          >
            <span className="font-semibold text-navy-900 text-sm group-hover:text-navy-700">{a.label}</span>
            {a.sub && <span className="text-xs text-gray-500 mt-0.5">{a.sub}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}

// Breadcrumbs
interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: c.href ? `https://www.chicagostumpgrinding.com${c.href}` : undefined,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          {crumbs.map((c, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span className="text-gray-400">/</span>}
              {c.href ? (
                <Link href={c.href} className="hover:text-navy-700 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-gray-800 font-medium">{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
