import { Link, useParams } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEOHead from "@/components/SEOHead";
import gmb from "../assets/gmb.png";
import seo from "../assets/seo_result.png";
import socialpro from "../assets/social_media_profile.png";
import social from "../assets/social.png";
import google from "../assets/googleranking.png";
import website from "../assets/website.png";
import youtube from "../assets/youtubeManagement.png";

export const CASE_STUDIES = [
  {
    slug: "local-clinic-map-pack",
    client: "Avanya Clinic",
    industry: "Healthcare",
    service: "Google My Business",
    title: "From invisible on Maps to #1 in the local Map Pack",
    cover: gmb,
    summary: "A multi-location clinic went from page 3 on Google Maps to #1 in the Map Pack for 18 keywords in 5 months.",
    overview: "Avanya Clinic operates in multiple neighbourhoods and needed a steady stream of local patients. Their Google Business Profile was under-optimised and reviews were inconsistent.",
    problem: "Low visibility in Google Maps for high-intent queries, no review generation system, inconsistent NAP across directories and very few calls coming directly from GMB.",
    solution: [
      "Full GMB audit and category restructuring",
      "Geotagged photo uploads and weekly GMB posts",
      "Review generation via automated WhatsApp flows",
      "NAP standardisation across 50+ directories",
      "Geogrid rank tracking to measure impact across the city",
    ],
    results: [
      { metric: "+540%", label: "Profile Views" },
      { metric: "+230%", label: "Calls from GMB" },
      { metric: "#1", label: "Map Pack Ranking" },
      { metric: "4.9★", label: "Avg Rating" },
    ],
    quote: {
      text: "Within 4 months we became the obvious first choice on Google Maps. Bookings from Maps alone doubled our monthly revenue.",
      author: "Operations Lead, Avanya Clinic",
    },
  },
  {
    slug: "d2c-meta-ads-scale",
    client: "D2C Lifestyle Brand",
    industry: "D2C Ecommerce",
    service: "Meta Ads",
    title: "Scaling Meta Ads from ₹2L to ₹28L/mo at 6.4x ROAS",
    cover: social,
    summary: "A creative-first Meta Ads system scaled ad spend 14x while maintaining a 6.4x blended ROAS.",
    overview: "A lifestyle D2C brand had plateaued on Meta. Creative fatigue and weak funnel architecture were eating into margins.",
    problem: "Stagnant ROAS around 1.8x, no systematic creative production, weak retargeting, and rising CPMs.",
    solution: [
      "Weekly high-volume creative production (UGC + studio)",
      "Hook-problem-solution-proof-CTA creative framework",
      "Clear TOF/MOF/BOF campaign structure",
      "Conversion API and server-side tracking",
      "Daily pacing and ROAS dashboards",
    ],
    results: [
      { metric: "6.4x", label: "Blended ROAS" },
      { metric: "₹32", label: "Cost per Lead" },
      { metric: "+412%", label: "Revenue Lift" },
      { metric: "14x", label: "Ad Spend Scale" },
    ],
    quote: {
      text: "The creative machine is the real unlock. We finally have a Meta Ads engine that prints profit predictably.",
      author: "Founder, D2C Lifestyle Brand",
    },
  },
  {
    slug: "b2b-google-ads-cpl",
    client: "B2B Services Co.",
    industry: "B2B Services",
    service: "Google Ads",
    title: "Cut Google Ads CPL by 48% in 60 days",
    cover: google,
    summary: "Restructured campaigns, rebuilt the landing page and clean tracking reduced cost per lead by nearly half.",
    overview: "A B2B services company was generating leads on Google Ads but the pipeline quality and CPL were unsustainable.",
    problem: "High CPCs, low quality score, irrelevant search queries, and a landing page with a 0.8% conversion rate.",
    solution: [
      "Keyword restructure around buyer intent",
      "Tightly themed ad groups with responsive search ads",
      "New conversion-focused landing page",
      "GA4 + server-side tracking for clean attribution",
      "Weekly SQR cleanup and negative keyword updates",
    ],
    results: [
      { metric: "-48%", label: "Cost per Lead" },
      { metric: "3.7x", label: "ROAS" },
      { metric: "+264%", label: "Conversions" },
      { metric: "8.9", label: "Avg Quality Score" },
    ],
    quote: {
      text: "They cleaned up our entire Google Ads account and pipeline quality jumped instantly.",
      author: "Marketing Head, B2B Services Co.",
    },
  },
  {
    slug: "local-retailer-website",
    client: "Local Retailer",
    industry: "Retail",
    service: "Website Development",
    title: "Website rebuild lifted conversions by 186%",
    cover: website,
    summary: "A new modern website with 100/100 PageSpeed and sub-1.2s LCP drove a 186% lift in conversions in 90 days.",
    overview: "A local retailer needed a website that could actually drive sales, not just exist.",
    problem: "Outdated, slow site (LCP ~4.5s), poor mobile UX, no analytics, weak SEO foundations and an awkward checkout.",
    solution: [
      "Modern stack rebuild with edge caching",
      "Mobile-first premium UI system",
      "Schema markup and SEO-friendly structure",
      "Event-driven analytics and lead capture",
      "Simplified 2-step checkout flow",
    ],
    results: [
      { metric: "100/100", label: "PageSpeed Score" },
      { metric: "+186%", label: "Conversion Rate" },
      { metric: "< 1.2s", label: "LCP Time" },
      { metric: "14 days", label: "Launch Time" },
    ],
    quote: {
      text: "Our website finally feels like the brand. And it actually sells.",
      author: "Owner, Local Retailer",
    },
  },
  {
    slug: "seo-traffic-explosion",
    client: "Professional Services Firm",
    industry: "Services",
    service: "SEO",
    title: "From page 4 to Top 3 rankings across 90+ keywords",
    cover: seo,
    summary: "Technical SEO, topical cluster content and authority backlinks tripled organic leads in 5 months.",
    overview: "A services firm in Indore wanted to own the first page of Google for its core service keywords.",
    problem: "Technical issues, thin content, weak internal linking and almost zero authoritative backlinks.",
    solution: [
      "Full technical SEO audit and fixes",
      "Topical cluster content roadmap",
      "On-page optimisation across 60 pages",
      "Authority backlink outreach",
      "Monthly reporting dashboard",
    ],
    results: [
      { metric: "+312%", label: "Organic Traffic" },
      { metric: "Top 3", label: "Google Rankings" },
      { metric: "4.8x", label: "Lead Growth" },
      { metric: "90+", label: "Keywords on Page 1" },
    ],
    quote: {
      text: "Leads from Google now outnumber every other channel combined.",
      author: "Director, Professional Services Firm",
    },
  },
  {
    slug: "restaurant-social-growth",
    client: "Restaurant Brand",
    industry: "F&B",
    service: "Social Media",
    title: "2k to 50k followers and 3x reservation DMs",
    cover: socialpro,
    summary: "A reels-first social strategy grew the brand 25x on Instagram in 6 months and tripled inbound reservations.",
    overview: "A restaurant brand wanted to turn Instagram into their #1 booking source.",
    problem: "Inconsistent content, low engagement, poor reels retention and no community management.",
    solution: [
      "Weekly reels-first content calendar",
      "Food + behind-the-scenes + offers pillars",
      "DM automation and reservation flow",
      "Local hashtag and geo-tag strategy",
      "Monthly analytics-driven iteration",
    ],
    results: [
      { metric: "+48k", label: "Followers Added" },
      { metric: "7.2%", label: "Engagement Rate" },
      { metric: "12M", label: "Reels Views" },
      { metric: "+3.1x", label: "Inbound DMs" },
    ],
    quote: {
      text: "We went from quiet on Instagram to fully booked most weekends.",
      author: "GM, Restaurant Brand",
    },
  },
  {
    slug: "creator-youtube-management",
    client: "Business Coach",
    industry: "Education",
    service: "YouTube Management",
    title: "From 1k to 120k subscribers in 9 months",
    cover: youtube,
    summary: "Strategic YouTube management turned educational long-form into a consistent lead generation channel.",
    overview: "A business coach had expertise but no system to turn YouTube into pipeline.",
    problem: "Inconsistent uploads, weak thumbnails, poor hook retention, and no funnel from YouTube to leads.",
    solution: [
      "Keyword-driven content calendar",
      "Thumbnail + hook optimisation sprints",
      "Long-form videos paired with weekly Shorts",
      "Lead magnet funnel from video to WhatsApp",
      "Monthly analytics-led iteration",
    ],
    results: [
      { metric: "+120k", label: "Subscribers" },
      { metric: "8M+", label: "Views" },
      { metric: "6.2%", label: "CTR on Thumbnails" },
      { metric: "3x", label: "Monthly Leads" },
    ],
    quote: {
      text: "YouTube is now my single biggest lead source — all organic.",
      author: "Business Coach",
    },
  },
  // {
  //   slug: "creator-youtube-management",
  //   client: "Business Coach",
  //   industry: "Education",
  //   service: "YouTube Management",
  //   title: "From 1k to 120k subscribers in 9 months",
  //   cover: youtube,
  //   summary: "Strategic YouTube management turned educational long-form into a consistent lead generation channel.",
  //   overview: "A business coach had expertise but no system to turn YouTube into pipeline.",
  //   problem: "Inconsistent uploads, weak thumbnails, poor hook retention, and no funnel from YouTube to leads.",
  //   solution: [
  //     "Keyword-driven content calendar",
  //     "Thumbnail + hook optimisation sprints",
  //     "Long-form videos paired with weekly Shorts",
  //     "Lead magnet funnel from video to WhatsApp",
  //     "Monthly analytics-led iteration",
  //   ],
  //   results: [
  //     { metric: "+120k", label: "Subscribers" },
  //     { metric: "8M+", label: "Views" },
  //     { metric: "6.2%", label: "CTR on Thumbnails" },
  //     { metric: "3x", label: "Monthly Leads" },
  //   ],
  //   quote: {
  //     text: "YouTube is now my single biggest lead source — all organic.",
  //     author: "Business Coach",
  //   },
  // },
  // {
  //   slug: "creator-youtube-management",
  //   client: "Business Coach",
  //   industry: "Education",
  //   service: "YouTube Management",
  //   title: "From 1k to 120k subscribers in 9 months",
  //   cover: youtube,
  //   summary: "Strategic YouTube management turned educational long-form into a consistent lead generation channel.",
  //   overview: "A business coach had expertise but no system to turn YouTube into pipeline.",
  //   problem: "Inconsistent uploads, weak thumbnails, poor hook retention, and no funnel from YouTube to leads.",
  //   solution: [
  //     "Keyword-driven content calendar",
  //     "Thumbnail + hook optimisation sprints",
  //     "Long-form videos paired with weekly Shorts",
  //     "Lead magnet funnel from video to WhatsApp",
  //     "Monthly analytics-led iteration",
  //   ],
  //   results: [
  //     { metric: "+120k", label: "Subscribers" },
  //     { metric: "8M+", label: "Views" },
  //     { metric: "6.2%", label: "CTR on Thumbnails" },
  //     { metric: "3x", label: "Monthly Leads" },
  //   ],
  //   quote: {
  //     text: "YouTube is now my single biggest lead source — all organic.",
  //     author: "Business Coach",
  //   },
  // },
];

