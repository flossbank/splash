import { Box, Heading, Text, Code } from '@chakra-ui/core'
import { useEffect, useState } from 'react'

import FBDivider from '../common/divider'
import StepperSection from '../common/stepperSection'
import { startNewCLIInstall } from '../../client'
import TextLink from '../common/textLink'

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
    <Box minHeight='85vh'>
      <StepperSection steps={steps} currentStep={3} />}
      <Box padding={['0 1rem 0 1rem', '0 10% 10% 10%']}>
        <Heading
          textTransform='uppercase'
          fontWeight='bold'
          fontSize='14px'
          textAlign='center'
          marginBottom='1rem'
        >
          Install
        </Heading>
        <FBDivider margin='auto' />
        <Text fontSize='24px' textAlign='center' margin='2rem'>
          Make sure the packages you depend on are represented
        </Text>
        <Text textAlign='center' marginBottom='1rem'>
          Install Flossbank’s package manager wrapper to capture dependency tree
          snapshots when you install open source packages. Flossbank then
          distributes funds across your entire dependency trees.
        </Text>
        <Text textAlign='center' marginBottom='1rem'>
          Flossbank’s custom installer isolates the package manager wrapper from
          the rest of your system by vendorizing its dependencies.
        </Text>
        <Box
          margin={['0', '3rem 10% 2rem 10%']}
          padding={['1rem', '3rem']}
          boxShadow='2px 2px 2px 2px rgba(68, 68, 68, 0.1)'
        >
          <Text>Paste the applicable command in your shell to continue:</Text>
          <Heading
            textTransform='uppercase'
            fontWeight='bold'
            color='ocean'
            fontSize='14px'
            margin='1rem 0 1rem 0'
          >
            OSX / Linux / Bash on windows
          </Heading>
          <Code
            padding='1rem'
            backgroundColor='lightRock'
            color='gray'
            width='100%'
          >
            curl https://get.flossbank.com |
            FLOSSBANK_INSTALL_TOKEN={token} bash
          </Code>
          <Heading
            textTransform='uppercase'
            fontWeight='bold'
            color='ocean'
            fontSize='14px'
            margin='1rem 0 1rem 0'
          >
            Windows powershell
          </Heading>
          <Code
            padding='1rem'
            backgroundColor='lightRock'
            color='gray'
            width='100%'
          >
            $FLOSSBANK_INSTALL_TOKEN="{token}"; iwr
            https://get.flossbank.com/ps -useb | iex
          </Code>
        </Box>
        <Box textAlign='center'>
          <TextLink text='Finished installing' href='/dashboard' />
          {' or '}
          <TextLink text="I'll install later" href='/dashboard' />
        </Box>
      </Box>
    </Box>
  )
}

export default InstallSection
