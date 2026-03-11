import type { Metadata } from "next";
import Link from "next/link";
import { CTABanner } from "@/components/UIComponents";
import { BLOG_POSTS } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Stump Grinding & Tree Service Tips — Chicago",
  description:
    "Helpful tips, cost guides, and how-to articles about stump grinding, stump removal, and tree service in Chicago and suburbs.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-navy-900 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-white mb-4">
            Stump Grinding & Tree Service Blog
          </h1>
          <p className="text-navy-300 text-lg">
            Helpful guides, cost breakdowns, and answers to the most common homeowner questions.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-navy-300 transition-all"
              >
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span className="bg-navy-100 text-navy-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    Stump Grinding
                  </span>
                  <span className="text-gray-400 text-xs">{post.publishDate}</span>
                  <span className="text-gray-400 text-xs">·</span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h2 className="font-display text-2xl font-bold text-navy-900 mb-2 hover:text-orange-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors flex items-center gap-1"
                >
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
