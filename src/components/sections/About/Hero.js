import React, { useState, useEffect } from "react";

import { Container, Flex, Text, Box } from "@chakra-ui/react";

const HIGHLIGHT_TEXT_COLOR = "var(--color-text-on-primary)";
const OUTLINE_BORDER_COLOR = "var(--color-outline)";

const titles = [
  {
    part1: "En Pitahaya Studio creemos en el poder del",
    highlight: { text: "diseño", bg: "var(--color-brand-primary)" },
    part2: " y la",
    outline: "tecnología",
    part3: "con alma.",
  },
  {
    part1: "Fusionamos",
    highlight: { text: "creatividad", bg: "var(--color-brand-accent)" },
    part2: " y",
    outline: "estrategia",
    part3: "para acompañarte en tu proyecto.",
  },
  {
    part1: "Nos tomamos el tiempo de",
    highlight: { text: "construir", bg: "var(--color-brand-primary)" },
    part2: " ",
    outline: "identidades",
    part3: "que se piensan y viven.",
  },
  {
    part1: "",
    highlight: { text: "Creamos", bg: "var(--color-brand-accent)" },
    part2: " con compromiso social, ambiental y mucho",
    outline: "corazón.",
    part3: "",
  },
];

const SLIDER_INTERVAL_MS = 5000;

const EXIT_DURATION_MS = 400;

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setIsExiting(true);
    }, SLIDER_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!isExiting) return;
    const t = setTimeout(() => {
      setIndex((i) => (i + 1) % titles.length);
      setIsExiting(false);
    }, EXIT_DURATION_MS);
    return () => clearTimeout(t);
  }, [isExiting]);

  const item = titles[index];

  return (
    <Flex as="section" bg="var(--color-bg-page)" id="about-hero">
      <Container
        as={Flex}
        direction="column"
        align="center"
        pt={{ base: 32, lg: 56 }}
        pb={{ base: 16, lg: 48 }}
        maxW={{ base: "container.sm", lg: "container.lg" }}
        w="full"
      >
        <Box
          minH={{ base: "120px", md: "140px", lg: "160px" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            key={index}
            as="p"
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            color="var(--color-text-body)"
            textAlign="center"
            sx={{
              "@keyframes fadeSlideIn": {
                "0%": { opacity: 0, transform: "translateY(32px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
              "@keyframes fadeSlideOut": {
                "0%": { opacity: 1, transform: "translateY(0)" },
                "100%": { opacity: 0, transform: "translateY(-24px)" },
              },
              animation: isExiting
                ? `fadeSlideOut ${EXIT_DURATION_MS}ms ease-in forwards`
                : "fadeSlideIn 1s ease-out forwards",
            }}
          >
            {item.part1 && <>{item.part1} </>}
            {item.highlight && (
              <Box
                as="span"
                color={HIGHLIGHT_TEXT_COLOR}
                bg={item.highlight.bg}
                px={4}
                borderRadius="full"
                display="inline"
                whiteSpace="nowrap"
              >
                {item.highlight.text}
              </Box>
            )}
            {item.part2 && <>{item.part2} </>}
            {item.outline && (
              <Box
                as="span"
                borderWidth="3px"
                borderStyle="solid"
                borderColor={OUTLINE_BORDER_COLOR}
                px={4}
                borderRadius="full"
                display="inline"
                whiteSpace="nowrap"
              >
                {item.outline}
              </Box>
            )}
            {item.part3 && <> {item.part3}</>}
          </Text>
        </Box>
      </Container>
    </Flex>
  );
};

export default Hero;
