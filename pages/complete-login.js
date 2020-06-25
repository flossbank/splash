import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { decode } from 'b36'
import { Heading, Text } from '@chakra-ui/core'

import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import { useAuth } from '../utils/useAuth'

const CompleteLoginPage = () => {
  const router = useRouter()
  const auth = useAuth()
  const [status, setStatus] = useState('Verifying email...')
  const [subHeader, setSubHeader] = useState('')
  const [loginAttempted, setLoginAttempted] = useState(false)

  function showError () {
    setStatus('Authentication Failed')
    setSubHeader(`It looks like you may have clicked on an invalid email verification link. 
    Please close this window and try authenticating again.`)
  }

  async function attemptCompleteLogin () {
    try {
      const { e: encodedEmail, token } = router.query
      if (!encodedEmail || !token) return
      if (loginAttempted) {
        showError()
        return
      }

      const email = decode(encodedEmail || '').toString()
      setLoginAttempted(true)
      await auth.completeLogin({ email, token })
      setStatus('Verified')
      // Wait a second then redirect
      setTimeout(() => {
        router.push('/dashboard')
      }, 1000)
    } catch (e) {
      showError()
    }
  }

  useEffect(() => {
    attemptCompleteLogin()
  }, [router.query]) // only run on mount

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

export default CompleteLoginPage
