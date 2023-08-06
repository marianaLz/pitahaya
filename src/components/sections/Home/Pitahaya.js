import React from 'react';

import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';

import LogoBreaked from '../../../assets/vector/LogoBreaked';

const Pitahaya = () => {
  return (
    <Flex as='section' id='pitahaya'>
      <Container
        align='center'
        as={Flex}
        flexDir={{ base: 'column', lg: 'row' }}
        gap={{ base: '8', lg: '16', xl: '32' }}
        justify={{ base: 'center', lg: 'space-between' }}
        maxW={{ xl: 'container.xl', '2xl': '8xl' }}
        minH={{ lg: '100vh' }}
        pos='relative'
        pt='24'
        pb='20'
        w='full'
      >
        <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
          pitahaya;
        </Text>
        <Box w={{ lg: '64', xl: '72' }}>
          <LogoBreaked />
        </Box>

        <SimpleGrid
          flex={{ lg: '1' }}
          fontSize={{ lg: 'xl' }}
          columns={{ lg: '2' }}
          gap={{ base: '6', lg: '12', xl: '24' }}
        >
          <Flex flexDir='column' gap={{ base: '6', lg: '8' }}>
            <Text as='h1' fontWeight='bold'>
              Somos un laboratorio de creación de páginas web.
            </Text>
            <Text>
              Un equipo de mujeres mexicanas en la industria de la tecnología,
              (Software Developer + Product Designer), una dupla con la
              filosofía de ser participes en proyectos que tengan un impacto
              positivo en la era digital.
            </Text>
          </Flex>
          <Flex flexDir='column' gap={{ base: '6', lg: '8' }}>
            <Text>
              Creemos fielmente en nuestra misión, en diseñar productos y crear
              experiencias que permitan a pequeñas pymes, agencias, empresarios
              o personas profesionales impulsar su proyecto.
            </Text>
            <Flex
              fontSize={{ base: 'xl', lg: '2xl' }}
              fontWeight='bold'
              gap='2'
            >
              <Text>by:</Text>
              <Flex>
                <Text color='#FF0080' letterSpacing='widest'>
                  mari
                </Text>
                <Text color='#F590A2' letterSpacing='widest'>
                  ana
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Pitahaya;
