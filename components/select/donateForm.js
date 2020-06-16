import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Box, NumberInput, NumberInputField } from '@chakra-ui/core'
import { useState } from 'react'

import { donate } from '../../client'
import ErrorMessage from '../common/errorMessage'
import FBButton from '../common/fbButton'

import styles from './donateForm.module.scss'

const DonateForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [amount, setAmount] = useState(5)
  const [cardError, setCardError] = useState('')
  const [amountError, setAmountError] = useState('')

  const handleAmount = (e) => {
    const amount = Number(e.target.value)

    if (amount < 5) {
      setAmountError('Donation must be at least $5')
      return
    }

    setAmountError('')
    setAmount(amount)
  }

  const handleCardChange = (e) => {
    const cardElError = e.error && e.error.message

    // if the user submitted the form and there is a form error, clear it when they change the number to try to fix it
    if (error) {
      setError('')
      return
    }

    setCardError(cardElError || '')
  }

  const donateAttempt = async (ev) => {
    ev.preventDefault()

    // prevent quick button flash from isLoading event when there is a known error with the card
    if (cardError) {
      return
    }

    setLoading(true)

    let token

    try {
      const cardElement = elements.getElement(CardElement)
      const res = await stripe.createToken(cardElement)
      token = res.token
    } catch (e) {
      setError(e.message)
      setLoading(false)
      return
    }

    if (!token) {
      setLoading(false)
      setError('Invalid credit card information')
      return
    }

    try {
      const response = await donate({
        billingToken: token.id,
        amount: amount * 100,
        last4: token.card.last4,
        seeAds: props.seeAds
      })

      if (!response.ok) {
        setError('Donation failed')
      }
      setLoading(false)
      props.handleSuccess()
    } catch (e) {
      switch (e.status) {
        case 409:
          setError('Donation already exists')
          setTimeout(() => {
            props.handleSuccess()
          }, 1000)
          break
        default:
          setError('Donation failed')
      }
      setLoading(false)
    }
  }

  return (
    <Box as='form' onSubmit={donateAttempt} maxW='50rem' margin='0 auto'>
      <Box marginBottom='3rem' marginTop='3rem' display={{ md: 'flex' }}>
        <Box
          as='label'
          textAlign='left'
          display='block'
          color='boulder'
          marginBottom={{ base: '1.5rem', md: 0 }}
        >
          Monthly Contribution (<strong>USD</strong>)
          <Box display='flex' alignItems='center' marginTop='.5rem'>
            <Box as='span' aria-hidden='true' padding='.5rem' fontWeight='bold'>
              $
            </Box>
            <NumberInput
              defaultValue={5}
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
                onChange={handleAmount}
              />
            </NumberInput>
          </Box>
          {amountError && <ErrorMessage msg={amountError} marginTop='1rem' />}
        </Box>
        <Box
          as='label'
          textAlign='left'
          display='block'
          color='boulder'
          flex='1'
          marginLeft={{ md: '3rem' }}
        >
          Payment Information
          <CardElement
            className={styles.donateInput}
            options={{
              style: {
                base: {
                  fontSize: '1rem',
                  fontFamily: '"Helvetica Neue", sans-serif',
                  color: '#404042'
                }
              }
            }}
            onChange={handleCardChange}
          />
          {(cardError || error) && (
            <ErrorMessage msg={cardError || error} marginTop='.5rem' />
          )}
        </Box>
      </Box>
      <FBButton
        type='submit'
        isLoading={loading}
        loadingText='Submitting payment information'
        fontWeight='bold'
        className='u-box-shadow'
      >
        Save and continue
      </FBButton>
    </Box>
  )
}

export default DonateForm
