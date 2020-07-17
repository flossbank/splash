import { Flex, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import BusinessCards from './cards/businessCards'
import Section from '../common/section'
import TextLink from '../common/textLink'
import Subheading from '../common/subheading'
import UnderlinedHeading from '../common/underlinedHeading'

const SplashForBusinesses = ({ id }) => {
  return (
    <Section backgroundColor='lightPuddle' id={id}>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <UnderlinedHeading text='For businesses' align='center' />
        <Subheading textAlign='center'>
          Equitable contributions to the Open Source ecosystem
        </Subheading>
        <Text textAlign='center' marginBottom='3rem' maxW='70ch'>
          By registering your GitHub Enterprise account with Flossbank, you can
          give to authors and maintainers across the{' '}
          <strong>entire dependency tree</strong> of your installed packages.
        </Text>
        <BusinessCards />
        <Flex justify='center'>
          <Text>
            <TextLink text='Contact us' href='/contact' fontWeight='bold' /> to get on our beta list.
          </Text>
        </Flex>
      </Flex>
    </Section>
  )
}

SplashForBusinesses.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForBusinesses
