import { CopyIcon } from '@chakra-ui/icons'
import {
  Box,
  Heading,
  Code,
  useClipboard,
  Alert,
  AlertIcon
} from '@chakra-ui/react'
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
        padding='1.5rem 1.5rem 1.5rem 2rem'
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
        <CopyIcon boxSize='1rem' marginLeft='.5rem' />
      </FBButton>
      <Alert paddingTop='0' paddingLeft='2rem' status='info' marginTop='1rem' bg='none'>
        <AlertIcon boxSize='1rem' />
        <TextLink text='Take a look at the source' color='rock' fontSize='0.85rem' external href={sourceURL} />
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

  const authedCommands = [
    {
      system: 'OSX / Linux / Bash on windows',
      commandText: 'curl -sS https://get.flossbank.com | bash',
      sourceURL: ' https://get.flossbank.com'
    },
    {
      system: 'Windows Powershell',
      commandText: 'iwr https://get.flossbank.com/ps -useb | iex',
      sourceURL: ' https://get.flossbank.com/ps'
    }
  ]

  const commandsToOutput = token ? commands : authedCommands

  return (
    <>
      {commandsToOutput.map((command, i) => (
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
