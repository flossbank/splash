import { Box, Flex, Text } from '@chakra-ui/core'

import LinkBtn from '../common/linkBtn'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import WhatIsFBCards from './cards/whatIsFBCards'
import Section from '../common/section'

import PeopleCollabing from './peopleCollabing'
import TextLink from '../common/textLink'

const SplashWhatIsFlossbank = () => {
  return (
    <Section
      display='grid'
      justifyItems={{ base: 'center', lg: 'start' }}
      gridTemplateColumns={{ base: '1fr', lg: 'minmax(18rem, 1fr) 1fr' }}
      alignItems='center'
      gridTemplateRows='1fr'
      gridColumnGap='5rem'
      gridRowGap='1.5rem'
      backgroundColor='lightRock'
    >
      <UnderlinedHeading
        text='What is Flossbank'
        align={{ base: 'center', lg: 'left' }}
        gridColumn={{ base: 1, lg: 2 }}
        marginBottom={{ base: '2rem', lg: 0 }}
      />

      <Box width={{ base: '60%', lg: '100%' }} gridColumn='1'>
        <PeopleCollabing />
      </Box>
      <Box gridColumn={{ base: 1, lg: 2 }}>
        <Subheading
          marginBottom='2rem'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          The equitable way to support Open Source
        </Subheading>
        <Text
          maxW={{ lg: '45ch' }}
          marginBottom='2rem'
          textAlign={{ base: 'left', sm: 'center', lg: 'left' }}
        >
          We use ad revenue and monthly donations to support <strong>all</strong> the maintainers
          of the packages you install. (<TextLink text='All of them?' href='/how-it-works' />)
        </Text>
        <WhatIsFBCards />
        <Flex justify={{ base: 'center', lg: 'flex-start' }} align='center'>
          <LinkBtn
            href='/signup'
            className='u-box-shadow'
            padding='.75rem'
            minW={{ base: '6rem', sm: '10rem' }}
          >
            Sign Up
          </LinkBtn>
          <LinkBtn
            href='/about'
            className='u-box-shadow'
            padding='.75rem'
            minW={{ base: '6rem', sm: '10rem' }}
            backgroundColor='puddle'
            color='ocean'
            margin={{ base: '0 0 0 1.5rem' }}
          >
            About Us
          </LinkBtn>
        </Flex>
      </Box>
    </Section>
  )
}

export default SplashWhatIsFlossbank
