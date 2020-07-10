import { Text, Box, Image, Code, Icon, useClipboard } from '@chakra-ui/core'

import TextLink from '../components/common/textLink'
import PageWrapper from '../components/common/pageWrapper'
import Card from '../components/common/card'
import UnderlinedHeading from '../components/common/underlinedHeading'
import SubHeading from '../components/common/subheading'
import FBButton from '../components/common/fbButton'

const FAQ = () => {
  const { onCopy, hasCopied } = useClipboard('Flossbank uninstall')
  return (
    <PageWrapper title='FAQ'>
      <Card padding={['2rem', '2rem 20% 6rem 20%']} as='section'>
        <UnderlinedHeading color='black' text='FAQ' />
        <SubHeading>What do the ads look like?</SubHeading>
        <Box marginBottom='1rem'>
          <Image src='/images/flossbank_ads_demo.gif' />
        </Box>
        <SubHeading>What package managers do you wrap?</SubHeading>
        <Text marginBottom='1rem'>We are currently wrapping NPM and Yarn. We plan on wrapping more package managers in the future.</Text>
        <SubHeading>How is the ad revenue I generate distributed?</SubHeading>
        <Text marginBottom='1rem'>
          We distribute the revenue all the way down the dependency tree of each open source package you install. Every installation begins with some "top-level package(s)". For instance, in a web development project, your top-level packages might be react, react-dom, webpack, babel, and a few others. We divide the chunk of revenue generated from viewing ads (or from a monthly donation) evenly between the top-level packages. Then we divide each package's share evenly between its own immediate dependencies. This process continues all the way down the tree.
        </Text>
        <SubHeading>Why can't I see the amount of ad revenue I've generated for Open Source in the user portal?</SubHeading>
        <Text marginBottom='1rem'>
          We only display the previous month's impact in the user portal. This may change in the future.
        </Text>
        <SubHeading>What data do you collect and why?</SubHeading>
        <Text marginBottom='1rem'>
          The package manager wrapper reports which top-level packages were installed. This is used for determining which packages should receive the revenue generated. Additionally, the version of the package manager used is recorded for debugging purposes.

          Our package manager wrapper is open source, so feel free to <TextLink text='inspect the code on GitHub.' href='https://github.com/flossbank/cli' />
        </Text>
        <SubHeading>Which operating systems are supported?</SubHeading>
        <Text marginBottom='1rem'>
          Windows, Mac, and Linux.
        </Text>
        <SubHeading>How can I uninstall Flossbank?</SubHeading>
        <Text marginBottom='1rem'>
          At any point, you can run the following command to uninstall:
        </Text>
        <Box position='relative'>
          <Code
            padding='.75rem'
            backgroundColor='lightRock'
            color='boulder'
            width='100%'
          >
            flossbank uninstall
          </Code>
          <FBButton
            // hide on mobile
            display={{ base: 'none', md: 'flex' }}
            alignItems='center'
            onClick={onCopy}
            padding='.5rem'
            fontSize='.85rem'
            minW='5rem'
            backgroundColor='puddle'
            color='ocean'
            position='absolute'
            right='0'
            top='.25rem'
            borderRadius='0'
            aria-live='assertive'
            _hover={{
              backgroundColor: 'ocean',
              color: 'white'
            }}
          >
            {hasCopied ? 'Copied' : 'Copy'}{' '}
            <span className='sr-only'>command to uninstall</span>
            <Icon name='copy' size='1rem' marginLeft='.5rem' />
          </FBButton>
        </Box>
      </Card>
    </PageWrapper>
  )
}

export default FAQ
