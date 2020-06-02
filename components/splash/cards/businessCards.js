import { Flex, Icon, Grid } from '@chakra-ui/core'

const cardData = [
  {
    icon: 'givingHand',
    text:
      'Rest easy knowing 100% of your donation goes to authors and maintainers'
  },
  {
    icon: 'pieChart',
    text: 'Donate dynamically to the open source packages your firm uses most'
  },
  {
    icon: 'megaphone',
    text: 'Gain insight into your impact and explore advertising opportunities'
  }
]

const BusinessCard = ({ icon, text }) => (
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
    <p>{text}</p>
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
      <BusinessCard key={i} icon={card.icon} text={card.text} />
    ))}
  </Grid>
)

export default BusinessCards
