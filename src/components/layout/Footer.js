import React from 'react';

import {
  Box,
  Container,
  Divider,
  Flex,
  IconButton,
  Text,
} from '@chakra-ui/react';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

import Office from '../../assets/vector/Office';
import Logo from '../../assets/vector/Logo';

const Footer = () => {
  return (
    <Box
      as='footer'
      bg='black'
      boxShadow='1px 1px 10px 0 rgba(0, 0, 0, 0.05)'
      color='white'
      textAlign={{ base: 'center', lg: 'left' }}
    >
      <Container
        as={Flex}
        flexDir='column'
        gap='8'
        justify='space-between'
        maxW={{
          base: 'lg',
          lg: 'container.lg',
          xl: 'container.xl',
        }}
        py='16'
        w='full'
      >
        <Flex
          align={{ base: 'center', lg: 'flex-start' }}
          flexDir={{ base: 'column', lg: 'row' }}
          justify='space-between'
          w='full'
        >
          <Flex
            align={{ base: 'center', lg: 'flex-start' }}
            flexDir='column'
            gap={{ base: 8, lg: 12 }}
            maxW='80'
          >
            <Logo color='#FF889F' w={40} />

            <Text color='white'>
              Con una oficina virtual flexible, estamos preparadas para
              colaborar contigo en cualquier rincón del mundo.
            </Text>
            <Flex gap='8'>
              <IconButton
                icon={<IconBrandFacebook color='#F3E3CB' />}
                bg='#007355'
                isRound
                _hover={{ bg: '#007355' }}
              />
              <IconButton
                icon={<IconBrandInstagram color='#F3E3CB' />}
                bg='#007355'
                isRound
                _hover={{ bg: '#007355' }}
              />
              <IconButton
                icon={<IconBrandLinkedin color='#F3E3CB' />}
                bg='#007355'
                isRound
                _hover={{ bg: '#007355' }}
              />
            </Flex>
          </Flex>

          <Office
            mb='-8'
            mt={{ base: 16, lg: 8 }}
            px='4'
            w={{ base: 'full', md: 96 }}
          />
        </Flex>

        <Divider borderColor='#FF889F' />

        <Text align='center' fontSize={{ base: 'sm', lg: 'xs' }}>
          Un equipo de mujeres mexicanas en la industria de la tecnología, una
          dupla con la filosofía de ser partícipes en proyectos que tengan un
          impacto positivo en la era digital.
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
