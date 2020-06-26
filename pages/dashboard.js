import { useState, useEffect } from 'react'
import {
  Text,
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  CircularProgress,
  Icon,
  CloseButton
} from '@chakra-ui/core'

import { useAuth } from '../utils/useAuth'
import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'

import { fetchUserInstalledPackages, fetchDonationInfo } from '../client'

const Dashboard = () => {
  const auth = useAuth(); // eslint-disable-line
  // User info is located in auth.user
  // which will have email, id, and billingInfo
  const [packagesTouchedLoading, setPackagesTouchedLoading] = useState(true)
  const [donationLoading, setDonationLoading] = useState(true)
  const [topTenPackages, setTopTenPackages] = useState([])
  const [packagesTouched, setPackagesTouched] = useState(0)
  const [donation, setDonation] = useState()
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true)

  async function fetchData () {
    try {
      const installedPackagesRes = await fetchUserInstalledPackages()
      if (installedPackagesRes && installedPackagesRes.success) {
        const packagesTouchedData = installedPackagesRes.installedPackages.reduce(
          (acc, pkg) => acc + pkg.installCount,
          0
        )
        setPackagesTouched(packagesTouchedData)
        setPackagesTouchedLoading(false)

        const topTen = installedPackagesRes.installedPackages
          .sort((a, b) => b.installCount - a.installCount)
          .slice(0, 10)
        setTopTenPackages(topTen)
      }
    } catch (e) {
      setPackagesTouched('Error')
    }

    try {
      const donationInfoRes = await fetchDonationInfo()
      if (donationInfoRes && donationInfoRes.success) {
        setDonation(donationInfoRes.donationInfo.amount / 100)
        setDonationLoading(false)
      }
    } catch (e) {
      setDonation(0)
    }
  }

  useEffect(() => {
    fetchData()
  }, [0]) // only run on mount

  return (
    <PageWrapper title='Dashboard'>
      <Section backgroundColor='lightRock'>
        {showWelcomeMessage && (
          <Flex
            position='relative'
            maxW={{ md: '60rem' }}
            color='ocean'
            backgroundColor='lightPuddle'
            direction={{ base: 'column', md: 'row' }}
            align='center'
            justify='center'
            padding={{ base: '1rem 1.5rem', md: '1.5rem 3rem' }}
            margin='0 auto 3rem'
            fontWeight='500'
          >
            <Icon
              name='hooray'
              size={{ base: '2rem', md: '3rem' }}
              marginRight={{ base: 0, md: '1.5rem' }}
              marginBottom={{ base: '1.5rem', md: 0 }}
            />
            Thanks for installing Flossbank! You can log in at any time to see
            the impact you have on the open source community. We're always
            working on more features, hoping to create a vibrant open source
            support ecosystem. Happy coding!
            <CloseButton
              onClick={() => setShowWelcomeMessage(false)}
              border='2px solid'
              color='currentColor'
              borderRadius='50%'
              aria-label='Dismiss message'
              position='absolute'
              top='.5rem'
              right='1rem'
              transition='all 200ms ease-in-out'
              _hover={{
                backgroundColor: 'ocean',
                color: '#fff'
              }}
            />
          </Flex>
        )}
        <Heading
          textTransform='uppercase'
          fontWeight='bold'
          fontSize='14px'
          marginBottom='1rem'
        >
          Impact overview
          {topTenPackages}
        </Heading>
        <Flex flexDirection='row'>
          <Box
            as='section'
            width='70%'
            height='40rem'
            backgroundColor='black'
          />
          <Flex flexDirection='column' width='30%'>
            <List
              display='grid'
              gridGap='1.75rem'
              gridTemplateColumns='repeat(auto-fit, minmax(16rem, 1fr))'
              maxW='75rem'
              width='100%'
              marginBottom='3rem'
            >
              <ListItem
                className='u-box-shadow'
                display='flex'
                flexDirection={['column']}
                alignItems='center'
                backgroundColor='white'
                padding='2.5rem 2.25rem'
              >
                {packagesTouchedLoading && (
                  <CircularProgress isIndeterminate color='ocean' />
                )}
                {!packagesTouchedLoading && (
                  <Heading>{packagesTouched}</Heading>
                )}
                <Text>Packages touched</Text>
              </ListItem>
              <ListItem
                className='u-box-shadow'
                display='flex'
                flexDirection={['column']}
                alignItems='center'
                backgroundColor='puddle'
                padding='2.5rem 2.25rem'
              >
                {donationLoading && (
                  <CircularProgress isIndeterminate color='ocean' />
                )}
                {!donationLoading && <Heading>${donation}</Heading>}
                <Text>Monthly donation</Text>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Section>
    </PageWrapper>
  )
}

export default Dashboard
