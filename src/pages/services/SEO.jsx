import ServicePage from "@/components/ServicePage";

export default function SEOPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Search Engine Optimization",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Professional SEO services in Indore, India. Technical audits, on-page optimization, authority link building and local SEO to rank your business on page 1 of Google.",
    "url": "https://udmtechno.com/services/seo"
  };

  return (
    <ServicePage
      icon="solar:magnifer-zoom-in-linear"
      badge="SEO Services"
      title="Best SEO Services in Indore That Rank You on Page 1 of Google"
      tagline="Data-driven SEO strategies that help businesses in Indore, Bhopal and across India rank in the Top 10 on Google and generate consistent organic leads."
      description="Our full-funnel SEO strategy combines technical audits, on-page optimisation, authority link building and local SEO to move your business to the top of Google search results. With 8+ years of experience and 90+ keywords ranked on page 1, we deliver measurable organic growth for businesses across India."
      benefits={[
        "Rank on page 1 of Google for high-intent keywords",
        "Drive consistent organic leads month over month",
        "Outrank competitors with authority backlinks from trusted domains",
        "Faster site speed and improved Core Web Vitals scores",
        "Local SEO optimisation for Indore, Bhopal and pan-India targeting",
        "Transparent monthly reporting with keyword tracking dashboards",
      ]}
      process={[
        { title: "Audit & Research", text: "Deep technical SEO audit, competitor analysis and buyer-intent keyword mapping for your industry." },
        { title: "On-Page SEO", text: "Title tags, meta descriptions, schema markup, content optimisation and strategic internal linking." },
        { title: "Authority Building", text: "High-quality backlinks from relevant publishers, local citations and off-page signals." },
        { title: "Track & Scale", text: "Monthly ranking reports, traffic analysis and content scaling to maintain and grow positions." },
      ]}
      caseStudy={[
        { metric: "+312%", label: "Organic Traffic" },
        { metric: "Top 3", label: "Google Rankings" },
        { metric: "4.8x", label: "Lead Growth" },
        { metric: "90+", label: "Keywords on Page 1" },
      ]}
      caseStudyText="A local services brand in Indore jumped from page 4 to the top 3 Google rankings in 5 months with our SEO strategy, producing a 4.8x increase in qualified inbound leads and ranking for 90+ high-intent keywords."
      requirement="SEO"
      keyword="SEO Services in Indore"
      seoTitle="Best SEO Services in Indore | SEO Agency India - UDM Techno"
      seoDescription="Top-rated SEO services in Indore by UDM Techno Solutions. We help businesses rank on page 1 of Google with technical SEO, link building and local SEO. 90+ keywords ranked. Get a free SEO audit today."
      schema={schema}
    />
  );
}
