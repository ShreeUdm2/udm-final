import ServicePage from "@/components/ServicePage";

export default function GoogleAdsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google Ads Management in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Google Ads PPC Management",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Expert Google Ads management in Indore. Search, Performance Max, YouTube and Display campaigns that turn buying-intent traffic into leads and sales.",
    "url": "https://udmtechno.com/services/google-ads"
  };

  return (
    <ServicePage
      icon="solar:mouse-circle-linear"
      badge="Google Ads"
      title="Google Ads Agency in Indore - PPC Campaigns That Drive Sales"
      tagline="Precision-targeted Google Ads campaigns that turn buying-intent searches into booked calls, demos and purchases for businesses in Indore and across India."
      description="Search, Performance Max, YouTube and Display campaigns built by certified Google Ads specialists. We architect PPC campaigns that turn buying-intent traffic into measurable revenue with advanced conversion tracking, weekly optimisation sprints and transparent reporting dashboards."
      benefits={[
        "Higher quality scores and lower cost per click through expert ad management",
        "Intent-based lead generation targeting buyers ready to convert",
        "Advanced conversion tracking with GA4 and server-side integration",
        "Performance Max and Search campaign synergy for maximum coverage",
        "Weekly optimisation sprints with SQR cleanup and bid adjustments",
        "Transparent reporting dashboard with real-time metrics access",
      ]}
      process={[
        { title: "Keyword Research", text: "Buyer-intent keyword mapping, negative keyword lists and search query analysis." },
        { title: "Campaign Build", text: "Tightly themed ad groups, responsive search ads, ad extensions and landing pages." },
        { title: "Tracking Setup", text: "GA4, Google Ads conversions and server-side tracking for clean attribution data." },
        { title: "Optimise & Scale", text: "Bid strategy tuning, creative refresh, A/B testing and strategic budget scaling." },
      ]}
      caseStudy={[
        { metric: "-48%", label: "Cost per Lead" },
        { metric: "3.7x", label: "ROAS" },
        { metric: "+264%", label: "Conversions" },
        { metric: "8.9", label: "Avg Quality Score" },
      ]}
      caseStudyText="A B2B services company cut their Google Ads cost per lead by 48% in just 60 days after we restructured their campaigns with buyer-intent keywords, new responsive search ads and a conversion-optimised landing page funnel."
      requirement="Google Ads"
      keyword="Google Ads Agency Indore"
      seoTitle="Google Ads Agency Indore | PPC Management India - UDM Techno"
      seoDescription="Expert Google Ads management in Indore by UDM Techno Solutions. We cut CPL by 48% and deliver 3.7x ROAS through intent-based PPC campaigns. Free Google Ads audit available."
      schema={schema}
    />
  );
}
