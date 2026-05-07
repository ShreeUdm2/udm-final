import ServicePage from "@/components/ServicePage";

export default function GMBPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Google My Business Optimization in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Google Business Profile Optimization",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Expert Google My Business optimization in Indore. Rank in the Google Map Pack, get more calls, reviews and walk-ins with our proven GMB strategy.",
    "url": "https://udmtechno.com/services/google-my-business"
  };

  return (
    <ServicePage
      icon="solar:map-point-linear"
      badge="Google My Business"
      title="Google My Business Optimisation in Indore - Rank in the Map Pack"
      tagline="Dominate the Google Map Pack and generate consistent local leads for your business in Indore, Bhopal and across India."
      description="Our proven Google Business Profile optimisation strategy covers profile audits, geotagged media, weekly posts, review generation, NAP consistency across 50+ directories and geogrid rank tracking. We have helped clinics, restaurants, retailers and service businesses become the top choice on Google Maps."
      benefits={[
        "Rank in the Google Map 3-Pack for local search queries",
        "More calls, direction requests and walk-ins from Google Maps",
        "Consistent 5-star review generation strategy via WhatsApp automation",
        "Geotagged photos and weekly GMB posts to boost visibility",
        "NAP consistency standardised across 50+ local directories",
        "Monthly insights report with geogrid rank tracking data",
      ]}
      process={[
        { title: "Profile Audit", text: "Complete GMB audit, category research and competitor mapping in your local area." },
        { title: "Optimisation", text: "Categories, services, business description, high-quality media, FAQs and products." },
        { title: "Reviews & Posts", text: "Automated review generation system, weekly GMB posts, offers and event updates." },
        { title: "Rank & Report", text: "Geogrid tracking, keyword rankings and monthly insights with actionable next steps." },
      ]}
      caseStudy={[
        { metric: "+540%", label: "Profile Views" },
        { metric: "+230%", label: "Calls from GMB" },
        { metric: "#1", label: "Map Pack Ranking" },
        { metric: "4.9", label: "Avg Star Rating" },
      ]}
      caseStudyText="Avanya Clinic, a multi-location healthcare business, went from invisible on Google Maps to #1 in the Map Pack for 18 keywords across their service areas in Indore, driving a 230% increase in direct calls from Google."
      requirement="Google My Business"
      keyword="Google My Business Optimisation Indore"
      seoTitle="Google My Business Optimization Indore | GMB Agency - UDM Techno"
      seoDescription="Expert Google My Business optimization in Indore by UDM Techno Solutions. Rank in the Google Map Pack, get more calls and reviews. 540% profile view increase for clients. Free GMB audit available."
      schema={schema}
    />
  );
}
