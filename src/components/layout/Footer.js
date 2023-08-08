import React from 'react';

import { CiInstagram, CiLinkedin, CiMail } from 'react-icons/ci';

import { Box, Container, Flex, Text } from '@chakra-ui/react';

const info = [
  {
    name: 'mari',
    mail: 'marianaglp15@gmail.com',
    linkedin: 'marianalz',
    color: '#FF0080',
  },
  {
    name: 'ana',
    mail: 'ana.laura.3d@gmail.com',
    linkedin: 'ana-marrón-3d',
    color: '#F590A2',
  },
];

const Footer = () => {
  return (
    <Box
      as='footer'
      bg='black'
      boxShadow='1px 1px 10px 0 rgba(0, 0, 0, 0.05)'
      color='white'
    >
      <Container
        align={{ md: 'center' }}
        as={Flex}
        flexDir={{ base: 'column', md: 'row' }}
        gap='8'
        justify='space-between'
        maxW={{ lg: 'container.lg', xl: 'container.xl', '2xl': '8xl' }}
        w='full'
        py='8'
      >
        <Flex flexDir='column' gap='4'>
          <Flex flexDir={{ base: 'column', md: 'row' }} gap='8'>
            {info.map((item, index) => (
              <Flex flexDir='column' key={`contact-${index}`}>
                <Text
                  color={item.color}
                  fontWeight='bold'
                  letterSpacing='widest'
                >
                  {item.name}
                </Text>
                <Flex align='center' gap='1' target='__blank'>
                  <CiMail />
                  <Text as='a' fontSize='sm' href={`mailto:${item.mail}`}>
                    {item.mail}
                  </Text>
                </Flex>
                <Flex align='center' gap='1'>
                  <CiLinkedin />
                  <Text
                    as='a'
                    fontSize='sm'
                    href={`https://www.linkedin.com/in/${item.linkedin}`}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    in/{item.linkedin}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
          <Flex align='center' gap='1'>
            <CiInstagram />
            <Text
              as='a'
              fontSize='sm'
              href='https://www.instagram.com/pitahaya.web/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Síguenos en Instagram
            </Text>
          </Flex>
        </Flex>

        <Text fontFamily='Spinwerad' fontSize='6xl'>
          See you!
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
