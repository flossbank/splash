import { List, ListItem, Icon } from '@chakra-ui/core'

const cardData = [
  {
    icon: 'heart',
    text:
      'Our no-cost option means everyone can support open source maintainers'
  },
  {
    icon: 'stack',
    text:
      'We give across the entire dependency tree, supporting maintainers big and small'
  },
  {
    icon: 'cycle',
    text: 'Flossbank doesn’t change your existing workflow'
  },

  {
    icon: 'bullseye',
    text: 'Your donations go directly to the packages you use'
  }
]

const Card = ({ icon, text }) => (
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
    <Icon name={icon} size='1.25rem' marginBottom='0.6rem' />
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
      <Card key={i} icon={card.icon} text={card.text} />
    ))}
  </List>
)

export default WhatIsFBCards
