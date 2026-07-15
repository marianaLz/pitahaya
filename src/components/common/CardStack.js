import React, { useState, useRef, useEffect } from "react";

import { Flex } from "@chakra-ui/react";

import AnaCard from "../../assets/vector/AnaCard";
import MariCard from "../../assets/vector/MariCard";

const CardStack = () => {
  const [active, setActive] = useState("AnaCard");
  const [height, setHeight] = useState(448);

  const ref = useRef(null);

  const toggle = () =>
    setActive((prev) => (prev === "AnaCard" ? "MariCard" : "AnaCard"));

  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [active]);

  return (
    <Flex
      justify="center"
      align="center"
      minH={`${height}px`}
      transition="min-height 0.3s ease"
      position="relative"
    >
      <AnaCard
        maxW="96"
        onClick={toggle}
        opacity={active === "AnaCard" ? 1 : 0}
        position="absolute"
        ref={active === "AnaCard" ? ref : null}
        transform={
          active === "AnaCard"
            ? "translateY(0px)"
            : "translateY(10px) scale(0.95)"
        }
        transition="all 0.4s ease"
        w="full"
        zIndex={active === "AnaCard" ? 2 : 0}
      />

      <MariCard
        maxW="96"
        onClick={toggle}
        opacity={active === "MariCard" ? 1 : 0}
        position="absolute"
        ref={active === "MariCard" ? ref : null}
        transform={
          active === "MariCard"
            ? "translateY(0px)"
            : "translateY(-10px) scale(0.95)"
        }
        transition="all 0.4s ease"
        w="full"
        zIndex={active === "MariCard" ? 2 : 0}
      />
    </Flex>
  );
};

export default CardStack;
