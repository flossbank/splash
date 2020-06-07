import { Box, Text } from '@chakra-ui/core'

import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import WomanWorking from './womanWorking'

const AboutUsSection = () => (
  <Section
    display='grid'
    justifyItems={{ base: 'center', lg: 'start' }}
    gridTemplateColumns={{ base: '1fr', lg: 'minmax(18rem, 1fr) 1fr' }}
    alignItems='center'
    gridTemplateRows='1fr'
    gridColumnGap={{ lg: '4rem', xl: '8rem' }}
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
    <Box gridColumn={{ base: 1, lg: 2 }} maxW={{ base: '80ch', lg: '45ch' }}>
      <Subheading align={{ base: 'center', lg: 'left' }}>
        Revolutionizing open source pay
      </Subheading>
      <Box marginBottom='3rem'>
        <Text marginBottom='1rem'>
          We created Flossbank to solve two serious problems in open source:
          insufficient funds for maintenance and disproportionate distributions
          within dependencies.
        </Text>
        <Text marginBottom='1rem'>
          To address insufficient funds, we built a free way to give back to open source.
          With the free tier we hope to engage the millions of developers who
          don't have the financial resources to contribute back to the open source maintainers
          and authors that they rely on. Users will "donate their attention" by seeing curated
          tech advertisements during installation of open source packages in the terminal. The
          revenue from those ads goes to the authors and maintainers of the packages being installed.
        </Text>
        <Text marginBottom='1rem'>
          To address disproportionate distribution of funds, we we built our CLI to do complete
          dependency snapshots. This allows us to determine how much of a users donation / ad revenue should
          go to each package in the entire dependency tree of the packages they're installing. The CLI
          is open source, and it's sole purpose is to allow us to equitably distribute revenue. This
          unlocks revenue streams for millions of open source developers who don't care or have time for
          self promotion.
        </Text>
        <Text marginBottom='1rem'>
          We hope this is just the beginning.
        </Text>
        <Text>Want to help us on our mission to fund open source?</Text>
        <Text>Get in touch.</Text>
      </Box>
    </Box>
  </Section>
)

export default AboutUsSection
