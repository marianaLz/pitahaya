import React from 'react';

import { Box, Container, Flex, Hide, Text } from '@chakra-ui/react';

import Ana from '../../../assets/vector/Ana';
import Anita from '../../../assets/vector/Anita';
import Mari from '../../../assets/vector/Mari';
import Mariana from '../../../assets/vector/Mariana';

const info = [
  {
    name: 'Mari López',
    shortName: 'mari',
    role: 'Software Developer',
    img: <Mariana />,
    text: <Mari />,
    description: [
      'Desarrolladora Web con casi 5 años de experiencia en la industria. Actualmente soy Lead Coach en Laboratoria, una organización comprometida con el desarrollo de carreras tecnológicas para mujeres, donde he aspirado a empoderar a más mujeres en el campo de la tecnología.',
      'Mi trayectoria previa incluye más de tres años de experiencia en empresas de tecnología, desde startups hasta banca digital.',
      'Tengo experiencia colaborando dentro de equipos multidisciplinarios, lo cual me ha permitido tomar en cuenta muchos factores implicados en el desarrollo de un producto para proponer soluciones y tomar decisiones objetivas.',
      'Me resulta muy importante poder colaborar con empresas que generen gran impacto ya que mi mayor motivación en la vida es contribuir a un cambio positivo en la sociedad.',
    ],
  },
  {
    name: 'Ana Marrón',
    shortName: 'ana',
    role: 'Product Designer',
    img: <Anita />,
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
    <Flex as='section' id='about'>
      <Container
        align='center'
        as={Flex}
        flexDir='column'
        gap={{ base: '16', lg: '40' }}
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
        {info.map((item, index) => (
          <Flex
            align='center'
            flexDir={{
              base: 'column-reverse',
              lg: index % 2 === 0 ? 'row' : 'row-reverse',
            }}
            gap={{ base: '8', lg: '16', xl: '32' }}
            key={`about-${index}`}
          >
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
              <Box
                bg='#C1DEC0'
                borderRadius='full'
                overflow='hidden'
                pt='4'
                w={{ base: '64', md: '80', xl: '96' }}
              >
                {item.img}
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
          </Flex>
        ))}
      </Container>
    </Flex>
  );
};

export default About;
