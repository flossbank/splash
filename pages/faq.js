import { Text, Box, Image, Code, Icon, useClipboard } from '@chakra-ui/core'

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
        <Text marginBottom='1rem'>Currently just npm and yarn</Text>
        <SubHeading>How are you distributing the revenue generated from me viewing ads?</SubHeading>
        <Text marginBottom='1rem'>
          We distribute the revenue all the way down the dependency tree of each installation of an open
          source package under one of our supported package managers. We thought, "What would we do if we made a dollar
          from an Open Source package we published, and the authors of all of our top level dependencies
          were in the same room as us?".
          Well, logically we'd split the dollar equally amongst ourselves and each of those top
          level dependency authors. We
          clearly couldn't have built our product we just made a dollar from without them, so sharing equally makes
          sense. So that's how we built Flossbank. For each level down the dependency tree the to level package's author
          splits the revenue they receive with the authors of the dependencies that package relies on.
          etc etc.
        </Text>
        <SubHeading>Why can't I see the revenue I've generated for Open Source real time in my user portal?</SubHeading>
        <Text marginBottom='1rem'>
          Unfortunately due to the party (maintainers) we pay also potentially being a party
          that uses (developers) Flossbank, it is an abuse concern
          to show real time revenue impact information. We will display that information on a 1 month lagging basis.
        </Text>
        <SubHeading>What data do you have?</SubHeading>
        <Text marginBottom='1rem'>
          Only what Open Source packages you install. The same data all package manager registries
          have as well.
        </Text>
        <SubHeading>What OS do you support?</SubHeading>
        <Text marginBottom='1rem'>
          Windows, Mac, Linux.
        </Text>
        <SubHeading>How can I uninstall?</SubHeading>
        <Text marginBottom='1rem'>
          At any point you can run the following command to uninstall:
        </Text>
        <Box position='relative'>
          <Code
            padding='.75rem'
            backgroundColor='lightRock'
            color='boulder'
            width='100%'
          >
            Flossbank uninstall
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
