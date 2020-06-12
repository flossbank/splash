import React, { useState } from 'react'
import { Box, Heading, Flex, Text } from '@chakra-ui/core'
import { decode } from 'b36'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Recaptcha from 'react-recaptcha'
import { verifyRegistration } from '../../client'
import FBDivider from '../common/divider'
import StepperSection from '../common/stepperSection'

const VerifyHumanity = () => {
  const router = useRouter()
  const { e: encodedEmail, token } = router.query
  const email = decode(encodedEmail || '').toString()
  const [verified, setVerified] = useState(false)
  const [status, setStatus] = useState('Verifying email...')

  const verify = async (response) => {
    if (!encodedEmail || !token) {
      setVerified(true)
      setStatus('Failure, no email or token in URL, contact support@flossbank.com for assistance.')
      return
    }
    try {
      await verifyRegistration({ email, token, response })
      setVerified(true)
      setStatus('Success!')
      router.push('/select')
    } catch (e) {
      setStatus(
        'Failed to verify email. Please try again or contact support@flossbank.com for assistance.'
      )
    }
  }

  const steps = [
    {
      iconName: 'stepperInProgress',
      title: 'Verify'
    },
    {
      iconName: 'stepperNotStarted',
      title: 'Select'
    },
    {
      iconName: 'stepperNotStarted',
      title: 'Install'
    }
  ]

  return (
    <Box height='85vh'>
      <Head>
        <script src='https://www.google.com/recaptcha/api.js' async defer />
      </Head>
      <StepperSection steps={steps} currentStep={1} />}
      <Box padding={['0 1rem 0 1rem', '0 0 0 0']}>
        <Heading
          textTransform='uppercase'
          fontWeight='bold'
          fontSize='14px'
          textAlign='center'
          marginBottom='1rem'
        >
          Verify
        </Heading>
        <FBDivider margin='auto' />
        <Text fontSize='24px' textAlign='center' margin='2rem'>
          No robots allowed
        </Text>
        <Text textAlign='center' marginBottom='1rem'>
          On behalf of the open source community, thank you for installing! ♥
        </Text>
        <Text textAlign='center'>{status}</Text>
        {!verified && (
          <Flex flexDirection='row' justify='center' marginTop='3rem'>
            <Recaptcha
              render='explicit'
              onloadCallback={() =>
                setStatus('Please complete the captcha below to verify you\'re a human.')}
              verifyCallback={(response) => verify(response)}
              sitekey={process.env.RECAPTCHA_SITE_KEY}
            />
          </Flex>
        )}
      </Box>
    </Box>
  )
}

export default VerifyHumanity
