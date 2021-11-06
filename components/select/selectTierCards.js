import {
  Flex,
  Text,
  List,
  ListItem
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

import Card from '../common/card'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'

import LinkBtn from '../common/linkBtn'
import TextLink from '../common/textLink'
import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import React from 'react'

const cardsContent = [
  {
    title: 'See Ads In Your Terminal',
    subtitle: 'A free way to support to Open Source',
    donation: false,
    linkToModal: true,
    ads: true,
    recommended: true,
    description:
      'During installation of Open Source packages, see curated tech advertisements. ',
    features: [
      {
        icon: CheckIcon,
        title: 'Support entire dependency tree'
      },
      {
        icon: CloseIcon,
        iconAlt: 'not',
        title: 'Ad-free'
      },
      {
        icon: CloseIcon,
        iconAlt: 'cannot',
        title: 'Set contribution amount'
      }
    ]
  },
  {
    title: 'Contribute Monthly',
    subtitle: 'Donate directly to Open Source',
    donation: true,
    linkToModal: false,
    ads: false,
    recommkended: false,
    description:
      'Skip terminal ads and give a monthly contribution to the packages you download and depend on.',
    features: [
      {
        icon: CheckIcon,
        title: 'Support entire dependency tree'
      },
      {
        icon: CheckIcon,
        title: 'Ad-free'
      },
      {
        icon: CheckIcon,
        title: 'Set contribution amount'
      }
    ]
  }
]

const TierCard = ({ onSelected, tier, onModalOpen }) => (
  <Card as='li' shadowSz='lg' position='relative'>
    {tier.recommended && (
      <Text
        backgroundColor='puddle'
        color='ocean'
        textAlign='center'
        fontWeight='400'
        padding='.25rem'
        textTransform='uppercase'
        position='absolute'
        left='0'
        top='0'
        width='100%'
        letterSpacing='2px'
        fontSize='.85rem'
      >
        Recommended
      </Text>
    )}
    <Flex direction='column' justify='space-between' align='flex-start'>
      <UnderlinedHeading text={tier.title} align='left' marginTop='1.5rem' />
      <Subheading>{tier.subtitle}</Subheading>
      <Text marginBottom='2rem'>
        {tier.description}
        {tier.linkToModal && (
          <TextLink href='#' text="Here's what that looks like." onClick={onModalOpen} />
        )}
      </Text>
      <LinkBtn
        color='white'
        backgroundColor='ocean'
        margin='0 0 3rem'
        className='u-box-shadow'
        href={tier.donation ? '#donate-form' : '/install'}
        onClick={() =>
          onSelected({
            withDonation: tier.donation,
            seeAds: tier.ads
          })}
      >
        Select
      </LinkBtn>
      <List>
        {tier.features.map((feature, i) => (
          <ListItem
            key={i}
            color={feature.iconAlt ? 'rock' : 'ocean'}
            marginBottom='1rem'
            fontWeight='500'
            display='flex'
            alignItems='center'
          >
            {React.createElement(feature.icon, { marginRight: '1rem', width: '0.85rem' })}
            {feature.iconAlt && (
              <span className='sr-only'>{feature.iconAlt}</span>
            )}
            {feature.title}
          </ListItem>
        ))}
      </List>
    </Flex>
  </Card>
)

TierCard.propTypes = {
  onModalOpen: PropTypes.func
}

const SelectTierCards = ({ onSelected, onModalOpen }) => (
  <List
    width='100%'
    maxW='75rem'
    margin='0 auto'
    display='grid'
    gridTemplateColumns='repeat(auto-fit, minmax(20rem, 1fr))'
    gridGap='3rem'
    padding='2rem 2rem 6rem'
  >
    {cardsContent.map((card, i) => (
      <TierCard key={i} tier={card} onSelected={onSelected} onModalOpen={onModalOpen} />
    ))}
  </List>
)

SelectTierCards.propTypes = {
  onModalOpen: PropTypes.func
}

export default SelectTierCards
