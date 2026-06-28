import React from "react";
import { Flex } from "@chakra-ui/react";

import Layout from "../components/layout";
import { SITE_URL } from "../components/Seo";

import Hero from "../components/sections/Project/Hero";
import Content from "../components/sections/Project/Content";
import Contact from "../components/sections/Common/Contact";
import Next from "../components/sections/Project/Next";

const ProjectTemplate = ({ project }) => {
  const { hero, text, gallery, logo } = project;

  return (
    <Layout>
      <Flex as="main" flexDir="column">
        <Hero {...hero} />

        <Content text={text} gallery={gallery} logo={logo} name={hero?.name} />

        {project.nextProject && <Next slug={project.nextProject} />}

        <Contact />
      </Flex>
    </Layout>
  );
};

export default ProjectTemplate;

export const ProjectHead = ({ project }) => {
  const { seo, hero, slug } = project;
  const title = seo.title;
  const description = seo.description;
  const image = seo.image || `${SITE_URL}/pitahaya-studio.jpg`;
  const url = `${SITE_URL}/portafolio/${slug}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <meta property="og:site_name" content="Pitahaya Studio" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:secure_url" content={image} />
      <meta property="og:image:alt" content={hero.name} />
      <meta property="og:locale" content="es_MX" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
