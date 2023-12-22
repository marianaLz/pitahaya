import React from 'react';

import { Button, Flex } from '@chakra-ui/react';

import { IconBrandWhatsapp } from '@tabler/icons-react';

import Footer from './Footer';
import Navbar from './Navbar';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <Flex flexDir='column' fontFamily='Poppins'>
      <Navbar />
      {children}
      <Footer />
      <Button
        as='a'
        bg='#267157'
        borderRadius='full'
        bottom='12'
        color='white'
        href='https://api.whatsapp.com/send?phone=5215567062629&text=Hola,%20me%20gustaría%20recibir%20informacion%20sobre%20los%20servicios%20que%20ofrecen%20en%20Pitahaya;'
        leftIcon={<IconBrandWhatsapp />}
        pos='fixed'
        rel='noopener noreferrer nofollow'
        right='4'
        size='lg'
        target='_blank'
        variant='solid'
        _hover={{ bg: '#C1DEC0', color: '#267157' }}
      >
        ¡Hola!
      </Button>
    </Flex>
  );
};

export default Layout;