export default function CaseStudiesPage() {
  return (
    <PageShell>
      <SEOHead
        title="Case Studies | Digital Marketing Results - UDM Techno Solutions"
        description="See real results from UDM Techno Solutions clients. Case studies showing +312% organic traffic, 6.4x ROAS, #1 Map Pack rankings and more. SEO, Google Ads, Meta Ads and social media results from Indore."
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Digital Marketing Case Studies | UDM Techno Solutions",
          "description": "Real results from real brands. See how UDM Techno Solutions helped businesses across India achieve measurable growth through SEO, Google Ads, Meta Ads, website development and social media.",
          "url": "https://udmtechno.com/case-studies"
        }}
      />
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-10 pb-10 lg:pt-16">
        <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-sm -rotate-2 mb-5">
          Case Studies
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-[1.02] mb-5">
          Real Brands. Real Numbers. Proven Digital Marketing Results.
        </h1>
        <p className="text-base md:text-lg text-zinc-700 max-w-3xl leading-relaxed">
          Explore how we have helped businesses in Indore and across India rank in the Top 10 on Google, scale ad revenue, and generate consistent qualified leads through SEO, Google Ads, Meta Ads, website development and social media.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 md:px-2 pb-16 md:pb-20">
        <div className="grid md:grid-cols-3 gap-5 lg:gap-5">
          {CASE_STUDIES.map((c) => (
            <Link
              key={c.slug}
              to={`/case-studies/${c.slug}`}
              className="group bg-white border-2 border-black rounded-3xl brutalist-shadow overflow-hidden hover:-translate-y-1 transition-transform"
            >
              <div className="aspect-[70/30] overflow-hidden bg-zinc-100 border-b-2 border-black">
                <img
                  src={c.cover}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-black text-brand px-2 py-1 text-xs font-black rounded border-2 border-black">
                    {c.service}
                  </span>
                  <span className="bg-zinc-100 text-zinc-700 px-2 py-1 text-xs font-black rounded border-2 border-black">
                    {c.industry}
                  </span>
                </div>
                <h2 className="text-xl md:text-2xl font-black tracking-tight leading-snug mb-2">
                  {c.title}
                </h2>
                <p className="text-zinc-700 text-sm md:text-base">{c.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-brand font-black">
                  Read case study
                  <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

export function CaseStudyDetail() {
  const { slug } = useParams();
  const c = CASE_STUDIES.find((x) => x.slug === slug);
  if (!c) {
    return (
      <PageShell>
        <section className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-black mb-4">Case study not found</h1>
          <Link to="/case-studies" className="text-brand font-bold underline">
            Back to Case Studies
          </Link>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <SEOHead
        title={`${c.title} | ${c.service} Case Study - UDM Techno Solutions`}
        description={c.summary}
        ogType="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": c.title,
          "description": c.summary,
          "url": `https://udmtechno.com/case-studies/${c.slug}`,
          "author": { "@type": "Organization", "name": "UDM Techno Solutions" },
          "publisher": { "@type": "Organization", "name": "UDM Techno Solutions" }
        }}
      />
      <article className="max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <Link to="/case-studies" className="text-sm font-black text-zinc-600 hover:text-brand">
          &larr; All case studies
        </Link>

        <div className="mt-6 mb-6 flex flex-wrap gap-2">
          <span className="bg-black text-brand px-2 py-1 text-xs font-black rounded border-2 border-black">
            {c.service}
          </span>
          <span className="bg-zinc-100 text-zinc-700 px-2 py-1 text-xs font-black rounded border-2 border-black">
            {c.industry}
          </span>
          <span className="bg-brand text-brand-foreground px-2 py-1 text-xs font-black rounded border-2 border-black">
            {c.client}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-5">
          {c.title}
        </h1>
        <p className="text-lg md:text-xl text-zinc-700 mb-8 max-w-3xl leading-relaxed">
          {c.summary}
        </p>

        <div className="rounded-3xl overflow-hidden border-2 border-black brutalist-shadow bg-zinc-100">
          <img src={c.cover} alt={c.title} className="block w-full max-h-[520px] object-cover object-center" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 mt-10">
          <div className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow">
            <h2 className="text-2xl font-black mb-2 tracking-tight">Project Overview</h2>
            <p className="text-zinc-700 leading-relaxed">{c.overview}</p>
          </div>
          <div className="bg-white border-2 border-black rounded-3xl p-6 brutalist-shadow">
            <h2 className="text-2xl font-black mb-2 tracking-tight">The Problem</h2>
            <p className="text-zinc-700 leading-relaxed">{c.problem}</p>
          </div>
        </div>

        <div className="bg-black text-white border-2 border-black rounded-3xl p-6 md:p-8 mt-5">
          <h2 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">The Solution</h2>
          <ul className="space-y-3">
            {c.solution.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <iconify-icon icon="solar:check-circle-bold" className="text-2xl text-brand shrink-0 mt-0.5" />
                <span className="text-zinc-100 font-semibold">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5 bg-brand text-brand-foreground border-2 border-black rounded-3xl p-6 md:p-8 brutalist-shadow">
          <h2 className="text-2xl md:text-3xl font-black mb-5 tracking-tight">Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {c.results.map((r) => (
              <div key={r.label} className="bg-white text-black border-2 border-black rounded-2xl p-4">
                <div className="text-3xl font-black tracking-tighter">{r.metric}</div>
                <div className="font-bold text-zinc-600 text-sm mt-1">{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {c.quote && (
          <blockquote className="mt-10 border-l-4 border-brand pl-5 md:pl-6 max-w-3xl">
            <p className="text-xl md:text-2xl font-black text-zinc-900 leading-snug">
              "{c.quote.text}"
            </p>
            <footer className="mt-3 text-zinc-600 font-bold">— {c.quote.author}</footer>
          </blockquote>
        )}

        <div className="mt-12 bg-black text-white rounded-3xl border-2 border-black p-6 md:p-8 brutalist-shadow">
          <h3 className="text-2xl md:text-3xl font-black mb-2">Get Your Free Growth Plan Today</h3>
          <p className="text-zinc-300 mb-5 max-w-2xl">
            We help businesses rank in Top 10 on Google & generate consistent leads.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/contact"
              className="bg-brand text-brand-foreground border-2 border-brand rounded-xl px-6 py-3 font-black text-center"
            >
              Contact Our Team
            </Link>
            <a
              href="https://calendly.com/udmtechnosolution/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black border-2 border-white rounded-xl px-6 py-3 font-black text-center"
            >
              Schedule a 15-min Call
            </a>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
