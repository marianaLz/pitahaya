import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Box, Container, Flex, Hide, Text } from '@chakra-ui/react';

const info = [
  {
    firstLine: 'Pensar ',
    secondLine: 'fuera de la caja',
    description:
      'Cambiamos nuestra perspectiva y forma de pensar poniéndonos en el lugar de otra persona.',
  },
  {
    firstLine: 'Soñar ',
    secondLine: 'despierto',
    description:
      'Esta metáfora la utilizamos para hacer reales los productos que desean nuestros clientes.',
  },
  {
    firstLine: 'Estimular ',
    secondLine: 'la creatividad',
    description:
      'La combinación multidisciplinar nos permite encontrar el plan ideal para resolver problemas.',
  },
];

const Manifest = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    active: true,
    align: 'center',
    breakpoints: {
      '(min-width: 992px)': { active: false },
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
    <Flex as='section' bg='#F2E6D0' id='manifest' pos='relative'>
      <Hide above='lg'>
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          manifiesto;
        </Text>
      </Hide>
      <Container
        as={Flex}
        flexDir='column'
        gap='6'
        overflow='hidden'
        ref={emblaRef}
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: '100vh' }}
        pos='relative'
        pt='32'
        pb='20'
        w='full'
      >
        <Hide below='lg'>
          <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
            manifiesto;
          </Text>
        </Hide>

        <Flex
          alignItems={{ lg: 'center' }}
          gap={{ base: '4', xl: '32' }}
          justify={{ lg: 'center' }}
        >
          {info.map((item, index) => (
            <Flex
              bg='#257157'
              borderRadius='full'
              className='embla__slide'
              flexDir='column'
              gap='2'
              h='fit-content'
              key={`manifest-${index}}`}
              maxW='xs'
              pos='relative'
              px='9'
              pt='60'
              pb='44'
            >
              <Text
                color='white'
                fontFamily='Spinwerad'
                fontWeight='bold'
                fontSize='8xl'
                pos='absolute'
                right='calc(50% - 11px)'
                top='36'
              >
                ;
              </Text>
              <Text
                color='#C1DEC0'
                fontSize='11rem'
                fontWeight='bold'
                lineHeight='11rem'
                pos='absolute'
                right='12'
                top='36'
              >
                {index + 1}
              </Text>

              <Flex
                as='h2'
                color='#F590A2'
                flexDir='column'
                fontSize='lg'
                fontWeight='bold'
                letterSpacing='tight'
                textTransform='uppercase'
              >
                <Text>{item.firstLine}</Text>
                <Text>{item.secondLine}</Text>
              </Flex>
              <Text color='#F2E6D0' fontSize='sm'>
                {item.description}
              </Text>
            </Flex>
          ))}
        </Flex>
        <Hide above='lg'>
          <Flex gap='6' justify='center'>
            {info.map((_, index) => (
              <Box
                aria-label={`Ir a la slide ${index + 1}`}
                as='button'
                bg={index === selectedIndex ? '#257157' : '#C1DEC0'}
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

export default Manifest;
