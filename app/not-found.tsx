import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <div className="text-8xl mb-6">🌳</div>
        <h1 className="font-display text-5xl font-black text-navy-900 mb-3">404 — Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          We couldn&apos;t find that page. Let&apos;s get you back to the right place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary justify-center">
            Go Home
          </Link>
          <Link href="/request-quote" className="btn-secondary justify-center">
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
