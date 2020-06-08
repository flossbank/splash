import { Flex, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import LinkBtn from '../common/linkBtn'
import BusinessCards from './cards/businessCards'
import Section from '../common/section'
import Subheading from '../common/subheading'
import UnderlinedHeading from '../common/underlinedHeading'

const SplashForBusinesses = ({ id }) => {
  return (
    <Section backgroundColor='lightPuddle' id={id}>
      <Flex flexDirection='column' justify='center' alignItems='center'>
        <UnderlinedHeading text='For businesses' align='center' />
        <Subheading textAlign='center'>
          Equitable contributions to the open source ecosystem
        </Subheading>
        <Text textAlign='center' marginBottom='3rem' maxW='70ch'>
          By registering your GitHub Enterprise account with Flossbank, you can
          give to authors and maintainers across the{' '}
          <strong>entire dependency tree</strong> of your installed packages.
        </Text>
        <BusinessCards />
        <Flex justify='center'>
          <LinkBtn
            href='/signup'
            className='u-box-shadow'
            minW='10rem'
            padding='.75rem'
          >
            Register
          </LinkBtn>
        </Flex>
      </Flex>
    </Section>
  )
}

SplashForBusinesses.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForBusinesses
