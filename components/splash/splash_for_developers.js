import {
  Flex,
  Box,
  Text,
  Divider,
  Heading,
  Button,
  Icon
} from '@chakra-ui/core'

import useMedia from '../common/useMedia'

const SplashForDevelopers = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Box>
      {isWide ? <Flex flexDirection='row' padding='20px' justify='space-between'>
        <Flex flexDirection='column' width='40%' justify='space-between'>
          <Text>{'for developers'.toUpperCase()}</Text>
          <Divider />
          <Heading>Give back to maintainers across your entire dependency tree</Heading>
          <Text>
            Flossbank provides a free and frictionless way to give back to open source maintainers, 
            especially those who don’t have time for self promotion. 
            By installing our CLI, you support maintainers across the entire dependency 
            tree of your installed packages in one of two ways: terminal ads or monthly contributions.
          </Text>
          <Button backgroundColor='blue.50' width='150px' >
            Sign up
          </Button>
          <Text>
            Are you an author or maintainer? Sign up for our beta list.
          </Text>
        </Flex>
        <Flex flexDirection='column' width='40%' justify='space-between'>
          <Box padding='20px' backgroundColor='gray.50'>
            <Flex flexDirection='row'>
              <Flex flexDirection='column' justify='space-around'>
                <Icon name='calendar' size='36px' margin='20px' />
              </Flex>
              <Flex flexDirection='column'>
                <Text textDecoration='bold'>{'Support maintainers at no cost'.toUpperCase()}</Text>
                <Divider width='20px' color='blue' />
                <Text>Opt into curated, tech-focused ads in your terminal when you install open source packages</Text>
              </Flex>
            </Flex>
          </Box>
          <Box padding='20px' backgroundColor='gray.50'>
            <Flex flexDirection='row'>
              <Flex flexDirection='column' justify='space-around'>
                <Icon name='calendar' size='36px' margin='20px' />
              </Flex>
              <Flex flexDirection='column'>
                <Text textDecoration='bold'>{'Or set a monthly donation'.toUpperCase()}</Text>
                <Divider width='20px' color='blue' />
                <Text>Donate monthly to the developers and maintainers of the open source packages you install</Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex> :
      <Flex flexDirection='column'>

      </Flex>}
    </Box>
  )
} 

export default SplashForDevelopers