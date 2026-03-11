import Link from "next/link";
import { PHONE, PHONE_HREF, EMAIL, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

const FOOTER_SERVICES = [
  { href: "/stump-grinding", label: "Stump Grinding" },
  { href: "/stump-removal", label: "Stump Removal" },
  { href: "/tree-service", label: "Tree Service" },
  { href: "/tree-removal", label: "Tree Removal" },
];

const FOOTER_SUBURBS_SG = [
  { href: "/service-areas/naperville-stump-grinding", label: "Naperville" },
  { href: "/service-areas/hinsdale-stump-grinding", label: "Hinsdale" },
  { href: "/service-areas/wheaton-stump-grinding", label: "Wheaton" },
  { href: "/service-areas/downers-grove-stump-grinding", label: "Downers Grove" },
  { href: "/service-areas/glen-ellyn-stump-grinding", label: "Glen Ellyn" },
  { href: "/service-areas/oak-brook-stump-grinding", label: "Oak Brook" },
  { href: "/service-areas/elmhurst-stump-grinding", label: "Elmhurst" },
  { href: "/service-areas/la-grange-stump-grinding", label: "La Grange" },
  { href: "/service-areas/lemont-stump-grinding", label: "Lemont" },
  { href: "/service-areas/homer-glen-stump-grinding", label: "Homer Glen" },
];

const FOOTER_COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/request-quote", label: "Request Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-xl font-black">
                🌳
              </div>
              <div>
                <div className="font-display text-xl font-bold text-white tracking-wide">
                  CHICAGO <span className="text-orange-400">STUMP</span>
                </div>
                <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-none">
                  Grinding & Tree Specialists
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              {SITE_TAGLINE}. Serving Chicago and suburbs with professional stump grinding, stump removal, and tree service.
            </p>
            <div className="space-y-2 text-sm">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-wide">Services</h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-150">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-wide">Service Areas</h3>
            <ul className="space-y-2">
              {FOOTER_SUBURBS_SG.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-150">
                    {s.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm text-orange-400 hover:text-orange-300">
                  View All Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-lg font-bold text-white mb-4 uppercase tracking-wide">Company</h3>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className="text-sm hover:text-white hover:pl-1 transition-all duration-150">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-600">
            © {currentYear} {SITE_NAME}. All rights reserved. Serving Chicago, IL and surrounding suburbs.
          </p>
          <p className="text-xs text-gray-600">
            Licensed & Insured | Chicago Metro Area
          </p>
        </div>
      </div>
    </footer>
  );
}
