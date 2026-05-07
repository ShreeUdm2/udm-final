import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://udmtechno.com";
const SITE_NAME = "UDM Techno Solutions";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEOHead({
  title,
  description,
  canonical,
  schema,
  ogType = "website",
  ogImage,
  noindex = false,
}) {
  const location = useLocation();
  const url = canonical || `${SITE_URL}${location.pathname}`;
  const img = ogImage || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = title;

    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", description);
    if (noindex) {
      setMeta("name", "robots", "noindex, nofollow");
    } else {
      const existing = document.querySelector('meta[name="robots"]');
      if (existing) existing.remove();
    }

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", img);
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", img);

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", url);

    const schemaId = "seo-schema";
    let script = document.getElementById(schemaId);
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }

    return () => {
      const s = document.getElementById(schemaId);
      if (s) s.remove();
    };
  }, [title, description, url, img, ogType, noindex, schema]);

  return null;
}

export { SITE_URL, SITE_NAME };
