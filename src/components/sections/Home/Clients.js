import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

import { Container, Flex, Text } from '@chakra-ui/react';

const Clients = () => {
  const { gallery } = useStaticQuery(graphql`
    query {
      gallery: allFile(
        filter: {
          extension: { eq: "png" }
          absolutePath: { regex: "/images/home/" }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(
              height: 64
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

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
          {gallery.nodes.map((image, index) => (
            <Flex
              align='center'
              justify='center'
              maxH={{ base: '10', md: '16' }}
              maxW={{ base: '32', md: '40' }}
            >
              <GatsbyImage
                alt='Clientes Pitahaya'
                key={`image-${index}`}
                image={getImage(image)}
                objectFit='cover'
              />
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Clients;
