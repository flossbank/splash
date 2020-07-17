import { useRouter } from 'next/router'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js'

import { Text } from '@chakra-ui/core'

import DonateForm from './donateForm'
import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

const InjectedDonateForm = ({ handleSuccess }) => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <DonateForm
        elements={elements}
        stripe={stripe}
        handleSuccess={handleSuccess}
      />
    )}
  </ElementsConsumer>
)

const DonateSection = ({ seeAds }) => {
  const router = useRouter()

  const handleDonationSuccess = () => {
    router.push('/install')
  }

  return (
    <Section
      textAlign='center'
      backgroundColor='lightRock'
      id='donate-form'
      paddingBottom={{ lg: '6rem' }}
    >
      <UnderlinedHeading text='Payment Information' align='center' />
      <Text fontSize='1.5rem'>
        Set a monthly contribution and input your card information
      </Text>
      <Elements stripe={stripePromise}>
        <InjectedDonateForm
          handleSuccess={handleDonationSuccess}
          seeAds={seeAds}
        />
      </Elements>
    </Section>
  )
}

export default DonateSection
