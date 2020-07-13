import { useState, useRef } from 'react'

import {
  Box,
  Flex,
  IconButton,
  Icon,
  Heading,
  Text,
  CircularProgress,
  NumberInput,
  NumberInputField,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  RadioButtonGroup
} from '@chakra-ui/core'

import AdsRadio from './adsRadio'
import FBButton from '../../components/common/fbButton'
import DashboardDataCard from '../dashboard/dashboardDataCard'
import UnderlinedHeading from '../common/underlinedHeading'
import ErrorMessage from '../common/errorMessage'

import styles from '../select/donateForm.module.scss'

const DonationCard = ({ donationAmount, donationLoading }) => {
  const [amountError, setAmountError] = useState('')
  const [showAds, setShowAds] = useState(donationAmount < 5)
  const [newAmount, setNewAmount] = useState(""); // eslint-disable-line
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()

  const handleNewAmount = (e) => {
    const amount = Number(e.target.value)

    if (amount < 5) {
      setAmountError('Donation must be at least $5')
      return
    }

    setAmountError('')
    setNewAmount(amount)
  }

  const handleAdView = (val) => {
    const showAds = val === 'view'
    setShowAds(showAds)
    // TODO: update user add view preferences
  }

  const handleSaveChanges = () => {
    // all of the logic to update donation amount, view/hide ads, and if the user is a donor or on the free tier
    // newAmount (#) and showAds (bool) can be used to update user preferences

    // needed to close modal and refocus edit button
    onClose()
  }

  return (
    <>
      <DashboardDataCard backgroundColor='ocean' color='white'>
        {!donationLoading && (
          <Flex align='center' justify='space-between'>
            <Text fontSize='2rem' fontWeight='bold' marginRight='2rem'>
              ${donationAmount}
            </Text>
            <IconButton
              ref={finalRef}
              onClick={onOpen}
              backgroundColor='transparent'
              fontSize='1.5rem'
              _hover={{
                backgroundColor: 'white',
                color: 'ocean'
              }}
              _focus={{
                outlineColor: 'currentColor !important'
              }}
              aria-label='Edit monthly donation'
              icon='edit'
              title='Edit monthly donation'
            />
          </Flex>
        )}
        <UnderlinedHeading
          as='h3'
          id='donation-amt'
          text='Donated Monthly'
          align='left'
          lineColor='white'
          marginBottom='1rem'
        />
        <Text textAlign='left' display='flex' alignItems='center'>
          <Icon name='view-off' marginRight='.75rem' />
          {/* // TODO: get info on if ads are hidden or shown */}
          Ads hidden
        </Text>
        {donationLoading && <CircularProgress isIndeterminate color='ocean' />}
      </DashboardDataCard>
      {/* TODO: move edit modal to its own component */}
      <Modal isOpen={isOpen} size='xl' onClose={onClose}>
        <ModalOverlay backgroundColor='rgba(0, 0, 0, .75)' />
        <ModalContent backgroundColor='white' padding='2rem'>
          <ModalHeader>
            <UnderlinedHeading
              text='Edit your donation'
              align='left'
              marginBottom='0'
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody marginBottom='1.5rem'>
            <Heading
              as='h3'
              fontSize='1rem'
              fontWeight='500'
              marginBottom='.5rem'
              id='current-amt-modal'
            >
              Current monthly donation
            </Heading>
            <Text
              color='ocean'
              letterSpacing='2px'
              fontSize='2rem'
              marginBottom='1.5rem'
            >
              ${donationAmount}
            </Text>
            <Box as='form' onSubmit={handleSaveChanges} margin='0 auto'>
              <Box
                as='label'
                textAlign='left'
                display='block'
                fontWeight='500'
                color='boulder'
                marginBottom='1.5rem'
              >
                Set new donation amount (<em>$5 USD minimum</em>)
                <Box
                  display='flex'
                  alignItems='center'
                  marginTop='.75rem'
                  maxWidth='7rem'
                  border='1px solid'
                  borderRadius='5px'
                  backgroundColor='lightRock'
                >
                  <Box
                    as='span'
                    aria-hidden='true'
                    padding='.5rem'
                    fontWeight='bold'
                  >
                    $
                  </Box>
                  <NumberInput
                    defaultValue={donationAmount}
                    min={5}
                    max={10000}
                    color='boulder'
                    id='amount'
                    padding='0'
                  >
                    <NumberInputField
                      className={styles.donateInput}
                      marginBottom='0'
                      marginTop='0'
                      maxW='10ch'
                      padding='.75rem'
                      onChange={handleNewAmount}
                    />
                  </NumberInput>
                </Box>
                {amountError && (
                  <ErrorMessage msg={amountError} marginTop='1rem' />
                )}
              </Box>
              <Box
                as='fieldset'
                fontWeight='500'
                htmlFor='ad-opts'
                disabled={donationAmount < 5}
              >
                <Box
                  as='legend'
                  display='flex'
                  alignItems='center'
                  fontWeight='500'
                  marginBottom='.75rem'
                >
                  Ads in the terminal{' '}
                  <Icon
                    name={showAds ? 'view' : 'view-off'}
                    marginLeft='.5rem'
                  />
                </Box>
                <RadioButtonGroup
                  id='ad-opts'
                  defaultValue={showAds ? 'view' : 'hide'}
                  onChange={(val) => handleAdView(val)}
                  isInline
                >
                  <AdsRadio value='view' borderRadius='6px 0 0 6px'>
                    View
                  </AdsRadio>
                  <AdsRadio value='hide' borderRadius='0 6px 6px 0'>
                    Hide
                  </AdsRadio>
                </RadioButtonGroup>
              </Box>
            </Box>
          </ModalBody>
          <ModalFooter display='flex' justifyContent='space-evenly'>
            <FBButton
              onClick={onClose}
              className='u-box-shadow'
              backgroundColor='lightRock'
              color='ocean'
              fontWeight='600'
            >
              <Box as='span' display='flex' alignItems='center'>
                <Icon name='close' fontSize='1rem' marginRight='1rem' />
                Cancel
              </Box>
            </FBButton>
            <FBButton
              onClick={handleSaveChanges}
              className='u-box-shadow'
              fontWeight='600'
            >
              <Box as='span' display='flex' alignItems='center'>
                <Icon name='check' fontSize='1rem' marginRight='1rem' />
                Save changes
              </Box>
            </FBButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default DonationCard
