import { useState } from "react";
import portfolioPDF from "../assets/portfolio.pdf";

export default function Hero() {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <>
      <section className="w-full min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] px-4 sm:px-6 py-6 lg:py-1 relative">
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center min-h-[320px] sm:min-h-[380px] lg:h-[480px]">

          <div className="max-w-xl hero-content w-full md:w-auto">
            <div className="inline-block border-2 border-black px-3 py-1 rounded-full font-bold mb-4 text-xs sm:text-sm -rotate-2 brutalist-shadow">
              We make brands go crazy online
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem] font-bold tracking-tighter leading-[1] mb-4 uppercase">
              EXPLODE YOUR <br />
              <span
                className="bg-clip-text"
                style={{
                  WebkitTextStroke: "2px black",
                  color: "hsl(var(--brand))",
                }}
              >
                DIGITAL GROWTH
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-800 mb-6 leading-snug font-medium">
              Indore's top-rated digital marketing agency. We help businesses rank on
              Google, generate qualified leads, and scale revenue through SEO, paid ads,
              websites and social media.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 font-bold">
              <a
                href="https://calendly.com/udmtechnosolution/30min?month=2026-04"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-brand text-sm sm:text-base px-5 sm:px-6 py-3 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-2 group hover:bg-zinc-900 transition-colors"
              >
                Book a Call
                <iconify-icon
                  icon="solar:arrow-right-up-linear"
                  className="text-xl group-hover:rotate-45 transition-transform"
                />
              </a>

              <button
                onClick={() => setShowPDF(true)}
                className="bg-white text-black text-sm sm:text-base px-5 sm:px-6 py-3 rounded-2xl brutalist-shadow border-2 border-black flex justify-center items-center gap-2 hover:bg-zinc-100 transition-colors"
              >
                See Our Work
              </button>
            </div>
          </div>

          <div className="relative w-full h-[300px] sm:h-[380px] lg:h-[420px] items-center justify-center hidden md:flex hero-illustration">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[65%] h-[80%] bg-brand border-2 border-black rounded-[24px] rotate-6 brutalist-shadow translate-x-4 translate-y-4" />
              <div className="absolute w-[65%] h-[80%] bg-white border-2 border-black rounded-[24px] p-4 flex flex-col z-10 brutalist-shadow">
                <div className="flex justify-between items-center border-b-2 border-black pb-2 mb-4">
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-zinc-200 border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-zinc-200 border-2 border-black" />
                    <div className="w-3 h-3 rounded-full bg-zinc-200 border-2 border-black" />
                  </div>
                  <div className="text-sm font-bold uppercase">Traffic Growth</div>
                </div>
                <div className="flex-1 flex items-end justify-between gap-2 relative">
                  <div className="w-1/4 h-[30%] bg-zinc-100 border-2 border-black rounded-t-lg" />
                  <div className="w-1/4 h-[50%] bg-zinc-100 border-2 border-black rounded-t-lg" />
                  <div className="w-1/4 h-[75%] bg-brand border-2 border-black rounded-t-lg relative">
                    <iconify-icon
                      icon="solar:graph-up-linear"
                      className="absolute -top-10 left-1/2 -translate-x-1/2 text-2xl text-black"
                    />
                  </div>
                  <div className="w-1/4 h-[100%] bg-black border-2 border-black rounded-t-lg relative">
                    <div className="absolute -top-6 -right-4 bg-white border-2 border-black px-2 py-1 rounded-full font-black text-sm brutalist-shadow rotate-12">
                      +428%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showPDF && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-2 sm:p-0">
          <div className="absolute top-0 left-0 w-full h-12 bg-zinc-900 flex items-center justify-between px-4 text-white text-xs sm:text-sm font-semibold">
            <span>Portfolio Preview</span>
            <button
              onClick={() => setShowPDF(false)}
              className="bg-white text-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
            >
              X
            </button>
          </div>
          <div className="w-full sm:w-[95%] h-[75%] sm:h-[80%] mt-12 bg-white border-2 border-black rounded-xl overflow-hidden">
            <iframe
              src={portfolioPDF}
              title="Portfolio PDF"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
