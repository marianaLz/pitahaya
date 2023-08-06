import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Container, Flex, Text } from '@chakra-ui/react';

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
      'Esta metáfora la utilizamos para hacer reales los productos digitales que desean nuestros clientes.',
  },
  {
    firstLine: 'Estimular ',
    secondLine: 'la creatividad',
    description:
      'La combinación multidisciplinar nos permite encontrar el plan ideal para resolver problemas.',
  },
];

const Manifest = () => {
  const [emblaRef] = useEmblaCarousel({
    active: true,
    align: 'center',
    breakpoints: {
      '(min-width: 992px)': { active: false },
    },
  });

  return (
    <Flex
      as='section'
      bg='#F2E6D0'
      id='manifest'
      overflow='hidden'
      ref={emblaRef}
    >
      <Container
        alignItems={{ lg: 'center' }}
        as={Flex}
        gap={{ base: '4', xl: '32' }}
        justify={{ lg: 'center' }}
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: '100vh' }}
        pos='relative'
        pt='32'
        pb='20'
        w='full'
      >
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          manifiesto;
        </Text>

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
            mr={index === info.length - 1 && '4'}
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
      </Container>
    </Flex>
  );
};

export default Manifest;
