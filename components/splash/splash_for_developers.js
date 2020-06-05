import { Flex, Box, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import Section from '../common/section'
import Subheading from '../common/subheading'
import UnderlinedHeading from '../common/underlinedHeading'
import FBButton from '../common/fbButton'
import TextLink from '../common/textLink'
import ForDevelopersCards from './cards/forDevelopersCards'

const SplashForDevelopers = (props) => {
  return (
    <Section
      id={props.id}
      padding={{
        base: '3rem 1.5rem',
        md: '5rem 3.75rem',
        lg: '5rem 3.75rem 6rem'
      }}
    >
      <Box
        display={{ base: 'initial', lg: 'grid' }}
        gridTemplateColumns='minmax(18rem, 25rem) 1fr'
        gridTemplateRows='5rem minmax(12.5rem,18rem) 6rem 7rem'
        gridColumnGap='6rem'
        maxW='70rem'
        width='100%'
        margin='0 auto'
      >
        <UnderlinedHeading
          text='For developers'
          align={{ base: 'center', lg: 'left' }}
        />
        <Box gridColumn='1' marginBottom={{ base: '3rem', lg: 0 }}>
          <Subheading textAlign={{ base: 'center', lg: 'left' }}>
            Give back to maintainers across your entire dependency tree
          </Subheading>
          <Text marginBottom='1rem'>
            Flossbank provides a <strong>free and frictionless</strong> way to
            give back to open source maintainers, especially those who don’t
            have time for self promotion.
          </Text>
          <Text marginBottom='1rem'>
            By installing our CLI, you support maintainers across the entire
            dependency tree of your installed packages in one of two ways:
            terminal ads or monthly contributions.
          </Text>
        </Box>
        {/* TODO: figure out overspill issue around 1000px */}
        <ForDevelopersCards gridColumn='2' gridRow='2 / -1' justifySelf='end' />
        <Flex
          direction='column'
          gridColumn='1'
          gridRow='3 / -1'
          alignSelf='center'
          alignItems={{ base: 'center', lg: 'flex-start' }}
        >
          <FBButton
            as='a'
            href='/signup'
            className='u-box-shadow'
            padding='.75rem'
            minW='10rem'
            margin='0 0 2rem'
          >
            Sign Up
          </FBButton>

          <Text>Are you an author or maintainer?</Text>
          <Text>
            {/* TODO: add actual url for beta list */}
            <TextLink text='Sign up ' href='/signup' fontWeight='bold' />
            for our beta list.
          </Text>
        </Flex>
      </Box>
    </Section>
  )
}

SplashForDevelopers.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForDevelopers
