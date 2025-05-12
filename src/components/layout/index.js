import React from 'react';

import { Button, Flex } from '@chakra-ui/react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

import Navbar from './Navbar';
import Footer from './Footer';

import './styles.css';

const Layout = ({ children }) => {
  return (
    <Flex direction='column' color='#666' fontFamily='Poppins'>
      <Navbar />
      {children}
      <Footer />

      <Button
        aria-label='Chatear por WhatsApp'
        as='a'
        href='https://api.whatsapp.com/send?phone=5215567062629&text=Hola,%20me%20gustaría%20recibir%20informacion%20sobre%20los%20servicios%20que%20ofrecen%20en%20Pitahaya;'
        target='_blank'
        rel='noopener noreferrer nofollow'
        position='fixed'
        bottom={{ base: 4, md: 12 }}
        right={4}
        size={{ base: 'md', md: 'lg' }}
        color='#F3E3CB'
        bg='#267157'
        borderRadius='full'
        leftIcon={<IconBrandWhatsapp />}
        transition='transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease'
        zIndex={3}
        _hover={{
          bg: '#007355',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          transform: 'translateY(-8px)',
        }}
      >
        ¡Hola!
      </Button>
    </Flex>
  );
};

export default Layout;
