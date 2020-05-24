import {
  Box, 
  Flex,
  Text,
  Divider,
  Heading,
} from '@chakra-ui/core'

import useMedia from '../common/useMedia'

const SplashWhyFlossbank = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Flex flexDirection='row' justifyContent='space-around' backgroundColor='gray.50' padding='20px'>
      {isWide &&
        <Box width='40%'>
          Cool artwork
        </Box>
      }
      <Flex flexDirection='column' width='40%'>
        <Text>{'Why flossbank'.toUpperCase()}</Text>
        <Divider />
        <Heading>The best way to support open source</Heading>
        <Text>We use ad revenue and monthly donations to support all the maintainers of the packages you install.</Text>
        <Flex flexDirection='column'>
          <Flex flexDirection='row' marginBottom='10px'>
            <Box backgroundColor='white' padding='20px' marginRight='10px' width='45%' borderLeft='solid blue'>
              <Text>Our no-cost option means everyone can support open source maintainers</Text>
            </Box>
            <Box backgroundColor='white' padding='20px' width='45%' borderLeft='solid blue'>
              <Text>We give across the entire dependency tree, supporting maintainers big and small</Text>
            </Box>
          </Flex>
          <Flex flexDirection='row' marginBottom='10px'>
            <Box backgroundColor='white' padding='20px' marginRight='10px' width='45%' borderLeft='solid blue'>
              <Text>Flossbank doesn’t change your existing workflow </Text>
            </Box>
            <Box backgroundColor='white' padding='20px' width='45%' borderLeft='solid blue'>
              <Text>Your donations go directly to the packages you use</Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SplashWhyFlossbank
