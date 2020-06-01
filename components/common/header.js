import { Box, Flex } from '@chakra-ui/core'

import FBButton from '../common/button'
import FBLogo from '../common/logo'
import FBLogoLetters from '../common/logoLetters'
import TextLink from './textLink'
import useMedia from '../common/useMedia'

export default () => {
  const isWide = useMedia('(min-width: 800px')

  // const HeaderButton = (props) => {
  //   return (
  //     <FBButton
  //       backgroundColor="white"
  //       margin="10px"
  //       color="boulder"
  //       width="auto"
  //       variant="link"
  //       onClick={props.onClick}
  //     >
  //       {props.children}
  //     </FBButton>
  //   );
  // };

  const logo = isWide ? (
    <FBLogo />
  ) : (
    <FBLogoLetters width='2.25rem' height='auto' />
  )

  return (
    <>
      <Box as='header' padding={['1.5rem', '2.5rem 5rem']}>
        <Flex alignItems='center' justify='space-between' flexDirection='row'>
          {logo}
          {/* TODO: convert to real nav and list / list items */}
          <Flex
            flex='1'
            alignItems='center'
            justify={['space-evenly', 'space-between']}
            marginLeft={['1.5rem', 'auto']}
            maxW='22.5rem'
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
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
