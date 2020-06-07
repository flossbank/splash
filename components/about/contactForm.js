import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea
} from '@chakra-ui/core'
import { useState } from 'react'

import FBButton from '../common/fbButton'
import TextLink from '../common/textLink'
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

const FBTextInput = (props) => (
  <Input id={props.id} type={props.type} backgroundColor='lightRock' borderRadius='10px' {...props} />
)

const topics = [
  'Contribute',
  'Partnerships',
  'Help installing',
  'Feedback',
  'Bug'
]

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await sendSupportFeedback({ name, email, topic, body })
    } catch (e) {
      console.log(e)
      // TODO handle failure and put e.message somewhere
    }
  }

  return (
    <Box as='form' textAlign='left' color='boulder' textTransform='none' onSubmit={handleSubmit}>
      {/* TODO: add submit handler, add handlers for inputs, and error handling */}
      <FBFormControl labelText='Your name' id='your-name' required={false}>
        <FBTextInput id='your-name' type='text' name='your-name' onChange={(e) => setName(e.target.value)} />
      </FBFormControl>
      <FBFormControl labelText='Email address' id='email' required>
        <FBTextInput id='email' type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
      </FBFormControl>
      <FBFormControl labelText='Topic' id='topic' required={false}>
        <Select
          id='topic'
          placeholder='What is this about?'
          variant='filled'
          backgroundColor='lightRock'
          color='boulder'
          _hover={{
            backgroundColor: '#f2f2f2'
          }}
          onChange={(e) => setTopic(e.target.value)}
        >
          {topics.map((topic, i) => (
            <option value={topic} name={topic} key={i}>
              {topic}
            </option>
          ))}
        </Select>
      </FBFormControl>
      <FBFormControl labelText='How can we help?' id='message' required>
        <Textarea
          id='message'
          name='message'
          backgroundColor='lightRock'
          borderRadius='10px'
          resize='none'
          height='8rem'
          onChange={(e) => setBody(e.target.value)}
        />
      </FBFormControl>
      <Box marginTop='2rem'>
        <FBButton
          as='button'
          type='submit'
          className='u-box-shadow'
          margin='0 0 1.5rem'
        >
          Submit
        </FBButton>
        <Text>
          You can also email us directly at{' '}
          {/* TODO: figure out why mailto: isn't working */}
          <TextLink
            text='support@flossbank.com'
            href='mailto:support@flossbank.com'
          />
          .
        </Text>
      </Box>
    </Box>
  )
}

export default ContactForm
