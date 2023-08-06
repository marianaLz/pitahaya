import React from 'react';
import { Link } from 'gatsby';

import { Flex, Text } from '@chakra-ui/react';

const NotFoundPage = () => {
  return (
    <Flex
      align='flex-end'
      bg='black'
      h='100vh'
      justify={{ base: 'flex-start', sm: 'flex-end' }}
      overflow='hidden'
      py={{ base: '20', lg: '24' }}
      w='full'
    >
      <Link to='/'>
        <Text
          color='white'
          fontFamily='Spinwerad'
          fontSize='32vh'
          transform='rotate(-90deg)'
        >
          404;
        </Text>
      </Link>
    </Flex>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
