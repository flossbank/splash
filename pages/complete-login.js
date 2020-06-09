import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { decode } from 'b36'
import { Heading, Text } from '@chakra-ui/core'

import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import { completeLogin } from '../client'

const CompleteLogin = () => {
  const router = useRouter()
  const { e: encodedEmail, token } = router.query
  const email = decode(encodedEmail || '').toString()
  const [status, setStatus] = useState('Verifying email...')
  const [subHeader, setSubHeader] = useState('')

  async function attemptCompleteLogin () {
    try {
      await completeLogin({ email, token })
      setStatus('Verified')
      // Wait a second then redirect
      setTimeout(() => {
        console.log('redirecting')
        // window.location = 'https://user.flossbank.com/'
      }, 1000)
    } catch (e) {
      setStatus('Authentication Failed')
      setSubHeader(`It looks like you may have clicked on an invalid email verification link. 
      Please close this window and try authenticating again.`)
    }
  }

  useEffect(() => {
    attemptCompleteLogin()
  }, [0]) // only run on mount

  return (
    <PageWrapper title='Log In'>
      <Section
        backgroundColor='lightRock'
        minHeight='85vh'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flex='1'
        flexDirection='column'
        paddingBottom={{ lg: '6rem !important' }}
      >
        <Heading>{status}</Heading>
        {subHeader && (
          <Text>{subHeader}</Text>
        )}
      </Section>
    </PageWrapper>
  )
}

export default CompleteLogin
