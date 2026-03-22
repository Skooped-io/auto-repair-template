import { useEffect } from "react";
import { seoConfig } from "@/lib/config";

interface SeoHeadProps {
  page: "home" | "about" | "services" | "specials" | "contact";
}

export function SeoHead({ page }: SeoHeadProps) {
  const pageSeo = seoConfig.seo[page];

  useEffect(() => {
    document.title = pageSeo.title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", pageSeo.description);
    setMeta("og:title", pageSeo.title, "property");
    setMeta("og:description", pageSeo.description, "property");

    // Schema.org JSON-LD
    const ldId = "schema-jsonld";
    let script = document.getElementById(ldId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = ldId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": seoConfig.businessNameFull,
      "telephone": seoConfig.phone,
      "email": seoConfig.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.address.street,
        "addressLocality": seoConfig.address.city,
        "addressRegion": seoConfig.address.state,
        "postalCode": seoConfig.address.zip,
      },
      "areaServed": seoConfig.serviceArea,
      "foundingDate": seoConfig.yearEstablished,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": seoConfig.reviewRating,
        "reviewCount": seoConfig.reviews.length.toString(),
      },
    });

    return () => {
      // Cleanup JSON-LD on unmount
    };
  }, [page, pageSeo]);

  return null;
}
