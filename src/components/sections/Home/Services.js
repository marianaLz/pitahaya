import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Box, Container, Divider, Flex, Text } from '@chakra-ui/react';

const info = [
  {
    color: '#257157',
    links: [
      'Desarrollo de sitios web',
      'Mejoras en performance del sitio',
      'Construcción Design System',
      'Rediseño de marca',
      'E-Commerce',
    ],
  },
  {
    color: '#F590A2',
    links: [
      'Branding',
      'Manual de identidad',
      'Diseño UX/UI',
      'Creación de ilustraciones',
      'Elaboración de infografías y banners',
    ],
  },
];

const Services = () => {
  const [emblaRef] = useEmblaCarousel({
    active: true,
    align: 'end',
    breakpoints: {
      '(min-width: 768px)': { active: false },
    },
  });

  return (
    <Flex
      as='section'
      bg='#C1DEC0'
      id='services'
      overflow='hidden'
      ref={emblaRef}
    >
      <Container
        align='center'
        as={Flex}
        gap={{ base: '10', md: '16', lg: '32' }}
        justify={{ md: 'center' }}
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: '100vh' }}
        pos='relative'
        pt='32'
        pb='20'
        w='full'
      >
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          servicios;
        </Text>

        {info.map((item, index) => (
          <Flex
            align='center'
            border={`2px solid ${item.color}`}
            borderRadius='3xl'
            className='embla__slide'
            flexDir='column'
            gap='4'
            key={`services-${index}`}
            maxW='80'
            mr={index === info.length - 1 && '8'}
            px='8'
            pt='8'
            pb='20'
            pos='relative'
            w='80'
          >
            <Flex
              align='center'
              bg={item.color}
              borderRadius='full'
              h='16'
              justify='center'
              pos='absolute'
              right='-4'
              top='-4'
              w='16'
            >
              <Text align='center' color='white' fontSize='7xl' lineHeight='10'>
                =
              </Text>
            </Flex>
            <Box bg='rgba(37, 113, 87, 0.5)' borderRadius='full' h='2' w='16' />
            <Flex flexDir='column' gap='6' pt='12' pb='4'>
              {item.links.map((service, index) => (
                <Flex
                  flexDir='column'
                  gap='3'
                  key={`service-${index}`}
                  w='full'
                >
                  <Text fontWeight='bold'>{service}</Text>
                  <Divider borderColor='rgba(0,0,0,0.2)' w='12' />
                </Flex>
              ))}
            </Flex>
            <Box bg='rgba(37, 113, 87, 0.4)' borderRadius='full' h='5' w='48' />
            <Box bg='rgba(37, 113, 87, 0.2)' borderRadius='full' h='5' w='48' />
          </Flex>
        ))}
      </Container>
    </Flex>
  );
};

export default Services;
