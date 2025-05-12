import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

import { Container, Flex } from '@chakra-ui/react';

import ClientsTitle from '../../../assets/vector/ClientsTitle';

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
    <Flex as='section' bg='white' id='clients'>
      <Container
        as={Flex}
        direction='column'
        align='center'
        gap={16}
        py={{ base: 16, lg: 32 }}
        maxW={{ base: 'lg', lg: 'container.lg', xl: 'container.xl' }}
        w='full'
      >
        <ClientsTitle w={{ base: 40, md: 48, lg: 56, xl: 64 }} />

        <Flex
          wrap='wrap'
          gap={{ base: 12, md: 16 }}
          justify='center'
          align='center'
        >
          {gallery.nodes.map((image, index) => (
            <Flex
              key={`client-${index}`}
              align='center'
              justify='center'
              maxH={{ base: 10, md: 16 }}
              maxW={{ base: 32, md: 40 }}
            >
              <GatsbyImage
                image={getImage(image)}
                alt={`Cliente ${index + 1}`}
                objectFit='contain'
                loading='lazy'
              />
            </Flex>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Clients;
