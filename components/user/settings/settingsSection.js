import { Text } from '@chakra-ui/core'

import Section from '../../common/section'
import Card from '../../common/card'
import UnderlinedHeading from '../../common/underlinedHeading'

import { useAuth } from '../../../utils/useAuth'

const UserSettingsSection = ({ ...props }) => {
  const { user } = useAuth()

  return (
    <Section
      display='flex'
      justifyItems='center'
      flexDirection='column'
      alignItems='center'
      padding={{ base: '3rem 1.5rem', lg: '4rem 7.5rem' }}
      backgroundColor='white'
      {...props}
    >
      <UnderlinedHeading text='User Settings' align='center' marginBottom='3rem' />
      <Card shadowSz='lg' w='100%' maxW='80%'>
        <Text
          textTransform='uppercase'
          textAlign={{ base: 'center', lg: 'left' }}
          color='ocean'
          fontWeight='bold'
          fontSize='0.875rem'
          marginBottom='1.5rem'
        >
          Billing info
        </Text>
        <Text>
          Payment method
        </Text>
        <Text>
          {user.billingInfo.last4 ? `****-****-****-${user.billingInfo.last4}` : 'N/a'}
        </Text>
      </Card>
    </Section>
  )
}

export default UserSettingsSection
