import React from "react";
import { Box, Container, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import PortfolioImage from "../../common/PortfolioImage";
import { parseBoldSegments } from "../../../utils/parseBoldText";

const Paragraph = ({ children }) => (
  <Text
    fontSize={{ base: "md", lg: "lg" }}
    color="var(--color-text-muted)"
    lineHeight="1.7"
  >
    {children}
  </Text>
);

const FormattedParagraph = ({ text }) => {
  const segments = parseBoldSegments(text);

  return (
    <Paragraph>
      {segments.map((segment, index) =>
        segment.bold ? (
          <Box as="span" key={index} fontWeight="bold">
            {segment.text}
          </Box>
        ) : (
          <React.Fragment key={index}>{segment.text}</React.Fragment>
        ),
      )}
    </Paragraph>
  );
};

const Content = ({ text = [], gallery = [], logo, name }) => {
  if (!text.length && !gallery.length) {
    return null;
  }

  return (
    <Flex as="section" bg="var(--color-white)" id="project-content">
      <Container
        as={Flex}
        direction="column"
        align={{ base: "center", lg: "flex-start" }}
        gap={6}
        maxW={{ base: "lg", lg: "container.lg" }}
        pt={{ base: 16, lg: 32 }}
        w="full"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 4, lg: 16 }}>
          {text.length > 0 && (
            <Flex direction="column" gap={6}>
              {text.map((paragraph, index) => (
                <FormattedParagraph key={index} text={paragraph} />
              ))}
            </Flex>
          )}

          {gallery.length > 0 && (
            <Flex direction="column" gap={{ base: 4, lg: 6 }}>
              {gallery.map((item, index) => (
                <PortfolioImage
                  border="1px solid var(--color-shadow)"
                  key={item.src || index}
                  src={item.src}
                  alt={item.alt || ""}
                  w="full"
                />
              ))}
            </Flex>
          )}
        </SimpleGrid>

        {logo?.src && (
          <Box mt={logo.mt} maxW={logo.maxW}>
            <PortfolioImage
              src={logo.src}
              alt={name || ""}
              objectFit="contain"
              w="full"
            />
          </Box>
        )}
      </Container>
    </Flex>
  );
};

export default Content;
