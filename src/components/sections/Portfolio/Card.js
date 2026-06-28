import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

import Folder from "../../../assets/vector/Folder";

const Card = ({ project }) => {
  const { hero, slug } = project;
  const name = hero?.name;

  return (
    <Box
      position="relative"
      w="full"
      aspectRatio="277 / 239"
      transition="all 0.3s ease"
      _groupHover={{
        transform: "translateY(-8px)",
        filter: "drop-shadow(0 4px 30px var(--color-shadow))",
      }}
    >
      <Folder id={slug} position="absolute" inset={0} w="full" h="full" />

      <Flex
        position="absolute"
        top="12%"
        left="5%"
        right="5%"
        bottom="8%"
        direction="column"
        justify="flex-start"
        overflow="hidden"
        borderRadius="md"
        pointerEvents="none"
        py={8}
        px={4}
      >
        <Text
          position="relative"
          fontSize={{ base: "md", md: "19px" }}
          fontWeight="semibold"
          color="var(--color-text-body)"
          lineHeight="1.7"
          zIndex={1}
        >
          {name}
        </Text>
      </Flex>
    </Box>
  );
};

export default Card;
