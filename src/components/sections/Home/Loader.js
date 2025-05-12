import React, { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import Logo from '../../../assets/vector/Logo';

const Loader = () => {
  const [show, setShow] = useState(true);
  const [hideCompletely, setHideCompletely] = useState(false);

  useEffect(() => {
    const fadeOut = setTimeout(() => setShow(false), 800);
    const removeFromFlow = setTimeout(() => setHideCompletely(true), 2300);
    return () => {
      clearTimeout(fadeOut);
      clearTimeout(removeFromFlow);
    };
  }, []);

  return (
    <Flex
      align='center'
      justify='center'
      position='fixed'
      w='full'
      h='100dvh'
      bg='#257157'
      zIndex={hideCompletely ? -1 : 4}
      opacity={show ? 1 : 0}
      pointerEvents={hideCompletely ? 'none' : 'auto'}
      transition='opacity 1.5s ease'
    >
      <Box w={{ base: '80%', lg: '50%' }}>
        <Logo />
      </Box>
    </Flex>
  );
};

export default Loader;
