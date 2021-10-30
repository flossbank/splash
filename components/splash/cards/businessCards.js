import { List, ListItem } from '@chakra-ui/react'
import CustomIconWrapper from '../../common/customIconWrapper'

const cardData = [
  {
    icon: 'lock',
    text: 'Fortify the code your company relies on by giving to the maintainers building it'
  },
  {
    icon: 'givingHand',
    text:
      'Rest easy knowing 99% of your donation goes to authors and maintainers'
  },
  {
    icon: 'pieChart',
    text: 'Donate with a single click and have your company logo show up on every package you depend on'
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
    <CustomIconWrapper
      icon={icon}
      boxSize='3.75rem'
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
