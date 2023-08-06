import React from 'react';

import { Flex } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <Flex flexDir='column' fontFamily='Poppins'>
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};

export default Layout;
