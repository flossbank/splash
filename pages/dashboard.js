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
  Button
} from '@chakra-ui/core'

import {
  BarChart,
  Bar,
  Label,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

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

import {
  fetchUserInstalledPackages,
  fetchDonationInfo,
  fetchUserSessionsInfo
} from '../client'
import TextLink from '../components/common/textLink'

const Dashboard = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useLocalStorage(
    localStorageDashboardWelcomeBannerKey,
    true
  )
  const [showInstallReminder, setShowInstallReminder] = useLocalStorage(
    localStorageDashboardInstallReminderKey,
    true
  )
  const [showInstallReminderLocal, setShowInstallReminderLocal] = useState(true)
  const [packagesTouchedLoading, setPackagesTouchedLoading] = useState(true)
  const [donationLoading, setDonationLoading] = useState(true)
  const [userSessionCountLoading, setUserSessionCountLoading] = useState(true)
  const [userSessionCount, setUserSessionCount] = useState(0)
  const [packagesTouched, setPackagesTouched] = useState(0)
  const [donation, setDonation] = useState()
  const [topTenPackages, setTopTenPackages] = useState([])
  const [userInstallData, setUserInstallData] = useState({})
  const { user } = useAuth()

  async function fetchData () {
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
      setPackagesTouched('Error')
    } finally {
      setPackagesTouchedLoading(false)
    }

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

    try {
      const sessionCountRes = await fetchUserSessionsInfo()
      if (sessionCountRes && sessionCountRes.success) {
        setUserSessionCount(sessionCountRes.userSessionData.sessionCount)
      }
    } catch (e) {
      setUserSessionCount('Error')
    } finally {
      setUserSessionCountLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [0]) // only run on mount

  return (
    <PageWrapper title='Dashboard'>
      {showWelcomeMessage && (
        <Banner icon='hooray' onCloseClick={() => setShowWelcomeMessage(false)}>
          <Text>
            Thanks for installing Flossbank! You can log in at any time to see
            the impact you have on the Open Source community. We're always
            working on more features, hoping to create a vibrant Open Source
            support ecosystem. Happy coding!
          </Text>
        </Banner>
      )}
      {(showInstallReminder && showInstallReminderLocal) && (
        <Banner icon='info' onCloseClick={() => setShowInstallReminderLocal(false)}>
          <Text>
            Looks like you haven't installed the package manager wrapper yet.
            Head over to <TextLink textDecoration='underline' fontWeight='bold' text='the install page' href='/install' /> to finish setting up and ensure
            the packages you install are compensated. If you've already
            installed, <TextLink textDecoration='underline' fontWeight='bold' href='#' onClick={() => setShowInstallReminder(false)} text='click here.' />
          </Text>
        </Banner>
      )}
      <Section backgroundColor='lightRock'>
        <Heading
          textTransform='uppercase'
          fontWeight='bold'
          marginTop='0'
          fontSize='1rem'
          textAlign={{ base: 'center', sm: 'left' }}
          marginBottom='1.5rem'
        >
          Impact overview
        </Heading>
        <Flex flexDirection={['column', 'row']} minHeight='55vh' margin='auto'>
          <Flex flexDirection='column' width={['100%', '30%']} as='section'>
            <List
              display='grid'
              gridGap='1.75rem'
              gridTemplateColumns='repeat(auto-fit, minmax(16rem, 1fr))'
              maxW='75rem'
              width='100%'
              marginBottom='3rem'
            >
              <ListItem>
                <DashboardDataCard>
                  {userSessionCountLoading && (
                    <CircularProgress isIndeterminate color='ocean' />
                  )}
                  {!userSessionCountLoading && (
                    <Text
                      aria-describedby='user-session-count'
                      fontSize='2rem'
                      fontWeight='bold'
                      color='ocean'
                    >
                      {userSessionCount}
                    </Text>
                  )}
                  <Heading
                    as='h3'
                    fontSize='1.15rem'
                    fontWeight='500'
                    id='user-session-count'
                  >
                    Installs Performed
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
                      fontSize='2rem'
                      fontWeight='bold'
                      color='ocean'
                    >
                      {packagesTouched}
                    </Text>
                  )}
                  <Heading
                    as='h3'
                    fontSize='1.15rem'
                    fontWeight='500'
                    id='user-session-count'
                  >
                    Unique Packages Touched
                  </Heading>
                </DashboardDataCard>
              </ListItem>
              <ListItem>
                <DonationCard
                  optOutOfAds={!!user.optOutOfAds}
                  donationLoading={donationLoading}
                  donationAmount={donation}
                />
              </ListItem>
              <ListItem>
                <DashboardDataCard>
                  <Button
                    color='ocean'
                    fontSize='2rem'
                    onClick={() => downloadData(
                      JSON.stringify(userInstallData),
                      'flossbank_user_data.json'
                    )}
                  >
                    Download Data
                    <Icon marginLeft='1rem' name='download' size='1.75rem' />
                  </Button>
                </DashboardDataCard>
              </ListItem>
            </List>
          </Flex>
          <Box
            as='section'
            width='100%'
            margin='0 0 0 2rem'
            display={['none', 'inline']}
          >
            <ResponsiveContainer width='100%' height={500}>
              <BarChart
                data={topTenPackages}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis>
                  <Label angle={270} position='left' value='Count' />
                </YAxis>
                <Tooltip />
                <Bar dataKey='count' fill='#2baf74' />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Flex>
      </Section>
    </PageWrapper>
  )
}

export default Dashboard
