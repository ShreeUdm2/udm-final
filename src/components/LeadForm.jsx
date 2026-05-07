import { useState } from "react";

const REQUIREMENTS = [
  "Website",
  "SEO",
  "Google My Business",
  "Meta Ads",
  "Google Ads",
  "Social Media Handling",
  "YouTube Management",
  "Lead Generation",
];

const TIMELINES = ["Immediately", "This Week", "This Month", "Next Month"];

export default function LeadForm({ defaultRequirement = "Website", compact = false }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    requirement: defaultRequirement,
    start_timeline: "Immediately",
    message: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Please enter your name and phone number.");
      return;
    }
    const waMsg = encodeURIComponent(
      `Hi UDM Techno,%0A` +
        `Name: ${form.name}%0A` +
        `Phone: ${form.phone}%0A` +
        `Requirement: ${form.requirement}%0A` +
        `Start: ${form.start_timeline}%0A` +
        `Message: ${form.message || "-"}`
    );
    window.location.href = `https://wa.me/919993663668?text=${waMsg}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border-2 border-black rounded-3xl brutalist-shadow p-6 md:p-8 space-y-4 ${
        compact ? "" : "max-w-2xl w-full"
      }`}
    >
      <div>
        <label className="block text-sm font-black uppercase tracking-wider mb-1">Name</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border-2 border-black rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="Your full name"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-black uppercase tracking-wider mb-1">Phone Number</label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border-2 border-black rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="+91 99999 99999"
          required
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-black uppercase tracking-wider mb-1">Requirement</label>
          <select
            value={form.requirement}
            onChange={(e) => setForm({ ...form, requirement: e.target.value })}
            className="w-full border-2 border-black rounded-xl px-3 py-3 font-semibold bg-white"
          >
            {REQUIREMENTS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-black uppercase tracking-wider mb-1">Start</label>
          <select
            value={form.start_timeline}
            onChange={(e) => setForm({ ...form, start_timeline: e.target.value })}
            className="w-full border-2 border-black rounded-xl px-3 py-3 font-semibold bg-white"
          >
            {TIMELINES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-black uppercase tracking-wider mb-1">Custom Message</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={3}
          className="w-full border-2 border-black rounded-xl px-4 py-3 font-semibold focus:outline-none focus:ring-2 focus:ring-brand"
          placeholder="Tell us about your goals..."
        />
      </div>
      {error && <p className="text-red-600 font-bold text-sm">{error}</p>}
      <button
        type="submit"
        className="w-full bg-brand text-brand-foreground border-2 border-black rounded-xl px-6 py-4 text-lg font-black brutalist-shadow hover:-translate-y-0.5 transition-transform"
      >
        Send on WhatsApp
      </button>
      <p className="text-xs text-zinc-500 text-center">
        By submitting you agree to be contacted on WhatsApp. Your data is safe with us.
      </p>
    </form>
  );
}
