import {
  Flex,
  Box,
  Text,
  Heading,
  Icon,
} from '@chakra-ui/core'

import SplashDivider from './splash_divider'
import useMedia from '../common/useMedia'
import FBButton from '../common/button'

const SplashForBusinesses = (props) => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Box padding='60px' backgroundColor='puddle' height='80vh' id={props.id} >
      <Flex flexDirection='column' justify='space-around' alignItems='center'>
        <Text textAlign='center' fontWeight='bold' fontSize='14px' marginBottom='10px'>
          {'For businesses'.toUpperCase()}
        </Text>
        <SplashDivider />
        <Heading textAlign='center' marginTop='20px' marginBottom='30px' fontSize='24px'>
          Equitable contributions to the open source ecosystem
        </Heading>
        <Text textAlign='center' fontSize='16px' marginBottom='8px' paddingLeft='20%' paddingRight='20%'>
          By registering your GitHub Enterprise account with Flossbank, 
          you can give to authors and maintainers across the entire dependency 
          tree of your installed packages.
        </Text>
        <Flex flexDirection='row' margin='40px' justify='space-around'>
          <Flex flexDirection='row' justify='space-around' margin='20px' padding='30px' width='355px' height='160px' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Flex flexDirection='column' justify='space-around' margin='0 30px 0 0'>
                  <Icon name='givingHand' size='56px' />
                </Flex>
                <Text fontSize='16px'>
                  Rest easy knowing 100% of your donation goes to authors and maintainers
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection='row' justify='space-around' margin='20px' padding='30px' width='355px' height='160px' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Flex flexDirection='column' justify='space-around' margin='0 30px 0 0'>
                  <Icon name='pieChart' size='56px' />
                </Flex>
                <Text fontSize='16px'>
                  Donate dynamically to the open source packages your firm uses most
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDirection='row' justify='space-around' margin='20px' padding='30px' width='355px' height='160px' backgroundColor='white'>
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection='row'>
                <Flex flexDirection='column' justify='space-around' margin='0 30px 0 0'>
                  <Icon name='megaphone' size='56px' />
                </Flex>
                <Text fontSize='16px'>
                  Gain insight into your impact and explore advertising opportunities
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection='row' justify='space-around' marginBottom='20px'>
          <FBButton backgroundColor='ocean' color='white' _hover={{ marginTop: '3px' }}>
            Register
          </FBButton>
        </Flex>
      </Flex>
    </Box>
  )
} 

export default SplashForBusinesses