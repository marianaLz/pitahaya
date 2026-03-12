import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

import { Flex, Container, SimpleGrid, Text, Box, Show } from "@chakra-ui/react";

import MariTitle from "../../../assets/vector/MariTitle";
import MariIlu from "../../../assets/vector/MariIlu";

const Mari = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mari.webp" }) {
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
      id="about-mari"
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
        <Flex>
          <Flex
            color="var(--color-text-body)"
            direction="column"
            fontSize={{ base: "base", lg: "lg" }}
            gap={4}
          >
            <MariTitle w={{ base: 40, lg: 56 }} />
            <Text>
              Desarrolladora web con más de seis años de experiencia en la
              industria tecnológica. Actualmente formo parte de Natoure, una
              plataforma que impulsa el consumo local y sostenible mediante
              soluciones digitales.
            </Text>
            <Text>
              He trabajado en diversos entornos, desde startups hasta banca
              digital, lo que me ha permitido desarrollar una visión integral
              del ciclo de vida de productos digitales. Disfruto colaborar con
              equipos multidisciplinarios y tomar decisiones que equilibren lo
              técnico, lo humano y lo estratégico.
            </Text>
            <Text>
              Anteriormente trabajé Laboratoria acompañando a mujeres en su
              transición hacia la tecnología, reafirmando mi convicción de que
              el software es una herramienta de transformación social.
            </Text>
          </Flex>
        </Flex>

        <Show above="lg">
          <MariIlu />
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
            left: { base: "65%", md: "auto" },
            transform: { base: "translateX(-65%)", md: "none" },
          },
        }}
      >
        <GatsbyImage
          image={getImage(image)}
          alt="Mariana López"
          objectFit="contain"
          style={{ height: "auto" }}
        />
      </Box>
    </Flex>
  );
};

export default Mari;
