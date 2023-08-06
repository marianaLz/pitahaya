import React from 'react';

import { Container, Flex, Image, Text } from '@chakra-ui/react';

import bahia from '../../../assets/images/bahia.png';
import capptus from '../../../assets/images/capptus.png';
import enio from '../../../assets/images/enio.png';
import idmah from '../../../assets/images/idmah.png';
import inside from '../../../assets/images/inside.png';
import ironhack from '../../../assets/images/ironhack.jpeg';
import kalimori from '../../../assets/images/kalimori.png';
import konfio from '../../../assets/images/konfio.png';
import kuxatur from '../../../assets/images/kuxatur.png';
import laboratoria from '../../../assets/images/laboratoria.png';
import morgana from '../../../assets/images/morgana.png';
import natoure from '../../../assets/images/natoure.png';
import openn from '../../../assets/images/openn.png';
import plib from '../../../assets/images/plib.png';

const images = [
  bahia,

  capptus,
  enio,
  idmah,
  inside,
  plib,
  kalimori,
  konfio,
  laboratoria,
  morgana,
  natoure,
  ironhack,
  kuxatur,
  openn,
];

const Clients = () => {
  return (
    <Flex as='section' id='clients'>
      <Container
        align='center'
        as={Flex}
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: 'calc(100vh - 158px)' }}
        pos='relative'
        pt='32'
        pb='20'
        w='full'
      >
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          clientes;
        </Text>
        <Flex
          align='center'
          flexWrap='wrap'
          gap={{ base: '12', md: '16' }}
          justify='center'
        >
          {images.map((image, index) => (
            <Image
              alt='Clientes Pitahaya'
              key={`image-${index}`}
              maxH={{ base: '10', md: '16' }}
              maxW={{ base: '32', md: '40' }}
              objectFit='contain'
              src={image}
            />
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Clients;
