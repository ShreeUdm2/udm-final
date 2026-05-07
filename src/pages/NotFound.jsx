import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <SEOHead
        title="Page Not Found | UDM Techno Solutions"
        description="The page you are looking for does not exist. Return to UDM Techno Solutions homepage."
        noindex={true}
      />
      <div className="text-center px-4">
        <h1 className="mb-4 text-6xl sm:text-8xl font-black">404</h1>
        <p className="mb-4 text-lg sm:text-xl text-muted-foreground">This page does not exist.</p>
        <a href="/" className="text-brand font-bold underline hover:text-brand/90 text-base sm:text-lg">
          Return to Homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
