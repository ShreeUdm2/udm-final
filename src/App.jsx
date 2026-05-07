import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import Blogs, { BlogPost } from "./pages/Blogs.jsx";
import { PrivacyPolicy, Terms } from "./pages/Legal.jsx";
import CaseStudiesPage, { CaseStudyDetail } from "./pages/CaseStudiesPage.jsx";
import Contact from "./pages/Contact.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import SEOPage from "./pages/services/SEO.jsx";
import GMBPage from "./pages/services/GMB.jsx";
import MetaAdsPage from "./pages/services/MetaAds.jsx";
import GoogleAdsPage from "./pages/services/GoogleAds.jsx";
import WebsitePage from "./pages/services/Website.jsx";
import SocialMediaPage from "./pages/services/SocialMedia.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services/seo" element={<SEOPage />} />
        <Route path="/services/google-my-business" element={<GMBPage />} />
        <Route path="/services/meta-ads" element={<MetaAdsPage />} />
        <Route path="/services/google-ads" element={<GoogleAdsPage />} />
        <Route path="/services/website" element={<WebsitePage />} />
        <Route path="/services/social-media" element={<SocialMediaPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
