import {
  Box,
  Flex,
  Text,
  Heading,
  Icon
} from '@chakra-ui/core'

import FBDivider from '../common/divider'
import LinkBtn from '../common/linkBtn'

const SelectTierCards = (props) => {
  const fill = (content) => {
    return content.recommended ? '#D7E6F6' : 'none'
  }

  const cardsContent = [{
    title: 'See Ads',
    subtitle: 'I occasionally use open source',
    donation: false,
    recommended: true,
    about: 'During installation of open source packages, see curated tech advertisements',
    attributes: [{
      iconName: 'close',
      title: 'Ad-free'
    },
    {
      iconName: 'close',
      title: 'Set contribution amount'
    }, {
      iconName: 'check',
      title: 'Support entire dependency tree'
    }]
  },
  {
    title: 'Donate',
    subtitle: 'I use open source a decent amount',
    donation: true,
    recommended: false,
    about: 'Make a monthly donation that reflects your usage',
    attributes: [{
      iconName: 'check',
      title: 'Ad-free'
    },
    {
      iconName: 'check',
      title: 'Set contribution amount'
    }, {
      iconName: 'check',
      title: 'Support entire dependency tree'
    }]
  },
  {
    title: 'Donate + see ads',
    subtitle: 'I use OSS in everything I build',
    donation: true,
    recommended: false,
    about: 'Make a monthly donation AND see curated tech advertisements during installation of OSS packages',
    attributes: [{
      iconName: 'close',
      title: 'Ad-free'
    },
    {
      iconName: 'check',
      title: 'Set contribution amount'
    }, {
      iconName: 'check',
      title: 'Support entire dependency tree'
    }]
  }]

  return (
    <>
      {cardsContent.map((content, i) => (
        <Box
          boxShadow='2px 2px 2px 2px rgba(68, 68, 68, 0.1)'
          width={['100%', '33%']}
          key={i}
          margin={['auto', '2rem']}
          marginBottom={['1rem']}
          border='1px solid'
          borderColor='puddle'
          backgroundColor={fill(content)}
        >
          {content.recommended &&
            <Text color='ocean' textAlign='center' height='1.5rem'>
              Recommended
            </Text>}
          <Flex
            flexDirection='column'
            padding='2rem'
            backgroundColor='white'
            justify='space-between'
            height={content.recommended ? '95%' : '100%'}
          >
            <Box height='4rem' marginTop={content.recommended ? '0' : '1.5rem'}>
              <Heading
                textTransform='uppercase'
                fontWeight='bold'
                fontSize='14px'
                marginBottom='1rem'
              >{content.title}
              </Heading>
              <FBDivider float='left' />
            </Box>
            <Text fontSize='24px' marginTop='1rem'>{content.subtitle}</Text>
            <Text marginTop='1rem' marginBottom='1rem'>
              {content.about}
            </Text>
            <Box height='4rem'>
              <LinkBtn
                color='white'
                backgroundColor='ocean'
                marginBottom='1rem'
                _hover={{ marginTop: '3px' }}
                href={content.donation ? '#donate-form' : '/install'}
                onClick={() => props.onSelected(content.donation)}
              >
                Select
              </LinkBtn>
            </Box>
            <Box>
              {content.attributes.map((attr, i) => (
                <Flex flexDirection='row' color='ocean' key={i + 100} margin='0 0 .5rem 0'>
                  <Icon name={attr.iconName} margin={['auto 1rem auto 0rem']} />
                  <Text textTransform='uppercase' fontWeight='bold' fontSize='14px'>{attr.title}</Text>
                </Flex>
              ))}
            </Box>
          </Flex>
        </Box>
      ))}
    </>
  )
}

export default SelectTierCards
