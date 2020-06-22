import { Box, Text } from '@chakra-ui/core'
import { useEffect, useState } from 'react'

import StepperSection from '../common/stepperSection'
import { startNewCLIInstall } from '../../client'
import TextLink from '../common/textLink'
import Card from '../common/card'
import InstallCommands from './installCommands'
import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import LinkBtn from '../common/linkBtn'

const steps = [
  {
    iconName: 'stepperComplete',
    title: 'Verify'
  },
  {
    iconName: 'stepperComplete',
    title: 'Select'
  },
  {
    iconName: 'stepperInProgress',
    title: 'Install'
  }
]

const InstallSection = () => {
  const [token, setToken] = useState('')

  async function fetchInstallToken () {
    try {
      const { token: tokenRes } = await startNewCLIInstall()
      setToken(tokenRes)
    } catch (e) {
      // TODO handle error
    }
  }

  useEffect(() => {
    fetchInstallToken()
  }, [0]) // only run on mount

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
        <h1 className='sr-only'>Install the Flossbank CLI</h1>
        <StepperSection steps={steps} currentStep={3} />}
        <UnderlinedHeading
          text='Install'
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
          <Subheading>Support the open source you use</Subheading>
          <Text marginBottom='1.5rem' maxW='72ch'>
            Install Flossbank’s package manager wrapper to capture dependency
            tree snapshots when you install open source packages. Flossbank then
            distributes funds across your entire dependency trees.
          </Text>
          <Text marginBottom='3.5rem' maxW='72ch'>
            Flossbank’s custom installer isolates the package manager wrapper
            from the rest of your system by vendorizing its dependencies.
          </Text>
          <Card
            shadowSz='lg'
            maxW='55rem'
            margin='0 auto 3rem'
            textAlign='left'
          >
            <Text marginBottom='3rem'>
              Copy and paste the applicable command in your shell to continue:
            </Text>
            <InstallCommands token={token} />
            <Text>
              Once you install, Flossbank will send you an email to verify your
              account.
            </Text>
          </Card>

          <Box>
            <LinkBtn
              href='/dashboard'
              className='u-box-shadow'
              display='block'
              margin='0 0 1.5rem'
              padding='1rem 1.75rem'
              fontWeight='bold'
            >
              I've Finished Installing
            </LinkBtn>
            <TextLink
              text="I'll finish installing later"
              href='/dashboard'
              fontWeight='400'
            />
          </Box>
        </Box>
      </Box>
    </Section>
  )
}

export default InstallSection
