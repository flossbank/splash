import { Box, Text, List, ListItem } from '@chakra-ui/core'

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
    <Box gridColumn={{ base: 1, lg: 2 }} maxW={{ base: '80ch', lg: '55ch' }}>
      <Subheading align={{ base: 'center', lg: 'left' }}>
        Revolutionizing open source pay
      </Subheading>
      <Box marginBottom='3rem'>
        <Text marginBottom='1rem'>
          We believe the open source ecosystem suffers from three problems:
          <List styleType='disc'>
            <ListItem margin='1rem 0'>
              Lack of funding. There isn’t enough money coming in to compensate maintainers for their labor.
              Open source is the backbone of almost every Fortune 500 company, but maintainers
              see little of that success.
            </ListItem>
            <ListItem margin='1rem 0'>
              Disproportionate distribution of funding. If I donate to an open source project,
              I’m generally ignoring the dependencies of that project. We believe this funding
              paradigm is dysfunctional and unfair.
            </ListItem>
            <ListItem margin='1rem 0'>
              Lack of accessibility. If maintainers want funding, they must spend time
              and energy on self-promotion. If developers want to help the open source ecosystem,
              they need the financial means to do so.
            </ListItem>
          </List>
        </Text>
        <Text marginBottom='1rem'>
          These are huge problems. We wanted a solution that allows us to easily and freely
          give back to all the maintainers we rely on. More than that, we wanted a solution that
          would compensate the dependencies of our dependencies -- all the way down the tree.
        </Text>
        <Text marginBottom='1rem'>
          That’s why we built a package manager wrapper. The wrapper takes complete dependency
          tree snapshots when you install open source packages. The wrapper will show ads
          (if you want) while open source packages are downloading/installing. We distribute
          the ad revenue across the entire dependency tree of the packages that you installed.
        </Text>
        <Text marginBottom='1rem'>
          If you prefer donating, we also distribute your donation to every package installed,
          not only the top level packages. What’s more, your contribution to the open source
          community reflects your usage each month. Your donation goes to the packages you
          used the most each month (and to their dependencies).
        </Text>
        <Text marginBottom='1rem'>
          We’re super excited about this product and think it’s a small step in the right direction.
        </Text>
        <Text>Want to help us on our mission to fund open source?</Text>
        <Text>Get in touch.</Text>
      </Box>
    </Box>
  </Section>
)

export default AboutUsSection
