import { 
  Box, 
  Text,
  Flex,
  Input,
} from '@chakra-ui/core'

import FBButton from '../common/button'
import FBLogoLetters from '../common/logoLetters'
import useMedia from '../common/useMedia'


const LoginSection = () => {
  const isWide = useMedia('(min-width: 800px')

  return (
    <>
      {isWide && (<Flex width='full' backgroundColor='lightRock' height='45rem' flexDirection='row' justify='space-around'>
          <Box paddingTop='60px'>
            <Box margin='0 auto 0 auto' width='40px' height='60px'>
              <FBLogoLetters />
            </Box>
            <Flex flexDirection='column' backgroundColor='white' width='400px' padding='30px' marginTop='30px'>
              <Text marginTop='10px'>Email Address</Text>
              <Input backgroundColor='lightRock' marginTop='10px'></Input>
              <FBButton backgroundColor='ocean' color='white' marginTop='30px'>Log in</FBButton>
            </Flex>
            <Flex flexDirection='column' width='400px' padding='30px'>
              <Text fontSize='14px'>Don't have an account? Sign up</Text>
              <Text fontSize='14px'>Are you a business? Register here</Text>
            </Flex>
          </Box>
        </Flex>
      )}
    </>
  )
}

export default LoginSection
