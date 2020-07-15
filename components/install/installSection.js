import { Box, Text, Code } from '@chakra-ui/core'
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
import PropTypes from 'prop-types'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { useAuth } from '../../utils/useAuth'
import { localStorageDashboardInstallReminderKey } from '../../utils/constants'

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

const PostInstallInstructions = ({ noAds }) => {
  const topText = noAds
    ? 'Thanks for choosing to support the Open Source community!'
    : "Let's try it out!"
  return (
    <Card
      id='post-install'
      shadowSz='lg'
      maxW='55rem'
      margin='0 auto 3rem'
      textAlign='left'
    >
      <Text marginBottom='1rem'>
        <strong>Great! {topText}</strong>
      </Text>
      <Text marginBottom='1rem'>
        Flossbank wraps package managers (currently only <code>npm</code> and{' '}
        <code>yarn</code>). This means that when you run your package manager to
        install a package, Flossbank will automatically be invoked.
      </Text>
      {noAds ? (
        <Text marginBottom='1rem'>
          Next time you run <code>npm</code> or <code>yarn</code>, Flossbank
          will silently determine the dependency tree of the packages installed
          and allocate your donation accordingly.
        </Text>
      ) : (
        <>
          <Text marginBottom='1rem'>
            Try opening a new terminal window/tab and installing a package with{' '}
            <code>npm</code>:
          </Text>
          <Code
            padding='1rem'
            marginBottom='1rem'
            backgroundColor='lightRock'
            color='boulder'
            width='100%'
          >
            npm install standard
          </Code>
          <Text marginBottom='2rem'>
            You should see an ad or two during installation! If you don't, it's
            not your fault.{' '}
            <TextLink
              text="Let us know and we'll see what went wrong."
              href='/contact'
            />
          </Text>
          <Text>
            If you saw an ad, you're all set! Head to the Dashboard for a
            birds-eye view of your impact.
          </Text>
        </>
      )}
    </Card>
  )
}

PostInstallInstructions.propTypes = {
  noAds: PropTypes.bool.isRequired
}

const InstallSection = () => {
  const [token, setToken] = useState('')
  const [finishedInstalling, setFinishedInstalling] = useState(false)
  const [_, setShowInstallReminder] = useLocalStorage(
    //eslint-disable-line
    localStorageDashboardInstallReminderKey,
    true
  )
  const auth = useAuth()
  const noAds = auth.user && !!auth.user.optOutOfAds

  function finishInstalling () {
    setFinishedInstalling(true)
    setShowInstallReminder(false)
  }

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
          <Subheading>Support the Open Source you use</Subheading>
          <Text marginBottom='3.5rem' maxW='72ch'>
            Surprised to see an install command? Flossbank’s package manager
            wrapper helps us determine where to distribute the funds you
            generate for Open Source. See{' '}
            <TextLink href='/how-it-works' external text='how it works' /> to
            learn more.
          </Text>
          <InstallInstructions token={token} />
          {!finishedInstalling ? (
            <Box>
              <LinkBtn
                onClick={finishInstalling}
                href='#post-install'
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
          ) : (
            <>
              <PostInstallInstructions noAds={noAds} />
              <Box>
                <LinkBtn
                  href='/dashboard'
                  className='u-box-shadow'
                  display='block'
                  margin='0 0 1.5rem'
                  padding='1rem 1.75rem'
                  fontWeight='bold'
                >
                  Go to Dashboard
                </LinkBtn>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Section>
  )
}

export default InstallSection
