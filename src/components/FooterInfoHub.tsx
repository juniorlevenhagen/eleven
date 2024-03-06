import { Flex, Text, Separator } from '@radix-ui/themes';

export const FooterInfoHub = () => {
  return (
    <Flex>
      <Flex
        justify='center'
        p='0'
        width='100%'
        style={{ backgroundColor: 'var(--blue-11)' }}
      >
        <Text size='4'>
          <Separator my='auto' size='4' />
          <Flex p='4' gap='3' align='center'>
            Redes Sociais
            <Separator orientation='vertical' />
            Política de Privacidade e Termos de Uso
            <Separator orientation='vertical' />
            Informações de Contato
            <Separator orientation='vertical' />
            Mapa do Site
          </Flex>

          <Flex pl='2' justify='center'>
            <p>&copy; 2023 ELEVEN. Todos os Direitos Reservados.</p>
          </Flex>
        </Text>
      </Flex>
    </Flex>
  );
};
