import React from "react";
import { Box, Container, Flex, Link, SimpleGrid, Text } from "@chakra-ui/react";
import { IconMouse2 } from "@tabler/icons-react";

import PortfolioImage from "../../common/PortfolioImage";

const Hero = ({
  name,
  description,
  cover,
  website,
  coverShape,
  coverAspectRatio,
}) => {
  return (
    <Flex as="section" bg="var(--color-bg-page)" id="portfolio-hero">
      <Container
        as={SimpleGrid}
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 8, lg: 16 }}
        maxW={{ base: "lg", lg: "container.lg" }}
        pt={{ base: 32, lg: 40 }}
        pb={{ base: 16, lg: 32 }}
        w="full"
      >
        <Flex
          direction="column"
          gap={{ base: 4, lg: 6 }}
          flex={{ lg: "0 0 42%" }}
          textAlign={{ base: "center", lg: "left" }}
          align={{ base: "center", lg: "flex-start" }}
          h="full"
          justify="center"
        >
          <Text
            as="h1"
            fontSize={{ base: "4xl", lg: "5xl" }}
            fontWeight="semibold"
            color="var(--color-text-body)"
            lineHeight="1.1"
          >
            {name}
          </Text>

          {description && (
            <Text
              fontSize={{ base: "md", lg: "xl" }}
              color="var(--color-text-muted)"
              lineHeight="1.7"
            >
              {description}
            </Text>
          )}

          {website && (
            <Link
              href={website}
              target="_blank"
              rel="noopener noreferrer nofollow"
              display={{ base: "none", lg: "inline-flex" }}
              alignItems="center"
              gap={3}
              color="var(--color-text-muted)"
              fontSize={{ base: "md", lg: "lg" }}
              transition="all 0.3s ease"
              mt={{ base: 4, lg: 6 }}
              _hover={{
                color: "var(--color-text-body)",
                transform: "translateY(-4px)",
                textDecoration: "none",
              }}
            >
              <Flex
                align="center"
                justify="center"
                w={10}
                h={10}
                borderRadius="full"
                bg="var(--color-brand-accent-light)"
                color="var(--color-white)"
                flexShrink={0}
              >
                <IconMouse2 size={18} stroke={2} />
              </Flex>
              <Text fontStyle="italic">Explorar sitio</Text>
            </Link>
          )}
        </Flex>

        {cover && (
          <Box
            flex={{ lg: "1" }}
            w="full"
            position="relative"
            borderRadius="xl"
            border="2px"
            borderColor="var(--color-black)"
            overflow="hidden"
            h="fit-content"
          >
            <PortfolioImage
              src={cover}
              alt={name}
              borderRadius={coverShape === "circle" ? "full" : "none"}
              aspectRatio="5/4"
              objectFit="cover"
            />
          </Box>
        )}

        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            display={{ base: "inline-flex", lg: "none" }}
            alignItems="center"
            gap={3}
            color="var(--color-text-muted)"
            fontSize={{ base: "md", lg: "lg" }}
            transition="all 0.3s ease"
            mt={{ base: 4, lg: 6 }}
            mx="auto"
            _hover={{
              color: "var(--color-text-body)",
              transform: "translateY(-4px)",
              textDecoration: "none",
            }}
          >
            <Flex
              align="center"
              justify="center"
              w={10}
              h={10}
              borderRadius="full"
              bg="var(--color-brand-accent-light)"
              color="var(--color-white)"
              flexShrink={0}
            >
              <IconMouse2 size={18} stroke={2} />
            </Flex>
            <Text fontStyle="italic">Explorar sitio</Text>
          </Link>
        )}
      </Container>
    </Flex>
  );
};

export default Hero;
