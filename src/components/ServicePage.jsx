import { useState } from "react";
import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import SEOHead from "./SEOHead";
import portfolioPDF from "../assets/portfolio.pdf";

export default function ServicePage(props) {
  const [showPDF, setShowPDF] = useState(false);

  return (
    <PageShell>
      {props.seoTitle && (
        <SEOHead
          title={props.seoTitle}
          description={props.seoDescription}
          schema={props.schema}
        />
      )}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-10 sm:pb-14 lg:pt-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-brand text-brand-foreground border-2 border-black px-3 py-1 rounded-full font-black text-xs -rotate-2 mb-4 sm:mb-5">
              <iconify-icon icon={props.icon} className="text-base sm:text-lg" />
              {props.badge}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.05] mb-4 sm:mb-5">
              {props.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl font-bold text-zinc-800 mb-3 sm:mb-4 leading-snug">{props.tagline}</p>
            <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed mb-5 sm:mb-7 max-w-2xl">
              {props.description}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-black text-brand border-2 border-black rounded-xl px-5 sm:px-6 py-3 font-black brutalist-shadow text-center text-sm sm:text-base"
              >
                Get Your Free Growth Plan Today
              </Link>
              <button
                onClick={() => setShowPDF(true)}
                className="bg-white text-black border-2 border-black rounded-xl px-5 sm:px-6 py-3 font-black brutalist-shadow text-sm sm:text-base"
              >
                View Our Portfolio (PDF)
              </button>
            </div>
            <p className="text-xs text-zinc-500 mt-3 sm:mt-4">
              Targeted keyword: <span className="font-bold text-zinc-700">{props.keyword}</span> · Local SEO: Bhopal / Indore / India
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white border-2 border-black rounded-2xl sm:rounded-3xl brutalist-shadow p-5 sm:p-6 md:p-8">
              <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">What you get</h3>
              <ul className="space-y-2">
                {props.benefits.slice(0, 5).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-zinc-800 font-semibold text-sm sm:text-base">
                    <iconify-icon icon="solar:check-circle-bold" className="text-xl sm:text-2xl text-brand mt-0.5 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t-2 border-dashed border-zinc-200">
                <a
                  href="https://calendly.com/udmtechnosolution/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-brand text-brand-foreground border-2 border-black rounded-xl px-4 sm:px-5 py-3 font-black brutalist-shadow text-sm sm:text-base"
                >
                  Schedule a 15-min Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 border-y-2 sm:border-y-4 border-black py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tighter">Key Benefits</h2>
          <p className="text-sm sm:text-base text-zinc-700 mb-6 sm:mb-8 max-w-2xl">
            Why businesses in India pick us for {props.badge.toLowerCase()}.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {props.benefits.map((b) => (
              <div
                key={b}
                className="bg-white border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-5 brutalist-shadow flex items-start gap-3"
              >
                <iconify-icon icon="solar:check-circle-bold" className="text-xl sm:text-2xl text-brand shrink-0 mt-0.5" />
                <p className="font-bold text-zinc-800 leading-snug text-sm sm:text-base">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 tracking-tighter">Our Process</h2>
        <p className="text-sm sm:text-base text-zinc-700 mb-6 sm:mb-8 max-w-2xl">A clear, step-by-step playbook engineered to deliver results.</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {props.process.map((p, i) => (
            <div key={p.title} className="bg-black text-white border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-5">
              <div className="text-brand font-black text-2xl sm:text-3xl mb-2">0{i + 1}</div>
              <h3 className="font-black text-base sm:text-xl mb-2">{p.title}</h3>
              <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand border-y-2 sm:border-y-4 border-black py-10 sm:py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 text-brand-foreground tracking-tighter">
            Case Study &amp; Results
          </h2>
          <p className="text-sm sm:text-base text-brand-foreground/80 font-bold mb-6 sm:mb-8 max-w-2xl">
            Proof over promises — here's the data from a recent engagement.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-5 sm:mb-6">
            {props.caseStudy.map((c) => (
              <div key={c.label} className="bg-white border-2 border-black rounded-xl sm:rounded-2xl p-4 sm:p-5 brutalist-shadow">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter">{c.metric}</div>
                <div className="font-bold text-zinc-600 text-xs sm:text-sm mt-1">{c.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm sm:text-lg font-bold text-brand-foreground max-w-3xl leading-relaxed">
            {props.caseStudyText}
          </p>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 mt-5 sm:mt-6 text-brand-foreground font-black underline underline-offset-4 text-sm sm:text-base"
          >
            View more case studies
            <iconify-icon icon="solar:arrow-right-up-linear" className="text-lg sm:text-xl" />
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-tighter mb-4 leading-[1.1]">
          Ready to grow? Get Your Free Growth Plan Today.
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-zinc-700 mb-5 sm:mb-7 max-w-2xl mx-auto">
          We rank businesses in the Top 10 on Google and generate consistent leads.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="bg-black text-brand border-2 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 font-black brutalist-shadow text-sm sm:text-base md:text-lg"
          >
            Contact Our Team
          </Link>
          <a
            href="https://calendly.com/udmtechnosolution/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-2 border-black rounded-xl px-5 sm:px-7 py-3 sm:py-4 font-black brutalist-shadow text-sm sm:text-base md:text-lg"
          >
            Schedule a Call
          </a>
        </div>
      </section>

      {showPDF && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-2 sm:p-0">
          <div className="absolute top-0 left-0 w-full h-12 bg-zinc-900 flex items-center justify-between px-4 text-white text-xs sm:text-sm font-semibold">
            <span>Portfolio Preview — Websites built · Ad results · SEO rankings</span>
            <button
              onClick={() => setShowPDF(false)}
              className="bg-white text-black w-8 h-8 rounded-full border-2 border-black flex items-center justify-center"
            >
              X
            </button>
          </div>
          <div className="w-full sm:w-[95%] h-[75%] sm:h-[80%] mt-12 bg-white border-2 border-black rounded-xl overflow-hidden">
            <iframe src={portfolioPDF} title="Portfolio PDF" className="w-full h-full" />
          </div>
        </div>
      )}
    </PageShell>
  );
}
