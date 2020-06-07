import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Alert,
  AlertIcon
} from '@chakra-ui/core'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import FBButton from '../common/fbButton'
import TextLink from '../common/textLink'
import ErrorMessage from '../common/ErrorMessage'

import { sendSupportFeedback } from '../../client'

const FBFormControl = ({ labelText, id, required, children, ...props }) => (
  <FormControl marginBottom='1.5rem' isRequired={required} {...props}>
    <FormLabel
      htmlFor={id}
      marginBottom='.5rem'
      fontWeight='400 !important'
      fontSize='1rem'
    >
      {labelText}
    </FormLabel>
    {children}
  </FormControl>
)

const FBTextInput = ({ id, type, register, ...props }) => (
  <Input
    id={id}
    type={type}
    backgroundColor='lightRock'
    borderRadius='10px'
    ref={register}
    {...props}
  />
)

const topics = [
  'Contribute',
  'Partnerships',
  'Help installing',
  'Feedback',
  'Bug',
  'Other'
]

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const [formError, setFormError] = useState(false)

  const { register, handleSubmit, errors } = useForm()

  const submit = async (values, e) => {
    e.preventDefault()

    const { name, email, topic, body } = values

    setIsSubmitting(true)

    try {
      await sendSupportFeedback({ name, email, topic, body })
      setFormError(false)
      setSent(true)
    } catch (e) {
      setFormError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Box aria-atomic='true'>
      {sent && !formError && (
        <Alert
          status='success'
          backgroundColor='puddle'
          color='ocean'
          fontWeight='500'
          marginBottom='1.5rem'
        >
          <AlertIcon color='ocean' />
          Your message was successfully sent! We'll get back to you soon.
        </Alert>
      )}
      {!sent && (
        <Box
          as='form'
          textAlign='left'
          color='boulder'
          textTransform='none'
          noValidate
          onSubmit={handleSubmit(submit)}
        >
          {formError && (
            <ErrorMessage msg='There was an error submitting the form. Please try again!' />
          )}
          <FBFormControl labelText='Your name' id='your-name' required>
            {errors.name && (
              <ErrorMessage
                id='name-error'
                msg="Don't forget to tell us your name!"
              />
            )}
            <FBTextInput
              id='your-name'
              type='text'
              name='name'
              register={register({ required: true })}
              aria-describedby='name-error'
            />
          </FBFormControl>
          <FBFormControl labelText='Email address' id='email' required>
            {errors.email && (
              <ErrorMessage
                id='email-error'
                msg='Please enter a valid email address'
              />
            )}
            <FBTextInput
              id='email'
              type='email'
              name='email'
              aria-describedby='email-error'
              register={register({
                required: true,
                pattern: {
                  value: /^\S+@\S+$/i
                }
              })}
            />
          </FBFormControl>
          <FBFormControl labelText='Topic' id='topic' required>
            {errors.topic && (
              <ErrorMessage
                id='topic-error'
                msg='Please select a topic that pertains to your message'
              />
            )}
            <Select
              id='topic'
              placeholder='What is this about?'
              variant='filled'
              backgroundColor='lightRock'
              color='boulder'
              name='topic'
              aria-describedby='topic-error'
              _hover={{
                backgroundColor: '#f2f2f2'
              }}
              ref={register({ required: true })}
            >
              {topics.map((topic, i) => (
                <option value={topic} name={topic} key={i}>
                  {topic}
                </option>
              ))}
            </Select>
          </FBFormControl>
          <FBFormControl labelText='How can we help?' id='message' required>
            {errors.body && (
              <ErrorMessage
                id='message-error'
                msg="Don't forget to enter your message. We'd love to hear from you!"
              />
            )}
            <Textarea
              id='message'
              name='body'
              backgroundColor='lightRock'
              borderRadius='10px'
              resize='none'
              height='8rem'
              aria-describedby='topic-error'
              ref={register({ required: true })}
            />
          </FBFormControl>

          <Box marginTop='2rem'>
            <FBButton
              isLoading={isSubmitting}
              as='button'
              type='submit'
              className='u-box-shadow'
              margin='0 0 1.5rem'
            >
              Submit
            </FBButton>
          </Box>
        </Box>
      )}
      <Text>
        You can also email us directly at{' '}
        <TextLink
          text='support@flossbank.com'
          href='mailto:support@flossbank.com'
        />
        .
      </Text>
    </Box>
  )
}

export default ContactForm
