import React from "react";

const SITE_URL = "https://pitahaya.studio";
const DEFAULT_OG_IMAGE = `${SITE_URL}/pitahaya-studio.jpg`;
const LOGO_URL = `${SITE_URL}/icon.png`;

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pitahaya Studio",
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Estudio digital en México especializado en desarrollo web, branding y diseño UX/UI. Creamos experiencias digitales que impulsan tu negocio.",
  sameAs: [
    "https://www.facebook.com/profile.php?id=61550735810948",
    "https://www.instagram.com/pitahaya__studio/",
    "https://www.linkedin.com/company/pitahayastudio/",
  ],
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: "Pitahaya Studio",
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Estudio digital en México especializado en desarrollo de sitios web, ecommerce, branding y diseño UX/UI.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "MX",
    addressRegion: "México",
  },
  areaServed: "MX",
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Pitahaya Studio",
  description:
    "Estudio digital en México especializado en desarrollo de sitios web, ecommerce, branding y diseño UX/UI.",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
  inLanguage: "es-MX",
};

const PROFESSIONAL_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#professionalservice`,
  name: "Pitahaya Studio",
  url: SITE_URL,
  logo: LOGO_URL,
  description:
    "Estudio digital en México especializado en desarrollo web, branding y diseño UX/UI.",
  areaServed: { "@type": "Country", name: "México" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios digitales",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo web" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño UX/UI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecommerce" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diseño digital" } },
    ],
  },
};

const SERVICE_SCHEMAS = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Desarrollo web",
    description: "Desarrollo de sitios web profesionales y personalizados en México.",
    provider: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diseño UX/UI",
    description: "Diseño de experiencias de usuario e interfaces para productos digitales.",
    provider: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Branding",
    description: "Construcción de identidad de marca e imagen corporativa.",
    provider: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Ecommerce",
    description: "Desarrollo de tiendas en línea y soluciones de comercio electrónico.",
    provider: { "@id": `${SITE_URL}/#organization` },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Diseño digital",
    description: "Diseño digital, ilustración, banners y marketing digital.",
    provider: { "@id": `${SITE_URL}/#organization` },
  },
];

const BREADCRUMB_HOME = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
  ],
};

const BREADCRUMB_ABOUT = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sobre nosotros", item: `${SITE_URL}/about` },
  ],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué incluye el desarrollo de un sitio web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El desarrollo de un sitio web profesional incluye diseño a medida, desarrollo responsive, optimización para buscadores y entrega lista para publicar.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es diseño UX/UI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El diseño UX/UI combina la experiencia de usuario (UX) con el diseño de interfaces (UI) para crear productos digitales usables, accesibles y atractivos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué mi negocio necesita una página web?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Una página web da credibilidad, permite que te encuentren en internet, facilita el contacto con clientes y abre oportunidades de venta en línea.",
      },
    },
  ],
};

/**
 * Renders JSON-LD script tags for structured data.
 * Use in Gatsby Head alongside meta tags.
 */
export function StructuredData({ page = "index", includeFaq = false }) {
  const schemas = [
    ORGANIZATION_SCHEMA,
    LOCAL_BUSINESS_SCHEMA,
    WEBSITE_SCHEMA,
    PROFESSIONAL_SERVICE_SCHEMA,
    ...SERVICE_SCHEMAS,
    page === "about" ? BREADCRUMB_ABOUT : BREADCRUMB_HOME,
  ];
  if (includeFaq) schemas.push(FAQ_SCHEMA);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export { SITE_URL, DEFAULT_OG_IMAGE, LOGO_URL };
