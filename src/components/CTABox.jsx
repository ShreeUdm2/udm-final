import FadeUp from "./FadeUp";

export default function CTABox() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-24">
      <FadeUp className="bg-zinc-100 p-6 sm:p-10 lg:p-16 rounded-[24px] sm:rounded-[40px] border-2 sm:border-4 border-black brutalist-shadow flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 relative overflow-hidden">

        <div className="absolute -right-10 -top-10 w-28 sm:w-40 h-28 sm:h-40 bg-brand border-2 sm:border-4 border-black rounded-full opacity-50 z-0" />

        <div className="max-w-2xl relative z-10">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter mb-4 sm:mb-6">
            Ready to Grow Your Business Online?
          </h3>
          <p className="text-base sm:text-xl text-zinc-700 font-medium">
            Get a free growth plan from Indore's top digital marketing agency. We help businesses rank on Google, generate qualified leads and scale revenue. 150+ happy clients across India.
          </p>
        </div>

        <a
          href="tel:+919993663668"
          className="bg-black text-white text-base sm:text-xl font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-2xl brutalist-shadow border-2 sm:border-4 border-black whitespace-nowrap hover:bg-zinc-800 transition-colors relative z-10 w-full md:w-auto text-center inline-block"
        >
          Get your free proposal
        </a>

      </FadeUp>
    </section>
  );
}
