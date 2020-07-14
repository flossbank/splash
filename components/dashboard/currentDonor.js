import { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import { updateDonation, donate } from '../../client'

import {
  Box,
  Icon,
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  ModalFooter,
  ModalBody,
  RadioButtonGroup
} from '@chakra-ui/core'

import AdsRadio from './adsRadio'
import BillingForm from './billingForm'
import RemoveDonation from './removeDonation'

import FBButton from '../../components/common/fbButton'
import ErrorMessage from '../common/errorMessage'

import styles from '../select/donateForm.module.scss'

const CurrentDonor = ({ donationAmount, isNewDonor, onClose }) => {
  const [submitError, setSubmitError] = useState('')
  const [submitLoading, setSubmitLoading] = useState(false)
  const [amountError, setAmountError] = useState('')
  const [showAds, setShowAds] = useState(donationAmount < 5)
  const [newAmount, setNewAmount] = useState(donationAmount)
  const [donorStatus, setDonorStatus] = useState(true); // eslint-disable-line
  const [updatingDonorStatus, setUpdatingDonorStatus] = useState(false)

  const stripe = useStripe()
  const elements = useElements()
  const [cardError, setCardError] = useState('')

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
  }

  const handleDonorStatus = (status) => {
    setDonorStatus(status)
    setUpdatingDonorStatus(false)
  }

  const donateAttempt = async (ev) => {
    // prevent quick button flash from isLoading event when there is a known error with the card
    if (cardError) {
      return
    }

    let token

    try {
      const cardElement = elements.getElement(CardElement)
      const res = await stripe.createToken(cardElement)
      token = res.token
    } catch (e) {
      setSubmitError(e.message)
      return
    }

    if (!token) {
      setCardError('Invalid credit card information')
      return
    }

    try {
      const response = await donate({
        billingToken: token.id,
        amount: donationAmount * 100,
        last4: token.card.last4,
        seeAds: showAds
      })
      if (!response.success) {
        setSubmitError('Donation failed')
        return
      }
    } catch (e) {
      switch (e.status) {
        case 409:
          setSubmitError('Donation already exists')
          setTimeout(() => {
            // Handle success
          }, 1000)
          break
        default:
          setSubmitError('Donation failed')
      }
    }
  }

  const handleSaveChanges = async () => {
    setSubmitLoading(true)
    try {
      await updateDonation({
        amount: newAmount,
        seeAds: showAds
      })
      // handle billing info for new donors
      if (isNewDonor) {
        donateAttempt()
      }
      onClose()
    } catch (e) {
      setSubmitError(e.message || 'An error occurred updating your donation')
    } finally {
      setSubmitLoading(false)
    }
  }

  return (
    <Box>
      {updatingDonorStatus && (
        <RemoveDonation
          updateDonorStatus={handleDonorStatus}
          onClose={onClose}
        />
      )}
      {donorStatus && !updatingDonorStatus && (
        <>
          <ModalBody marginBottom='1.5rem'>
            {!isNewDonor && (
              <>
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
              </>
            )}
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
                  maxWidth='6rem'
                  border='1px solid'
                  borderRadius='5px'
                  backgroundColor='white'
                >
                  <Box
                    as='span'
                    aria-hidden='true'
                    padding='.5rem'
                    fontWeight='bold'
                    backgroundColor='lightRock'
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
                      maxW='8ch'
                      padding='.5rem'
                      onChange={handleNewAmount}
                      border='1px solid transparent !important'
                    />
                  </NumberInput>
                </Box>
                {amountError && (
                  <ErrorMessage msg={amountError} marginTop='1rem' />
                )}
              </Box>
              {isNewDonor && <BillingForm />}
              {!isNewDonor && (
                <Box marginBottom='1.5rem'>
                  <FBButton
                    onClick={() => setUpdatingDonorStatus(true)}
                    backgroundColor='white'
                    color='#b9423a'
                    fontWeight='600'
                    padding='.5rem .5rem .5rem 0'
                  >
                    <Box as='span' display='flex' alignItems='center'>
                      <Icon name='delete' fontSize='1rem' marginRight='1rem' />
                      Delete my donation
                    </Box>
                  </FBButton>
                </Box>
              )}
              <Box as='fieldset' fontWeight='500' htmlFor='ad-opts'>
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
          {submitError && <ErrorMessage msg={submitError} marginTop='1rem' />}
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
              isLoading={submitLoading}
              loadingText='Saving changes…'
              className='u-box-shadow'
              fontWeight='600'
            >
              <Box as='span' display='flex' alignItems='center'>
                <Icon name='check' fontSize='1rem' marginRight='1rem' />
                Save changes
              </Box>
            </FBButton>
          </ModalFooter>
        </>
      )}
    </Box>
  )
}

export default CurrentDonor
