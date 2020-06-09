import { useState } from 'react'

import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon
} from '@chakra-ui/core'

import { useForm } from 'react-hook-form'

import PropTypes from 'prop-types'

import Section from './section'
import Card from './card'
import FBLogoLetters from './logoLetters'
import FBButton from './fbButton'
import TextLink from './textLink'
import ErrorMessage from './errorMessage'

const AuthProcess = ({
  process,
  submitText,
  successText,
  otherProcessLinkText,
  otherProcessText,
  otherProcessHref
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState('')

  const { register, handleSubmit, errors } = useForm()

  const handleProcess = async ({ email }, e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Will pass login or signup from client
      await process({ email })
      setSent(true)
      setFormError('')
    } catch (e) {
      if (e.status === 409) {
        setFormError('Looks like you\'re already signed up! Try logging in.')
      } else {
        setFormError('There was an error submitting the form. Please try again!')
      }
    } finally {
      setIsSubmitting(false)
    }
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
        id='letter-logo-auth'
        marginBottom='3rem'
        display={{ base: 'none', md: 'flex' }}
      />
      <Card marginBottom='3rem' width='100%' maxW='30rem' aria-atomic='true'>
        {!sent && (
          <Box as='form' onSubmit={handleSubmit(handleProcess)} noValidate>
            {formError && (
              <ErrorMessage msg={formError} />
            )}
            <FormControl marginBottom='2.25rem' isRequired>
              <FormLabel htmlFor='email' marginBottom='.5rem'>
                Email address
              </FormLabel>
              <Box aria-atomic='true' id='email-error'>
                {errors.email && (
                  <ErrorMessage msg='Please provide a valid email address' />
                )}
              </Box>
              <Input
                type='email'
                id='email'
                backgroundColor='lightRock'
                name='email'
                aria-describedby='email-error'
                ref={register({
                  required: true,
                  pattern: {
                    value: /^\S+@\S+$/i
                  }
                })}
              />
            </FormControl>
            <FBButton
              isLoading={isSubmitting}
              loadingText='Logging In'
              type='submit'
            >
              {submitText}
            </FBButton>
          </Box>
        )}
        {sent && !formError && (
          <>
            <Alert
              status='success'
              backgroundColor='puddle'
              color='ocean'
              fontWeight='500'
              marginBottom='1.5rem'
              textAlign='center'
              flexDirection='column'
            >
              <AlertIcon color='ocean' marginBottom='.5rem' />
              {successText}
            </Alert>
            <Text>You can now close this tab.</Text>
          </>
        )}
      </Card>
      {!sent && (
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
