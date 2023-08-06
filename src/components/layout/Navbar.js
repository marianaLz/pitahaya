import React from 'react';
import { Link } from 'gatsby';

import { FiMenu } from 'react-icons/fi';

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

const links = [
  { name: 'Pitahaya', to: '/#pitahaya' },
  { name: 'Manifiesto', to: '/#manifest' },
  { name: 'Sobre nosotras', to: '/#about' },
  { name: 'Servicios', to: '/#services' },
  { name: 'Clientes', to: '/#clients' },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = () => {
    return (
      <List as={Flex} flexDir={{ base: 'column', lg: 'row' }} gap='8'>
        {links.map((link, index) => (
          <ListItem key={`link-${index}`}>
            <Link
              aria-label={`Ir la la sección ${link.name}`}
              onClick={onClose}
              to={link.to}
            >
              <Flex align='center' gap='2'>
                <Text color='#257157' fontFamily='Spinwerad' fontSize='3xl'>
                  0{index + 1}
                </Text>
                <Text>{link.name}</Text>
              </Flex>
            </Link>
          </ListItem>
        ))}
      </List>
    );
  };

  return (
    <Box
      as='nav'
      backdropFilter='blur(0.5rem)'
      boxShadow='1px 1px 10px 0 rgba(0, 0, 0, 0.05)'
      position='fixed'
      py='2'
      w='full'
      zIndex='1'
    >
      <Container
        align='center'
        as={Flex}
        justify='space-between'
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        w='full'
      >
        <Link to='/'>
          <Text color='#257157' fontFamily='Spinwerad' fontSize='5xl' mt='-4'>
            p;
          </Text>
        </Link>

        <Hide below='lg'>
          <Links />
        </Hide>

        <Hide above='lg'>
          <IconButton
            bg='#257157'
            icon={<FiMenu color='white' />}
            isRound
            aria-label='Abrir menú de navegación'
            onClick={onOpen}
          />
        </Hide>

        <Drawer onClose={onClose} isOpen={isOpen} size='xs'>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody py='16'>
              <Links />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
