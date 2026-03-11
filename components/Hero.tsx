import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

interface HeroProps {
  headline: string;
  subheadline: string;
  badgeText?: string;
  showTrustBadges?: boolean;
  variant?: "home" | "service" | "suburb";
}

export default function Hero({
  headline,
  subheadline,
  badgeText,
  showTrustBadges = true,
  variant = "home",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-hero-pattern">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className={`relative max-w-7xl mx-auto px-4 ${variant === "home" ? "py-20 md:py-28" : "py-14 md:py-20"}`}>
        <div className="max-w-3xl">
          {badgeText && (
            <span className="inline-block bg-orange-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-5">
              {badgeText}
            </span>
          )}

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-5 tracking-tight">
            {headline}
          </h1>

          <p className="text-lg md:text-xl text-navy-200 leading-relaxed mb-8 max-w-2xl">
            {subheadline}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/request-quote" className="btn-primary text-base py-4 px-8 text-center justify-center">
              Get Free Quote
            </Link>
            <a href={PHONE_HREF} className="btn-outline-white text-base py-4 px-8 text-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {PHONE}
            </a>
          </div>

          {/* Trust badges */}
          {showTrustBadges && (
            <div className="flex flex-wrap gap-4">
              {[
                "✓ Fully Insured",
                "✓ Free Estimates",
                "✓ Same-Week Service",
                "✓ Cleanup Included",
              ].map((badge) => (
                <span key={badge} className="text-sm text-navy-200 font-medium">
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V24C1440 24 1080 0 720 0S0 24 0 24V48z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
