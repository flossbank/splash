import Section from '../../common/section'
import UnderlinedHeading from '../../common/underlinedHeading'

import { useAuth } from '../../../utils/useAuth'
import BillingInformationSection from './billingInformationSection'
import AccountInformationSection from './accountInformationSection'

const UserSettingsSection = () => {
  const { user } = useAuth()

  return (
    <Section
      display='flex'
      justifyItems='center'
      flexDirection='column'
      alignItems='center'
      padding={{ base: '3rem 1.5rem', lg: '4rem 7.5rem' }}
      backgroundColor='lightRock'
    >
      <UnderlinedHeading
        as='h1'
        text='Settings'
        align='center'
        marginBottom='3rem'
      />
      <BillingInformationSection user={user} />
      <AccountInformationSection user={user} />
    </Section>
  )
}

export default UserSettingsSection
