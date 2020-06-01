import { Flex, Box, Text, Heading, Icon } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import FBDivider from '../common/divider'
import FBButton from '../common/button'

const SplashForBusinesses = (props) => {
  return (
    <Box padding={['50px', '60px']} backgroundColor='puddle' id={props.id}>
      <Flex flexDirection='column' justify='space-around' alignItems='center'>
        <Text
          textAlign='center'
          textTransform='uppercase'
          fontWeight='bold'
          fontSize='14px'
          marginBottom='10px'
        >
          For businesses
        </Text>
        <FBDivider />
        <Heading
          textAlign='center'
          marginTop='20px'
          marginBottom='30px'
          fontSize='24px'
        >
          Equitable contributions to the open source ecosystem
        </Heading>
        <Text
          textAlign='center'
          fontSize='16px'
          marginBottom='8px'
          paddingLeft={['0', '20%']}
          paddingRight={['0', '20%']}
        >
          By registering your GitHub Enterprise account with Flossbank, you can
          give to authors and maintainers across the entire dependency tree of
          your installed packages.
        </Text>
        <Flex
          flexDirection={['column', 'row']}
          margin={['0', '40px']}
          justify='space-around'
        >
          <Flex
            flexDirection='row'
            justify='space-around'
            margin={['20px 0 20px 0', '20px']}
            padding='30px'
            width={['auto', '355px']}
            height={['auto', '160px']}
            backgroundColor='white'
          >
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection={['column', 'row']}>
                <Flex
                  flexDirection='column'
                  justify='space-around'
                  margin={['0 0 10px 0', '0 30px 0 0']}
                >
                  <Icon name='givingHand' size='56px' margin='auto' />
                </Flex>
                <Text fontSize='16px'>
                  Rest easy knowing 100% of your donation goes to authors and
                  maintainers
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection='row'
            justify='space-around'
            margin={['20px 0 20px 0', '20px']}
            padding='30px'
            width={['auto', '355px']}
            height={['auto', '160px']}
            backgroundColor='white'
          >
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection={['column', 'row']}>
                <Flex
                  flexDirection='column'
                  justify='space-around'
                  margin={['0 0 10px 0', '0 30px 0 0']}
                >
                  <Icon name='pieChart' size='56px' margin='auto' />
                </Flex>
                <Text fontSize='16px'>
                  Donate dynamically to the open source packages your firm uses
                  most
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            flexDirection='row'
            justify='space-around'
            margin={['20px 0 20px 0', '20px']}
            padding='30px'
            width={['auto', '355px']}
            height={['auto', '160px']}
            backgroundColor='white'
          >
            <Flex flexDirection='column' justify='space-around'>
              <Flex flexDirection={['column', 'row']}>
                <Flex
                  flexDirection='column'
                  justify='space-around'
                  margin={['0 0 10px 0', '0 30px 0 0']}
                >
                  <Icon name='megaphone' size='56px' margin='auto' />
                </Flex>
                <Text fontSize='16px'>
                  Gain insight into your impact and explore advertising
                  opportunities
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDirection='row' justify='space-around' marginBottom='20px'>
          <FBButton
            backgroundColor='ocean'
            width='auto'
            color='white'
            _hover={{ marginTop: '3px' }}
          >
            Register
          </FBButton>
        </Flex>
      </Flex>
    </Box>
  )
}

SplashForBusinesses.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForBusinesses
