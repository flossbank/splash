import { Box, Flex, Text } from '@chakra-ui/core'

import FBButton from '../common/fbButton'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import WhatIsFBCards from './cards/whatIsFBCards'
import Section from './section'

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
      />

      <Box width={{ base: '60%', lg: '100%' }} gridColumn='1'>
        {/* TODO: figure out a way to make inline SVG scale easily so we don't need to use img */}
        <img
          src='images/splash/splash_people_collabing.svg'
          width='100%'
          // a11y TODO: add descriptive alternative text
          alt=''
        />
      </Box>
      <Box gridColumn={{ base: 1, lg: 2 }}>
        <Subheading
          marginBottom='2rem'
          textAlign={{ base: 'center', lg: 'left' }}
        >
          The best way to support open source
        </Subheading>
        <Text
          maxW={{ lg: '45ch' }}
          marginBottom='2rem'
          textAlign={{ base: 'left', sm: 'center', lg: 'left' }}
        >
          We use ad revenue and monthly donations to support all the maintainers
          of the packages you install.
        </Text>
        <WhatIsFBCards />
        <Flex justify={{ base: 'center', lg: 'flex-start' }} align='center'>
          <FBButton
            as='a'
            href='/signup'
            className='u-box-shadow'
            padding='.75rem'
            minW={{ base: '6rem', sm: '10rem' }}
          >
            Sign Up
          </FBButton>
          <FBButton
            as='a'
            href='/aboutus'
            className='u-box-shadow'
            padding='.75rem'
            minW={{ base: '6rem', sm: '10rem' }}
            backgroundColor='puddle'
            color='ocean'
            margin={{ base: '0 0 0 1.5rem' }}
          >
            About Us
          </FBButton>
        </Flex>
      </Box>
    </Section>
  )
}

export default SplashWhatIsFlossbank
