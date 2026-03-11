import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner, Breadcrumbs } from "@/components/UIComponents";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog-posts";
import { SITE_URL } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

const articleSchema = (post: ReturnType<typeof getBlogPostBySlug>) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post?.title,
  description: post?.metaDescription,
  datePublished: post?.publishDate,
  author: {
    "@type": "Organization",
    name: "Chicago Stump Grinding",
    url: SITE_URL,
  },
  publisher: {
    "@type": "Organization",
    name: "Chicago Stump Grinding",
    url: SITE_URL,
  },
});

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />

      {/* Page header */}
      <section className="bg-navy-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-4">
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>
          <div className="flex gap-2 mb-3">
            <span className="bg-orange-600 text-white text-xs font-bold px-2.5 py-0.5 rounded">Stump Grinding</span>
            <span className="text-navy-400 text-xs flex items-center">{post.publishDate} · {post.readTime}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl font-black text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Article */}
            <article className="lg:col-span-3">
              <div
                className="prose prose-gray max-w-none prose-headings:font-display prose-headings:text-navy-900 prose-a:text-orange-600 prose-strong:text-navy-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Internal links */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4">Related Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { href: "/stump-grinding", label: "Professional Stump Grinding" },
                    { href: "/stump-removal", label: "Stump Removal Service" },
                    { href: "/tree-service", label: "Tree Service" },
                    { href: "/pricing", label: "Pricing Guide" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 bg-brand-light border border-gray-200 rounded-lg px-4 py-3 text-sm font-medium text-navy-800 hover:border-navy-400 hover:bg-navy-50 transition-all"
                    >
                      <span className="text-orange-500">→</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-navy-900 text-white rounded-xl p-6 sticky top-24">
                <h3 className="font-display text-lg font-bold mb-3">Get a Free Quote</h3>
                <p className="text-navy-300 text-sm mb-4">Ready to schedule stump grinding or tree service?</p>
                <Link href="/request-quote" className="btn-primary w-full justify-center text-sm mb-3">
                  Request Free Quote
                </Link>
                <a href="tel:+13125550188" className="btn-outline-white w-full justify-center text-sm">
                  📞 (312) 555-0188
                </a>
              </div>

              {otherPosts.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-display text-lg font-bold text-navy-900 mb-4">More Articles</h3>
                  <ul className="space-y-4">
                    {otherPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="text-sm font-medium text-navy-800 hover:text-orange-600 transition-colors leading-snug"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
