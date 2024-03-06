import menina from '../assets/mulhersentada.png';
import { Button, Flex, Text, Heading } from '@radix-ui/themes';

export const HeadlineSection = () => {
  return (
    <Flex
      direction={{ initial: 'column', sm: 'row' }}
      p={{ initial: '2', sm: '8' }}
      align='center'
      justify='center'
      gap={{ initial: '6', sm: '2' }}
    >
      <img
        src={menina}
        style={{
          objectFit: 'contain',
          width: '530px',
          height: '530px',
          maxWidth: '100%',
        }}
      />

      <Flex direction='column' gap='4' pl='8' justify='start'>
        <Heading size={{ initial: '8', md: '9' }}>
          As melhores soluções digitais para sua empresa!
        </Heading>
        <Text size={{ initial: '4', md: '5' }}>
          Marketing digital é uma estratégia de promoção de produtos ou serviços através
          de canais online, como redes sociais, e-mail marketing e motores de busca.
        </Text>
        <Button size='4' style={{ maxWidth: 'fit-content' }} color='lime'>
          Conhecer!
        </Button>
      </Flex>
    </Flex>
  );
};
