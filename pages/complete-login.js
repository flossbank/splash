import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { decode } from 'b36'
import { Heading, Text, Icon } from '@chakra-ui/core'

import { useLocalStorage } from '../utils/useLocalStorage'
import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import BouncyLoader from '../components/common/bouncyLoader'

import { useAuth } from '../utils/useAuth'

const CompleteLoginPage = () => {
  const router = useRouter()
  const auth = useAuth()
  const [status, setStatus] = useState('Verifying email')
  const [isLoading, setIsLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [subHeader, setSubHeader] = useState('')
  const [loginAttempted, setLoginAttempted] = useState(false)
  const [flossbankDest, setFlossbankDest] = useLocalStorage('flossbank_dest', '')

  function showError () {
    setStatus('Authentication Failed')
    setSubHeader(`It looks like you may have clicked on an invalid email verification link. 
    Please close this window and try authenticating again.`)
  }

  async function attemptCompleteLogin () {
    setIsLoading(true)
    try {
      const { e: encodedEmail, token } = router.query
      if (!encodedEmail || !token) return
      if (loginAttempted) {
        showError()
        setIsLoading(false)
        return
      }

      const email = decode(encodedEmail || '').toString()
      setLoginAttempted(true)
      await auth.completeLogin({ email, token })

      setTimeout(() => {
        setStatus('Logging in…')
        setVerified(true)
        setIsLoading(false)
      }, 1000)
      setTimeout(() => {
        // Set cached dest no matter what and redirect to one if it existed
        setFlossbankDest('')
        if (flossbankDest) router.push(flossbankDest)
        else router.push('/dashboard')
      }, 2000)
    } catch (e) {
      showError()
      setIsLoading(false)
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
        aria-live='polite'
        aria-atomic='true'
        aria-busy={isLoading}
      >
        <Heading marginBottom='3rem' color='boulder' fontWeight='400'>
          {status}
        </Heading>
        {isLoading && <BouncyLoader />}
        {verified && (
          <Icon
            name='check'
            size='4rem'
            color='puddle'
            backgroundColor='lake'
            borderRadius='50%'
            padding='1rem'
          />
        )}
        {subHeader && <Text>{subHeader}</Text>}
      </Section>
    </PageWrapper>
  )
}

export default CompleteLoginPage
