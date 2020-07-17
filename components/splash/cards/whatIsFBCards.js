import { List, ListItem, Icon } from '@chakra-ui/core'
import UnderlinedHeading from '../../common/underlinedHeading'

const cardData = [
  {
    heading: 'Accessible',
    icon: 'heart',
    text: 'Our no-cost option means everyone can support Open Source maintainers'
  },
  {
    heading: 'Equitable',
    icon: 'stack',
    text:
      'We give across the entire dependency tree, supporting maintainers big and small'
  },
  {
    heading: 'Seamless',
    icon: 'cycle',
    text: 'Flossbank doesn’t change your existing workflow'
  },

  {
    heading: 'Maintenance-free',
    icon: 'bullseye',
    text: 'Your donations go directly to the packages you use'
  }
]

const Card = ({ icon, text, heading }) => (
  <ListItem
    className='u-box-shadow'
    backgroundColor='white'
    padding='1.25rem 2rem'
    borderLeftWidth='0.25rem'
    borderColor='lake'
    fontWeight='500'
    fontSize='0.875rem'
    lineHeight='1.3'
  >
    <UnderlinedHeading
      as='h3'
      marginBottom='0.5rem'
      text={heading}
      align='left'
      lineGap='1'
      lineColor='ocean'
      textTransform='none'
      fontWeight='600'
    >
      <Icon name={icon} size='1.25rem' margin='.3rem .5rem .3rem 0' />
    </UnderlinedHeading>
    <p>{text}</p>
  </ListItem>
)

const WhatIsFBCards = () => (
  <List
    display='grid'
    gridGap='1.625rem'
    gridTemplateColumns={{
      base: 'minmax(12rem, 17rem)',
      sm: 'repeat(2, minmax(12rem, 20rem))'
    }}
    justifyContent='center'
    maxW='75rem'
    width='100%'
    marginBottom='3rem'
  >
    {cardData.map((card, i) => (
      <Card key={i} icon={card.icon} text={card.text} heading={card.heading} />
    ))}
  </List>
)

export default WhatIsFBCards
