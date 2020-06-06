import { Box, Text } from '@chakra-ui/core'

import Section from '../common/section'
import Card from '../common/card'
import UnderlinedHeading from '../common/underlinedHeading'
import ContactForm from './contactForm'

const ContactSection = () => (
  <Section
    display='flex'
    justifyItems='center'
    flexDirection='column'
    alignItems='center'
    padding={{ base: '3rem 1.5rem', lg: '6rem 7.5rem' }}
    backgroundColor='white'
  >
    <UnderlinedHeading text='Contact Us' align='center' marginBottom='3rem' />
    <Card shadowSz='lg' w='100%' maxW='45rem'>
      <Text
        textTransform='uppercase'
        textAlign={{ base: 'center', lg: 'left' }}
        color='ocean'
        fontWeight='bold'
        fontSize='0.875rem'
        marginBottom='2.5rem'
      >
        <Box as='span' display={{ base: 'block', md: 'inline-block' }}>
          Want to get in touch?{' '}
        </Box>
        <Box as='span'> Drop us a line.</Box>
      </Text>
      <ContactForm />
    </Card>
  </Section>
)

export default ContactSection
