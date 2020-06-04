import { List, ListItem, Icon } from '@chakra-ui/core'

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
  <ListItem
    className='u-box-shadow'
    display='flex'
    flexDirection={['column', 'row']}
    alignItems='center'
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
  </ListItem>
)

const BusinessCards = () => (
  <List
    display='grid'
    gridGap='1.75rem'
    gridTemplateColumns='repeat(auto-fit, minmax(16rem, 1fr))'
    maxW='75rem'
    width='100%'
    marginBottom='3rem'
  >
    {cardData.map((card, i) => (
      <BusinessCard key={i} icon={card.icon} text={card.text} />
    ))}
  </List>
)

export default BusinessCards
