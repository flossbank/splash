import { Box, Text, List, ListItem } from '@chakra-ui/react'

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
      marginTop={{ lg: '1.5rem' }}
      position={{ lg: 'sticky' }}
      top={{ lg: '10%' }}
      gridColumn='1'
      alignSelf='baseline'
    >
      <WomanWorking />
    </Box>
    <Box gridColumn={{ base: 1, lg: 2 }} maxW={{ base: '80ch', lg: '55ch' }}>
      <Subheading align={{ base: 'center', lg: 'left' }}>
        Revolutionizing Open Source pay
      </Subheading>
      <Box marginBottom='3rem'>
        <Box marginBottom='1rem'>
          We believe the Open Source ecosystem suffers from three problems:
          <List as='ol' styleType='decimal'>
            <ListItem margin='1rem 0'>
              Lack of funding. There isn’t enough money coming in to compensate
              maintainers for their labor. Open Source is the backbone of almost
              every Fortune 500 company, but maintainers see little of that
              success.
            </ListItem>
            <ListItem margin='1rem 0'>
              Disproportionate distribution of funding. If I donate to an Open
              Source project, I’m generally ignoring the dependencies of that
              project. We believe this funding paradigm is dysfunctional and
              unfair.
            </ListItem>
            <ListItem margin='1rem 0'>
              Lack of accessibility. If maintainers want funding, they must
              spend time and energy on self-promotion. If developers want to
              help the Open Source ecosystem, they need the financial means to
              do so.
            </ListItem>
          </List>
        </Box>
        <Text marginBottom='1rem'>
          These are huge problems. We wanted a solution that allows us to easily
          and freely give back to all the maintainers we rely on. More than
          that, we wanted a solution that would compensate the dependencies of
          our dependencies -- all the way down the tree.
        </Text>
        <Text marginBottom='1rem'>
          First and foremost, we built our enterprise portal to allow companies and organizations
          to fund not only all of the dependencies defined in their manifest files,
          but all of the dependencies of their dependencies as well. We determine the packages that will receive
          enterprise funds by looking at all GitHub repositories for that organization. The beauty
          of this is that each month, when the donation is processed, we look at GitHub for all
          dependencies at that exact time, meaning enterprise donations are constantly up to date
          with the dependencies actually used by that organization. Absolutely no maintenance required.
          In return for donating, an organization's logo is displayed on each and every package's page which
          received funds, increasing brand awareness and showing maintainers that this organization
          truly cares.
        </Text>
        <Text marginBottom='1rem'>
          We also built a package manager wrapper for developers who would like to give back
          to the Open Source packages they use in their day to day work. The wrapper takes
          complete dependency tree snapshots when you install Open Source
          packages. The wrapper will show ads (if you want) while Open Source
          packages are downloading/installing. Or, conversely, developers
          can choose to donate monthly. Our package manager wrapper distributes the revenue,
          either from ads or a donation,
          across the entire dependency tree of the packages that you installed.
        </Text>
        <Text marginBottom='1rem'>
          You might think "Ads suck, why ads?" We hate ads as much as you do,
          but we realized we primarily hate them when they're forced on us, or
          when they become a requirement to use a product. That's why ads
          through Flossbank are completely opt-in; never a requirement. We view
          ads as an accessible way to give back to the Open Source community. If
          you're someone who wants to give back, now there's a free option, if
          you so choose.
        </Text>
        <Text marginBottom='1rem'>
          If you prefer donating, we also distribute your donation to every
          package installed, not only the top level packages. What’s more, your
          contribution to the Open Source community reflects your usage each
          month. Your donation goes to the packages you used the most each month
          (and to their dependencies).
        </Text>
        <Text marginBottom='1rem'>
          We’re super excited about this product and think it’s a small step in
          the right direction.
        </Text>
        <Text>Want to help us on our mission to fund Open Source?</Text>
        <Text>Get in touch.</Text>
      </Box>
    </Box>
  </Section>
)

export default AboutUsSection
