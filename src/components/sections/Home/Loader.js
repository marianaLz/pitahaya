import React, { useEffect, useState } from 'react';

import { Box, Flex } from '@chakra-ui/react';

import Logo from '../../../assets/vector/Logo';

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Flex
      align='center'
      bg='#257157'
      h='100vh'
      justify='center'
      pos='fixed'
      opacity={show ? '1' : '0'}
      transition='opacity 1.5s ease, z-index 0s ease 1.5s'
      w='full'
      zIndex={show ? '2' : '-1'}
    >
      <Box w={{ base: '80%', lg: '50%' }}>
        <Logo />
      </Box>
    </Flex>
  );
};

export default Loader;
