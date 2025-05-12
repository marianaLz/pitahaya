import React from 'react';

import {
  Container,
  Flex,
  Hide,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

import CardStack from '../../common/CardStack';

import Check from '../../../assets/vector/Check';
import AboutTitle from '../../../assets/vector/AboutTitle';

const aboutItems = [
  'Crear una plataforma eficaz y segura para comunicarte con tus clientes',
  'Diseñar sitios de manera atractiva, intuitiva y fácil de navegar',
  'Impulsar el crecimiento, visibilidad de negocios, empresarios o profesionales',
];

const About = () => {
  return (
    <Flex as='section' bg='#F1F8F1' id='about'>
      <Container
        as={SimpleGrid}
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 8, xl: 28 }}
        maxW={{ base: 'lg', lg: 'container.lg', xl: 'container.lg' }}
        py={{ base: 16, lg: 32 }}
        position='relative'
        w='full'
      >
        <Hide below='lg'>
          <CardStack />
        </Hide>

        <Flex
          direction='column'
          justify='center'
          align={{ base: 'center', lg: 'flex-start' }}
          gap={6}
          pr={{ lg: 16, xl: 14, '2xl': 0 }}
        >
          <AboutTitle w={{ base: 56, lg: 72 }} />

          <Text color='black' fontSize='xl'>
            Un equipo de mujeres mexicanas en la industria de la tecnología,
            Software Developer y Product Designer
          </Text>

          <Text fontSize='sm'>Nos enfocamos en:</Text>

          <List spacing={6}>
            {aboutItems.map((item, idx) => (
              <ListItem key={idx} as={Flex} gap={2}>
                <ListIcon as={Check} />
                <Text as='h2' flex={1} mt='-1'>
                  {item}
                </Text>
              </ListItem>
            ))}
          </List>
        </Flex>

        <Hide above='lg'>
          <CardStack />
        </Hide>
      </Container>
    </Flex>
  );
};

export default About;
