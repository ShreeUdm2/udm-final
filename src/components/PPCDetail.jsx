import { useState } from "react";
import FadeUp from "./FadeUp";

export default function PPCDetail() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const message = `New Lead 🚀%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;

    // Replace with your WhatsApp number (with country code)
    const whatsappNumber = "919993663668";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="ppc"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 bg-zinc-100 rounded-[24px] sm:rounded-[50px] my-6 sm:my-10 border-2 sm:border-4 border-black brutalist-shadow"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">

        <div>
          <div className="inline-flex items-center gap-2 bg-brand text-brand-foreground font-bold px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-black rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <iconify-icon icon="solar:mouse-circle-linear" /> PPC Campaigns
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-tight mb-4 sm:mb-6">
            Google Ads & Meta Ads Management in Indore
          </h2>

          <p className="text-base sm:text-xl text-zinc-700 font-medium mb-6 sm:mb-8">
            Stop wasting money on clicks that do not convert. Our certified PPC specialists in Indore build hyper-targeted ad campaigns on Google and Meta that turn your budget into measurable revenue. We have reduced CPL by 48% and delivered 6.4x ROAS for clients across India.
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10 font-bold text-base sm:text-lg">
            {[
              "Google Ads Management",
              "Retargeting Campaigns",
              "Conversion Rate Optimization",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <iconify-icon
                  icon="solar:check-circle-linear"
                  className="text-xl sm:text-2xl text-brand bg-black rounded-full"
                />
                {i}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto bg-black text-white text-base sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl brutalist-shadow border-2 border-black hover:bg-zinc-800 transition-colors"
          >
            Start Advertising
          </button>
        </div>

        <div className="relative h-[280px] sm:h-[400px]">
          <div className="absolute inset-0 bg-white border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] brutalist-shadow p-4 sm:p-8 flex flex-col justify-center gap-4 sm:gap-6 z-10">

            <div className="flex justify-between items-center border-b-2 sm:border-b-4 border-black pb-3 sm:pb-4">
              <span className="text-base sm:text-xl font-bold uppercase">ROI Tracker</span>
              <span className="bg-brand text-brand-foreground px-2 sm:px-3 py-1 rounded border-2 border-black font-bold text-sm sm:text-base">
                Live
              </span>
            </div>

            <div className="flex items-end gap-2 h-28 sm:h-40">
              <div className="w-1/4 bg-zinc-200 h-[20%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-zinc-300 h-[40%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-zinc-800 h-[60%] border-2 border-black rounded-t" />
              <div className="w-1/4 bg-brand h-[100%] border-2 border-black rounded-t relative">
                <iconify-icon
                  icon="solar:cursor-click-linear"
                  className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl"
                />
              </div>
            </div>

          </div>

          <div className="absolute inset-0 bg-brand border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />
        </div>

      </FadeUp>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white border-2 sm:border-4 border-black rounded-2xl p-5 sm:p-8 w-full max-w-md brutalist-shadow relative">

            <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">Get Started</h3>

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

            {/* CLOSE BUTTON */}
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