import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import SEOHead from "@/components/SEOHead";

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact UDM Techno Solutions",
    "description": "Get in touch with UDM Techno Solutions for a free digital marketing consultation. Call +91 99936 63668 or visit our Indore office.",
    "url": "https://udmtechno.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "UDM Techno Solutions",
      "telephone": "+91-99936-63668",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shagun Tower, Office No. 508, Plot No. 7 PU4, AB Rd, above Apna Sweets, Vijay Nagar, Scheme No 54",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "postalCode": "452010",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <PageShell>
      <SEOHead
        title="Contact UDM Techno Solutions | Free Marketing Consultation Indore"
        description="Contact UDM Techno Solutions for a free digital marketing consultation. Get your custom growth plan for SEO, Google Ads, Meta Ads or website development. Call +91 99936 63668 or visit our Indore office."
        schema={schema}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-10 sm:pb-14 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          <div className="lg:col-span-6">
            <div className="inline-block bg-brand text-brand-foreground font-black px-3 py-1 border-2 border-black rounded-lg text-xs sm:text-sm -rotate-2 mb-4 sm:mb-5">
              Contact Us
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-4 sm:mb-5">
              Get Your Free Growth Plan from Indore's Top Digital Marketing Agency
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 mb-6 sm:mb-8 leading-relaxed max-w-xl">
              Tell us about your business and goals. Our team of digital marketing specialists in Indore will create a custom strategy to rank you in the Top 10 on Google and generate consistent, qualified leads.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <a
                href="tel:+919993663668"
                className="flex items-center gap-3 sm:gap-4 bg-white border-2 border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 brutalist-shadow hover:-translate-y-0.5 transition-transform"
              >
                <iconify-icon icon="solar:phone-calling-linear" className="text-2xl sm:text-3xl text-brand" />
                <div>
                  <div className="font-black text-base sm:text-lg">Call Us Now</div>
                  <div className="text-zinc-700 font-semibold text-sm sm:text-base">+91 99936 63668</div>
                </div>
              </a>
              <a
                href="https://calendly.com/udmtechnosolution/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 sm:gap-4 bg-white border-2 border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 brutalist-shadow hover:-translate-y-0.5 transition-transform"
              >
                <iconify-icon icon="solar:calendar-linear" className="text-2xl sm:text-3xl text-brand" />
                <div>
                  <div className="font-black text-base sm:text-lg">Schedule a Free 15-min Strategy Call</div>
                  <div className="text-zinc-700 font-semibold text-xs sm:text-sm">calendly.com/udmtechnosolution</div>
                </div>
              </a>
              <div className="flex items-start gap-3 sm:gap-4 bg-white border-2 border-black rounded-xl sm:rounded-2xl p-3 sm:p-4 brutalist-shadow">
                <iconify-icon icon="solar:map-point-linear" className="text-2xl sm:text-3xl text-brand shrink-0 mt-0.5" />
                <div>
                  <div className="font-black text-base sm:text-lg">Visit Our Indore Office</div>
                  <div className="text-zinc-700 font-semibold text-xs sm:text-sm leading-snug">
                    Shagun Tower, Office No. 508,<br />
                    Plot No. 7 PU4, AB Rd, above Apna Sweets,<br />
                    Vijay Nagar, Scheme No 54,<br />
                    Indore, Madhya Pradesh 452010
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <LeadForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
