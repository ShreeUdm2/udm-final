import { useEffect, useState } from "react";
import FadeUp from "./FadeUp";

export default function SocialDetail() {
  const [open, setOpen] = useState(false);

  // 🔥 Load Elfsight Script Safely
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // ✅ SAME HANDLE SUBMIT AS CODE 1
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const address = e.target.address.value;

    const message = `New Lead 🚀%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;
    const whatsappNumber = "919993663668";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section
      id="social"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 border-t-2 sm:border-t-4 border-black border-dashed"
    >
      <FadeUp className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">

        <div className="order-2 lg:order-1 relative h-[280px] sm:h-[400px]">
          <div className="absolute inset-0 bg-brand border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] brutalist-shadow p-4 sm:p-8 flex items-center justify-center z-10">
            <div className="w-[70%] sm:w-[60%] h-[90%] bg-white border-2 sm:border-4 border-black rounded-[14px] sm:rounded-[20px] p-3 sm:p-4 flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 border-b-2 border-zinc-200 pb-2 sm:pb-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full border-2 border-black" />
                <div>
                  <div className="w-16 sm:w-20 h-2 sm:h-3 bg-zinc-300 rounded mb-1" />
                  <div className="w-10 sm:w-12 h-2 bg-zinc-200 rounded" />
                </div>
              </div>
              <div className="flex-1 bg-zinc-100 border-2 border-black rounded-xl flex items-center justify-center relative overflow-hidden">
                <iconify-icon icon="solar:heart-angle-linear" className="text-4xl sm:text-6xl text-black" />
                <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black text-white px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold rounded border-2 border-black">
                  10.5k Likes
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-black border-2 sm:border-4 border-black rounded-[20px] sm:rounded-[30px] translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4" />
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 bg-black text-white font-bold px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-black rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
            <iconify-icon icon="solar:smartphone-update-linear" /> Social Media
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6">
            Social Media Marketing Agency in Indore
          </h2>

          <p className="text-base sm:text-xl text-zinc-700 mb-6 sm:mb-8">
            Our social media team in Indore creates engaging, shareable content that turns followers into brand advocates. We have grown a restaurant brand from 2k to 50k followers and tripled their inbound DMs in just 6 months.
          </p>

          <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-10 font-bold text-base sm:text-lg">
            {[
              "Community Management",
              "Viral Content Strategy",
              "Influencer Partnerships",
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
            className="w-full sm:w-auto bg-white text-black text-base sm:text-xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-xl brutalist-shadow border-2 sm:border-4 border-black hover:bg-brand transition-colors"
          >
            Grow Your Audience
          </button>
        </div>
      </FadeUp>

      {/* 🔥 INSTAGRAM FEED */}
      <div className="mt-10">
        <div className="elfsight-app-189f8f4c-5a21-491a-877a-9c4f4ec41037"></div>
      </div>

      {/* ✅ SAME MODAL FROM CODE 1 */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white border-2 sm:border-4 border-black rounded-2xl p-5 sm:p-8 w-full max-w-md brutalist-shadow relative">

            <h3 className="text-xl sm:text-2xl font-black mb-4 sm:mb-6">Get Started</h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" type="text" placeholder="Your Name" required className="border-2 border-black p-3 rounded-lg" />
              <input name="phone" type="tel" placeholder="Your Number" required className="border-2 border-black p-3 rounded-lg" />
              <input name="address" type="text" placeholder="Your Address" required className="border-2 border-black p-3 rounded-lg" />

              <button type="submit" className="bg-black text-white py-3 rounded-lg">
                Submit
              </button>
            </form>

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