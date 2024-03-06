import { Text, Card, Flex, Box, Avatar } from '@radix-ui/themes';
import design from '../assets/design.png'
import desen from '../assets/desen.png'
import mktdgt from '../assets/mktdgt.png'
import '../App.css'

export const ServicesSection = () => {
  return (
    <Flex p='7' justify='center' gap='9' style={{ marginTop: '30px' }}>
      <Card className='card1'
        style={{
          maxWidth: 'max-content',
          backgroundColor: 'var(--gray-4)',
          boxShadow: 'var(--shadow-4)',
          
        }}
        variant='ghost'
      >
        <Flex gap='3' align='center' p='2'>
          <Avatar
            size='7'
            src={desen}
            radius='full'
            fallback='T'
          />
          <Box>
            <Text as='div' size='3' weight='bold' style={{ color: 'var(--black-1)' }}>
              Tráfego & Métricas
            </Text>
            <Text as='div' size='3' style={{ color: 'var(--black-1)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </Flex>
      </Card>
      <></>
      <Card
      className='card2'
        style={{
          maxWidth: 'max-content',
          backgroundColor: 'var(--gray-4)',
          boxShadow: 'var(--shadow-4)',
      
        }}
        variant='ghost'
      >
        <Flex gap='3' align='center' p='2'>
          <Avatar
            size='7'
            src={design}
            radius='full'
            fallback='T'
          />
          <Box>
            <Text as='div' size='3' weight='bold' style={{ color: 'var(--black-1)' }}>
              Marketing Digital
            </Text>
            <Text as='div' size='3' color='gray' style={{ color: 'var(--black-1)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </Flex>
      </Card>
      <></>
      <Card
      className='card3'
        style={{
          maxWidth: 'max-content',
          backgroundColor: 'var(--gray-4)',
          boxShadow: 'var(--shadow-4)',
          
        }}
        variant='ghost'
      >
        <Flex gap='3' align='center' p='2'>
          <Avatar
            size='7'
            src={mktdgt}
            radius='full'
            fallback='T'
          />
          <Box>
            <Text as='div' size='3' weight='bold' style={{ color: 'var(--black-1)' }}>
              Loja Virtual
            </Text>
            <Text as='div' size='3' style={{ color: 'var(--black-1)' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </Box>
        </Flex>
      </Card>
    </Flex>
  );
};
