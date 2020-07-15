import { Text, Heading, Icon } from '@chakra-ui/core'

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

import DashboardDataCard from './dashboardDataCard'

const TopTenPlaceholder = () => (
  <>
    <Icon name='bars' size='15rem' marginBottom='3rem' />
    <Text>
      Once you've installed <strong>Flossbank</strong> and start installing Open
      Source packages, you'll be able to see data your top ten packages here.
    </Text>
  </>
)

const TopTenChart = ({ topTenPackages }) => (
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
)

const TopTenPackagesView = ({ topTenPackages }) => {
  console.log(topTenPackages)
  return (
    <>
      <Heading
        textTransform='uppercase'
        fontWeight='bold'
        marginTop='0'
        fontSize='1rem'
        textAlign={{ base: 'center', sm: 'left' }}
        marginBottom='1.5rem'
      >
        Top Ten Packages Used
      </Heading>
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
}

export default TopTenPackagesView
