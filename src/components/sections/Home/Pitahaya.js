import React, { Fragment } from "react";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Hide,
  keyframes,
  Text,
} from "@chakra-ui/react";

import Swirl from "../../../assets/vector/Swirl";

const scroll = keyframes`
  from { transform: translateX(0%); }
  to { transform: translateX(-50%); }
`;

const SCROLL_TEXT =
  "ESTA ES LA SEÑAL QUE ESTABAS ESPERANDO, COMIENZA CON UN CLIC.";

const Pitahaya = () => {
  return (
    <Fragment>
      <Flex as="section" bg="var(--color-bg-page)" id="pitahaya">
        <Container
          as={Grid}
          templateColumns={{ base: "1fr", lg: "1fr 1.375fr" }}
          gap={{ base: 4, lg: 8 }}
          maxW={{ base: "lg", lg: "container.lg", xl: "container.xl" }}
          pt={{ base: 32, lg: 20 }}
          pb={{ base: 32, lg: 0 }}
          position="relative"
        >
          <Flex
            direction="column"
            justify="center"
            align={{ base: "center", lg: "flex-start" }}
            gap={{ base: 4, lg: 6 }}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text
              fontSize={{ base: "3xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight={{ base: "1.15", lg: "1" }}
              color="var(--color-text-body)"
            >
              Más allá del <br />
              desarrollo de
              <br /> tu sitio web
            </Text>
            <Text as="h1" fontSize="xl">
              Diseñamos y mejoramos la presencia digital{" "}
              <Hide below="sm">
                <br />
              </Hide>
              de tu negocio con un desarrollo personalizado
            </Text>
            <Button
              as="a"
              href="https://calendar.app.google/DDw6d7FjbP2BKgmKA"
              target="_blank"
              rel="noopener noreferrer nofollow"
              fontSize="2xl"
              fontWeight="bold"
              color="var(--color-text-on-primary)"
              bg="var(--color-brand-primary)"
              rounded="full"
              py={8}
              px={4}
              position={{ base: "absolute", lg: "relative" }}
              bottom={{ base: 16, lg: "auto" }}
              zIndex={1}
              transition="all 0.3s ease"
              _hover={{
                bg: "var(--color-brand-primary)",
                boxShadow: "0 4px 30px var(--color-shadow)",
                transform: "translateY(-8px)",
              }}
            >
              Agendar una cita
            </Button>
          </Flex>

          <Box h="full">
            <Swirl />
          </Box>
        </Container>
      </Flex>

      <Box bg="var(--color-white)" overflow="hidden" py={2}>
        <Box
          display="inline-block"
          whiteSpace="nowrap"
          color="var(--color-brand-accent)"
          fontSize="lg"
          fontWeight="semibold"
          letterSpacing="widest"
          animation={`${scroll} 36s linear infinite`}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <Box key={i} as="span" display="inline-block" px={1}>
              {SCROLL_TEXT}
            </Box>
          ))}
        </Box>
      </Box>
    </Fragment>
  );
};

export default Pitahaya;
