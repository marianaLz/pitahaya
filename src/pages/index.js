import React from "react";

import { Flex } from "@chakra-ui/react";

import Layout from "../components/layout";
import { StructuredData, DEFAULT_OG_IMAGE, SITE_URL } from "../components/Seo";

import About from "../components/sections/Home/About";
import Clients from "../components/sections/Home/Clients";
import Pitahaya from "../components/sections/Home/Pitahaya";
import Services from "../components/sections/Home/Services";
import Contact from "../components/sections/Common/Contact";

const LANDING_TITLE =
  "Pitahaya Studio | Desarrollo de sitios web, branding y diseño digital en México";
const LANDING_DESCRIPTION =
  "Estudio digital en México especializado en desarrollo de sitios web, ecommerce, branding y diseño UX/UI. Creamos experiencias digitales que impulsan tu negocio.";

const KEYWORDS =
  "desarrollo web mexico, diseño web mexico, crear pagina web mexico, agencia diseño web mexico, desarrollo ecommerce mexico, diseño ux ui mexico, branding digital mexico, agencia digital mexico, estudio diseño web mexico, desarrollo sitios web profesionales, diseño web para negocios, crear tienda en linea mexico";

const IndexPage = () => {
  return (
    <Layout>
      <Flex as="main" flexDir="column">
        <Pitahaya />
        <Services />
        <About />
        <Clients />
        <Contact />
      </Flex>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>{LANDING_TITLE}</title>
    <meta name="description" content={LANDING_DESCRIPTION} />
    <meta name="keywords" content={KEYWORDS} />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={SITE_URL + "/"} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <meta property="og:site_name" content="Pitahaya Studio" />
    <meta property="og:title" content={LANDING_TITLE} />
    <meta property="og:description" content={LANDING_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SITE_URL + "/"} />
    <meta property="og:image" content={DEFAULT_OG_IMAGE} />
    <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:alt" content="Pitahaya Studio" />
    <meta property="og:locale" content="es_MX" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={LANDING_TITLE} />
    <meta name="twitter:description" content={LANDING_DESCRIPTION} />
    <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    <StructuredData page="index" includeFaq />
  </>
);
