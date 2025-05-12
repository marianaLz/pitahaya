import React, { useState, useRef, useEffect } from 'react';

import { Flex } from '@chakra-ui/react';

import Anita from '../../assets/vector/Anita';
import Marianita from '../../assets/vector/Marianita';

const CardStack = () => {
  const [active, setActive] = useState('Anita');
  const [height, setHeight] = useState(448);

  const ref = useRef(null);

  const toggle = () =>
    setActive((prev) => (prev === 'Anita' ? 'Marianita' : 'Anita'));

  useEffect(() => {
    if (typeof window !== 'undefined' && ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [active]);

  return (
    <Flex
      justify='center'
      align='center'
      minH={`${height}px`}
      transition='min-height 0.3s ease'
      position='relative'
    >
      <Anita
        maxW='96'
        onClick={toggle}
        opacity={active === 'Anita' ? 1 : 0}
        position='absolute'
        ref={active === 'Anita' ? ref : null}
        transform={
          active === 'Anita'
            ? 'translateY(0px)'
            : 'translateY(10px) scale(0.95)'
        }
        transition='all 0.4s ease'
        w='full'
        zIndex={active === 'Anita' ? 2 : 0}
      />

      <Marianita
        maxW='96'
        onClick={toggle}
        opacity={active === 'Marianita' ? 1 : 0}
        position='absolute'
        ref={active === 'Marianita' ? ref : null}
        transform={
          active === 'Marianita'
            ? 'translateY(0px)'
            : 'translateY(-10px) scale(0.95)'
        }
        transition='all 0.4s ease'
        w='full'
        zIndex={active === 'Marianita' ? 2 : 0}
      />
    </Flex>
  );
};

export default CardStack;
