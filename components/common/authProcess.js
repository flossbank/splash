import { useState } from 'react'

import {
  Box,
  Text,
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel
} from '@chakra-ui/core'

import PropTypes from 'prop-types'

import Section from './section'
import Card from './card'
import FBLogoLetters from './logoLetters'
import FBButton from './fbButton'
import TextLink from './textLink'

const AuthProcess = ({
  process,
  submitText,
  successText,
  otherProcessLinkText,
  otherProcessText,
  otherProcessHref
}) => {
  const [email, setEmail] = useState('')
  const [invalid, setInvalid] = useState(false)
  const [error, setError] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [isSending, setIsSending] = useState(false)

  const handleProcess = async (e) => {
    e.preventDefault()
    if (!email) return showErrorMessage('Email is required')
    setIsSending(true)
    try {
      // will pass login or signup from client
      await process({ email })
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
    <Section
      backgroundColor='lightRock'
      display='flex'
      alignItems='center'
      justifyContent='center'
      flex='1'
      flexDirection='column'
      paddingBottom={{ lg: '6rem !important' }}
    >
      <h1 className='sr-only'>{submitText}</h1>
      <FBLogoLetters
        marginBottom='3rem'
        width='3rem'
        display={{ base: 'none', md: 'flex' }}
      />
      <Card marginBottom='3rem' width='100%' maxW='30rem'>
        {!emailSent ? (
          <Box as='form' onSubmit={handleProcess}>
            <FormControl marginBottom='2.25rem' isRequired isInvalid={invalid}>
              <FormLabel htmlFor='email' marginBottom='.5rem'>
                Email address
              </FormLabel>
              <Input
                type='email'
                id='email'
                backgroundColor='lightRock'
                onChange={onEmailChange}
              />
              <FormErrorMessage>{error}</FormErrorMessage>
            </FormControl>
            <FBButton isLoading={isSending} as='button' type='submit'>
              {submitText}
            </FBButton>
          </Box>
        ) : (
          <Box textAlign='center'>
            <Text marginBottom='2rem'>{successText}</Text>
            <Text>You can now close this tab</Text>
          </Box>
        )}
      </Card>
      {!emailSent && (
        <Box
          width='100%'
          maxW='30rem'
          textAlign={{ base: 'center', lg: 'left' }}
          paddingLeft={{ lg: '3.125rem' }}
        >
          <Text>
            {otherProcessText}{' '}
            <TextLink href={otherProcessHref} text={otherProcessLinkText} />
          </Text>
        </Box>
      )}
    </Section>
  )
}

AuthProcess.propTypes = {
  // pass login or sign up from client
  process: PropTypes.func.isRequired,

  // text for the submit button
  submitText: PropTypes.string.isRequired,
  // message to show if process was successful
  successText: PropTypes.string.isRequired,
  // text to go below the form
  otherProcessText: PropTypes.string.isRequired,
  otherProcessHref: PropTypes.string.isRequired,
  otherProcessLinkText: PropTypes.string.isRequired
}
export default AuthProcess
