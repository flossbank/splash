import { Box, Flex, Text, Icon, Heading } from '@chakra-ui/core'

import PeopleCollabing from '../../public/images/splash/splash_people_collabing.svg'
import FBDivider from '../common/divider'
import useMedia from '../common/useMedia'
import FBButton from '../common/fbButton'

const WhatIsFlossbankCard = (props) => {
  return (
    <Flex
      backgroundColor='white'
      padding='20px 30px 20px 30px'
      marginRight='10px'
      flexDirection='column'
      justify='space-around'
      width={['auto', '250px']}
      height='120px'
      borderLeft='solid'
      borderColor='lake'
    >
      <Icon name={props.iconName} size='24px' />
      <Text fontSize='12px' fontWeight='bold'>
        {props.children}
      </Text>
    </Flex>
  )
}

const SplashWhatIsFlossbank = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <Flex
      flexDirection='row'
      justifyContent='space-around'
      backgroundColor='lightRock'
      padding='50px'
      // minH='90vh' I don't think we need this; on tall screens there is not enough content and it's WAY too tall, and on mobile and laptop, the content is always enough to make it tall enough
    >
      {isWide && (
        <Box width='40%' marginTop='80px'>
          <PeopleCollabing />
        </Box>
      )}
      <Flex flexDirection='column' width={['100%', '40%']}>
        <Text
          fontSize='14px'
          fontWeight='bold'
          marginBottom='10px'
          textTransform='uppercase'
        >
          What is flossbank
        </Text>
        <FBDivider />
        <Heading marginTop='20px' marginBottom='20px' fontSize='24px'>
          The best way to support open source
        </Heading>
        <Text fontSize='16px'>
          We use ad revenue and monthly donations to support all the maintainers
          of the packages you install.
        </Text>
        <Flex flexDirection='column' marginTop='35px'>
          <Flex flexDirection={['column', 'row']} marginBottom='30px'>
            <WhatIsFlossbankCard iconName='heart'>
              Our no-cost option means everyone can support open source
              maintainers
            </WhatIsFlossbankCard>
            <WhatIsFlossbankCard iconName='stack'>
              We give across the entire dependency tree, supporting maintainers
              big and small
            </WhatIsFlossbankCard>
          </Flex>
          <Flex flexDirection={['column', 'row']} marginBottom='10px'>
            <WhatIsFlossbankCard iconName='cycle'>
              Flossbank doesn’t change your existing workflow
            </WhatIsFlossbankCard>
            <WhatIsFlossbankCard iconName='bullseye'>
              Your donations go directly to the packages you use
            </WhatIsFlossbankCard>
          </Flex>
        </Flex>
        <Flex flexDirection='row' marginTop='20px'>
          <FBButton
            as='a'
            href='/signup'
            className='u-box-shadow'
            padding='.75rem'
            minW='10rem'
          >
            Sign Up
          </FBButton>
          <FBButton
            as='a'
            href='/aboutus'
            className='u-box-shadow'
            padding='.75rem'
            minW='10rem'
            backgroundColor='puddle'
            color='ocean'
            margin='0 0 0 1.5rem'
          >
            About Us
          </FBButton>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SplashWhatIsFlossbank
