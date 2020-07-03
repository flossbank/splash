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
        Flossbank provides two ways to give back to the Open Source community in our distributed,
        maintenance free method. The first is to view curated tech advertisements during installation of
        open source packages, with the revenue being distributed down the dependency tree. The second
        is to make a monthly donation as you would on Open Collective or Patreon, with the donation
        split up to the packages you install each month, and their entire dependency tree's.
      </Text>
      <Text marginBottom='1rem'>
        If ads are opted into as your form of giving back to the Open Source community,
        Flossbank shows curated tech ads during the installation of Open Source packages. See the gif
        below for an example. When the installation finishes, the ads are taken away and the default
        installation output is shown. This is the same for the error use case.
      </Text>
      <Box marginBottom='1rem'>
        <Image src='/images/flossbank_ads_demo.gif' />
      </Box>
      <Text marginBottom='1rem'>
        Alternatively, if a donation is chosen as your method of giving back to the Open Source community, you
        can make a donation at any time by signing in to your user portal. There, you can edit, delete,
        or up your donation at any time. Additionally, you'll be able to see your top 10 most frequently installed
        packages through your daily work flow (they might surprise you!) and will have the ability to make monthly
        donations to them as well.
      </Text>
      <SubHeading>How does distribution of revenue work?</SubHeading>
      <Text marginBottom='1rem'>
        We distribute the revenue all the way down the dependency tree of each installation of an open
        source package under one of our supported package managers. We thought, "What would we do if we made a dollar
        from an open source package we published, and the authors of all of our top level dependencies
        were in the same room as us?".
        Well, logically we'd split the dollar equally amongst ourselves and each of those top
        level dependency authors. We
        clearly couldn't have built our product we just made a dollar from without them, so sharing equally makes
        sense. So that's how we built Flossbank. For each level down the dependency tree the to level package's author
        splits the revenue they receive with the authors of the dependencies that package relies on.
        etc etc.
      </Text>
      <SubHeading marginTop='2rem'>
        Have more questions? Visit our <TextLink href='/faq' text='FAQ page' /> for more answers.
      </SubHeading>
    </Card>
  </PageWrapper>
)

export default HowItWorks
