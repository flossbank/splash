import { useState, useEffect } from 'react'

import {
  fetchUserInstalledPackages,
  fetchDonationInfo,
  fetchUserSessionsInfo
} from '../client'

import {
  Text,
  Box,
  Heading,
  List,
  ListItem,
  CircularProgress
} from '@chakra-ui/react'

import { downloadData } from '../utils/downloader'
import { useLocalStorage } from '../utils/useLocalStorage'
import {
  localStorageDashboardWelcomeBannerKey,
  localStorageDashboardInstallReminderKey
} from '../utils/constants'
import { useAuth } from '../utils/useAuth'

import Banner from '../components/common/banner'
import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import DashboardDataCard from '../components/dashboard/dashboardDataCard'
import DonationCard from '../components/dashboard/donationCard'
import TextLink from '../components/common/textLink'
import FBButton from '../components/common/fbButton'
import TopTenPackagesView from '../components/dashboard/topTenPackagesView'
import { DownloadIcon } from '@chakra-ui/icons'

const Dashboard = () => {
  const { user, resume } = useAuth()
  const [showWelcomeMessage, setShowWelcomeMessage] = useLocalStorage(
    localStorageDashboardWelcomeBannerKey,
    true
  )
  const [showInstallReminder, setShowInstallReminder] = useLocalStorage(
    localStorageDashboardInstallReminderKey,
    true
  )

  const [showInstallReminderLocal, setShowInstallReminderLocal] = useState(
    true
  )
  const [packagesTouchedLoading, setPackagesTouchedLoading] = useState(true)
  const [donationLoading, setDonationLoading] = useState(true)
  const [userSessionCountLoading, setUserSessionCountLoading] = useState(true)
  const [userSessionCount, setUserSessionCount] = useState(0)
  const [packagesTouched, setPackagesTouched] = useState(0)
  const [donation, setDonation] = useState(
    user.billingInfo.monthlyDonation || 0
  )
  const [topTenPackages, setTopTenPackages] = useState([])
  const [userInstallData, setUserInstallData] = useState({})

  function resetLoaders () {
    setPackagesTouchedLoading(true)
    setDonationLoading(true)
    setUserSessionCountLoading(true)
  }

  function fetchData () {
    fetchInstalledPkgsData()
    fetchDonationData()
    fetchSessionData()
  }

  async function fetchDonationData () {
    try {
      const donationInfoRes = await fetchDonationInfo()
      if (donationInfoRes && donationInfoRes.success) {
        setDonation(donationInfoRes.donationInfo.amount / 100)
      }
    } catch (e) {
      setDonation(0)
    } finally {
      setDonationLoading(false)
    }
  }

  async function fetchSessionData () {
    try {
      const sessionCountRes = await fetchUserSessionsInfo()
      if (sessionCountRes && sessionCountRes.success) {
        setUserSessionCount(sessionCountRes.userSessionData.sessionCount)
      }
    } catch (e) {
      setUserSessionCount('N/A')
    } finally {
      setUserSessionCountLoading(false)
    }
  }

  async function fetchInstalledPkgsData () {
    try {
      const installedPackagesRes = await fetchUserInstalledPackages()
      if (installedPackagesRes && installedPackagesRes.success) {
        setUserInstallData({
          packages: installedPackagesRes.installedPackages
        })
        setPackagesTouched(installedPackagesRes.installedPackages.length)

        const topTen = installedPackagesRes.installedPackages
          .sort((a, b) => b.installCount - a.installCount)
          .slice(0, 10)
          .sort((a, b) => {
            if (a.installCount === b.installCount) {
              if (a.name < b.name) return -1
              if (a.name > b.name) return 1
              return 0
            }
            return b.installCount - a.installCount
          })
          .map((packs) => ({
            name: packs.name,
            count: packs.installCount,
            amt: packs.installCount
          }))
        setTopTenPackages(topTen)
      }
    } catch (e) {
      setPackagesTouched('N/A')
    } finally {
      setPackagesTouchedLoading(false)
    }
  }

  async function refreshDashboard () {
    resetLoaders()
    fetchData()
    await resume()
  }

  useEffect(() => {
    fetchData()
  }, [0]) // only run on mount

  return (
    <PageWrapper title='Dashboard'>
      <h1 className='sr-only'>User dashboard</h1>
      {showWelcomeMessage && (
        <Banner icon='hooray' onCloseClick={() => setShowWelcomeMessage(false)}>
          <Text color='rock'>
            Thanks for installing Flossbank! You can log in at any time to see
            the impact you have on the Open Source community. We're always
            working on more features, hoping to create a vibrant Open Source
            support ecosystem. Happy coding!
          </Text>
        </Banner>
      )}
      {showInstallReminder && showInstallReminderLocal && (
        <Banner
          icon='info'
          onCloseClick={() => setShowInstallReminderLocal(false)}
        >
          <Text color='rock'>
            Looks like you haven't installed the package manager wrapper yet.
            Head over to{' '}
            <TextLink
              fontWeight='bold'
              text='the install page'
              href='/install'
            />{' '}
            to finish setting up and ensure the packages you install are
            compensated. If you've already installed,{' '}
            {/* TODO (a11y): links go somewhere, they don't perform actions. onClick events shouldn't be used on links, so we should use a button here */}
            <TextLink
              fontWeight='bold'
              href='#'
              onClick={() => setShowInstallReminder(false)}
              text='click here.'
            />
          </Text>
        </Banner>
      )}
      <Section
        backgroundColor='lightRock'
        display={{ md: 'grid' }}
        gridTemplateColumns={{ lg: 'minmax(16rem, 20rem) minmax(auto, 70rem)' }}
        justifyContent='center'
        gridColumnGap={{ md: '3rem' }}
        gridRowGap={{ base: '3rem', lg: '1.5rem' }}
        gridTemplateRows={{ lg: 'auto 3rem 3rem' }}
      >
        <Box gridRow='1 / span 3' gridColumn='1'>
          <Heading
            textTransform='uppercase'
            letterSpacing='1px'
            fontWeight='bold'
            marginTop='0'
            fontSize='1rem'
            textAlign={{ base: 'center', md: 'left' }}
            marginBottom='1.5rem'
          >
            Impact overview
          </Heading>
          <Box>
            <List
              display={{ base: 'grid' }}
              alignItems={{ md: 'stretch', lg: 'initial' }}
              gridGap='1.75rem'
              gridTemplateColumns={{
                base: 'repeat(auto-fit, minmax(16rem, 1fr))'
              }}
              width='100%'
              margin={{ base: '0 auto 1.5rem auto' }}
            >
              <ListItem>
                <DashboardDataCard>
                  {userSessionCountLoading && (
                    <CircularProgress isIndeterminate color='ocean' />
                  )}
                  {!userSessionCountLoading && (
                    <Text
                      aria-describedby='user-session-count'
                      fontSize='2.25rem'
                      color='ocean'
                    >
                      {userSessionCount}
                    </Text>
                  )}
                  <Heading
                    as='h3'
                    fontSize='1rem'
                    fontWeight='400'
                    id='user-session-count'
                  >
                    {userSessionCount !== 1 ? 'Installs' : 'Install'} performed
                  </Heading>
                </DashboardDataCard>
              </ListItem>
              <ListItem>
                <DashboardDataCard>
                  {packagesTouchedLoading && (
                    <CircularProgress isIndeterminate color='ocean' />
                  )}
                  {!packagesTouchedLoading && (
                    <Text
                      aria-describedby='packages-touched'
                      fontSize='2.25rem'
                      color='ocean'
                    >
                      {packagesTouched}
                    </Text>
                  )}
                  <Heading
                    as='h3'
                    fontSize='1rem'
                    fontWeight='normal'
                    id='user-session-count'
                  >
                    Unique packages installed
                  </Heading>
                </DashboardDataCard>
              </ListItem>
              <ListItem>
                <DonationCard
                  optOutOfAds={!!user.optOutOfAds}
                  donationLoading={donationLoading}
                  hasDonation={!!donation}
                  refreshDashboard={refreshDashboard}
                  donationAmount={donation}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box width='100%' display={['none', 'grid']}>
          <TopTenPackagesView topTenPackages={topTenPackages} />
        </Box>
        <Box
          marginTop={{ base: '3rem', lg: '0' }}
          gridRow='2 / span 1'
          gridColumn='2'
          justifySelf='end'
          alignSelf='end'
          textAlign={{ base: 'center', md: 'right' }}
        >
          <FBButton
            backgroundColor='transparent'
            fontWeight='600'
            borderRadius='0'
            color='ocean'
            onClick={() =>
              downloadData(JSON.stringify(userInstallData), 'flossbank_user_data.json')}
          >
            Download data
            <DownloadIcon marginLeft='1rem' boxSize='1.75rem' />
          </FBButton>
        </Box>
      </Section>
    </PageWrapper>
  )
}

export default Dashboard
