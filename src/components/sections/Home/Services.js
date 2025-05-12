import React from 'react';

import { Container, Flex, Hide, SimpleGrid, Text } from '@chakra-ui/react';

import Banners from '../../../assets/vector/Banners';
import Branding from '../../../assets/vector/Branding';
import Ecommerce from '../../../assets/vector/Ecommerce';
import Illustration from '../../../assets/vector/Illustration';
import ServicesTitle from '../../../assets/vector/ServicesTitle';
import Usability from '../../../assets/vector/Usability';
import Website from '../../../assets/vector/Website';

const services = [
  {
    name: 'Ecommerce',
    icon: <Ecommerce />,
    description:
      'Aumenta tus ventas en el mercado digital y permite compras seguras para ti y tus clientes.',
  },
  {
    name: 'Páginas web',
    icon: <Website />,
    description:
      'Obtén credibilidad en el mundo digital, esta es una herramienta para estar en contacto con clientes potenciales.',
  },
  {
    name: 'UX / UI',
    icon: <Usability />,
    description:
      'Brinda una experiencia positiva y efectiva en el sitio web de tu empresa.',
  },
  {
    name: 'Branding',
    icon: <Branding />,
    description:
      'Construye confianza en los consumidores y establece una identidad sólida y reconocible para ti o tu negocio.',
  },
  {
    name: 'Ilustración',
    icon: <Illustration />,
    description:
      'Mejora la estética y comunicación, de esta manera puedes atraer un público específico de manera efectiva.',
  },
  {
    name: 'Banners',
    icon: <Banners />,
    description:
      'Presenta información compleja de manera visualmente atractiva y fácil de entender.',
  },
];

const ServiceCard = ({ icon, name, description }) => (
  <Flex
    direction='column'
    gap={6}
    px={8}
    py={10}
    bg='white'
    border='2px'
    borderColor='black'
    borderRadius='xl'
    transition='all 0.3s ease'
    _hover={{
      transform: 'translateY(-8px)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Flex align='center' gap={4}>
      {icon}
      <Text flex={1} fontSize='xl' fontWeight='semibold' color='black'>
        {name}
      </Text>
    </Flex>
    <Text fontSize='sm'>{description}</Text>
  </Flex>
);

const Services = () => {
  return (
    <Flex as='section' bg='#f5f5f5' id='services'>
      <Container
        as={Flex}
        direction='column'
        align='center'
        gap={8}
        py={{ base: 16, lg: 32 }}
        maxW={{ base: 'lg', lg: 'container.lg' }}
        w='full'
      >
        <ServicesTitle w={{ base: 48, md: 56, lg: 64, xl: 72 }} />

        <Text fontSize='xl' color='black' textAlign={{ base: 'center' }}>
          Creemos fielmente en nuestra misión, diseñar productos y crear
          experiencias
          <Hide below='lg'>
            <br />
          </Hide>
          que permitan a tu negocio estar en el siguiente nivel
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          gap={{ base: 10, lg: 20 }}
          mt={8}
          w='full'
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Services;
