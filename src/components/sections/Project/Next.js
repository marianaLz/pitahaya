import React from "react";
import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import { Link as GatsbyLink } from "gatsby";
import { IconArrowRight } from "@tabler/icons-react";

import PortfolioImage from "../../common/PortfolioImage";
import { getProjectBySlug } from "../../../data/portfolio";

const Next = ({ slug }) => {
  const nextProject = getProjectBySlug(slug);

  if (!nextProject) {
    return null;
  }

  return (
    <Flex as="section" bg="var(--color-white)" id="next-project">
      <Container
        maxW={{ base: "lg", lg: "container.lg" }}
        py={{ base: 16, lg: 32 }}
        w="full"
      >
        <Link
          as={GatsbyLink}
          to={`/portafolio/${nextProject.slug}`}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          gap={6}
          p={{ base: 6, lg: 8 }}
          borderRadius="xl"
          bg="var(--color-bg-page)"
          transition="all 0.3s ease"
          _hover={{
            textDecoration: "none",
            transform: "translateY(-8px)",
            boxShadow: "0 4px 30px var(--color-shadow)",
          }}
        >
          <Flex direction="column" gap={2}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color="var(--color-brand-accent)"
              textTransform="uppercase"
              letterSpacing="wider"
            >
              Siguiente proyecto
            </Text>
            <Text
              fontSize={{ base: "2xl", lg: "3xl" }}
              fontWeight="semibold"
              color="var(--color-text-body)"
            >
              {nextProject.hero.name}
            </Text>
          </Flex>

          <Flex
            align="center"
            justify="center"
            w={12}
            h={12}
            borderRadius="full"
            bg="var(--color-brand-primary)"
            color="var(--color-white)"
            flexShrink={0}
          >
            <IconArrowRight size={20} stroke={2} />
          </Flex>
        </Link>
      </Container>
    </Flex>
  );
};

export default Next;
