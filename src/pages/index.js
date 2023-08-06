import React from 'react';

import { Flex } from '@chakra-ui/react';

import Layout from '../components/layout';

import About from '../components/sections/Home/About';
import Clients from '../components/sections/Home/Clients';
import Loader from '../components/sections/Home/Loader';
import Manifest from '../components/sections/Home/Manifest';
import Pitahaya from '../components/sections/Home/Pitahaya';
import Services from '../components/sections/Home/Services';

const IndexPage = () => {
  return (
    <Layout>
      <Flex as='main' flexDir='column'>
        <Loader />
        <Pitahaya />
        <Manifest />
        <About />
        <Services />
        <Clients />
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
      content='Un equipo de mujeres mexicanas en la industria de la tecnología, (Software engineer + Product designer), una dupla con la filosofía de ser participes en proyectos que tengan un impacto positivo en la era digital.'
    />
    <meta name='robots' content='INDEX,FOLLOW' />
    <link rel='canonical' href='https://pitahaya.studio' />
  </React.Fragment>
);
