import { Box, Flex, Text } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Elements, ElementsConsumer } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import StepperSection from '../common/stepperSection'
import SelectTierCards from './select_tier_cards'
import DonateForm from './donate_form'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

const InjectedDonateForm = ({ handleSuccess }) => (
  <ElementsConsumer>
    {({ elements, stripe }) => (
      <DonateForm elements={elements} stripe={stripe} handleSuccess={handleSuccess} />
    )}
  </ElementsConsumer>
)

const steps = [
  {
    iconName: 'stepperComplete',
    title: 'Verify'
  },
  {
    iconName: 'stepperInProgress',
    title: 'Select'
  },
  {
    iconName: 'stepperNotStarted',
    title: 'Install'
  }
]

const SelectTierSection = () => {
  const router = useRouter()
  const [showDonateForm, setShowDonateForm] = useState(false)
  const [seeAds, setSeeAds] = useState(false)

  const handleOnSelected = ({ withDonation, seeAds }) => {
    if (!withDonation) return
    if (seeAds) setSeeAds(true)
    setShowDonateForm(true)
  }

  const handleDonationSuccess = () => {
    router.push('/install')
  }

  return (
    <Section
      backgroundColor='white'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flex='1'
      flexDirection='column'
      padding='0 0 0'
    >
      <Box width='100%'>
        <h1 className='sr-only'>Select your level of support</h1>
        <StepperSection steps={steps} currentStep={2} />}
        {/* <Box padding={["0 1rem 0 1rem", "0 0 0 0"]}> */}
        <UnderlinedHeading text='Select' align='center' />
        <Box
          textAlign={{ base: 'center' }}
          maxW='50rem'
          margin='0 auto 1.5rem'
          padding='1.5rem'
        >
          <Subheading align='center'>Choose your level of support</Subheading>
          <Text marginBottom='1rem'>
            <strong>Flossbank</strong> introduces a free way to contribute back
            to open source. That means no maintenance, no cost, no selling your
            data. All you see is curated tech-based advertisements in your
            terminal during installation of open source packages.
          </Text>
          <Text>
            Alternatively, we encourage and welcome selecting our{' '}
            <strong>monthly donor</strong> tier for an optional ad-free
            experience.
          </Text>
        </Box>
        {/* </Box> */}
        <Flex flexDirection={['column', 'row']} margin='2rem 2rem 5rem 2rem'>
          <SelectTierCards onSelected={handleOnSelected} />
        </Flex>
        {showDonateForm && (
          <Box
            as='section'
            id='donate-form'
            padding={['2rem 1rem 5rem 1rem', '2rem 20% 5rem 20%']}
            textAlign='center'
            backgroundColor='puddle'
          >
            <UnderlinedHeading text='Payment info' align='center' />
            <Elements stripe={stripePromise}>
              <InjectedDonateForm handleSuccess={handleDonationSuccess} seeAds={seeAds} />
            </Elements>
          </Box>
        )}
      </Box>
    </Section>
  )
}

export default SelectTierSection
