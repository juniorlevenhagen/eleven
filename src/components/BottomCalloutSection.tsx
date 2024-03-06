import { Flex, Heading, Text, Box, Strong } from '@radix-ui/themes';
import menino from '../assets/homemsentado.png';

export const BottomCalloutSection = () => {
  return (
    <Flex gap='2' p={{ initial: '2', sm: '8' }} height='max-content' align='center'>
      <Box
        width='max-content'
        p='4'
        style={{ alignItems: 'center', justifyItems: 'center' }}
      >
        <Heading
          style={{ padding: '20px', backgroundImage: '../assets/homemsentado.png' }}
          size={{ initial: '8', md: '9' }}
        >
          
          <Heading size='9'>
          Potencialize sua Presença Online
          </Heading>
          <Text size='7' as='p' style={{ color: 'var(--gray-10)' }}>
            <Strong style={{ color: 'var(--blue-8)' }}>Descubra</Strong> o poder de um
            site impactante e estratégias de{' '}
            <Strong style={{ color: 'var(--blue-8)' }}>marketing digital</Strong> para{' '}
            <Strong style={{ color: 'var(--blue-8)' }}>transformar</Strong> sua presença
            online, ampliar sua visibilidade e impulsionar suas vendas além de todas as
            <Strong style={{ color: 'var(--blue-8)' }}> expectativas.</Strong>
          </Text>
        </Heading>
      </Box>

      <Box>
        <img style={{ width: '600px', height: 'auto' }} src={menino} alt='' />
      </Box>
    </Flex>
  );
};
