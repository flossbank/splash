import {
  Box,
  Flex,
  Text,
  Heading,
} from '@chakra-ui/core'

import FBDivider from '../common/divider'
import Stepper from '../common/stepper'
import SelectTierCards from './select_tier_cards'

const SelectTierSection = () => {
  return (
    <Box height='auto' minHeight='85vh'>
      <Flex flexDirection='column' justify='center' height='10rem' backgroundColor='puddle'>
        <Stepper steps={steps} />
      </Flex>
      <Box padding={['0 1rem 0 1rem', '0 0 0 0']} margin='2rem'>
        <Heading textTransform='uppercase' 
                 fontWeight='bold' 
                 fontSize='14px' 
                 textAlign='center'
                 marginBottom='1rem'>Select</Heading>
        <FBDivider margin='auto'/>
        <Box paddingLeft={['0', '10rem']} paddingRight={['0', '10rem']}>
          <Text fontSize='24px' textAlign='center' margin='2rem'>Choose your level of support</Text>
          <Text textAlign='center' marginBottom='1rem'>
            We are so excited to introduce a free way to contribute back to open source. 
            That means no maintenance, no cost, no selling your data. 
            All you see is curated tech-based advertisements in your terminal during installation of 
            open source packages. So effectively, you're donating your attention. 
            (show me)
          </Text>
          <Text textAlign='center'>
            Alternatively, we encourage and welcome donations that follow the same distribution pattern enabled 
            by our CLI, and no ads are shown if you donate above 10 dollars per month.
          </Text>
        </Box>
      </Box>
      <Flex flexDirection={['column', 'row']} margin='2rem'>
        <SelectTierCards />
      </Flex>
    </Box>
  )
}

const steps = [{
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
}]

export default SelectTierSection