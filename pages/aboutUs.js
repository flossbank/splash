import { Box, Flex, Text } from '@chakra-ui/core'

import Footer from '../components/common/footer'
import Header from '../components/common/header'
import Section from '../components/common/section'
import UnderlinedHeading from '../components/common/underlinedHeading'
import Subheading from '../components/common/subheading'
import FBButton from '../components/common/fbButton'
// import TextLink from "../components/common/textLink";

import WomanWorking from '../public/images/aboutus_womanworking.svg'

const AboutUs = (props) => (
  // TODO: add PageWrapper component when created and remove header/footer
  <>
    <Header />
    <Box
      // TODO: remove when adding PageWrapper
      minH='85vh'
    >
      <Section
        display='grid'
        justifyItems={{ base: 'center', lg: 'start' }}
        gridTemplateColumns={{ base: '1fr', lg: 'minmax(18rem, 1fr) 1fr' }}
        alignItems='center'
        gridTemplateRows='1fr'
        gridColumnGap='8rem'
        padding={{ base: '3rem 1.5rem', lg: '6rem 7.5rem' }}
        backgroundColor='lightRock'
      >
        <UnderlinedHeading
          text='About Us'
          align={{ base: 'center', lg: 'left' }}
          gridColumn={{ base: 1, lg: 2 }}
          marginBottom={{ base: '2rem', lg: 0 }}
        />
        {/* TODO a11y: add desc for image */}
        <Box
          width={{ base: '60%', md: '40%', lg: '100%' }}
          marginBottom={{ base: '3rem', lg: 0 }}
          gridColumn='1'
          gridRow={{ lg: '1 / span 2' }}
          alignSelf='center'
        >
          <WomanWorking />
        </Box>
        <Box gridColumn={{ base: 1, lg: 2 }}>
          <Subheading align={{ base: 'center', lg: 'left' }}>
            Revolutionizing open source pay
          </Subheading>
          <Box maxW={{ lg: '45ch' }} marginBottom='3rem'>
            <Text marginBottom='1rem'>
              We created Flossbank to solve two serious problems in open source:
              insufficient funds for maintenance and disproportionate
              distributions within dependencies.
            </Text>
            <Text marginBottom='1rem'>
              Flossbank helps equitably compensate thousands of maintainers for
              their work, especially those who don’t have time for
              self-promotion.
            </Text>
            <Text>Want to help us on our mission to fund open source?</Text>
          </Box>
          <Flex
            justify={{ base: 'center', lg: 'flex-start' }}
            align='center'
            marginBottom={{ lg: '3rem' }}
          >
            <FBButton
              as='a'
              // TODO: add actual href
              href='#'
              className='u-box-shadow'
              padding='.75rem'
              backgroundColor='#fff'
              color='ocean'
              minW={{ base: '6rem', sm: '10rem' }}
            >
              For Developers
            </FBButton>
            <FBButton
              as='a'
              // TODO: add actual href
              href='#'
              className='u-box-shadow'
              padding='.75rem'
              minW={{ base: '6rem', sm: '10rem' }}
              backgroundColor='puddle'
              color='ocean'
              margin={{ base: '0 0 0 1.5rem' }}
            >
              For Businesses
            </FBButton>
          </Flex>
        </Box>
      </Section>
    </Box>
    <Footer />
  </>
)

export default AboutUs
