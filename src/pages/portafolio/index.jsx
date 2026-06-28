import React from "react";
import { Flex } from "@chakra-ui/react";

import Layout from "../../components/layout";
import { SITE_URL } from "../../components/Seo";
import Contact from "../../components/sections/Common/Contact";
import Hero from "../../components/sections/Portfolio/Hero";
import Grid from "../../components/sections/Portfolio/Grid";
import pageContent from "../../data/portfolio/pageContent";
import { getSortedProjects } from "../../data/portfolio";

const PortfolioIndexPage = () => {
  const projects = getSortedProjects();

  return (
    <Layout>
      <Flex as="main" flexDir="column">
        <Hero slides={pageContent.hero.slides} />
        <Grid projects={projects} />
        <Contact />
      </Flex>
    </Layout>
  );
};

export default PortfolioIndexPage;

export const Head = () => {
  const { seo } = pageContent;
  const url = `${SITE_URL}/portafolio`;

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta property="og:site_name" content="Pitahaya Studio" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:locale" content="es_MX" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </>
  );
};
