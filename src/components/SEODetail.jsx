import { useState } from "react";
import FadeUp from "./FadeUp";

export default function SEODetail() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const message = `SEO Lead 🚀%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;

    const whatsappNumber = "919993663668";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="seo"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 border-t-2 sm:border-t-4 border-black border-dashed"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
        <div className="order-2 lg:order-1 relative h-[280px] sm:h-[400px]">
          <div className="absolute inset-0 bg-white border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] brutalist-shadow p-4 sm:p-8 flex flex-col justify-between z-10">
            <div className="w-full h-1/2 bg-zinc-100 border-2 sm:border-4 border-black rounded-xl p-3 sm:p-4 flex gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-zinc-300 rounded-full border-2 border-black shrink-0" />
              <div className="flex-1 space-y-3">
                <div className="w-3/4 h-3 sm:h-4 bg-zinc-300 rounded" />
                <div className="w-1/2 h-3 sm:h-4 bg-zinc-300 rounded" />
              </div>
            </div>
            <div className="w-full h-[40%] bg-brand text-white border-2 sm:border-4 border-black rounded-xl p-3 sm:p-4 flex items-center justify-between">
              <span className="text-lg sm:text-2xl font-black uppercase tracking-tighter">Rank #1</span>
              <iconify-icon icon="solar:medal-star-linear" className="text-2xl sm:text-4xl" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 bg-black text-brand font-bold px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-black rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <iconify-icon icon="solar:magnifer-zoom-in-linear" /> SEO Services
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-4 sm:mb-6">
            SEO Services in Indore: Dominate Google Search Results
          </h2>

          <p className="text-base sm:text-xl text-zinc-700 font-medium mb-6 sm:mb-8">
            With 8+ years of SEO experience and 90+ keywords ranked on page 1, our team uses data-driven strategies, technical audits, and authority link building to push your business to the top of Google. We have generated 2.4M+ leads for businesses across Indore, Bhopal and India.
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10 font-bold text-base sm:text-lg">
            {["Technical SEO Audits", "On-Page Optimization", "Authority Link Building"].map(
              (i) => (
                <li key={i} className="flex items-center gap-3">
                  <iconify-icon
                    icon="solar:check-circle-linear"
                    className="text-xl sm:text-2xl text-brand bg-black rounded-full"
                  />
                  {i}
                </li>
              ),
            )}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto bg-brand text-brand-foreground text-base sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-black transition-colors"
          >
            Get a Free SEO Audit
          </button>
        </div>
      </FadeUp>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white border-2 sm:border-4 border-black rounded-2xl p-5 sm:p-8 w-full max-w-md brutalist-shadow relative">

            <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">SEO Audit Request</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="border-2 border-black p-3 rounded-lg font-medium"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Your Number"
                required
                className="border-2 border-black p-3 rounded-lg font-medium"
              />
              <input
                name="address"
                type="text"
                placeholder="Your Address"
                required
                className="border-2 border-black p-3 rounded-lg font-medium"
              />

              <button
                type="submit"
                className="bg-black text-white font-bold py-3 rounded-lg border-2 border-black hover:bg-zinc-800"
              >
                Submit
              </button>
            </form>

            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}