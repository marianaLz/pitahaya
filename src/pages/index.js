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

export const Head = () => <title>Pitahaya Studio</title>;
