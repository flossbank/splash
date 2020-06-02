import { Flex, Icon, Grid } from '@chakra-ui/core'

const cardData = [
  {
    icon: 'givingHand',
    copy: ` Rest easy knowing 100% of your donation goes to authors and
                  maintainers`
  },
  {
    icon: 'pieChart',
    copy: `Donate dynamically to the open source packages your firm uses
                  most`
  },
  {
    icon: 'megaphone',
    copy: `  Gain insight into your impact and explore advertising
                  opportunities`
  }
]

const BusinessCard = ({ icon, copy }) => (
  <Flex
    className='u-box-shadow'
    flexDirection={['column', 'row']}
    align='center'
    backgroundColor='white'
    padding='2.5rem 2.25rem'
  >
    <Icon
      name={icon}
      size='3.75rem'
      marginBottom={['2.25rem', 0]}
      marginRight={[0, '2.25rem']}
    />
    <p>{copy}</p>
  </Flex>
)

const BusinessCards = () => (
  <Grid
    gap='1.75rem'
    templateColumns='repeat(auto-fit, minmax(20rem, 1fr))'
    maxW='75rem'
    width='100%'
    marginBottom='3rem'
  >
    {cardData.map((card, i) => (
      <BusinessCard key={i} icon={card.icon} copy={card.copy} />
    ))}
  </Grid>
)

export default BusinessCards
