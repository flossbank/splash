import { Box, Text, Code } from '@chakra-ui/core'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { startNewCLIInstall } from '../../client'
import Card from '../common/card'
import InstallCommands from '../install/installCommands'
import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'

const InstallInstructions = ({ token }) => (
  <Card shadowSz='lg' maxW='55rem' margin='0 auto 3rem' textAlign='left'>
    <Text marginBottom='3rem'>
      Copy and paste the applicable command in your shell to continue:
    </Text>
    <InstallCommands token={token} />
  </Card>
)

InstallInstructions.propTypes = {
  token: PropTypes.string.isRequired
}

const UpdateSection = () => {
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
                children='Flossbank update'
              />
              failed, try re-installing with the following commands or running
              <Code
                padding='0.2rem 0.2rem 0.2rem 0.2rem'
                margin='0.5rem'
                backgroundColor='lightRock'
                color='boulder'
                children='DEBUG=FLOSSBANK Flossbank update'
              />
              to attempt manually debugging.
            </Text>
          </Box>
          <InstallInstructions token={token} />
        </Box>
      </Box>
    </Section>
  )
}

export default UpdateSection
