import { Text, Box, Image } from '@chakra-ui/core'

import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import Card from '../components/common/card'
import UnderlinedHeading from '../components/common/underlinedHeading'
import TextLink from '../components/common/textLink'
import FAQHeading from '../components/common/faqHeading'
import Divider from '../components/common/divider'

const HowItWorks = () => (
  <PageWrapper title='How It Works'>
    <Section
      display='flex'
      justifyItems='center'
      flexDirection='column'
      alignItems='center'
      padding={{ base: '3rem 1.5rem', lg: '3rem 7.5rem 6rem' }}
      backgroundColor='lightRock'
    >
      <UnderlinedHeading as='h1' text='How It Works' align='center' />
      <Card shadowSz='lg' maxW='60rem'>
        <FAQHeading>How does it work?</FAQHeading>
        <Text marginBottom='1.5rem'>
          Flossbank provides two ways to give back to the Open Source community.
          The first is to view curated tech advertisements during installation
          of Open Source packages, with the revenue being distributed down the
          dependency tree. The second is to make a monthly donation as you would
          on Open Collective or Patreon, with the donation split up amongst the
          packages you install each month, and their entire dependency trees.
        </Text>
        <Text marginBottom='1.5rem'>
          If ads are opted into as your form of giving back to the Open Source
          community, Flossbank shows curated tech ads during the installation of
          Open Source packages and passes along 70% of the ad revenue. See the
          GIF below for an example. When the installation finishes, the ads are
          replaced with the default installation output.
        </Text>
        <Box>
          <Image src='/images/flossbank_ads_demo.gif' margin='1.5rem auto' alt='GIF showing the process of installing packages when the Flossbank wrapper is installed.' />
        </Box>
        <Text marginBottom='1.5rem'>
          Alternatively, if a donation is chosen as your method of giving back
          to the Open Source community, 97% of the donation (after processing
          fees) is passed along to the maintainers of the Open Source packages
          installed and no ads will be shown. You can change or delete your donation at any time
          within the user portal. Additionally, within your user portal you'll
          be able to see your top 10 most frequently installed packages
          throughout your daily work flow (they might surprise you!) and will
          have the ability to make individual monthly donations to them
          directly.
        </Text>
        <Divider />
        <FAQHeading>How is the ad revenue I generate distributed?</FAQHeading>
        <Text marginBottom='1rem'>
          We distribute the revenue all the way down the dependency tree of each
          open source package you install. Every installation begins with some
          "top-level package(s)". For instance, in a web development project,
          your top-level packages might be react, react-dom, webpack, babel, and
          a few others. We divide the chunk of revenue generated from viewing
          ads (or from a monthly donation) evenly between the top-level
          packages. Then we divide each package's share evenly between its own
          immediate dependencies. This process continues all the way down the
          tree.
        </Text>
        <Divider />
        <FAQHeading>How are donations distributed?</FAQHeading>
        <Text marginBottom='1rem'>
          Just as we do with ads, we distribute the revenue all the way down the
          dependency tree of each open source package you install. Unlike ad
          revenue however, we distribute donation revenue when the actual
          donation is processed. When the donation is processed, the amount is
          divided and distributed to the packages you installed that month.
        </Text>
        <Divider />
        <Text color='boulder' textAlign='center' fontWeight='500'>
          Have more questions? Visit our{' '}
          <TextLink href='/faq' text='FAQ page' /> to find out more.
        </Text>
      </Card>
    </Section>
  </PageWrapper>
)

export default HowItWorks
