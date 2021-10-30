import { Text, Heading, Flex } from '@chakra-ui/react'

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
import CustomIconWrapper from '../common/customIconWrapper'

import DashboardDataCard from './dashboardDataCard'

const TopTenPlaceholder = () => (
  <>
    <CustomIconWrapper icon='bars' boxSize='15rem' marginBottom='3rem' />
    <Text>
      Once you've installed <strong>Flossbank</strong> and start installing Open
      Source packages, you'll be able to see data about the top ten packages you
      use.
    </Text>
  </>
)

const TopTenChart = ({ topTenPackages }) => (
  <ResponsiveContainer width='100%' height={490}>
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
)

const TopTenPackagesView = ({ topTenPackages }) => (
  <>
    <Flex flexDirection='row'>
      <Heading
        textTransform='uppercase'
        letterSpacing='1px'
        fontWeight='bold'
        marginTop='0'
        fontSize='1rem'
        textAlign={{ base: 'center', sm: 'left' }}
        marginBottom='1.5rem'
        display='flex'
        alignItems='center'
      >
        Most Installed Packages
      </Heading>
    </Flex>
    <DashboardDataCard
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      {topTenPackages.length ? (
        <TopTenChart topTenPackages={topTenPackages} />
      ) : (
        <TopTenPlaceholder />
      )}
    </DashboardDataCard>
  </>
)

export default TopTenPackagesView
