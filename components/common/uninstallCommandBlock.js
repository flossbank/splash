import { Box, Code, useClipboard } from '@chakra-ui/react'

import FBButton from './fbButton'
import CustomIconWrapper from './customIconWrapper'

const UninstallCommandBlock = () => {
  const { onCopy, hasCopied } = useClipboard('flossbank uninstall')

  return (
    <Box position='relative' marginBottom='1.5rem'>
      <Code
        padding='.75rem'
        backgroundColor='lightRock'
        color='boulder'
        width='100%'
      >
        flossbank uninstall
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
        <span className='sr-only'>command to uninstall</span>
        <CustomIconWrapper icon='copy' boxSize='1rem' marginLeft='.5rem' />
      </FBButton>
    </Box>
  )
}

export default UninstallCommandBlock
