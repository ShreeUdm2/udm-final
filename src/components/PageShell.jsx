import Navigation from "./Navigation";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

export default function PageShell({ children }) {
  return (
    <div className="bg-background bg-grid-pattern text-foreground antialiased min-h-screen">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
