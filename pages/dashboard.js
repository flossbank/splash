import { useState, useEffect } from 'react'
import { Text, Box, Heading, Flex, List, ListItem, CircularProgress, Alert, AlertIcon } from '@chakra-ui/core'

import PageWrapper from '../components/common/pageWrapper'
import {
  fetchUserInstalledPackages,
  fetchDonationInfo
} from '../client'

const Dashboard = () => {
  const [packagesTouchedLoading, setPackagesTouchedLoading] = useState(true)
  const [donationLoading, setDonationLoading] = useState(true)
  const [topTenPackages, setTopTenPackages] = useState([])
  const [packagesTouched, setPackagesTouched] = useState(0)
  const [donation, setDonation] = useState()

  async function fetchData () {
    try {
      const installedPackagesRes = await fetchUserInstalledPackages()
      if (installedPackagesRes) {
        const packagesTouchedData = installedPackagesRes.installedPackages.reduce((acc, pkg) => acc + pkg.installCount, 0)
        setPackagesTouched(packagesTouchedData)
        setPackagesTouchedLoading(false)

        const topTen = installedPackagesRes.installedPackages.sort((a, b) => b.installCount - a.installCount).slice(0, 9)
        setTopTenPackages(topTen)
      }

      const donationInfoRes = await fetchDonationInfo()
      if (donationInfoRes) {
        setDonation(donationInfoRes.amount / 100)
        setDonationLoading(false)
      }
    } catch (e) {
      setPackagesTouched('Error')
    }
  }

  useEffect(() => {
    fetchData()
  }, [0]) // only run on mount

  return (
    <PageWrapper
      hideFooter
      title='Dashboard'
      description='User usage dashboard and profile page.'
    >
      <Box padding={['1rem', '4rem']} backgroundColor='lightRock'>
        <Box width='100%'>
          <Alert
            status='success'
            backgroundColor='puddle'
            color='ocean'
            fontWeight='500'
            marginBottom='1.5rem'
          >
            <AlertIcon color='ocean' />
            Thanks for installing Flossbank! As you develop using open source, you can visit this user portal
            at any time to see the impact you have on the open source community. We're working on more features
            as fast as possible, hoping to create a vibrant open source support ecosystem. Happy coding!
          </Alert>
        </Box>
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
          <Box as='section' width='70%' height='40rem' backgroundColor='black' />
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
                {packagesTouchedLoading && <CircularProgress isIndeterminate color='ocean' />}
                {!packagesTouchedLoading && <Heading>{packagesTouched}</Heading>}
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
                {donationLoading && <CircularProgress isIndeterminate color='ocean' />}
                {!donationLoading && <Heading>${donation}</Heading>}
                <Text>Monthly donation</Text>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Box>
    </PageWrapper>
  )
}

export default Dashboard
