import React from 'react';

import { Box, Container, Flex } from '@chakra-ui/react';

import ClientsTitle from '../../../assets/vector/ClientsTitle';

import Idmah from '../../../assets/vector/Idmah';
import Openn from '../../../assets/vector/Openn';
import Plib from '../../../assets/vector/Plib';
import Bonnus from '../../../assets/vector/Bonnus';
import Konfio from '../../../assets/vector/Konfio';
import Bahia from '../../../assets/vector/Bahia';
import Laboratoria from '../../../assets/vector/Laboratoria';
import CortosLargos from '../../../assets/vector/CortosLargos';
import Natoure from '../../../assets/vector/Natoure';
import Mayakaan from '../../../assets/vector/Mayakaan';
import Liave from '../../../assets/vector/Liave';
import Kuxatur from '../../../assets/vector/Kuxatur';
import Gaia from '../../../assets/vector/Gaia';
import Intobarre from '../../../assets/vector/Intobarre';
import Sleep from '../../../assets/vector/Sleep';
import Smatch from '../../../assets/vector/Smatch';
import Eli from '../../../assets/vector/Eli';
import Enio from '../../../assets/vector/Enio';
import Loor from '../../../assets/vector/Loor';
import Corregidora from '../../../assets/vector/Corregidora';
import Piramides from '../../../assets/vector/Piramides';
import Sacii from '../../../assets/vector/Sacii';

const gallery = [
  [<Idmah />, <Openn />, <Plib />, <Bonnus />],
  [<Konfio />, <Bahia />, <Laboratoria />, <CortosLargos />],
  [<Natoure />, <Mayakaan />, <Liave />, <Kuxatur />],
  [<Gaia />, <Intobarre />, <Sleep />, <Smatch />],
  [<Eli />, <Enio />, <Sacii />, <Loor />],
  [<Corregidora />, <Piramides />],
];

const Clients = () => {
  return (
    <Flex as='section' bg='white' id='clients'>
      <Container
        as={Flex}
        direction='column'
        align='center'
        gap={16}
        py={{ base: 16, lg: 32 }}
        maxW={{ base: 'lg', lg: 'container.lg' }}
        w='full'
      >
        <ClientsTitle w={{ base: '13rem', lg: '17rem' }} />

        <Flex wrap='wrap' gap='12' justify='center' align='center' w='full'>
          {gallery.map((row, index) => (
            <Box
              align='center'
              display={{ base: 'grid', lg: 'flex' }}
              gap={{ base: 10, md: 16, xl: 24 }}
              gridTemplateColumns='repeat(2, 1fr)'
              justify='center'
              key={`client-row-${index}`}
            >
              {row.map((client, index) => (
                <Flex align='center' justify='center' key={`client-${index}`}>
                  {client}
                </Flex>
              ))}
            </Box>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Clients;
