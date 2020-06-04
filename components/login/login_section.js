import {
  Box,
  Text,
  Flex,
  Input,
  Link,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core'
import { useState } from 'react'

import FBButton from '../common/button'
import FBLogoLetters from '../common/logoLetters'
import useMedia from '../common/useMedia'
import { login } from '../../client'

const LoginSection = () => {
  const isWide = useMedia('(min-width: 800px')
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    if (!email) return showErrorMessage('Email is required')
    setIsSending(true)
    try {
      await login({ email })
      setEmailSent(true)
    } catch (e) {
      showErrorMessage('Something went wrong, please try again')
    } finally {
      setIsSending(false)
    }
  }

  const showErrorMessage = (msg) => {
    setInvalid(true)
    setError(msg)
  }

  const onEmailChange = (e) => {
    if (!e.target.value) return showErrorMessage('Email is required')
    setInvalid(false)
    setEmail(e.target.value)
  }

  return (
    <>
      <Flex
        width='full'
        backgroundColor='lightRock'
        height='45rem'
        flexDirection='row'
        justify='space-around'
      >
        <Box paddingTop='60px'>
          {isWide && <FBLogoLetters margin='0 auto' />}
          <Flex
            flexDirection='column'
            backgroundColor='white'
            width={['100%', '400px']}
            padding='30px'
            marginTop='30px'
            height='14rem'
          >
            {!emailSent ? (
              <Box as='form' onSubmit={handleLogin}>
                <FormControl marginBottom='20px' isRequired isInvalid={invalid}>
                  <FormLabel htmlFor='email'>Email address</FormLabel>
                  <Input
                    type='email'
                    id='email'
                    backgroundColor='lightRock'
                    onChange={onEmailChange}
                  />
                  <FormErrorMessage>{error}</FormErrorMessage>
                </FormControl>
                <FBButton
                  isLoading={isSending}
                  type='submit'
                  backgroundColor='ocean'
                  color='white'
                  _hover={{ marginTop: '3px' }}
                >
                  Log in
                </FBButton>
              </Box>
            ) : (
              <Box textAlign='center'>
                <Text marginBottom='2rem'>
                  Success! Click the magic link in your email to finish logging in!
                </Text>
                <Text>You can now close this tab</Text>
              </Box>
            )}
          </Flex>
          {!emailSent && (
            <Flex
              flexDirection='column'
              width={['100%', '400px']}
              padding='30px'
            >
              <Flex flexDirection='row'>
                <Text marginRight='5px'>Don't have an account? {' '}</Text>
                <Link href='/signup' color='black'>
                  Sign up
                </Link>
              </Flex>
            </Flex>
          )}
        </Box>
      </Flex>
    </>
  )
}

export default LoginSection
