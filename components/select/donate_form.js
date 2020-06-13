import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Box, Alert, AlertIcon } from '@chakra-ui/core'
import { useState } from 'react'

import { donate } from '../../client'
import FBButton from '../common/fbButton'
import FBTextInput from '../common/fbTextInput'

const DonateForm = (props) => {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [amount, setAmount] = useState('$10')

  const donateAttempt = async (ev) => {
    ev.preventDefault()
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
      setError('Invalid CC info!')
      return
    }
    try {
      const stripDollarSignAmount = parseInt(amount.replace('$', ''))
      const response = await donate({
        billingToken: token.id,
        amount: stripDollarSignAmount * 100,
        last4: token.card.last4,
        seeAds: props.seeAds,
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

  const updateAmount = (e) => {
    setAmount(`${e.target.value.includes('$') ? '' : '$'}${e.target.value}`)
  }

  return (
    <Box as='form' onSubmit={donateAttempt}>
      {error && (
        <Alert status='error'>
          <AlertIcon />
          {error}
        </Alert>
      )}
      <Box>
        <FBTextInput onChange={updateAmount} placeholder='$ amount' value={amount} />
        <CardElement />
      </Box>
      <FBButton
        backgroundColor='ocean'
        color='white'
        type='submit'
        isLoading={loading}
      >
          Save and continue
      </FBButton>
    </Box>
  )
}

export default DonateForm
