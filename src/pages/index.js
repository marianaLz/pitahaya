import React from 'react';

import { Flex } from '@chakra-ui/react';

import Layout from '../components/layout';

import About from '../components/sections/Home/About';
import Clients from '../components/sections/Home/Clients';
// import Loader from '../components/sections/Home/Loader';
import Pitahaya from '../components/sections/Home/Pitahaya';
import Services from '../components/sections/Home/Services';
import Contact from '../components/sections/Home/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <Flex as='main' flexDir='column'>
        {/* <Loader /> */}
        <Pitahaya />
        <About />
        <Services />
        <Clients />
        <Contact />
      </Flex>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => (
  <React.Fragment>
    <title>Pitahaya Studio | Laboratorio de creación de páginas web</title>
    <meta
      name='description'
      content='Un equipo de mujeres mexicanas en la industria de la tecnología, una dupla con la filosofía de ser partícipes en proyectos que tengan un impacto positivo en la era digital.'
    />
    <meta name='robots' content='INDEX,FOLLOW' />
    <link rel='canonical' href='https://pitahaya.studio' />
    <meta
      property='og:site_name'
      content='Pitahaya Studio | Laboratorio de creación de páginas web'
    />
    <meta
      property='og:title'
      content='Pitahaya Studio | Laboratorio de creación de páginas web'
    />
    <meta
      property='og:description'
      content='Un equipo de mujeres mexicanas en la industria de la tecnología, una dupla con la filosofía de ser partícipes en proyectos que tengan un impacto positivo en la era digital.'
    />
    <meta property='og:type' content='website' />
    <meta property='og:url' content='https://pitahaya.studio' />
    <meta property='og:image' content='https://i.imgur.com/0NtE0D7.png' />
    <meta
      property='og:image:secure_url'
      content='https://i.imgur.com/0NtE0D7.png'
    />
    <meta property='og:image:type' content='image/jpeg' />
    <meta property='og:image:width' content='1200' />
    <meta property='og:image:height' content='627' />
    <meta property='og:image:alt' content='Pitahaya Studio' />
    <meta property='og:locale' content='es_MX' />
    <meta property='twitter:card' content='summary_large_image' />
    <meta property='twitter:title' content='Pitahaya Studio' />
    <meta
      property='twitter:description'
      content='Un equipo de mujeres mexicanas en la industria de la tecnología, una dupla con la filosofía de ser partícipes en proyectos que tengan un impacto positivo en la era digital.'
    />
  </React.Fragment>
);
