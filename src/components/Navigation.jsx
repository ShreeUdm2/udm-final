import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex justify-between items-center relative z-50">
      <Link to="/" className="flex items-center gap-2">
        <span className="text-2xl sm:text-4xl font-bold tracking-tighter">UDM Techno</span>
      </Link>

      <div className="hidden lg:flex items-center gap-8 text-base font-bold text-zinc-800 bg-white px-8 py-3 rounded-full border-2 border-black brutalist-shadow">
        <Link to="/" className="hover:text-brand transition-colors">Home</Link>
        <Link to="/about" className="hover:text-brand transition-colors">About</Link>
        <div className="relative group">
          <button className="hover:text-brand transition-colors flex items-center gap-1">
            Services
            <iconify-icon icon="solar:alt-arrow-down-linear" className="text-base" />
          </button>
          <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
            <div className="bg-white border-2 border-black rounded-2xl brutalist-shadow p-3 w-64">
              {[
                ["SEO Services", "/services/seo"],
                ["Google My Business", "/services/google-my-business"],
                ["Meta Ads", "/services/meta-ads"],
                ["Google Ads", "/services/google-ads"],
                ["Website Development", "/services/website"],
                ["Social Media", "/services/social-media"],
              ].map(([label, href]) => (
                <Link key={href} to={href} className="block px-3 py-2 rounded-lg hover:bg-brand hover:text-black font-bold">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Link to="/case-studies" className="hover:text-brand transition-colors">Case Studies</Link>
        <Link to="/blog" className="hover:text-brand transition-colors">Blog</Link>
        <Link to="/contact" className="hover:text-brand transition-colors">Contact</Link>
      </div>

      <div className="hidden lg:block">
        <a
          href="tel:+919993663668"
          className="bg-brand text-brand-foreground border-2 border-black rounded-xl px-6 py-3 font-bold text-base brutalist-shadow inline-block"
        >
          Get Start
        </a>
      </div>

      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(!open)}
        className="lg:hidden text-black bg-white p-2 border-2 border-black rounded-lg brutalist-shadow"
      >
        <iconify-icon icon={open ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl sm:text-3xl" />
      </button>

      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-[55]"
            onClick={() => setOpen(false)}
          />
          <div className="lg:hidden fixed top-0 right-0 h-full w-72 sm:w-80 bg-white border-l-2 border-black z-[60] p-5 pt-16 flex flex-col gap-1 overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full border-2 border-black bg-zinc-100 text-lg font-black"
            >
              X
            </button>
            <Link to="/" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">About</Link>
            <Link to="/services/seo" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">SEO</Link>
            <Link to="/services/google-my-business" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">GMB</Link>
            <Link to="/services/meta-ads" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Meta Ads</Link>
            <Link to="/services/google-ads" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Google Ads</Link>
            <Link to="/services/website" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Website</Link>
            <Link to="/services/social-media" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Social Media</Link>
            <Link to="/case-studies" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Case Studies</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Blog</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="font-bold px-3 py-3 rounded-lg hover:bg-brand text-base">Contact</Link>
            <a
              href="tel:+919993663668"
              onClick={() => setOpen(false)}
              className="bg-brand text-brand-foreground border-2 border-black rounded-xl px-4 py-3 font-black text-center mt-2"
            >
              Call Us
            </a>
          </div>
        </>
      )}
    </nav>
  );
}
