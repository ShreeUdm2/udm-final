import { Link } from "react-router-dom";
import PageShell from "@/components/PageShell";
import SEOHead from "@/components/SEOHead";
import team from "../assets/aboutTeam.jpeg";
import team1 from "../assets/about2.png";

const STATS = [
  { metric: "150+", label: "Happy Clients" },
  { metric: "8+", label: "Years of Expertise" },
  { metric: "2.4M+", label: "Leads Generated" },
  { metric: "98%", label: "Client Retention" },
];

const VALUES = [
  {
    icon: "solar:target-linear",
    title: "Our Mission",
    text: "Make digital growth accessible and profitable for every ambitious business in India. From Indore to pan-India, we deliver enterprise-grade marketing at SMB-friendly budgets.",
  },
  {
    icon: "solar:medal-ribbons-star-linear",
    title: "Our Values",
    text: "Transparency in every report. Obsession with measurable results. Creative excellence backed by data. Zero fluff, zero vanity metrics.",
  },
  {
    icon: "solar:rocket-linear",
    title: "Our Promise",
    text: "Every strategy we build is engineered to rank you in the Top 10 on Google, generate qualified leads, and deliver a clear return on your marketing investment.",
  },
];

const MILESTONES = [
  { year: "2018", title: "Founded in Indore", text: "Started with a team of 3 and a mission to bring enterprise-level digital marketing to local businesses in Madhya Pradesh." },
  { year: "2020", title: "Scaled to 10+ Industries", text: "Expanded into healthcare, D2C, real estate, education and professional services across Indore, Bhopal and central India." },
  { year: "2022", title: "15Cr+ Ad Spend Managed", text: "Managed profitable performance campaigns across Meta and Google for 80+ brands, generating over 2.4 million qualified leads." },
  { year: "2026", title: "Full-Stack Agency", text: "SEO, paid media, websites, content, social media and influencer marketing under one roof, serving businesses across India." },
];

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About UDM Techno Solutions",
    "description": "Learn about UDM Techno Solutions, a full-stack digital marketing agency in Indore with 8+ years of experience and 150+ happy clients.",
    "url": "https://udmtechno.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "UDM Techno Solutions",
      "foundingDate": "2018",
      "foundingLocation": "Indore, India",
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10, "maxValue": 50 },
      "knowsAbout": ["SEO", "Google Ads", "Meta Ads", "Website Development", "Social Media Marketing", "Google My Business Optimization"]
    }
  };

  return (
    <PageShell>
      <SEOHead
        title="About UDM Techno Solutions | Digital Marketing Agency Indore"
        description="Discover UDM Techno Solutions, Indore's trusted digital marketing agency since 2018. 150+ happy clients, 2.4M+ leads generated, 98% client retention. SEO, PPC, social media and web development experts."
        schema={schema}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-10 sm:pb-14 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-xs sm:text-sm -rotate-2 mb-4 sm:mb-5">
              About UDM Techno Solutions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-4 sm:mb-6">
              We Help Businesses Rank in the <span className="text-brand">Top 10 on Google</span> & Generate Consistent Leads
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-zinc-700 max-w-2xl">
              UDM Techno Solutions is a full-stack digital marketing agency headquartered in Indore, Madhya Pradesh. Since 2018, we have helped 150+ businesses across India grow their revenue through data-driven SEO, performance advertising, premium website development and strategic social media management.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5 brutalist-shadow">
                  <div className="text-2xl sm:text-3xl font-black">{s.metric}</div>
                  <div className="text-zinc-600 font-bold text-xs sm:text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          <div className="lg:col-span-7">
            <img src={team} alt="UDM Techno Solutions team of digital marketing experts at our Indore office" loading="lazy" className="rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-brand" />
          </div>
          <div className="lg:col-span-5 text-white">
            <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-5">A Crew of Digital Marketing Experts Obsessed with Results</h2>
            <p className="text-sm sm:text-base text-zinc-300">
              Our team of strategists, performance marketers, SEO specialists, designers and engineers work under one roof in Indore to deliver measurable growth for every client. We bring enterprise-grade marketing capabilities to businesses of all sizes across India.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {VALUES.map((v) => (
          <div key={v.title} className="bg-white border-2 border-black rounded-2xl sm:rounded-3xl p-5 sm:p-6 brutalist-shadow">
            <iconify-icon icon={v.icon} className="text-3xl sm:text-4xl text-brand mb-3" />
            <h3 className="text-xl sm:text-2xl font-black">{v.title}</h3>
            <p className="text-sm sm:text-base text-zinc-700">{v.text}</p>
          </div>
        ))}
      </section>

      <section className="bg-zinc-100 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 sm:gap-10">
          <img src={team1} alt="UDM Techno Solutions digital marketing team working on client campaigns in Indore" loading="lazy" className="rounded-2xl sm:rounded-3xl border-2 border-black" />
          <div>
            <h2 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-5">Why Brands in Indore and Across India Choose UDM Techno</h2>
            <ul className="space-y-3">
              {[
                "Full-stack team covering SEO, ads, social media, websites and content",
                "Data-driven decisions backed by real-time analytics and reporting",
                "Clear, transparent monthly reporting with actionable insights",
                "Proven results: 150+ clients, 2.4M+ leads generated, 98% retention rate",
              ].map((p) => (
                <li key={p} className="flex gap-2 font-semibold text-sm sm:text-base">
                  <iconify-icon icon="solar:check-circle-bold" className="text-brand shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-5 sm:mt-6 inline-block bg-black text-white px-5 sm:px-6 py-3 rounded-xl text-sm sm:text-base font-bold">
              Get Your Free Growth Plan
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <h2 className="text-2xl sm:text-3xl font-black mb-5 sm:mb-6">Our Journey: Key Milestones</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {MILESTONES.map((m) => (
            <div key={m.year} className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5">
              <div className="text-brand font-black text-sm sm:text-base">{m.year}</div>
              <h3 className="font-black text-sm sm:text-base">{m.title}</h3>
              <p className="text-xs sm:text-sm text-zinc-700">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
