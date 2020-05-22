import { 
  Box, 
  Heading, 
  Text,
  Button,
  Flex,
} from '@chakra-ui/core'

import useMedia from '../common/useMedia'


const SplashHero = () => {
  const isWide = useMedia('(min-width: 800px')

  return (
    <Box width='full' alignItems='center' backgroundColor='blue.50'>
      {isWide && (
        <Box>
          {/* Put awesome image with paralax here */}
        </Box>
      )}
      <Heading textAlign={[ 'left', 'center' ]} >On a mission to support open source</Heading>
      <Text id='hero_header' textAlign={[ 'left', 'center' ]} >
        At Flossbank, we help pay open source authors and maintainers for their work. 
      </Text>
      <Text id='hero_subheader' textAlign={[ 'left', 'center' ]} >
        Our mission isn’t unique. Our approach is.
      </Text>
      <Flex justify='center' margin='auto' width='50%'>
        <Button backgroundColor='white' margin='10px'>
          For Developers
        </Button>
        <Button backgroundColor='white' margin='10px'>
          For Businesses
        </Button>
      </Flex>
    </Box>
  )
}

export default SplashHero
