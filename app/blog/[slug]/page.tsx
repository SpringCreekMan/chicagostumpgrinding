import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CTABanner, Breadcrumbs } from "@/components/UIComponents";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blog-posts";
import { SITE_URL, PHONE, PHONE_HREF } from "@/lib/constants";

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
      <section style={{ position: 'relative', background: 'var(--green-deep)', padding: '52px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
          <div style={{ marginBottom: 16 }}>
            <Breadcrumbs
              crumbs={[
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: post.title },
              ]}
            />
          </div>
          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <span style={{ background: 'rgba(255,255,255,.1)', border: '1px solid rgba(255,255,255,.15)', color: '#7ecf8e', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 2, textTransform: 'uppercase', letterSpacing: '.06em' }}>Stump Grinding</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', display: 'flex', alignItems: 'center' }}>{post.publishDate} &middot; {post.readTime}</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', lineHeight: 1.22, letterSpacing: '-.02em' }}>
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 48, alignItems: 'start' }}>
            {/* Article */}
            <article>
              <div
                className="prose prose-bartlett max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Internal links */}
              <div style={{ marginTop: 44, paddingTop: 32, borderTop: '1px solid var(--line)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 16 }}>Related Services</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { href: "/stump-grinding", label: "Professional Stump Grinding" },
                    { href: "/stump-removal", label: "Stump Removal Service" },
                    { href: "/tree-service", label: "Tree Service" },
                    { href: "/pricing", label: "Pricing Guide" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'var(--green-pale)', border: '1px solid var(--line)', borderRadius: 4, padding: '14px 16px', fontSize: 13, fontWeight: 600, color: 'var(--green-dark)', transition: 'border-color .14s' }}
                      className="related-link"
                    >
                      <span style={{ color: 'var(--green)' }}>&rsaquo;</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
                <style>{`.related-link:hover { border-color: var(--green) !important; }`}</style>
              </div>
            </article>

            {/* Sidebar */}
            <aside>
              <div style={{ background: 'var(--green-dark)', borderRadius: 4, padding: '24px 22px', marginBottom: 20, position: 'sticky', top: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>Get a Free Quote</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', lineHeight: 1.6, marginBottom: 16 }}>Ready to schedule stump grinding or tree service?</p>
                <Link href="/request-quote" className="btn btn-solid" style={{ width: '100%', justifyContent: 'center', marginBottom: 10, background: 'var(--green-mid)', borderColor: 'var(--green-mid)', fontSize: 13 }}>
                  Request Free Quote
                </Link>
                <a href={PHONE_HREF} className="btn btn-white-outline" style={{ width: '100%', justifyContent: 'center', fontSize: 13 }}>
                  {PHONE}
                </a>
              </div>

              {otherPosts.length > 0 && (
                <div style={{ background: 'var(--white)', border: '1px solid var(--line)', borderRadius: 4, padding: '22px 20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, fontWeight: 700, color: 'var(--green-dark)', marginBottom: 16 }}>More Articles</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {otherPosts.map((p) => (
                      <li key={p.slug} style={{ padding: '8px 0', borderBottom: '1px solid var(--line)' }}>
                        <Link
                          href={`/blog/${p.slug}`}
                          style={{ fontSize: 13, fontWeight: 600, color: 'var(--green-dark)', lineHeight: 1.4 }}
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
