import {
  Box,
  Flex,
  Button,
} from '@chakra-ui/core'
import FBLogo from '../common/logo'

export default () => {
  return (
    <Flex justify='space-between'>
      <Flex margin='20px' alignItems='center' flexDirection='row'>
        <FBLogo />  
      </Flex>
      <Box margin='20px'>
        <Button backgroundColor='white' margin='10px'>About us</Button>
        <Button backgroundColor='white' margin='10px'>Login</Button>
        <Button backgroundColor='blue.50' margin='10px'>Sign up</Button>
      </Box>
    </Flex>
  )
}