import { Text, Box, Image } from '@chakra-ui/react'

import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import Card from '../components/common/card'
import UnderlinedHeading from '../components/common/underlinedHeading'
import TextLink from '../components/common/textLink'
import FAQHeading from '../components/common/faqHeading'
import Divider from '../components/common/divider'
import UninstallCommandBlock from '../components/common/uninstallCommandBlock'

const FAQ = () => (
  <PageWrapper title='FAQs'>
    <Section
      display='flex'
      justifyItems='center'
      flexDirection='column'
      alignItems='center'
      padding={{ base: '3rem 1.5rem', lg: '3rem 7.5rem 6rem' }}
      backgroundColor='lightRock'
    >
      <UnderlinedHeading as='h1' text='FAQs' align='center' />
      <Card shadowSz='lg' maxW='60rem'>
        <FAQHeading>What do the ads look like?</FAQHeading>
        <Box marginBottom='1.5rem'>
          <Image src='/images/flossbank_ads_demo.gif' margin='1.5rem auto 0' alt='GIF showing the process of installing packages when the Flossbank wrapper is installed.' />
        </Box>
        <Divider />
        <FAQHeading>How can I get paid for the packages I mantain?</FAQHeading>
        <Text marginBottom='1.5rem'>
          <TextLink
            text='Visit our maintainer portal to get signed up and start receiving funds!'
            external
            href='https://maintainer.flossbank.com'
          />
        </Text>
        <Divider />
        <FAQHeading>What package managers do you wrap?</FAQHeading>
        <Text marginBottom='1.5rem'>
          We are currently wrapping{' '}
          <TextLink href='https://www.npmjs.com/' external text='npm' /> and{' '}
          <TextLink href='https://yarnpkg.com/' external text='Yarn' />. We plan
          on wrapping more package managers in the future.
        </Text>
        <Divider />
        <FAQHeading>How is revenue I generate distributed?</FAQHeading>
        <Text marginBottom='1.5rem'>
          See our <TextLink text='how it works' href='/how-it-works' /> page for
          a detailed breakdown of how revenue is distributed to the packages you
          use.
        </Text>
        <Divider />
        <FAQHeading>
          Why can't I see the amount of ad revenue I've generated for Open
          Source in the user portal?
        </FAQHeading>
        <Text marginBottom='1.5rem'>
          We only display the previous month's impact in the user portal. This
          may change in the future.
        </Text>
        <Divider />
        <FAQHeading>What data do you collect and why?</FAQHeading>
        <Text marginBottom='1.5rem'>
          The package manager wrapper reports which top-level packages were
          installed. This is used for determining which packages should receive
          the revenue generated. Additionally, the version of the package
          manager used is recorded for debugging purposes. Our package manager
          wrapper is open source, so feel free to{' '}
          <TextLink
            text='inspect the code on GitHub.'
            external
            href='https://github.com/flossbank/cli'
          />
        </Text>
        <Divider />
        <FAQHeading>Which operating systems are supported?</FAQHeading>
        <Text marginBottom='1.5rem'>Windows, Mac, and Linux.</Text>
        <Divider />
        <FAQHeading>How can I uninstall Flossbank?</FAQHeading>
        <Text marginBottom='1.5rem'>
          At any point, you can run the following command to uninstall:
        </Text>
        <UninstallCommandBlock />
        <Divider />
        <FAQHeading>Bugs or feature requests?</FAQHeading>
        <Text marginBottom='1.5rem'>
          Please visit <TextLink external href='https://github.com/flossbank/splash/issues' text='our GitHub' /> page
          and file a bug or feature request!
        </Text>
        <Divider />
        <FAQHeading>I still have a question</FAQHeading>
        <Text marginBottom='1.5rem'>
          <TextLink text='Contact us' href='contact' /> and we'll address it
          ASAP!
        </Text>
      </Card>
    </Section>
  </PageWrapper>
)

export default FAQ
