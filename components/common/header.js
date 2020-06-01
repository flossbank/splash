import {
  Box,
  Flex,
} from '@chakra-ui/core'
import { useRouter } from 'next/router'

import FBButton from './button'
import FBLogo from './logo'
import useMedia from './useMedia'

export default () => {
  const router = useRouter()
  const isWide = useMedia('(min-width: 800px')

  const login = () => {
    router.push('/login')
  }

  const HeaderButton = (props) => {
    return (
      <FBButton backgroundColor='white' 
                margin='10px' 
                color='boulder' 
                width='auto'
                variant='link'
                onClick={props.onClick}>{props.children}</FBButton>
    )
  }

  return (
    <>
      {isWide ? (
        <Flex justify='space-between' paddingLeft={['80px']} paddingRight='80px'>
          <Flex alignItems='center' flexDirection='row'>
            <FBLogo />  
          </Flex>
          <Box margin='20px'>
            <HeaderButton>About us</HeaderButton>
            <HeaderButton onClick={login}>Login</HeaderButton>
            <FBButton borderColor='ocean'
                      width='auto'
                      margin='10px' 
                      color='ocean'
                      variant='outline'
                      _hover={{ backgroundColor: 'ocean', color: 'white' }}
                      onClick={login}>Sign up</FBButton>
          </Box>
        </Flex>
      ) : (
        <Flex alignItems='center' flexDirection='column' margin='20px'>
          <FBLogo />  
        </Flex>
      )}
    </>
  )
}