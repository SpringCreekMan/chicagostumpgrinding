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

const GRADIENT_TOPS = [
  'linear-gradient(150deg, #1d5c2e 0%, #2a7a41 100%)',
  'linear-gradient(150deg, #143820 0%, #1d5c2e 100%)',
  'linear-gradient(150deg, #0d2714 0%, #1d5c2e 100%)',
];

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ position: 'relative', background: 'var(--green-deep)', padding: '64px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 900px 600px at 75% 30%, rgba(45,122,65,.35) 0%, transparent 60%), linear-gradient(175deg, #071a0d 0%, #0d2714 35%, #143f20 65%, #1a5028 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ color: '#7ecf8e', fontSize: 11, textTransform: 'uppercase', letterSpacing: '.14em', fontWeight: 700, marginBottom: 10 }}>Helpful Resources</div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 700, color: '#fff', letterSpacing: '-.02em', marginBottom: 0 }}>
                Tree &amp; Stump Care Articles
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {BLOG_POSTS.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ border: '1px solid var(--line)', borderRadius: 4, overflow: 'hidden', background: 'var(--white)', transition: 'box-shadow .16s, transform .16s', textDecoration: 'none', color: 'inherit' }}
                className="blog-card"
              >
                <div style={{
                  height: 155,
                  background: GRADIENT_TOPS[i % GRADIENT_TOPS.length],
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '16px 18px',
                }}>
                  <span style={{ fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '.1em', fontWeight: 700, color: 'rgba(255,255,255,.6)' }}>
                    {post.readTime}
                  </span>
                </div>
                <div style={{ padding: '22px 20px 20px' }}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '15.5px', fontWeight: 700, color: 'var(--green-dark)', lineHeight: 1.4, marginBottom: 10 }}>
                    {post.title}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-soft)', lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                  <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--green)', display: 'flex', alignItems: 'center', gap: 5 }}>
                    Read Article
                    <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <style>{`.blog-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,.07) !important; transform: translateY(-2px); }`}</style>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
