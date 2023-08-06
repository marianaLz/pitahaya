import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Box, Container, Divider, Flex, Hide, Text } from '@chakra-ui/react';

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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: 'end',
    breakpoints: {
      '(min-width: 768px)': { active: false },
    },
  });

  const scrollTo = useCallback(
    (index) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    emblaApi &&
      emblaApi.on('select', () =>
        setSelectedIndex(emblaApi.selectedScrollSnap())
      );
  }, [emblaApi]);

  return (
    <Flex as='section' bg='#C1DEC0' id='services' pos='relative'>
      <Hide above='lg'>
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          servicios;
        </Text>
      </Hide>
      <Container
        as={Flex}
        flexDir='column'
        gap='6'
        justify='center'
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: '100vh' }}
        overflow='hidden'
        pos='relative'
        pt='32'
        pb='20'
        ref={emblaRef}
        w='full'
      >
        <Hide below='lg'>
          <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
            servicios;
          </Text>
        </Hide>

        <Flex
          alignItems={{ lg: 'center' }}
          gap={{ base: '8', xl: '32' }}
          justify={{ lg: 'center' }}
        >
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
              mr={index === info.length - 1 && '2'}
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
                <Text
                  align='center'
                  color='white'
                  fontSize='7xl'
                  lineHeight='10'
                >
                  =
                </Text>
              </Flex>
              <Box
                bg='rgba(37, 113, 87, 0.5)'
                borderRadius='full'
                h='2'
                w='16'
              />
              <Flex flexDir='column' gap='6' pt='12' pb='4'>
                {item.links.map((service, index) => (
                  <Flex
                    flexDir='column'
                    gap='3'
                    key={`service-${index}`}
                    w='full'
                  >
                    <Text as='h3' fontWeight='bold'>
                      {service}
                    </Text>
                    <Divider borderColor='rgba(0,0,0,0.2)' w='12' />
                  </Flex>
                ))}
              </Flex>
              <Box
                bg='rgba(37, 113, 87, 0.4)'
                borderRadius='full'
                h='5'
                w='48'
              />
              <Box
                bg='rgba(37, 113, 87, 0.2)'
                borderRadius='full'
                h='5'
                w='48'
              />
            </Flex>
          ))}
        </Flex>
        <Hide above='lg'>
          <Flex gap='6' justify='center'>
            {info.map((_, index) => (
              <Box
                aria-label={`Ir a la slide ${index + 1}`}
                as='button'
                bg={
                  index === selectedIndex ? '#257157' : 'rgba(37, 113, 87, 0.2)'
                }
                borderRadius='full'
                className='embla__dot'
                h='4'
                key={`manifest-dot-${index}}`}
                onClick={() => scrollTo(index)}
                px='2'
                transition='all 0.3s ease'
                w='4'
              />
            ))}
          </Flex>
        </Hide>
      </Container>
    </Flex>
  );
};

export default Services;
