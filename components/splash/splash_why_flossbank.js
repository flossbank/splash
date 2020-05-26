import {
  Box, 
  Flex,
  Text,
  Icon,
  Heading,
} from '@chakra-ui/core'

import PeopleCollabing from '../../public/images/splash/splash_people_collabing.svg'
import SplashDivider from './splash_divider'
import useMedia from '../common/useMedia'
import FBButton from '../common/button'

const SplashWhyFlossbank = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Flex flexDirection='row' justifyContent='space-around' backgroundColor='lightRock' padding='60px' height='90vh'>
      {isWide &&
        <Box width='40%' marginTop='80px'>
          <PeopleCollabing />
        </Box>
      }
      <Flex flexDirection='column' width='40%'>
        <Text fontSize='14px' fontWeight='bold' marginBottom='10px'>
          {'Why flossbank'.toUpperCase()}
        </Text>
        <SplashDivider />
        <Heading marginTop='20px' marginBottom='20px' fontSize='24px'>
          The best way to support open source
        </Heading>
        <Text fontSize='16px'>
          We use ad revenue and monthly donations to support all the maintainers of the packages you install.
        </Text>
        <Flex flexDirection='column' marginTop='35px'>
          <Flex flexDirection='row' marginBottom='30px'>
            <Flex backgroundColor='white' 
                 padding='20px 30px 20px 30px' 
                 marginRight='10px' 
                 flexDirection='column'
                 justify='space-around'
                 width='250px' 
                 height='120px'
                 borderLeft='solid' 
                 borderColor='lake'>
              <Icon name='heart' size='24px' />
              <Text fontSize='12px' fontWeight='bold'>
                Our no-cost option means everyone can support open source maintainers
              </Text>
            </Flex>
            <Flex backgroundColor='white' 
                 padding='20px 30px 20px 30px' 
                 marginRight='10px' 
                 flexDirection='column'
                 justify='space-around'
                 width='250px' 
                 height='120px'
                 borderLeft='solid' 
                 borderColor='lake'>
              <Icon name='stack' size='24px' />
              <Text fontSize='12px' fontWeight='bold'>
                We give across the entire dependency tree, supporting maintainers big and small
              </Text>
            </Flex>
          </Flex>
          <Flex flexDirection='row' marginBottom='10px'>
            <Flex backgroundColor='white' 
                 padding='20px 30px 20px 30px' 
                 flexDirection='column'
                 justify='space-around'
                 marginRight='10px' 
                 width='250px' 
                 height='120px'
                 borderLeft='solid' 
                 borderColor='lake'>
              <Icon name='cycle' size='24px' />
              <Text fontSize='12px' fontWeight='bold'>
                Flossbank doesn’t change your existing workflow
              </Text>
            </Flex>
            <Flex backgroundColor='white' 
                 padding='20px 30px 20px 30px'  
                 marginRight='10px' 
                 flexDirection='column'
                 justify='space-around'
                 width='250px' 
                 height='120px'
                 borderLeft='solid' 
                 borderColor='lake'>
              <Icon name='bullseye' size='24px' />
              <Text fontSize='12px' fontWeight='bold'>
                Your donations go directly to the packages you use
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection='row' marginTop='20px'>
          <FBButton backgroundColor='ocean' color='white' _hover={{ marginTop: '3px' }} >
            Sign Up
          </FBButton>
          <FBButton backgroundColor='puddle' color='ocean' marginLeft='20px' _hover={{ marginTop: '3px' }}>
            About Us
          </FBButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SplashWhyFlossbank
