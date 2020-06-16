import { Box, Heading, Code, useClipboard } from '@chakra-ui/core'

import FBButton from '../common/fbButton'

const InstallCommand = ({ system, commandText }) => {
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
      </FBButton>
    </Box>
  )
}

const InstallCommands = ({ token }) => {
  const commands = [
    {
      system: 'OSX / Linux / Bash on windows',
      commandText: `curl https://get.flossbank.com | FLOSSBANK_INSTALL_TOKEN=${token} bash`
    },
    {
      system: 'Windows Powershell',
      commandText: `$env:FLOSSBANK_INSTALL_TOKEN="${token}"; iwr https://get.flossbank.com/ps -useb | iex`
    }
  ]

  return (
    <>
      {commands.map((command, i) => (
        <InstallCommand
          key={i}
          system={command.system}
          commandText={command.commandText}
        />
      ))}
    </>
  )
}

export default InstallCommands
