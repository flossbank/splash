import { Box, Text, Code } from '@chakra-ui/core'

import Card from '../common/card'
import InstallCommands from '../install/installCommands'
import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'

const InstallInstructions = () => (
  <Card shadowSz='lg' maxW='55rem' margin='0 auto 3rem' textAlign='left'>
    <Text marginBottom='3rem'>
      Copy and paste the applicable command in your shell to continue:
    </Text>
    <InstallCommands />
  </Card>
)

const UpdateSection = () => {
  return (
    <Section
      backgroundColor='white'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flex='1'
      flexDirection='column'
      padding='0'
    >
      <Box width='100%'>
        <h1 className='sr-only'>Update the Flossbank CLI</h1>
        <UnderlinedHeading
          text='Update'
          align='center'
          marginBottom='1.5rem'
        />
        <Box
          textAlign='center'
          maxW='50rem'
          margin='0 auto 1.5rem'
          padding='0 1.5rem 3rem'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <Box marginBottom='2rem'>
            <Text>
              If updating the CLI with
              <Code
                padding='0.2rem 0.2rem 0.2rem 0.2rem'
                margin='0.5rem'
                backgroundColor='lightRock'
                color='boulder'
                children='flossbank update'
              />
              failed, try re-installing with the script below or run
              <Code
                padding='0.2rem 0.2rem 0.2rem 0.2rem'
                margin='0.5rem'
                backgroundColor='lightRock'
                color='boulder'
                children='DEBUG=flossbank flossbank update'
              />
              to see more details of the failure.
            </Text>
          </Box>
          <InstallInstructions />
        </Box>
      </Box>
    </Section>
  )
}

export default UpdateSection
