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
  CloseButton,
  Button
} from '@chakra-ui/core'
import {
  BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

import { downloadData } from '../utils/downloader'
import { useLocalStorage } from '../utils/useLocalStorage'
import { localStorageDashboardWelcomeBannerKey } from '../utils/constants'
import PageWrapper from '../components/common/pageWrapper'
import Section from '../components/common/section'
import { 
  fetchUserInstalledPackages, 
  fetchDonationInfo,
  fetchTotalSessionCount,
} from '../client'

const Dashboard = () => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useLocalStorage(localStorageDashboardWelcomeBannerKey, true)  
  const [packagesTouchedLoading, setPackagesTouchedLoading] = useState(true)
  const [donationLoading, setDonationLoading] = useState(true)
  const [userSessionCountLoading, setUserSessionCountLoading] = useState(true)
  const [userSessionCount, setUserSessionCount] = useState(0)
  const [packagesTouched, setPackagesTouched] = useState(0)
  const [donation, setDonation] = useState()
  const [topTenPackages, setTopTenPackages] = useState([])
  const [userInstallData, setUserInstallData] = useState({})

  async function fetchData () {
    try {
      const installedPackagesRes = await fetchUserInstalledPackages()
      if (installedPackagesRes && installedPackagesRes.success) {
        setUserInstallData({ packages: installedPackagesRes.installedPackages })
        const packagesTouchedData = installedPackagesRes.installedPackages.reduce(
          (acc, pkg) => acc + pkg.installCount,
          0
        )
        setPackagesTouched(packagesTouchedData)

        const topTen = installedPackagesRes.installedPackages
          .sort((a, b) => b.installCount - a.installCount)
          .slice(0, 10)
          .sort((a, b) => a.installCount === b.installCount ? a.name.charCodeAt(0) - b.name.charCodeAt(0) : 1)
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
      const sessionCountRes = await fetchTotalSessionCount()
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
          textAlign={['center', 'left']}
          marginBottom='1rem'
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
              <ListItem
                className='u-box-shadow'
                display='flex'
                flexDirection={['column']}
                alignItems='center'
                backgroundColor='white'
                padding='1.5rem 1.25rem'
              >
                {userSessionCountLoading && (
                  <CircularProgress isIndeterminate color='ocean' />
                )}
                {!userSessionCountLoading && (
                  <Heading>{userSessionCount}</Heading>
                )}
                <Text>Installs performed</Text>
              </ListItem>
              <ListItem
                className='u-box-shadow'
                display='flex'
                flexDirection={['column']}
                alignItems='center'
                backgroundColor='white'
                padding='1.5rem 1.25rem'
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
                padding='1.5rem 1.25rem'
              >
                {donationLoading && (
                  <CircularProgress isIndeterminate color='ocean' />
                )}
                {!donationLoading && <Heading>$ {donation}</Heading>}
                <Text>Monthly donation</Text>
              </ListItem>
              <ListItem
                className='u-box-shadow'
                display={['none', 'flex']}
                flexDirection={['row']}
                alignItems='center'
                backgroundColor='white'
              >
                <Button
                  onClick={() => downloadData(JSON.stringify(userInstallData), 'flossbank_user_data.json')}
                  margin='1rem 1.25rem'
                >
                  <Heading>Download data</Heading>
                  <Icon marginLeft='1rem' name='download' size='32px' />
                </Button>
              </ListItem>
            </List>
          </Flex>
          <Box as='section' width='100%' margin='0 0 0 2rem' display={['none', 'inline']}>
            <ResponsiveContainer width='100%' height={500}>
              <BarChart
                data={topTenPackages}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5
                }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis>
                  <Label angle={270} position='left' value='Count' />
                </YAxis>
                <Tooltip />
                <Bar dataKey='count' fill='#8884d8' />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Flex>
      </Section>
    </PageWrapper>
  )
}

export default Dashboard
