import React from "react";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import Laptop from "../../../assets/vector/Laptop";
import useHeroTextRotation, {
  heroTextAnimationSx,
} from "../../../hooks/useHeroTextRotation";

const Hero = ({ slides = [] }) => {
  const { index, isExiting } = useHeroTextRotation(slides.length);
  const slide = slides[index] || slides[0];

  if (!slide) {
    return null;
  }

  return (
    <Flex as="section" bg="var(--color-bg-page)" id="portfolio">
      <Container
        alignItems="center"
        as={SimpleGrid}
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 8, lg: 16 }}
        maxW={{ base: "lg", lg: "container.lg", xl: "container.xl" }}
        pb={32}
        pt={{ base: 32, lg: 48 }}
        position="relative"
      >
        <Flex
          direction="column"
          justify="flex-end"
          align={{ base: "center", lg: "flex-start" }}
          gap={{ base: 4, lg: 6 }}
          textAlign={{ base: "center", lg: "left" }}
          h="full"
          minH={{ base: "180px", lg: "220px" }}
        >
          <Box key={index} sx={heroTextAnimationSx(isExiting)}>
            <Text
              as="h1"
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight={{ base: "1.15", lg: "1" }}
              color="var(--color-text-body)"
            >
              {slide.titleLines?.map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {lineIndex > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </Text>
            <Text as="p" fontSize="xl" mt={{ base: 4, lg: 6 }}>
              {slide.subtitle}
            </Text>
          </Box>
        </Flex>

        <Box h="full">
          <Laptop />
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
