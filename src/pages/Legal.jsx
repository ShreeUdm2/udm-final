import PageShell from "@/components/PageShell";
import SEOHead from "@/components/SEOHead";

export function PrivacyPolicy() {
  return (
    <PageShell>
      <SEOHead
        title="Privacy Policy | UDM Techno Solutions - Digital Marketing Agency"
        description="Read the privacy policy of UDM Techno Solutions, a digital marketing agency in Indore. Learn how we collect, use and protect your personal data."
        noindex={false}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 prose prose-zinc">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6">Privacy Policy</h1>
        <p>Last updated: April 2026</p>
        <p>
          UDM Techno Solutions ("we", "us", "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>

        <h2>1. Data We Collect</h2>
        <ul>
          <li>Information you provide via forms (name, phone number, requirement, message).</li>
          <li>Cookies and analytics data (pages visited, device type, referrer).</li>
          <li>Ads tracking data via Meta Pixel and Google Ads conversion tags.</li>
        </ul>

        <h2>2. How We Use Your Data</h2>
        <ul>
          <li>To respond to your inquiry and provide quotes or proposals.</li>
          <li>To improve our website, digital marketing services and user experience.</li>
          <li>To measure ad performance and build retargeting audiences.</li>
        </ul>

        <h2>3. Advertising and Tracking</h2>
        <p>
          We may use Meta (Facebook/Instagram) Pixel and Google Ads/Analytics to measure and optimise our marketing campaigns. You can opt out of personalised ads in your Google and Meta account settings.
        </p>

        <h2>4. User Consent</h2>
        <p>By submitting any form on this website or continuing to use this site, you consent to this Privacy Policy and our use of cookies for the purposes listed above.</p>

        <h2>5. Data Retention and Sharing</h2>
        <p>We retain your data only as long as needed to deliver our services or as required by law. We never sell your data. We may share data with trusted service providers (CRM, hosting, analytics platforms) under strict confidentiality obligations.</p>

        <h2>6. Your Rights</h2>
        <p>You may request access, correction or deletion of your personal data at any time by contacting us at the address below.</p>

        <h2>7. Contact UDM Techno Solutions</h2>
        <p>
          UDM Techno Solutions<br />
          Shagun Tower, Office 508, Vijay Nagar, Indore, Madhya Pradesh 452010<br />
          Phone: +91 99936 63668
        </p>
      </article>
    </PageShell>
  );
}

export function Terms() {
  return (
    <PageShell>
      <SEOHead
        title="Terms & Conditions | UDM Techno Solutions - Digital Marketing Agency"
        description="Read the terms and conditions for using UDM Techno Solutions website and digital marketing services. Governing law: India, jurisdiction Indore, Madhya Pradesh."
        noindex={false}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 prose prose-zinc">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-6">Terms and Conditions</h1>
        <p>Last updated: April 2026</p>
        <p>
          These Terms govern your use of the UDM Techno Solutions website and digital marketing services. By using this site you agree to these terms.
        </p>

        <h2>1. Our Services</h2>
        <p>We provide professional digital marketing services including SEO, Google My Business optimisation, Meta Ads, Google Ads, website development, social media management and lead generation for businesses in Indore and across India.</p>

        <h2>2. Use of This Website</h2>
        <p>You agree not to misuse this site, attempt unauthorised access, or use our content without written permission from UDM Techno Solutions.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content, branding, case studies and portfolio assets are the property of UDM Techno Solutions. You may not reproduce them without written consent.</p>

        <h2>4. Payments and Refunds</h2>
        <p>All retainers and project fees are outlined in a signed proposal. Campaign spends are billed separately. Refunds are governed by individual service agreements.</p>

        <h2>5. Results Disclaimer</h2>
        <p>Results depend on market conditions, competition and client cooperation. While we deliver best-in-class digital marketing services, no specific result is guaranteed.</p>

        <h2>6. Governing Law</h2>
        <p>These Terms are governed by the laws of India with jurisdiction in Indore, Madhya Pradesh.</p>

        <h2>7. Contact UDM Techno Solutions</h2>
        <p>
          UDM Techno Solutions<br />
          Shagun Tower, Office 508, Vijay Nagar, Indore, Madhya Pradesh 452010<br />
          Phone: +91 99936 63668
        </p>
      </article>
    </PageShell>
  );
}
