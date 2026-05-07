import ServicePage from "@/components/ServicePage";

export default function WebsitePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Website Design and Development",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Premium website development in Indore. SEO-ready, mobile-first websites with 100/100 PageSpeed scores that convert visitors into customers.",
    "url": "https://udmtechno.com/services/website"
  };

  return (
    <ServicePage
      icon="solar:laptop-linear"
      badge="Website Development"
      title="Best Website Development Company in Indore - Sites That Sell 24/7"
      tagline="Modern, blazing-fast, SEO-ready websites that rank in the Top 10 on Google and convert visitors into paying customers around the clock."
      description="We design and develop premium websites on modern technology stacks, fully optimised for Core Web Vitals, search engine visibility and conversion performance. With 100/100 PageSpeed scores and an average 14-day turnaround, every pixel and every millisecond is engineered to turn visitors into revenue."
      benefits={[
        "Mobile-first, lightning-fast performance with sub-1.2s load times",
        "SEO-ready structure from day one with schema markup and semantic HTML",
        "Premium design with micro-interactions and conversion-focused layouts",
        "CMS integration that is easy for your team to manage and update",
        "Integrated analytics, lead capture forms and conversion tracking",
        "Ongoing support, maintenance and performance monitoring included",
      ]}
      process={[
        { title: "Discovery", text: "Business goals audit, user journey mapping and content architecture planning." },
        { title: "Design", text: "Wireframes, brand system development and pixel-perfect responsive UI design." },
        { title: "Development", text: "Clean, performant code with SEO best practices and Core Web Vitals optimization." },
        { title: "Launch & Grow", text: "QA testing, go-live, analytics setup, CRO and iterative improvements." },
      ]}
      caseStudy={[
        { metric: "100/100", label: "PageSpeed Score" },
        { metric: "+186%", label: "Conversion Rate" },
        { metric: "< 1.2s", label: "LCP Time" },
        { metric: "14 days", label: "Avg Launch Time" },
      ]}
      caseStudyText="We rebuilt a local retailer's website in Indore achieving a perfect 100 PageSpeed score, sub-1.2s LCP load time and a 186% increase in conversions within the first 90 days of launch."
      requirement="Website"
      keyword="Website Development Company Indore"
      seoTitle="Best Website Development Company Indore | Web Design - UDM Techno"
      seoDescription="Top website development company in Indore. We build SEO-ready, mobile-first websites with 100/100 PageSpeed scores. 186% conversion rate improvement for clients. Get a free website audit today."
      schema={schema}
    />
  );
}
