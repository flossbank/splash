import { Box, Flex, Text } from '@chakra-ui/core'

import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import StepperSection from '../common/stepperSection'
import SelectTierCards from './select_tier_cards'

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
  return (
    <Section
      backgroundColor='white'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flex='1'
      flexDirection='column'
      padding='0 0 3rem'
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
        <Flex flexDirection={['column', 'row']} margin='2rem'>
          <SelectTierCards />
        </Flex>
      </Box>
    </Section>
  )
}

export default SelectTierSection
