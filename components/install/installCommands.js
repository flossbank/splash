import {
  Box,
  Heading,
  Code,
  Icon,
  useClipboard,
  Alert,
  AlertIcon
} from '@chakra-ui/core'
import PropTypes from 'prop-types'

import FBButton from '../common/fbButton'
import TextLink from '../common/textLink'

const InstallCommand = ({ system, commandText, sourceURL }) => {
  const { onCopy, hasCopied } = useClipboard(commandText)

  return (
    <Box position='relative' marginBottom='3rem'>
      <Heading
        as='h3'
        textTransform='uppercase'
        fontWeight='bold'
        color='ocean'
        fontSize='.85rem'
        marginBottom='1.5rem'
      >
        {system}
      </Heading>
      <Code
        padding='1rem'
        backgroundColor='lightRock'
        color='boulder'
        width='100%'
      >
        {commandText}
      </Code>
      <FBButton
        // hide on mobile
        display={{ base: 'none', md: 'flex' }}
        alignItems='center'
        onClick={onCopy}
        padding='.5rem'
        fontSize='.85rem'
        minW='5rem'
        backgroundColor='puddle'
        color='ocean'
        position='absolute'
        right='0'
        top='.25rem'
        borderRadius='0'
        aria-live='assertive'
        _hover={{
          backgroundColor: 'ocean',
          color: 'white'
        }}
      >
        {hasCopied ? 'Copied' : 'Copy'}{' '}
        <span className='sr-only'>command for {system}</span>
        <Icon name='copy' size='1rem' marginLeft='.5rem' />
      </FBButton>
      <Alert status='info' marginTop='1rem'>
        <AlertIcon />
        <TextLink text='Take a look at the source' external href={sourceURL} />
      </Alert>
    </Box>
  )
}

InstallCommand.propTypes = {
  system: PropTypes.string.isRequired,
  commandText: PropTypes.string.isRequired,
  sourceURL: PropTypes.string.isRequired
}

const InstallCommands = ({ token }) => {
  const commands = [
    {
      system: 'OSX / Linux / Bash on windows',
      commandText: `curl -sS https://get.flossbank.com | FLOSSBANK_INSTALL_TOKEN=${token} bash`,
      sourceURL: ' https://get.flossbank.com'
    },
    {
      system: 'Windows Powershell',
      commandText: `$env:FLOSSBANK_INSTALL_TOKEN="${token}"; iwr https://get.flossbank.com/ps -useb | iex`,
      sourceURL: ' https://get.flossbank.com/ps'
    }
  ]

  return (
    <>
      {commands.map((command, i) => (
        <InstallCommand
          key={i}
          system={command.system}
          commandText={command.commandText}
          sourceURL={command.sourceURL}
        />
      ))}
    </>
  )
}

export default InstallCommands
