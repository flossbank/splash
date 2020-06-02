import { Box, Flex } from '@chakra-ui/core'

import FBButton from '../common/button'
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
            <TextLink url='/about' text='About Us' color='boulder' />
            <TextLink url='/login' text='Log In' color='boulder' />
            {/* TODO: create LinkBtn component and replace */}
            <FBButton
              borderColor='ocean'
              width='auto'
              margin='10px'
              color='ocean'
              variant='outline'
              _hover={{ backgroundColor: 'ocean', color: 'white' }}
            >
              Sign up
            </FBButton>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default Header
