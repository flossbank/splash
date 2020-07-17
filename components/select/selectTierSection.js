import {
  Box,
  Text,
  Modal,
  Image,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure
} from '@chakra-ui/core'
import { useState } from 'react'

import Section from '../common/section'
import UnderlinedHeading from '../common/underlinedHeading'
import Subheading from '../common/subheading'
import StepperSection from '../common/stepperSection'
import TextLink from '../common/textLink'
import SelectTierCards from './selectTierCards'
import DonateSection from './donateSection'

const steps = [
  {
    iconName: 'stepperComplete',
    title: 'Verify'
  },
  {
    iconName: 'stepperInProgress',
    title: 'Select'
  },
  {
    iconName: 'stepperNotStarted',
    title: 'Install'
  }
]

const SelectTierSection = () => {
  const [showDonateForm, setShowDonateForm] = useState(false)
  const [seeAds, setSeeAds] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOnSelected = ({ withDonation, seeAds }) => {
    if (!withDonation) return
    if (seeAds) setSeeAds(true)
    setShowDonateForm(true)
  }

  return (
    <>
      <Section
        backgroundColor='white'
        display='flex'
        alignItems='center'
        justifyContent='center'
        flex='1'
        flexDirection='column'
        padding='0'
      >
        <Box width='100%'>
          <h1 className='sr-only'>Select your level of support</h1>
          <StepperSection steps={steps} currentStep={2} />}
          <UnderlinedHeading marginBottom='0' text='Select' align='center' />
          <Box
            textAlign={{ base: 'center' }}
            maxW='50rem'
            margin='0 auto 1.5rem'
            padding='1.5rem'
          >
            <Subheading align='center'>Choose your level of support</Subheading>
            <Text marginBottom='1rem'>
              Flossbank introduces an <strong>accessible for all</strong>, free way to contribute back
              to Open Source. That means no maintenance, no cost, no selling your
              data. All you see is <TextLink href='#' text='curated tech-based advertisements' onClick={onOpen} />
              {' '} in your terminal during installation of Open Source packages.
            </Text>
            <Text>
              Alternatively, we encourage and welcome selecting our{' '}
              monthly donor tier for an optional ad-free
              experience.
            </Text>
          </Box>
          <SelectTierCards onSelected={handleOnSelected} onModalOpen={onOpen} />
          {showDonateForm && <DonateSection seeAds={seeAds} />}
        </Box>
      </Section>
      <Modal isOpen={isOpen} onClose={onClose} size='80%'>
        <ModalOverlay />
        <ModalContent backgroundColor='white'>
          <ModalHeader>Flossbank Ad Demo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image margin='auto' src='/images/flossbank_ads_demo.gif' />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SelectTierSection
