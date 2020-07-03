import { Flex, Box, Icon, Text } from '@chakra-ui/core'
import UnderlinedHeading from '../../common/underlinedHeading'
import TextLink from '../../common/textLink'

const cardData = [
  {
    icon: 'terminal',
    heading: 'Support maintainers at no cost',
    text:
      'Opt into curated, tech-focused ads in your terminal when you install open source packages'
  },
  {
    icon: 'calendar',
    heading: 'Or set a monthly donation',
    text:
      'Donate monthly to the developers and maintainers of the open source packages you install'
  }
]

const Card = ({ icon, heading, text, showHowItWorksLink }) => (
  <Flex
    className='u-box-shadow'
    backgroundColor='lightRock'
    direction={{ base: 'column', md: 'row' }}
    align='center'
    padding='2.875rem'
    marginBottom='3rem'
    maxW='32rem'
  >
    <Icon
      name={icon}
      size='3.5rem'
      marginBottom={{ base: '1.5rem', md: 0 }}
      marginRight={{ base: 0, md: '3rem' }}
    />
    <Box>
      <UnderlinedHeading
        as='h3'
        text={heading}
        align='left'
        lineGap='1'
        lineColor='ocean'
      />
      <Text>{text}</Text>
      {showHowItWorksLink && (
        <TextLink text='How does that work, exactly?' href='/how-it-works' />
      )}
    </Box>
  </Flex>
)

const ForDevelopersCards = (props) => (
  <Flex
    justify={{ base: 'space-between' }}
    align={{ base: 'center' }}
    direction={{ base: 'column', lg: 'column' }}
    {...props}
  >
    {cardData.map((card, i) => (
      <Card key={i} icon={card.icon} heading={card.heading} text={card.text} showHowItWorksLink={i === 0} />
    ))}
  </Flex>
)

export default ForDevelopersCards
