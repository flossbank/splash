import { Flex, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import FBButton from '../common/button'
import BusinessCards from './cards/businessCards'
import Section from './section'
import Subheading from '../common/subheading'
import UnderlinedHeading from '../common/underlinedHeading'

const SplashForBusinesses = ({ id }) => {
  return (
    <Section bgColor='lightPuddle' id={id}>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <UnderlinedHeading text='For businesses' align='center' />

        <Subheading align='center'>
          Equitable contributions to the open source ecosystem
        </Subheading>

        <Text textAlign='center' marginBottom='3rem' maxW='70ch'>
          By registering your GitHub Enterprise account with Flossbank, you can
          give to authors and maintainers across the{' '}
          <strong>entire dependency tree</strong> of your installed packages.
        </Text>

        <BusinessCards />

        {/* TODO: replace with a future LinkBtn component */}
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
    </Section>
  )
}

SplashForBusinesses.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForBusinesses
