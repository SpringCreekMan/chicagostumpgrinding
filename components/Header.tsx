"use client";
import { useState } from "react";
import Link from "next/link";
import { PHONE, PHONE_HREF, SITE_NAME } from "@/lib/constants";

const NAV_SERVICES = [
  { href: "/stump-grinding", label: "Stump Grinding" },
  { href: "/stump-removal", label: "Stump Removal" },
  { href: "/tree-service", label: "Tree Service" },
  { href: "/tree-removal", label: "Tree Removal" },
];

const NAV_LINKS = [
  { href: "/service-areas", label: "Service Areas" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-navy-900 text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar */}
      <div className="bg-brand-dark text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="text-navy-300 text-xs">Chicago&apos;s Local Stump & Tree Specialists — Fully Insured</span>
          <a
            href={PHONE_HREF}
            className="font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            {PHONE}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-xl font-black group-hover:bg-orange-500 transition-colors">
              🌳
            </div>
            <div>
              <div className="font-display text-xl font-bold leading-tight tracking-wide">
                CHICAGO <span className="text-orange-400">STUMP</span>
              </div>
              <div className="text-[10px] text-navy-300 uppercase tracking-widest leading-none -mt-0.5">
                Grinding & Tree Specialists
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded">
                Services
                <svg className="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-xl py-2 min-w-[200px] border border-gray-100">
                  {NAV_SERVICES.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm hover:bg-navy-50 hover:text-navy-900 font-medium"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 text-sm font-semibold text-white hover:text-orange-400 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {PHONE}
            </a>
            <Link href="/request-quote" className="btn-primary text-sm py-2 px-4">
              Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-800 border-t border-navy-700">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider mb-2">Services</p>
            {NAV_SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-navy-700 rounded"
                onClick={() => setMobileOpen(false)}
              >
                {s.label}
              </Link>
            ))}
            <div className="border-t border-navy-700 pt-2 mt-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-navy-700 rounded"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="border-t border-navy-700 pt-3 mt-2 flex flex-col gap-2">
              <a href={PHONE_HREF} className="btn-primary justify-center text-sm">
                📞 Call {PHONE}
              </a>
              <Link href="/request-quote" onClick={() => setMobileOpen(false)} className="btn-outline-white justify-center text-sm">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
