import {
  Box,
  Flex,
  Text,
  Heading,
  Icon
} from '@chakra-ui/core'

import FBDivider from '../common/divider'
import Stepper from '../common/stepper'
import FBButton from '../common/button'

const SelectTierSection = () => {
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
        <Text fontSize='24px' textAlign='center' margin='2rem'>Choose your level of support</Text>
        <Text textAlign='center' marginBottom='1rem'>
          We are so excited to introduce a free way to contribute back to open source. 
          That means no maintenance, no cost, no selling your data. 
          All you see is curated tech-based advertisements in your terminal during installation of 
          open source packages. So effectively, you're donating your attention. 
          (show me)
        </Text>
        <Text>
          Alternatively, we encourage and welcome donations that follow the same distribution pattern enabled 
          by our CLI, and no ads are shown if you donate above 10 dollars per month.
        </Text>
      </Box>
      <Flex flexDirection='row' margin='2rem'>
        <Box boxShadow='2px 2px 2px 2px rgba(68, 68, 68, 0.1)'
             padding='2rem'
             width='33%'
             margin='2rem'>
          <Heading textTransform='uppercase' 
                   fontWeight='bold' 
                   fontSize='14px' 
                   marginBottom='1rem'>Free</Heading>
          <FBDivider float='left'/>
          <Text fontSize='24px' marginTop='3rem' >I occasionally use open source</Text>
          <Text marginTop='1rem' marginBottom='1rem'>
            During installation of open source packages, see curated tech advertisements
          </Text>
          <FBButton color='white' backgroundColor='ocean' marginBottom='1rem'>
            Select
          </FBButton>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='close' margin={['auto .5rem auto .5rem']} />
            <Text textTransform='uppercase'>Ad-Free</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='close' />
            <Text textTransform='uppercase'>Set contribution amount</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Support entire dependency tree</Text>
          </Flex>
        </Box>
        <Box boxShadow='1px 1px 1px 1px rgba(68, 68, 68, 0.1)'
             padding='2rem'
             width='33%'
             margin='2rem'>
          <Heading textTransform='uppercase' 
                   fontWeight='bold' 
                   fontSize='14px' 
                   marginBottom='1rem'>$10 and up</Heading>
          <FBDivider margin='auto' float='left'/>
          <Text fontSize='24px'>I use open source a decent amount</Text>
          <Text>
            Make a monthly donation that reflects your usage
          </Text>
          <FBButton color='white' backgroundColor='ocean'>
            Select
          </FBButton>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Ad-Free</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Set contribution amount</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Support entire dependency tree</Text>
          </Flex>
        </Box>
        <Box boxShadow='1px 1px 1px 1px rgba(68, 68, 68, 0.1)'
             padding='2rem'
             width='33%'
             margin='2rem'>
          <Heading textTransform='uppercase' 
                   fontWeight='bold' 
                   fontSize='14px' 
                   marginBottom='1rem'>Donate and see ads</Heading>
          <FBDivider margin='auto' float='left'/>
          <Text fontSize='24px'>I use OSS in everything I build</Text>
          <Text>
            Make a monthly donation AND see curated tech advertisements during installation of OSS packages
          </Text>
          <FBButton color='white' backgroundColor='ocean'>
            Select
          </FBButton>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='close' />
            <Text textTransform='uppercase'>Ad-Free</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Set contribution amount</Text>
          </Flex>
          <Flex flexDirection='row' color='ocean'>
            <Icon name='check' />
            <Text textTransform='uppercase'>Support entire dependency tree</Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default SelectTierSection