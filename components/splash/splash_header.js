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
        <FBButton backgroundColor='white' 
                  margin='10px' 
                  color='boulder' 
                  width='auto'
                  variant='link'>About us</FBButton>
        <FBButton backgroundColor='white' 
                  margin='10px' 
                  color='boulder' 
                  width='auto'
                  variant='link'>Login</FBButton>
        <FBButton borderColor='ocean'
                  width='auto'
                  margin='10px' 
                  color='ocean'
                  variant='outline'
                  _hover={{ backgroundColor: 'ocean', color: 'white' }}>Sign up</FBButton>
      </Box>
    </Flex>
  )
}