import {
  Box,
  Flex,
} from '@chakra-ui/core'

import FBButton from '../common/button'
import FBLogo from '../common/logo'

export default () => {
  return (
    <Flex justify='space-between' paddingLeft='80px' paddingRight='80px'>
      <Flex alignItems='center' flexDirection='row'>
        <FBLogo />  
      </Flex>
      <Box margin='20px'>
        <FBButton backgroundColor='white' margin='10px' color='boulder' width='auto'>About us</FBButton>
        <FBButton backgroundColor='white' margin='10px' color='boulder' width='auto'>Login</FBButton>
        <FBButton backgroundColor='white' 
                border='1px' 
                width='auto'
                margin='10px' 
                borderColor='ocean' 
                color='ocean'>
                  Sign up
        </FBButton>
      </Box>
    </Flex>
  )
}