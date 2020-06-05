import { Box, Flex } from '@chakra-ui/core'

import FBButton from '../common/fbButton'
import FBLogo from '../common/logo'
import TextLink from './textLink'

const Header = () => {
  return (
    <>
      <Box as='header' padding={['1.5rem', '1.5rem', '2.5rem 5rem']}>
        <Flex alignItems='center' justify='space-between' flexDirection='row'>
          <FBLogo />
          <Box
            as='nav'
            display='flex'
            flex='1'
            alignItems='center'
            justifyContent='space-between'
            marginLeft={['2.25rem', 'auto']}
            maxW='22.5rem'
            aria-label='Primary navigation'
          >
            <TextLink href='/aboutus' text='About Us' color='boulder' />
            <TextLink href='/login' text='Log In' color='boulder' />
            <FBButton
              as='a'
              href='/signup'
              backgroundColor='transparent'
              minW='unset'
              color='ocean'
              borderWidth='1px'
              padding={['.5rem 1rem', '.75rem 2rem']}
              margin='10px'
              _hover={{ backgroundColor: 'ocean', color: 'white' }}
            >
              Sign Up
            </FBButton>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Header
