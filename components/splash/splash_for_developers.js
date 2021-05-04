import { Flex, Box, Text } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import Section from '../common/section'
import Subheading from '../common/subheading'
import UnderlinedHeading from '../common/underlinedHeading'
import LinkBtn from '../common/linkBtn'
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
            Seamlessly give back to the maintainers you rely on
          </Subheading>
          <Text marginBottom='1rem'>
            Flossbank provides a <strong>free and frictionless</strong> way to
            give back to Open Source maintainers, especially those who don’t
            have time for self-promotion. <TextLink text="Here's how that's possible." href='/how-it-works' />
          </Text>
          <Text marginBottom='1rem'>
            By installing our package manager wrapper, you support maintainers across the entire
            dependency tree of each Open Source package you install in one of two ways:
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
          <LinkBtn
            href='/signup'
            className='u-box-shadow'
            padding='.75rem'
            minW='10rem'
            margin='2rem 0 2rem'
          >
            Sign Up
          </LinkBtn>
          <Text>Are you an author or maintainer?</Text>
          <TextLink external href='https://maintainer.flossbank.com' text='Visit the Flossbank maintainer portal' fontWeight='bold' />
        </Flex>
      </Box>
    </Section>
  )
}

SplashForDevelopers.propTypes = {
  id: PropTypes.string.isRequired
}

export default SplashForDevelopers
