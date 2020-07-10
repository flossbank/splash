import PageWrapper from '../components/common/pageWrapper'
import Card from '../components/common/card'
import UnderlinedHeading from '../components/common/underlinedHeading'
import SubHeading from '../components/common/subheading'
import TextLink from '../components/common/textLink'
import { Text, Box, Image } from '@chakra-ui/core'

const HowItWorks = () => (
  <PageWrapper title='How It Works'>
    <Card padding={['2rem', '2rem 20%']} as='section'>
      <UnderlinedHeading color='black' text='How It Works' />
      <SubHeading>How does it work?</SubHeading>
      <Text marginBottom='1rem'>
        Flossbank provides two ways to give back to the Open Source community.
        The first is to view curated tech advertisements during installation of
        Open Source packages, with the revenue being distributed down the dependency tree. The second
        is to make a monthly donation as you would on Open Collective or Patreon, with the donation
        split up amongst the packages you install each month, and their entire dependency tree's.
      </Text>
      <Text marginBottom='1rem'>
        If ads are opted into as your form of giving back to the Open Source community,
        Flossbank shows curated tech ads during the installation of Open Source packages and passes along
        70% of the ad revenue. See the GIF
        below for an example. When the installation finishes, the ads are replaced with the default
        installation output.
      </Text>
      <Box marginBottom='1rem'>
        <Image src='/images/flossbank_ads_demo.gif' />
      </Box>
      <Text marginBottom='1rem'>
        Alternatively, if a donation is chosen as your method of giving back to the Open Source community,
        97% of the donation (after processing fees) is passed along to the maintainers of the Open Source
        packages installed.
        You can edit, delete, or up your donation at any time within the user portal.
        Additionally, within your user portal you'll be able to see your top 10 most frequently installed
        packages throughout your daily work flow (they might surprise you!) and will have the ability to make
        individual monthly donations to them directly.
      </Text>
      <SubHeading>How is the ad revenue I generate distributed?</SubHeading>
      <Text marginBottom='1rem'>
        We distribute the revenue all the way down the dependency tree of
        each open source package you install. Every installation begins
        with some "top-level package(s)". For instance, in a web development project,
        your top-level packages might be react, react-dom, webpack, babel, and a few
        others. We divide the chunk of revenue generated from viewing ads (or from a
        monthly donation) evenly between the top-level packages. Then we divide each
        package's share evenly between its own immediate dependencies. This process
        continues all the way down the tree.
      </Text>
      <SubHeading>How is donation revenue I generate distributed?</SubHeading>
      <Text marginBottom='1rem'>
        Just as we do with ads, we distribute the revenue all the way down the dependency tree of
        each open source package you install. Unlike ad revenue however, we distribute donation revenue
        when the actual donation is processed. When the donation is processed, the amount is
        divided and distributed to the packages you installed that month.
      </Text>
      <SubHeading marginTop='2rem'>
        Have more questions? Visit our <TextLink href='/faq' text='FAQ page' /> for more answers.
      </SubHeading>
    </Card>
  </PageWrapper>
)

export default HowItWorks
