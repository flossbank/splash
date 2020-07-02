import { Text } from '@chakra-ui/core'

import Section from '../../common/section'
import Card from '../../common/card'
import UnderlinedHeading from '../../common/underlinedHeading'

const UserSettingsSection = ({ ...props }) => (
  <Section
    display='flex'
    justifyItems='center'
    flexDirection='column'
    alignItems='center'
    padding={{ base: '3rem 1.5rem', lg: '6rem 7.5rem' }}
    backgroundColor='white'
    {...props}
  >
    <UnderlinedHeading text='User Settings' align='center' marginBottom='3rem' />
    <Card shadowSz='lg' w='100%' maxW='45rem'>
      <Text
        textTransform='uppercase'
        textAlign={{ base: 'center', lg: 'left' }}
        color='ocean'
        fontWeight='bold'
        fontSize='0.875rem'
        marginBottom='2.5rem'
      >
        Settings
      </Text>
    </Card>
  </Section>
)

export default UserSettingsSection
