import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'gatsby';

import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Hide,
  IconButton,
  List,
  ListItem,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { IconMenu } from '@tabler/icons-react';

import Icon from '../../assets/vector/Icon';

const links = [
  { name: 'conócenos', to: '/#about' },
  { name: 'servicios', to: '/#services' },
  { name: 'clientes', to: '/#clients' },
  { name: 'blog', to: '/#blog' },
];

const Links = ({ onClick }) => (
  <List
    as={Flex}
    flexDir={{ base: 'column', lg: 'row' }}
    gap={{ base: 8, xl: 16 }}
  >
    {links.map((link, index) => (
      <ListItem key={`link-${index}`}>
        <Link
          aria-label={`Ir a la sección ${link.name}`}
          onClick={onClick}
          to={link.to}
        >
          <Flex align='center' gap={2}>
            <Text color='black' fontWeight='semibold'>
              {link.name}
            </Text>
          </Flex>
        </Link>
      </ListItem>
    ))}
  </List>
);

const Navbar = () => {
  const circleRef = useRef(null);
  const lastScroll = useRef(0);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    lastScroll.current = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > lastScroll.current ? 1 : -1;
      lastScroll.current = currentScroll;

      if (currentScroll <= 0) {
        setRotation(0);
        setScale(1);
      } else {
        setRotation((prev) => prev + direction * 4);
        setScale(0.75);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as='nav'
      bg='white'
      boxShadow='1px 1px 10px rgba(0, 0, 0, 0.05)'
      position='fixed'
      py={4}
      w='full'
      zIndex={3}
    >
      <Container maxW='8xl' position='relative' px={0}>
        <Icon
          pos='absolute'
          top={{ md: 4 }}
          left={{ base: 4, md: 8 }}
          ref={circleRef}
          w={{ base: 20, md: 28, xl: 40 }}
          transform={`rotate(${rotation}deg) scale(${scale})`}
          transformOrigin='center'
          transition='transform 0.25s ease-out'
        />

        <Container
          as={Flex}
          align='center'
          justify={{ base: 'space-between', lg: 'space-evenly' }}
          maxW={{ lg: 'container.md', xl: 'container.lg' }}
          w='full'
        >
          <Hide above='lg'>
            <IconButton bg='transparent' pointerEvents='none' />
          </Hide>

          <Link to='/'>
            <Text
              fontFamily='Spinwerad'
              fontSize={{ base: '2xl', md: '3xl' }}
              color='#007355'
            >
              pitahaya;
            </Text>
          </Link>

          <Hide below='lg'>
            <Links />
          </Hide>

          <Hide below='lg'>
            <Text
              as='a'
              href='https://calendar.app.google/y3Mpi2emzFNh24119'
              target='_blank'
              rel='noopener noreferrer nofollow'
              fontWeight='semibold'
              color='#F590A2'
              textDecoration='underline'
              aria-label='Agendar una cita'
            >
              agendar
            </Text>
          </Hide>

          <Hide above='lg'>
            <IconButton
              bg='white'
              icon={<IconMenu color='#F590A2' />}
              isRound
              aria-label='Abrir menú de navegación'
              onClick={onOpen}
            />
          </Hide>

          <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody py={16}>
                <Links onClick={onClose} />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Container>
      </Container>
    </Box>
  );
};

export default Navbar;
