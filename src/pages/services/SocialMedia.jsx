import ServicePage from "@/components/ServicePage";

export default function SocialMediaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Social Media Management in Indore",
    "provider": { "@type": "Organization", "name": "UDM Techno Solutions" },
    "serviceType": "Social Media Marketing and Management",
    "areaServed": [
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Bhopal" },
      { "@type": "Country", "name": "India" }
    ],
    "description": "Professional social media management in Indore. Strategy, content creation, reels, community management and performance reporting for Instagram, Facebook and LinkedIn.",
    "url": "https://udmtechno.com/services/social-media"
  };

  return (
    <ServicePage
      icon="solar:chat-round-dots-linear"
      badge="Social Media Management"
      title="Social Media Marketing Agency in Indore - Build Your Brand Online"
      tagline="End-to-end social media management that builds loyal communities and generates consistent leads on Instagram, Facebook and LinkedIn."
      description="Our social media team handles everything from strategy and content creation to reels production, community engagement, DM management and monthly performance reporting. We have grown a restaurant brand from 2k to 50k followers in 6 months and tripled their inbound reservation DMs."
      benefits={[
        "Consistent premium content calendar with scheduled posts and stories",
        "High-retention reels and carousel designs by our in-house creative team",
        "Community engagement, DM management and customer response handling",
        "Hashtag research and trend strategy for maximum organic reach",
        "Brand voice development and visual design system consistency",
        "Monthly growth reports with engagement analytics and actionable insights",
      ]}
      process={[
        { title: "Strategy", text: "Audience research, brand tone of voice, content pillars and monthly content plan." },
        { title: "Create", text: "Professional shoots, reels, carousels, stories and static content by our design team." },
        { title: "Publish & Engage", text: "Scheduled posts, community management, DM responses and engagement." },
        { title: "Analyse", text: "Monthly analytics reports, iteration and growth sprints based on performance data." },
      ]}
      caseStudy={[
        { metric: "+48k", label: "Followers Added" },
        { metric: "7.2%", label: "Engagement Rate" },
        { metric: "12M", label: "Reels Views" },
        { metric: "+3.1x", label: "Inbound DMs" },
      ]}
      caseStudyText="A restaurant brand in Indore scaled from 2k to 50k followers in 6 months with our reels-first social strategy, achieving a 7.2% engagement rate and tripling inbound reservation DMs from Instagram."
      requirement="Social Media Handling"
      keyword="Social Media Marketing Agency Indore"
      seoTitle="Social Media Marketing Agency Indore | SMM Services - UDM Techno"
      seoDescription="Leading social media marketing agency in Indore. We manage Instagram, Facebook and LinkedIn for brands. +48k followers grown for a client in 6 months. Content, reels, community management and analytics."
      schema={schema}
    />
  );
}
