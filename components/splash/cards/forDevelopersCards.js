import { Flex, Box, Text } from '@chakra-ui/react'
import UnderlinedHeading from '../../common/underlinedHeading'
import TextLink from '../../common/textLink'
import IconWrapper from '../../common/iconWrapper'

const cardData = [
  {
    showHowItWorksLink: true,
    icon: 'terminal',
    heading: 'Support maintainers at no cost',
    text:
      'Opt in to curated, tech-focused ads in your terminal when you install Open Source packages. '
  },
  {
    showHowItWorksLink: false,
    icon: 'calendar',
    heading: 'Or set a monthly donation',
    text:
      'Donate monthly to the developers and maintainers of the Open Source packages you install. '
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
    <IconWrapper
      icon={icon}
      boxSize='3.5rem'
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
      <Text>
        {text}
        {showHowItWorksLink && (
          <TextLink text="Here's how it works." href='/how-it-works' />
        )}
      </Text>
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
      <Card
        key={i}
        icon={card.icon}
        heading={card.heading}
        text={card.text}
        showHowItWorksLink={card.showHowItWorksLink}
      />
    ))}
  </Flex>
)

export default ForDevelopersCards
