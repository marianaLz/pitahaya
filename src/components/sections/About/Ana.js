import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Flex, Container, SimpleGrid, Text, Box, Show } from "@chakra-ui/react";
import { useStaticQuery, graphql } from "gatsby";

import AnaTitle from "../../../assets/vector/AnaTitle";
import AnaIlu from "../../../assets/vector/AnaIlu";

const Ana = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "ana.webp" }) {
        childImageSharp {
          gatsbyImageData(
            width: 8000
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  return (
    <Flex
      as="section"
      bg="var(--color-white)"
      direction="column"
      id="about-ana"
    >
      <Container
        as={SimpleGrid}
        columns={{ base: 1, lg: 2 }}
        alignItems="center"
        gap={{ base: 8, lg: 16 }}
        py={{ base: 16, lg: 32 }}
        maxW={{ base: "container.sm", lg: "container.lg" }}
        w="full"
      >
        <Flex
          color="var(--color-text-body)"
          direction="column"
          fontSize={{ base: "base", lg: "lg" }}
          gap={4}
        >
          <AnaTitle w={{ base: 40, lg: 56 }} />
          <Flex
            color="var(--color-text-body)"
            direction="column"
            fontSize={{ base: "base", lg: "lg" }}
            gap={4}
          >
            <Text>
              Licenciada en Diseño y Creatividad Visual, con experiencia en
              Content marketing, Branding, Ilustración, Social media, Ui/Ux,
              Motion graphics, Email marketing
            </Text>
            <Text>
              Tengo 10 años de experiencia en Instituciones Públicas, Agencias
              de Publicidad y Empresas Privadas.
            </Text>
            <Text>
              He diseñado para: Alianza Francesa, Goethe Institut Mexiko,
              Fundación México - Japón, FILIJ, Canal 22,  Wikimedia, Revista
              Arquine, Editorial Trilce, Biblioteca Vasconcelos, muca - Roma,
              Colgate Palmolive, ABInBev, Kalimori, Openn Design,
              #demachosahombres, Konfío y Círculo de crédito por mencionar
              algunos.
            </Text>
          </Flex>
        </Flex>

        <Show above="lg">
          <AnaIlu />
        </Show>
      </Container>

      <Box
        w="100%"
        as="figure"
        overflow="hidden"
        sx={{
          "& .gatsby-image-wrapper": {
            h: "auto",
            width: { base: "200%", md: "100%" },
            left: { base: "48%", md: "auto" },
            transform: { base: "translateX(-48%)", md: "none" },
          },
        }}
      >
        <GatsbyImage
          image={getImage(image)}
          alt="Ana Marrón"
          objectFit="contain"
          style={{ height: "auto" }}
        />
      </Box>
    </Flex>
  );
};

export default Ana;
