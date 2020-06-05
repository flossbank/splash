import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea
} from '@chakra-ui/core'

import FBButton from '../common/fbButton'
import TextLink from '../common/textLink'

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

const FBTextInput = ({ id, type }) => (
  <Input id={id} type={type} backgroundColor='lightRock' borderRadius='10px' />
)

const topics = [
  'Partnerships',
  'Help installing',
  'Contribute',
  'Feedback',
  'Bug'
]

const ContactForm = () => (
  <Box as='form' textAlign='left' color='boulder' textTransform='none'>
    {/* TODO: add submit handler, add handlers for inputs, and error handling */}
    <FBFormControl labelText='Your name' id='your-name' required={false}>
      <FBTextInput id='your-name' type='text' name='your-name' />
    </FBFormControl>
    <FBFormControl labelText='Email address' id='email' required>
      <FBTextInput id='email' type='email' name='email' />
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

export default ContactForm
