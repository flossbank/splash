import {
  Flex,
  Button,
  Text
} from '@chakra-ui/core'

import useMedia from './useMedia'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isWide = useMedia('(min-width: 970px')

  return (
    <Flex height='15rem' backgroundColor='gray.700' flexDirection='column' justify='space-around'>
      <Flex flexDirection='row' justify='space-around'>
        <Flex flexDirection='column' color='white'>
          <Flex flexDirection='row' justify='space-around' marginBottom='20px'>
            <Button backgroundColor='none'>About us</Button>
            <Flex flexDirection='column' justify='space-around'>
              <Text>·</Text>
            </Flex>
            <Button backgroundColor='none'>Log in</Button>
            <Flex flexDirection='column' justify='space-around'>
              <Text>·</Text>
            </Flex>
            <Button backgroundColor='none'>Sign up</Button>
          </Flex>
          <Flex flexDirection='row' justify='space-around'>
            <Text>© {currentYear} Flossbank. All rights reserved.</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Footer
