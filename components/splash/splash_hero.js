import { Heading, Text, Flex } from '@chakra-ui/react'

import LinkBtn from '../common/linkBtn'
import RocketSection from './rocketSection'

const SplashHero = () => (
  <RocketSection>
    <Heading
      as='h1'
      textAlign='center'
      marginTop={{ base: '3rem', lg: '6rem' }}
      marginBottom='1.5rem'
      fontWeight='400'
      fontSize={{ base: '1.75rem', md: '2.25rem' }}
      lineHeight='1'
    >
      <span className='sr-only'>Flossbank –</span>
      On a mission to support Open Source
    </Heading>
    <Text
      id='hero_header'
      textAlign='center'
      fontSize='1.25rem'
      lineHeight='normal'
      marginBottom={{ base: '1.5rem', md: '.5rem' }}
    >
      At Flossbank, we help Open Source authors and maintainers receive compensation for their
      work.
    </Text>
    <Text
      id='hero_subheader'
      textAlign='center'
      fontSize='1.25rem'
      lineHeight='normal'
      marginBottom='1.5rem'
    >
      Our mission isn’t unique. <strong>Our approach is.</strong>
    </Text>
    <Flex
      justify='center'
      marginLeft='auto'
      marginRight='auto'
      marginBottom={{ lg: '3rem' }}
      padding={{ base: '1rem', sm: '1.5rem' }}
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <LinkBtn
        href='https://maintainer.flossbank.com'
        external
        className='u-box-shadow'
        backgroundColor='white'
        color='ocean'
        minW={{ base: 'unset', sm: '10rem' }}
        margin={{ base: '0 0 1.5rem 0', sm: '0 1.5rem 0 0 ' }}
      >
        For Maintainers
      </LinkBtn>
      <LinkBtn
        href='#forDevelopers'
        className='u-box-shadow'
        backgroundColor='white'
        color='ocean'
        minW={{ base: 'unset', sm: '10rem' }}
        margin={{ base: '0 0 1.5rem 0', sm: '0 1.5rem 0 0 ' }}
      >
        For Developers
      </LinkBtn>
      <LinkBtn
        href='#forBusinesses'
        className='u-box-shadow'
        backgroundColor='white'
        color='ocean'
        minW={{ base: 'unset', sm: '10rem' }}
      >
        For Businesses
      </LinkBtn>
    </Flex>
  </RocketSection>
)

export default SplashHero
