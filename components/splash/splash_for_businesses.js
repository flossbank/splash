import {
  Flex,
  Box,
  Text,
  Divider,
  Heading,
  Icon,
} from '@chakra-ui/core'

import useMedia from '../common/useMedia'

const SplashForBusinesses = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Box padding='20px' backgroundColor='blue.50'>
      <Flex flexDirection='column'>
        <Text textAlign='center'>{'For bussinesses'.toUpperCase()}</Text>
        <Divider width='20px' margin='auto' />
        <Heading textAlign='center'>
          Equitable contributions to the open source ecosystem
        </Heading>
        <Text textAlign='center'>
          By registering your GitHub Enterprise account with Flossbank, 
          you can give to authors and maintainers across the entire dependency 
          tree of your installed packages.
        </Text>
        <Flex flexDirection='row' margin='20px' justify='space-around'>
          <Box padding='20px' width='25%' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Icon name='phone' size='36px' />
                <Text>Rest easy knowing 100% of your donation goes to authors and maintainers</Text>
              </Flex>
            </Flex>
          </Box>
          <Box padding='20px' width='25%' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Icon name='phone' size='36px' />
                <Text>Donate dynamically to the open source packages your firm uses most</Text>
              </Flex>
            </Flex>
          </Box>
          <Box padding='20px' width='25%' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Icon name='phone' size='36px' />
                <Text>Gain insight into your impact and explore advertising opportunities</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
} 

export default SplashForBusinesses