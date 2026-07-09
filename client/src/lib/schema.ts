/**
 * Structured Data (JSON-LD) helpers for SEO
 */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "National Freedom Studio",
  "url": "https://nationalfreedomstudio.com",
  "description": "National Freedom is a landmark studio where some of the most original records of the last two decades were made.",
  "logo": "https://nationalfreedomstudio.com/logo.png",
  "sameAs": [
    "https://twitter.com/nationalfreedomstudio",
    "https://instagram.com/nationalfreedomstudio"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "potentialAction": {
    "@type": "Action",
    "name": "Contact",
    "target": "https://nationalfreedomstudio.com/contact"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const creativeWorkSchema = (title: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": title,
  "description": description,
  "url": url,
  "publisher": {
    "@type": "Organization",
    "name": "National Freedom Studio",
    "url": "https://nationalfreedomstudio.com"
  }
});
