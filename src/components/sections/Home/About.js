import React from 'react';

import { Box, Container, Flex, Hide, Image, Text } from '@chakra-ui/react';

import ana from '../../../assets/images/ana.png';
import mari from '../../../assets/images/mari.png';

import Ana from '../../../assets/vector/Ana';
import Mari from '../../../assets/vector/Mari';

const info = [
  {
    name: 'Mari López',
    shortName: 'mari',
    role: 'Software Developer',
    img: mari,
    text: <Mari />,
    description: [
      'Creo firmemente en el empoderamiento y la igualdad de género de las mujeres.',
      'Como Desarrolladora de Software y coach de programación, me apasiona guiar a mujeres en el camino Tech.',
      'Tengo experiencia colaborando dentro de equipos multidisciplinarios, lo cual me ha permitido tomar en cuenta muchos factores implicados en el desarrollo para proponer soluciones y tomar decisiones objetivas.',
      'Me resulta muy importante poder colaborar con empresas que generen impacto, ya que mi mayor motivación en la vida es contribuir a un cambio positivo en la sociedad, bajo esta "filosofía" es que he elegido las empresas en las que colaboro.',
      'Considero que la educación y la conciencia son fundamentales para impulsar el cambio.',
    ],
  },
  {
    name: 'Ana Marrón',
    shortName: 'ana',
    role: 'Product Designer',
    img: ana,
    text: <Ana />,
    description: [
      'Licenciada en Diseño y Creatividad Visual, con experiencia en Content marketing, Branding, Ilustración, Social media, Ui/Ux, Motion graphics, Email marketing.',
      'Tengo 9 años de experiencia en Instituciones Públicas, Agencias de Publicidad y Empresas Privadas.',
      'He diseñado para: Alianza Francesa, Goethe Institut Mexiko, Fundación México - Japón, FILIJ, Canal 22, Wikimedia, Revista Arquine, Editorial Trilce, Biblioteca Vasconcelos, muca - Roma, Black Boy Canvas, Secretaría del Desarrollo Social, Colgate Palmolive, ABInBev, Kalimori, Inside People, Openn Design, #demachosahombres y Konfío; por mencionar algunos.',
      'Me emocionan las historias detrás de cada proyecto en el que he participado y ayudar a dar forma, brillo y color a través del diseño; así sean productos físicos o digitales.',
    ],
  },
];

const About = () => {
  return (
    <Flex as='section' flexDir='column' id='about'>
      {info.map((item, index) => (
        <Container
          align='center'
          as={Flex}
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          gap={{ base: '8', lg: '16', xl: '32' }}
          key={`about-${index}`}
          maxW={{ xl: 'container.xl', '2xl': '8xl' }}
          minH={{ lg: '100vh' }}
          pt='32'
          pb='20'
          pos='relative'
          w='full'
        >
          <Text color='#257157' fontSize='sm' left='4' pos='absolute' top='20'>
            sobre nosotras;
          </Text>

          <Flex align='flex-end' gap='12'>
            <Hide below='sm'>
              <Box w='56'>{item.text}</Box>
            </Hide>
            <Flex
              flexDir='column'
              fontSize={{ lg: 'lg' }}
              gap={{ base: '6', lg: '8' }}
            >
              <Text color='#257157' fontWeight='bold'>
                {`Hola soy ${item.shortName};`}
              </Text>
              {item.description.map((text, index) => (
                <Text
                  key={`about-p-${index}`}
                  color={index === item.description.length - 1 && '#257157'}
                  fontWeight={index === item.description.length - 1 && 'bold'}
                >
                  {text}
                </Text>
              ))}
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='8'>
            <Box w={{ base: '64', md: '80', xl: '96' }}>
              <Image bg='#C1DEC0' borderRadius='full' src={item.img} />
            </Box>
            <Flex flexDir='column'>
              <Text
                align='center'
                color='#257157'
                fontSize='2xl'
                fontWeight='bold'
              >
                {item.name}
              </Text>
              <Text align='center' color='#F590A2' fontSize='xl'>
                {item.role}
              </Text>
            </Flex>
          </Flex>
        </Container>
      ))}
    </Flex>
  );
};

export default About;
