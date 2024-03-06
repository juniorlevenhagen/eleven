import {
  Flex,
  Box,
  Tabs,
  Text,
  Dialog,
  Button,
  TextField,
  TextArea,
} from '@radix-ui/themes';
import '../App.css';

import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

type FormValues = {
  firstName: string;
  message: string;
  email: string;
};

// A FUNCAO COMECA AQUI VVVVVVVVVVVVVV -------------

export const TopButtonPanel = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const onSubmit = async (values: FormValues) => {
    console.log({ values });

    const templateParams = values;

    emailjs
      .send('service_qhrq049', 'template_8yy6zqr', templateParams, '3wJlWOIsN7RuJKoBG')
      .then(
        (response) => {
          console.log('email enviado', response.status, response.text);
        },
        (err) => {
          console.log('ERRO:', err);
        },
      );

    await new Promise((resolve) => setTimeout(resolve, 500));
    alert('Email enviado com sucesso!');
  };

  const formikbag = useFormik({
    onSubmit: async (values, { resetForm }) => {
      await onSubmit(values);

      handleCloseDialog(), resetForm();
    },

    initialValues: {
      firstName: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors: Partial<FormValues> = {};

      if (!values.email) {
        errors.email = 'O campo de e-mail é obrigatório';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = 'Formato de e-mail inválido';
      }

      return errors;
    },
  });



  const { values, handleChange, handleSubmit, errors, touched } = formikbag;

  return (
    <div>
      <Flex className='menu_superior'>
        <Flex width='7' m='4'>
          <Box>
            <Tabs.Root defaultValue='account'>
              <Tabs.List>
                <Tabs.Trigger value='account'>
                  <Text
                    m='1'
                    size='2'
                    style={{ color: 'var(--gray-1)', fontWeight: 'bold' }}
                  >
                    A empresa
                  </Text>
                </Tabs.Trigger>
                <Tabs.Trigger value='documents'>
                  <Text
                    m='1'
                    size='2'
                    style={{ color: 'var(--gray-1)', fontWeight: 'bold' }}
                  >
                    Serviços
                  </Text>
                </Tabs.Trigger>
                <Tabs.Trigger value='settings'>
                  <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
                    <Dialog.Trigger
                      style={{
                        color: 'var(--gray-1)',
                        fontWeight: 'bold',
                        background: 'none',
                      }}
                    >
                      <Button>Contato</Button>
                    </Dialog.Trigger>

                    <Dialog.Content style={{ maxWidth: 450 }}>
                      <Dialog.Title>Contato</Dialog.Title>
                      <Dialog.Description size='2' mb='4'>
                        Envie sua mensagem
                      </Dialog.Description>

                      <form onSubmit={handleSubmit}>
                        <Flex direction='column' gap='3'>
                          <label htmlFor='firstName'>
                            <Text as='div' size='2' mb='1' weight='bold'>
                              Nome
                            </Text>
                            <TextField.Input
                              name='firstName'
                              value={values.firstName}
                              onChange={handleChange}
                              placeholder='Digite seu nome e sobrenome'
                            />
                          </label>

                          <label>
                            <Text as='div' size='2' mb='1' weight='bold'>
                              Email
                            </Text>

                            <TextField.Input
                              className='input-no-select'
                              type='text'
                          
                              placeholder='Digite seu e-mail'
                              name='email'
                              value={values.email}
                              onChange={handleChange}
                            />
                            {errors.email && touched.email && (
                              <Text as='div' size='1' color='red'>
                                <Text>{errors.email}</Text>
                              </Text>
                              
                            )}
                          </label>
                          <Text as='div' size='2' mb='1' weight='bold'>
                            Mensagem
                          </Text>
                          <TextArea
                            name='message'
                            value={values.message}
                            onChange={handleChange}
                            placeholder='Digite sua mensagem'
                          />
                        </Flex>

                        <Flex gap='3' mt='4' justify='end'>
                          <Dialog.Close>
                            <Button variant='soft' color='gray'>
                              Cancel
                            </Button>
                          </Dialog.Close>

                          <Button onSubmit={handleCloseDialog} type='submit'>
                            Enviar
                          </Button>
                        </Flex>
                      </form>
                    </Dialog.Content>
                  </Dialog.Root>
                </Tabs.Trigger>
              </Tabs.List>

              <Box px='4' pt='3' pb='2'>
                <Tabs.Content value='account'>
                  <Text size='2'></Text>
                </Tabs.Content>

                <Tabs.Content value='documents'>
                  <Text size='2'></Text>
                </Tabs.Content>

                <Tabs.Content value='settings'>
                  <Text size='2'></Text>
                </Tabs.Content>
              </Box>
            </Tabs.Root>
          </Box>
        </Flex>
      </Flex>
    </div>
  );
};
