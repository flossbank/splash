import Card from '../common/card'

const DashboardDataCard = ({ children, ...props }) => (
  <Card
    display='flex'
    flexDirection='column'
    justifyContent='center'
    padding='2rem 3rem'
    {...props}
  >
    {children}
  </Card>
)

export default DashboardDataCard
