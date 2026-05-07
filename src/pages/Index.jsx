import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WildMarquee from "@/components/WildMarquee";
import LogoMarquee from "@/components/LogoMarquee";
import Services from "@/components/Services";
import SEODetail from "@/components/SEODetail";
import PPCDetail from "@/components/PPCDetail";
import SocialDetail from "@/components/SocialDetail";
import CTABox from "@/components/CTABox";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOHead from "@/components/SEOHead";

export default function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://udmtechno.com/#business",
    "name": "UDM Techno Solutions",
    "image": "https://udmtechno.com/favicon.ico",
    "description": "Full-stack digital marketing agency in Indore offering SEO, Google Ads, Meta Ads, website development, GMB optimization, social media management and lead generation services.",
    "url": "https://udmtechno.com",
    "telephone": "+91-99936-63668",
    "priceRange": "$$",
    "foundingDate": "2018",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shagun Tower, Office No. 508, Plot No. 7 PU4, AB Rd, above Apna Sweets, Vijay Nagar, Scheme No 54",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "452010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.7533",
      "longitude": "75.8937"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "19:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "85"
    },
    "sameAs": [
      "https://www.instagram.com/udmtechnosolution/",
      "https://www.facebook.com/udmtechnosolution/",
      "https://www.linkedin.com/company/udm-techno-solutions/"
    ]
  };

  return (
    <div className="bg-background bg-grid-pattern text-foreground antialiased min-h-screen">
      <SEOHead
        title="UDM Techno Solutions | Best Digital Marketing Agency in Indore"
        description="UDM Techno Solutions is a top-rated digital marketing agency in Indore, India. We help businesses rank in the Top 10 on Google and generate consistent leads through SEO, Google Ads, Meta Ads, website development and social media. 150+ happy clients."
        schema={schema}
      />
      <Navigation />
      <main>
        <h1 className="sr-only">Best Digital Marketing Agency in Indore - UDM Techno Solutions</h1>
        <Hero />
        <WildMarquee />
        <Services />
        <SEODetail />
        <PPCDetail />
        <SocialDetail />
        <CTABox />
        <CaseStudies />
        <LogoMarquee />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
