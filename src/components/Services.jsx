import { Link } from "react-router-dom";
import FadeUp from "./FadeUp";

function ServiceCard({ icon, title, href, variant }) {
  const styles = {
    light: "bg-zinc-100 text-black hover:bg-brand hover:text-white",
    brand: "bg-brand text-white hover:bg-black hover:text-white",
    dark: "bg-black text-white hover:bg-zinc-800",
  }[variant];

  const iconColor =
    variant === "dark"
      ? "text-brand"
      : variant === "brand"
      ? "text-white"
      : "text-black group-hover:text-white";

  const arrowWrap =
    variant === "dark"
      ? "border-zinc-700 bg-zinc-900 group-hover:border-brand"
      : variant === "brand"
      ? "border-black bg-white text-black group-hover:border-white"
      : "border-black bg-white group-hover:bg-black group-hover:text-brand";

  const linkColor =
    variant === "dark"
      ? "text-brand"
      : variant === "brand"
      ? "text-white"
      : "text-black group-hover:text-white";

  const isInternal = href.startsWith("/");
  const Wrapper = isInternal ? Link : "a";
  const wrapperProps = isInternal ? { to: href } : { href };

  return (
    <div
      className={`${styles} p-5 rounded-[22px] border-2 border-black brutalist-shadow flex flex-col justify-between min-h-[230px] group transition-colors h-full`}
    >
      <div>
        <iconify-icon
          icon={icon}
          className={`text-[2.2rem] mb-3 ${iconColor} group-hover:rotate-12 transition-transform inline-block`}
        />
        <h3 className="text-xl font-black tracking-tight leading-snug mb-2 whitespace-pre-line">
          {title}
        </h3>
      </div>

      <Wrapper
        {...wrapperProps}
        className={`flex items-center gap-2 text-base font-bold mt-auto ${linkColor}`}
      >
        <span
          className={`w-9 h-9 rounded-full border ${arrowWrap} flex items-center justify-center transition-colors`}
        >
          <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg" />
        </span>
        Learn more
      </Wrapper>
    </div>
  );
}

export default function Services() {
  const services = [
    { icon: "solar:letter-opened-linear", title: "Search Engine\nOptimization (SEO)", href: "/services/seo", variant: "light" },
    { icon: "solar:map-point-linear", title: "Google My Business\nOptimization", href: "/services/google-my-business", variant: "brand" },
    { icon: "solar:smartphone-update-linear", title: "Meta Ads\n(Facebook & Instagram)", href: "/services/meta-ads", variant: "dark" },
    // { icon: "solar:mouse-circle-linear", title: "Google\nAds", href: "/services/google-ads", variant: "light" },
    { icon: "solar:target-linear", title: "Lead\nGeneration", href: "/contact", variant: "brand" },
    { icon: "solar:chat-round-dots-linear", title: "Social Media\nMarketing", href: "/services/social-media", variant: "dark" },
    { icon: "solar:laptop-linear", title: "Website\nDevelopment", href: "/services/website", variant: "light" },
    // { icon: "solar:user-speak-linear", title: "Influencer\nMarketing", href: "/contact", variant: "brand" },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 py-10">
      <FadeUp className="grid lg:grid-cols-12 gap-6 items-center mb-8">
        <div className="lg:col-span-8">
          <div className="inline-block bg-brand text-brand-foreground font-bold px-3 py-1 border-2 border-black rounded-lg mb-3 text-sm -rotate-2">
            Our Services
          </div>

          <h2 className="text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
            Digital Marketing Services in Indore That Rank You in the <span className="text-brand">Top 10 on Google</span>
          </h2>
          <p className="text-zinc-700 mt-3 font-semibold max-w-2xl">
            Full-stack digital marketing under one roof in Indore. SEO, Google Ads, Meta Ads, social media management, website development and lead generation for businesses across India.
          </p>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end relative">
          <div className="w-32 h-32 bg-white border-2 border-black rounded-full brutalist-shadow flex items-center justify-center relative z-10 group">
            <iconify-icon
              icon="solar:target-linear"
              className="text-[3rem] text-black group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute w-32 h-32 bg-brand border-2 border-black rounded-full translate-x-3 translate-y-3" />
          <iconify-icon
            icon="solar:star-fall-linear"
            className="absolute -top-2 right-6 text-2xl text-black rotate-12 z-20 animate-pulse"
          />
        </div>
      </FadeUp>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {services.map((s) => (
          <FadeUp key={s.title}>
            <ServiceCard {...s} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
