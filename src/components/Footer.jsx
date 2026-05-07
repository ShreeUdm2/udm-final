import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Footer() {
  const footerRef = useScrollReveal({
    className: "is-running",
    once: true,
    threshold: 0.1,
  });

  return (
    <footer className="bg-black pt-12 sm:pt-20 pb-8 sm:pb-10" id="footer">
      <div
        ref={footerRef}
        className="animate-on-scroll max-w-7xl mx-auto px-4 sm:px-6"
        style={{ animation: "fadeSlideIn 0.8s ease-out 0.1s both" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 sm:gap-y-12 gap-x-8 mb-10 sm:mb-16 w-full">
          <div
            className="col-span-1 md:col-span-12 flex flex-wrap gap-2 sm:gap-3 md:gap-5 animate-on-scroll pb-4 items-baseline"
            style={{
              animation: "fadeSlideIn 1s ease-out 0.2s both",
              animationPlayState: "inherit",
            }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-9xl lg:text-[10rem] leading-[0.8] tracking-tighter font-black text-white select-none">
              UDM Techno
            </h2>
            <span className="text-base sm:text-xl md:text-3xl font-bold text-brand tracking-tighter relative -top-1 md:-top-3 border-2 border-brand px-2 sm:px-3 py-1 rounded-full rotate-3">
              SOLUTIONS
            </span>
          </div>

          <div
            className="col-span-1 md:col-span-12 grid grid-cols-1 lg:grid-cols-12 animate-on-scroll mt-2 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12 border-t-2 sm:border-t-4 border-zinc-800 pt-10 sm:pt-16"
            style={{
              animation: "fadeSlideIn 0.8s ease-out 0.3s both",
              animationPlayState: "inherit",
            }}
          >
            <div className="col-span-1 lg:col-span-5 flex flex-col items-start justify-between gap-8 sm:gap-10">
              <p className="text-lg sm:text-2xl text-zinc-400 font-bold tracking-tight leading-relaxed max-w-md">
                Indore's trusted digital marketing partner. Let's grow your brand together.
              </p>

              <div className="not-italic text-zinc-300 font-medium text-sm sm:text-base leading-relaxed space-y-3">
                <div className="flex items-start gap-3">
                  <iconify-icon icon="solar:map-point-linear" className="text-xl sm:text-2xl text-brand mt-1 shrink-0" />
                  <span>
                    Shagun Tower, Office No.508, Plot No. 7 PU4, AB Rd,<br />
                    above Apna Sweets, Vijay Nagar, Scheme No 54,<br />
                    Indore, Madhya Pradesh 452010
                  </span>
                </div>
                <a href="tel:+919993663668" className="flex items-center gap-3 hover:text-brand transition-colors">
                  <iconify-icon icon="solar:phone-linear" className="text-xl sm:text-2xl text-brand" />
                  099936 63668
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="https://calendly.com/udmtechnosolution/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand hover:bg-white text-white hover:text-black px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-black transition-colors duration-300 border-2 sm:border-4 border-brand hover:border-white tracking-tighter"
                >
                  Schedule a 15-min Call
                </a>
                <a
                  href="tel:+919993663668"
                  aria-label="Call us"
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-zinc-800 hover:bg-brand text-white flex items-center justify-center transition-colors duration-300 group border-2 sm:border-4 border-zinc-800 hover:border-brand"
                >
                  <iconify-icon
                    icon="solar:phone-calling-linear"
                    className="text-xl sm:text-2xl group-hover:rotate-12 transition-transform"
                  />
                </a>
              </div>
            </div>

            <div className="col-span-1 lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:pl-10 w-full">
              {[
                { title: "Sitemap", links: [["Home", "/"], ["About", "/about"], ["Case Studies", "/case-studies"], ["Blog", "/blog"], ["Contact", "/contact"]] },
                { title: "Services", links: [["SEO", "/services/seo"], ["Google My Business", "/services/google-my-business"], ["Meta Ads", "/services/meta-ads"], ["Google Ads", "/services/google-ads"], ["Website", "/services/website"], ["Social Media", "/services/social-media"]] },
                { title: "Social", links: [["Instagram", "https://instagram.com"], ["LinkedIn", "https://linkedin.com"], ["Facebook", "https://facebook.com"]] },
                { title: "Legal", links: [["Privacy Policy", "/privacy"], ["Terms & Conditions", "/terms"]], muted: true },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-4 sm:gap-6">
                  <span className="text-[11px] sm:text-[13px] uppercase tracking-widest text-brand font-black border-b-2 border-zinc-800 pb-2">
                    {col.title}
                  </span>
                  <ul className="flex flex-col gap-3 sm:gap-4">
                    {col.links.map(([label, href]) => {
                      const isInternal = href.startsWith("/");
                      const cls = `text-sm sm:text-lg font-bold tracking-tight transition-colors ${
                        col.muted
                          ? "text-zinc-500 hover:text-white"
                          : "text-white hover:text-brand"
                      }`;
                      return (
                        <li key={label}>
                          {isInternal ? (
                            <Link to={href} className={cls}>
                              {label}
                            </Link>
                          ) : (
                            <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                              {label}
                            </a>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row animate-on-scroll border-t-2 sm:border-t-4 border-zinc-900 pt-6 sm:pt-8 gap-4 items-center justify-between"
          style={{
            animation: "fadeSlideIn 1s ease-out 0.5s both",
            animationPlayState: "inherit",
          }}
        >
          <p className="text-sm sm:text-base text-zinc-500 font-bold tracking-tight text-center md:text-left">
            &copy; 2024 UDM Techno Solutions. All rights reserved. Indore, MP.
          </p>

          <div className="flex gap-4 sm:gap-6">
            <a
              href="https://www.instagram.com/udmtechnosolution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition-transform hover:scale-110"
            >
              <iconify-icon icon="mdi:instagram" className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://www.facebook.com/udmtechnosolution/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-blue-500 transition-transform hover:scale-110"
            >
              <iconify-icon icon="mdi:facebook" className="text-2xl sm:text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/udm-techno-solutions/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-blue-400 transition-transform hover:scale-110"
            >
              <iconify-icon icon="mdi:linkedin" className="text-2xl sm:text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
