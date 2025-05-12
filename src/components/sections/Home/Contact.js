import React from 'react';

import {
  Button,
  Checkbox,
  CheckboxGroup,
  Container,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';

import ContactTitle from '../../../assets/vector/ContactTitle';

const Contact = () => {
  return (
    <Flex as='section' bg='#F8F7F3' id='contact'>
      <Container
        as={Flex}
        direction='column'
        align='center'
        gap={16}
        py={{ base: 16, lg: 32 }}
        maxW={{ base: 'lg', lg: 'container.lg' }}
        w='full'
      >
        <ContactTitle w={{ base: 60, lg: '19rem' }} />

        <Flex
          action='/'
          align='center'
          as='form'
          data-netlify='true'
          flexDir='column'
          gap={16}
          method='POST'
          name='contact'
          w='full'
        >
          <input type='hidden' name='form-name' value='contact' />

          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              lg: 'repeat(2, 1fr)',
            }}
            gap={10}
            w='full'
          >
            <FormControl>
              <Input
                name='Nombre'
                placeholder='Nombre'
                required
                variant='unstyled'
              />
            </FormControl>

            <FormControl>
              <Input
                name='Apellidos'
                placeholder='Apellidos'
                variant='unstyled'
              />
            </FormControl>

            <FormControl>
              <Input
                name='Correo electrónico'
                placeholder='Correo electrónico'
                required
                type='email'
                variant='unstyled'
              />
            </FormControl>

            <FormControl>
              <Input
                name='Teléfono celular'
                placeholder='Teléfono celular'
                required
                type='tel'
                variant='unstyled'
              />
            </FormControl>

            <FormControl name='País'>
              <Select placeholder='País' borderRadius='none' variant='unstyled'>
                <option>México</option>
                <option>Colombia</option>
                <option>Argentina</option>
              </Select>
            </FormControl>

            <FormControl>
              <Input name='Empresa' placeholder='Empresa' variant='unstyled' />
            </FormControl>

            <GridItem colSpan={{ lg: 2 }}>
              <FormControl>
                <Textarea
                  name='Descripción del proyecto'
                  placeholder='Cuéntanos sobre tu proyecto'
                  required
                  variant='unstyled'
                  rows={4}
                />
              </FormControl>
            </GridItem>

            <GridItem colSpan={{ lg: 2 }}>
              <Flex justify='center'>
                <CheckboxGroup name='Servicios requeridos' required>
                  <Grid
                    templateColumns={{
                      base: 'repeat(2, 1fr)',
                      lg: 'repeat(3, 1fr)',
                    }}
                    gap={4}
                    w={{ base: 'full', lg: '75%' }}
                  >
                    {[
                      'Ecommerce',
                      'Página web',
                      'UI / UX',
                      'Branding',
                      'Ilustración',
                      'Banners',
                    ].map((item) => (
                      <Checkbox key={item}>{item}</Checkbox>
                    ))}
                  </Grid>
                </CheckboxGroup>
              </Flex>
            </GridItem>
          </Grid>

          <Button
            bg='white'
            border='2px solid black'
            borderRadius='full'
            px='16'
            py='6'
            color='black'
            fontWeight='bold'
            size='lg'
            transition='all 0.3s ease'
            type='submit'
            _hover={{
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              transform: 'translateY(-8px)',
            }}
          >
            Enviar
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Contact;
