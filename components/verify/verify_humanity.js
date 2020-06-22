import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { decode } from 'b36'
import Recaptcha from 'react-recaptcha'
import { verifyRegistration } from '../../client'

import { Flex, Text } from '@chakra-ui/core'

import StepperSection from '../common/stepperSection'
import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import TextLink from '../common/textLink'
import ErrorMessage from '../common/errorMessage'

const VerifyHumanity = () => {
  const router = useRouter()
  const [queryMiss, setQueryMiss] = useState(false)
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [status, setStatus] = useState('')
  const [hasError, setHasError] = useState(false)
  const showCaptcha = useMemo(() => email && token, [email, token])

  useEffect(() => {
    const { e: encodedEmail, token } = router.query || {}
    const noQueryParams = !window.location.search
    const invalidQueryParams = !encodedEmail || !token
    if ((invalidQueryParams && queryMiss) || noQueryParams) {
      setHasError(true)
      setStatus('Failure: no email or token in URL. ')
    } else if (invalidQueryParams) {
      setQueryMiss(true)
    } else {
      setHasError(false)
      setStatus('Verifying email...')
      setEmail(decode(encodedEmail).toString())
      setToken(token)
    }
  }, [router.query])

  const verify = async (response) => {
    try {
      await verifyRegistration({ email, token, response })
      setHasError(false)
      setStatus('Success!')
      router.push('/select')
    } catch (e) {
      setHasError(true)
      setStatus('Failed to verify email. ')
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
    <>
      <Head>
        <script src='https://www.google.com/recaptcha/api.js' async defer />
      </Head>
      <StepperSection steps={steps} currentStep={1} />
      <h1 className='sr-only'>Verify your Flossbank account</h1>
      <Section
        textAlign='center'
        padding={{ base: '1.5rem 1.5rem 3rem', lg: '1rem 3rem 4rem' }}
        aria-live='polite'
      >
        <UnderlinedHeading text='Verify' align='center' aria-hidden='true' />
        <Subheading>No robots allowed</Subheading>
        <Text marginBottom='1rem'>
          On behalf of the open source community, thank you for installing!
          &hearts;
        </Text>
        {!hasError && (
          <Text fontWeight='bold' marginBottom='1.5rem' color='ocean'>
            {status}
          </Text>
        )}
        {showCaptcha && (
          <Flex direction='row' justify='center' marginTop='3rem'>
            <Recaptcha
              render='explicit'
              onloadCallback={() =>
                setStatus(
                  'Please complete the captcha below to verify you\'re a human.'
                )}
              verifyCallback={verify}
              sitekey={process.env.RECAPTCHA_SITE_KEY}
            />
          </Flex>
        )}
        {hasError && (
          <ErrorMessage
            msg={status}
            maxW='30rem'
            iconSz='2rem'
            margin='3rem auto 0'
            color='boulder'
            padding='1.5rem !important'
          >
            Please try again or contact{' '}
            <TextLink
              text='support@flossbank.com'
              href='mailto:support@flossbank.com'
            />{' '}
            for assistance.
          </ErrorMessage>
        )}
      </Section>
    </>
  )
}

export default VerifyHumanity
