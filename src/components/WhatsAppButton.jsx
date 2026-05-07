export default function WhatsAppButton() {
  const phone = "919993663668";
  const message = encodeURIComponent(
    "Hi UDM Techno Solutions, I'd like to know more about your digital marketing services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with UDM Techno Solutions on WhatsApp"
      className="fixed bottom-12 sm:bottom-16 right-4 sm:right-6 z-50 w-12 h-12 sm:w-16 sm:h-16 bg-[#25D366] border-2 sm:border-4 border-black rounded-full brutalist-shadow flex items-center justify-center hover:scale-110 transition-transform animate-pulse hover:animate-none"
    >
      <iconify-icon icon="logos:whatsapp-icon" className="text-2xl sm:text-3xl" />
      <span className="absolute -top-1 -right-1 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 bg-brand border-2 border-black rounded-full" />
    </a>
  );
}
