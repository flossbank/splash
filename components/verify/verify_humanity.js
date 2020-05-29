import React, { useState, useEffect } from 'react'
import {
  Box,
  Heading,
  Flex,
  Text,
  Icon,
  Divider,
} from '@chakra-ui/core'
import { decode } from 'b36'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Recaptcha from 'react-recaptcha'
import { 
  verifyEmail,
  validateCaptcha
} from '../../client'

import FBDivider from '../common/divider'

const VerifyHumanity = () => {
  const router = useRouter()
  const { e: encodedEmail, token, kind } = router.query
  // if (!encodedEmail || !token || !kind) {
  //   if (typeof window !== 'undefined') window.location.replace('https://flossbank.com/')
  // }
  const email = decode(encodedEmail || '').toString()
  const [step, setStep] = useState('EMAIL')
  const [status, setStatus] = useState('Verifying email...')

  useEffect(() => {
    verifyEmailAddress()
  }, [0])

  const verifyEmailAddress = async () => {
    try {
      const res = await verifyEmail({ email, token, kind })
      if (!res.success) {
        return setStatus('Failed to verify email. Please try again or contact support@flossbank.com for assistance.')
      }
      if (kind === 'advertiser' || kind === 'maintainer') {
        window.location = 'https://flossbank.com/login?welcome=true'
      } else {
        setStep('RECAPTCHA')
      }
    } catch (e) {
      setStatus('Failed to verify email. Please try again or contact support@flossbank.com for assistance.')
      return
    }
  }

  const handleRecaptchaVerified = async (response) => {
    const res = await validateCaptcha({ email, token, response })
    // TODO move to next step
    if (!res.success) {
      return setStatus('Failed to get token. Please contact support@flossbank.com for help.')
    }
  }

  return (
    <Box height='85vh'>
      <Head>
        <script src='https://www.google.com/recaptcha/api.js' async defer />
      </Head>
      <Flex flexDirection='column' justify='center' height='10rem' backgroundColor='puddle'>
        <Flex flexDirection='row' justify='center'>
          <Flex flexDirection='column' zIndex='2'>
            <Icon name='stepperInProgress' size='2rem' marginLeft='auto' marginRight='auto'/>
            <Heading fontSize='12px' fontWeight='bold' textAlign='center'>Step 1</Heading>
            <Text fontSize='14px' textAlign='center'>Verify</Text>
          </Flex>
          <Divider backgroundColor='rock' 
                   width='20%' 
                   height='5px' 
                   marginTop='0.8rem' 
                   marginLeft='-.3rem' 
                   marginRight='-.3rem'
                   zIndex='1' />
          <Flex flexDirection='column' zIndex='2'>
            <Icon name='stepperNotStarted' size='2rem' marginLeft='auto' marginRight='auto'/>
            <Heading fontSize='12px' fontWeight='bold' textAlign='center'>Step 2</Heading>
            <Text fontSize='14px' textAlign='center'>Select</Text>
          </Flex>
          <Divider backgroundColor='rock' 
                   width='20%' 
                   height='5px' 
                   marginTop='0.8rem' 
                   marginLeft='-.3rem' 
                   marginRight='-.3rem'
                   zIndex='1' />
          <Flex flexDirection='column' zIndex='2'>
            <Icon name='stepperNotStarted' size='2rem' marginLeft='auto' marginRight='auto'/>
            <Heading fontSize='12px' fontWeight='bold' textAlign='center'>Step 3</Heading>
            <Text fontSize='14px' textAlign='center'>Install</Text>
          </Flex>
        </Flex>
      </Flex>
      <Box padding={['4rem 1rem 0 1rem', '4rem 0 0 0']}>
        <Heading textTransform='uppercase' 
                 fontWeight='bold' 
                 fontSize='14px' 
                 textAlign='center'
                 marginBottom='1rem'>Verify</Heading>
        <FBDivider margin='auto'/>
        <Text fontSize='24px' textAlign='center' margin='2rem'>No robots allowed</Text>
        <Text textAlign='center' marginBottom='1rem'>On behalf of the open source community, thank you for installing! ♥</Text>
        <Text textAlign='center'>{status}</Text>
        {step === 'RECAPTCHA' && (<Box>
          <Recaptcha
            onloadCallback={() => setStatus('To continue, please verify you aren\'t a robot with the captcha below')}
            verifyCallback={handleRecaptchaVerified}
            sitekey={process.env.RECAPTCHA_SITE_KEY}
          />
        </Box>)}
      </Box>
    </Box>
  )
}

export default VerifyHumanity
