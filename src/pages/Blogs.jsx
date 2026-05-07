import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEOHead from "@/components/SEOHead";
import { BLOGS } from "@/data/blogs";

export default function Blogs() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Digital Marketing Blog | UDM Techno Solutions",
    "description": "Practical guides on SEO, Google Ads, Meta Ads, social media and lead generation for businesses in Indore and across India.",
    "url": "https://udmtechno.com/blog",
    "publisher": { "@type": "Organization", "name": "UDM Techno Solutions" }
  };

  return (
    <PageShell>
      <SEOHead
        title="Digital Marketing Blog | SEO, Ads & Growth Tips - UDM Techno"
        description="Read expert digital marketing guides from UDM Techno Solutions, Indore. Practical articles on SEO, Google Ads, Meta Ads, social media strategy and lead generation for Indian businesses."
        schema={blogListSchema}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-xs sm:text-sm -rotate-2 mb-3 sm:mb-4">
          Digital Marketing Blog
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tighter mb-3 leading-[1.05]">
          Expert Digital Marketing Insights to Grow Your Business
        </h1>
        <p className="text-sm sm:text-lg text-zinc-700 max-w-3xl mb-6 sm:mb-10">
          Practical guides on SEO, paid ads, social media and lead generation for Indian businesses.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {BLOGS.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="bg-white border-2 border-black rounded-2xl sm:rounded-3xl p-4 sm:p-6 brutalist-shadow hover:-translate-y-1 transition-transform block"
            >
              <div className="inline-block bg-black text-brand font-black px-2 py-1 border-2 border-black rounded text-xs mb-2 sm:mb-3">
                {b.category}
              </div>
              <h2 className="text-lg sm:text-xl font-black mb-2 tracking-tight leading-snug">{b.title}</h2>
              <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed">{b.excerpt}</p>
              <span className="mt-3 sm:mt-4 inline-flex items-center gap-1 text-brand font-black text-sm sm:text-base">
                Read Article <iconify-icon icon="solar:arrow-right-up-linear" className="text-base sm:text-lg" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug);
  if (!post) {
    return (
      <PageShell>
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-black mb-4">Post not found</h1>
          <Link to="/blog" className="text-brand font-bold underline">
            Back to Blog
          </Link>
        </section>
      </PageShell>
    );
  }
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://udmtechno.com/blog/${post.slug}`,
    "author": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "publisher": {
      "@type": "Organization",
      "name": "UDM Techno Solutions",
      "url": "https://udmtechno.com"
    },
    "datePublished": "2026-04-01",
    "dateModified": "2026-04-24",
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://udmtechno.com/blog/${post.slug}` }
  };

  return (
    <PageShell>
      <SEOHead
        title={`${post.title} | UDM Techno Solutions Blog`}
        description={post.excerpt}
        ogType="article"
        schema={articleSchema}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link to="/blog" className="text-sm font-black text-zinc-600 hover:text-brand">
          &larr; All articles
        </Link>
        <div className="inline-block bg-brand text-brand-foreground font-black px-2 py-1 border-2 border-black rounded text-xs mt-4 mb-3">
          {post.category}
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4 leading-[1.1]">{post.title}</h1>
        <p className="text-base sm:text-xl text-zinc-700 mb-6 sm:mb-8">{post.excerpt}</p>
        <div className="prose max-w-none text-base sm:text-lg text-zinc-800 space-y-4">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="mt-8 sm:mt-10 bg-black text-white rounded-2xl sm:rounded-3xl border-2 border-black p-5 sm:p-6 brutalist-shadow">
          <h3 className="text-xl sm:text-2xl font-black mb-2">Get Your Free Growth Plan Today</h3>
          <p className="text-sm sm:text-base text-zinc-300 mb-4">We help businesses rank in Top 10 on Google & generate consistent leads.</p>
          <Link
            to="/contact"
            className="inline-block bg-brand text-brand-foreground border-2 border-brand rounded-xl px-5 sm:px-6 py-3 font-black text-sm sm:text-base"
          >
            Contact Our Team
          </Link>
        </div>
      </article>
    </PageShell>
  );
}
