import React from "react";

import { Flex } from "@chakra-ui/react";

import Layout from "../components/layout";
import { StructuredData, DEFAULT_OG_IMAGE, SITE_URL } from "../components/Seo";

import Contact from "../components/sections/Common/Contact";
import Hero from "../components/sections/About/Hero";
import Ana from "../components/sections/About/Ana";
import Mari from "../components/sections/About/Mari";

const ABOUT_TITLE =
  "Sobre Pitahaya Studio | Diseño digital y desarrollo web en México";
const ABOUT_DESCRIPTION =
  "Conoce a Pitahaya Studio, un equipo de mujeres mexicanas en tecnología especializado en desarrollo web, diseño UX/UI, branding y experiencias digitales.";

const KEYWORDS =
  "desarrollo web mexico, diseño web mexico, crear pagina web mexico, agencia diseño web mexico, desarrollo ecommerce mexico, diseño ux ui mexico, branding digital mexico, agencia digital mexico, estudio diseño web mexico";

const AboutPage = () => {
  return (
    <Layout>
      <Flex as="main" flexDir="column">
        <Hero />
        <Ana />
        <Mari />
        <Contact />
      </Flex>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <>
    <title>{ABOUT_TITLE}</title>
    <meta name="description" content={ABOUT_DESCRIPTION} />
    <meta name="keywords" content={KEYWORDS} />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href={SITE_URL + "/about"} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <meta property="og:site_name" content="Pitahaya Studio" />
    <meta property="og:title" content={ABOUT_TITLE} />
    <meta property="og:description" content={ABOUT_DESCRIPTION} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={SITE_URL + "/about"} />
    <meta property="og:image" content={DEFAULT_OG_IMAGE} />
    <meta property="og:image:secure_url" content={DEFAULT_OG_IMAGE} />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="627" />
    <meta property="og:image:alt" content="Pitahaya Studio" />
    <meta property="og:locale" content="es_MX" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={ABOUT_TITLE} />
    <meta name="twitter:description" content={ABOUT_DESCRIPTION} />
    <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />
    <StructuredData page="about" />
  </>
);
