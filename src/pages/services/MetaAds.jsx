import ServicePage from "@/components/ServicePage";

export default function MetaAdsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Meta Ads Management in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Facebook and Instagram Advertising",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Professional Meta Ads management in Indore. Facebook and Instagram ad campaigns that generate leads and sales at scale with proven 6.4x ROAS results.",
    "url": "https://udmtechno.com/services/meta-ads"
  };

  return (
    <ServicePage
      icon="solar:smartphone-update-linear"
      badge="Meta Ads"
      title="Meta Ads Agency in Indore - Facebook & Instagram Ads That Convert"
      tagline="Creative-first Meta Ads campaigns that generate consistent leads and sales for businesses in Indore, Bhopal and across India."
      description="From scroll-stopping creatives and UGC production to rigorous audience testing and conversion optimisation, our Meta Ads team builds profitable advertising funnels on Facebook and Instagram. We have scaled ad spends from 2L to 28L monthly while maintaining 6.4x ROAS for our clients."
      benefits={[
        "Lower cost per lead and higher ROAS through creative testing",
        "Scroll-stopping ad creatives, UGC and video production",
        "Laser-targeted audiences built from first-party data and lookalikes",
        "Full-funnel retargeting campaigns that close warm leads",
        "Daily budget monitoring and bid optimization",
        "Weekly performance reports with clear actionable insights",
      ]}
      process={[
        { title: "Strategy", text: "Offer research, audience mapping, creative brief and full funnel design for your business." },
        { title: "Creative", text: "High-converting videos, carousels, UGC and static ads produced by our in-house team." },
        { title: "Launch & Test", text: "A/B testing creatives, audiences and placements with rigorous data analysis." },
        { title: "Scale", text: "Scale winning campaigns vertically and horizontally with clean attribution data." },
      ]}
      caseStudy={[
        { metric: "6.4x", label: "ROAS" },
        { metric: "32", label: "Cost per Lead" },
        { metric: "+412%", label: "Revenue Lift" },
        { metric: "2.1M", label: "Qualified Reach" },
      ]}
      caseStudyText="A D2C lifestyle brand scaled from 2L to 28L monthly ad spend while maintaining 6.4x blended ROAS, using our creative-first Meta Ads system with weekly UGC production and data-driven audience optimization."
      requirement="Meta Ads"
      keyword="Meta Ads Agency Indore"
      seoTitle="Meta Ads Agency Indore | Facebook & Instagram Ads - UDM Techno"
      seoDescription="Top Meta Ads agency in Indore. We manage Facebook and Instagram ad campaigns that deliver 6.4x ROAS. Creative-first approach, UGC production and full-funnel strategy. Get a free ad audit today."
      schema={schema}
    />
  );
}
