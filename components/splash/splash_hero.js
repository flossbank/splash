import { 
  Box, 
  Heading, 
  Text,
  Flex,
} from '@chakra-ui/core'

import FBButton from '../common/button'
import useMedia from '../common/useMedia'


const SplashHero = () => {
  const isWide = useMedia('(min-width: 800px')

  return (
    <Box width='full' alignItems='center' backgroundColor='ocean' color='white' padding='50px'>
      {isWide && (
        <Box>
          <Text textAlign='center'>cool artwork</Text>
          {/* Put awesome image with paralax here */}
        </Box>
      )}
      <Heading textAlign={[ 'left', 'center' ]} margin='30px' fontSize='36px'>
        On a mission to support open source
      </Heading>
      <Text id='hero_header' textAlign={[ 'left', 'center' ]} fontSize='20px'>
        At Flossbank, we help pay open source authors and maintainers for their work. 
      </Text>
      <Text id='hero_subheader' textAlign={[ 'left', 'center' ]} fontSize='20px'>
        Our mission isn’t unique. Our approach is.
      </Text>
      <Flex justify='center' margin='auto' width='50%' marginTop='30px'>
        <FBButton backgroundColor='white' margin='10px' color='ocean'>
          For Developers
        </FBButton>
        <FBButton backgroundColor='puddle' margin='10px' color='ocean'>
          For Businesses
        </FBButton>
      </Flex>
    </Box>
  )
}

export default SplashHero
