import React from "react";
import { Link as GatsbyLink } from "gatsby";
import { Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import Card from "./Card";

const Grid = ({ projects = [] }) => {
  if (!projects.length) {
    return null;
  }

  return (
    <Flex as="section" bg="var(--color-bg-page)" id="portfolio-grid">
      <Container
        as={Flex}
        direction="column"
        align="center"
        gap={{ base: 10, lg: 20 }}
        maxW={{ base: "lg", lg: "container.lg" }}
        w="full"
      >
        <SimpleGrid
          columns={{ base: 2, lg: 3 }}
          gap={{ base: 10, lg: 20 }}
          w="full"
        >
          {projects.map((project) => (
            <Flex
              key={project.slug}
              as={GatsbyLink}
              to={`/portafolio/${project.slug}`}
              role="group"
              _hover={{ textDecoration: "none" }}
            >
              <Card project={project} />
            </Flex>
          ))}
        </SimpleGrid>

        <Text
          fontSize={{ base: "md", lg: "xl" }}
          color="var(--color-text-muted)"
          lineHeight="1.7"
          textAlign={{ base: "center" }}
        >
          Creemos fielmente en nuestra misión, diseñar productos y crear
          experiencias <br display={{ base: "none", lg: "block" }} /> que
          permitan a tu negocio estar en el siguiente nivel
        </Text>
      </Container>
    </Flex>
  );
};

export default Grid;
