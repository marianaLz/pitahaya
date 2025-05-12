import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import {
  Box,
  Button,
  Container,
  Flex,
  Hide,
  keyframes,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';

const scroll = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
`;

const SCROLL_TEXT =
  'ESTA ES LA SEÑAL QUE ESTABAS ESPERANDO, COMIENZA CON UN CLIC.';

const Pitahaya = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home/pitahaya.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <Fragment>
      <Flex as='section' bg='#F8F7F3' id='pitahaya'>
        <Container
          as={SimpleGrid}
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 8, xl: 28 }}
          maxW={{ base: 'lg', lg: 'container.lg', xl: 'container.xl' }}
          py={{ base: 28, lg: 32 }}
          pb={{ base: 20, lg: 16 }}
          position='relative'
        >
          <Flex
            direction='column'
            justify='center'
            align={{ base: 'center', lg: 'flex-start' }}
            gap={6}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text
              fontSize={{ base: '3xl', lg: '5xl' }}
              fontWeight='semibold'
              lineHeight={{ base: '1.15', lg: '1' }}
              color='black'
            >
              Más allá del <br />
              desarrollo de
              <br /> tu sitio web
            </Text>
            <Text as='h1' fontSize='xl'>
              Diseñamos y mejoramos la presencia digital{' '}
              <Hide below='sm'>
                <br />
              </Hide>
              de tu negocio con un desarrollo personalizado
            </Text>
            <Button
              as='a'
              href='https://calendar.app.google/y3Mpi2emzFNh24119'
              target='_blank'
              rel='noopener noreferrer nofollow'
              fontSize='xl'
              fontWeight='bold'
              color='#F3E3CB'
              bg='#007355'
              rounded='full'
              p={8}
              position={{ base: 'absolute', lg: 'relative' }}
              bottom={{ base: 12, lg: 'auto' }}
              zIndex={1}
              transition='all 0.3s ease'
              _hover={{
                bg: '#007355',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                transform: 'translateY(-8px)',
              }}
            >
              Agendar una cita
            </Button>
          </Flex>

          <GatsbyImage
            alt='Pitahaya'
            image={getImage(image)}
            style={{ borderRadius: '1rem' }}
            objectFit='cover'
          />
        </Container>
      </Flex>

      <Box bg='white' overflow='hidden' py={2}>
        <Box
          display='inline-block'
          whiteSpace='nowrap'
          color='#FF889F'
          fontSize='lg'
          fontWeight='semibold'
          letterSpacing='widest'
          animation={`${scroll} 36s linear infinite`}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Box key={i} as='span' display='inline-block' px={1}>
              {SCROLL_TEXT}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Pitahaya;
