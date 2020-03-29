import { useState } from 'react'
import * as api from '../client/index'
import styles from '../public/styles/subscribeinput.module.scss'

const onSubscribe = async (email, setEmail, setError, setSubscribed) => {
  // Make API call to subscribe
  const reqBody = { email }
  try {
    const response = await api.betaSubscribe(reqBody)
    console.log('wtf respnose', response)

    // If error, prompt to try again
    if (!response.success) {
      setSubscribed(true)
      return setError(response.message)
    }

    // Reset form and notify user of success
    setEmail('')
    setSubscribed(true)
  } catch (e) {
    setError('Sorry, we\'ve encountered a problem')
    console.error(e)
  }
}

const SubscribeInput = props => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = e => {
    e.preventDefault()

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setError('Please enter a valid email address')
    }
    if (!email) setError('Email is required')

    onSubscribe(email, setEmail, setError, setSubscribed)
  }

  return (
    <div>
      {error && <p>{error}</p>}
      {!subscribed &&
        <div className={styles.wrapper}>
          <input
            aria-label='Email'
            type='email'
            required
            placeholder='Email Address'
            className={styles.input}
            onChange={e => {
              setEmail(e.target.value)
            }}
          />
          <button className={styles.button} onClick={handleSubscribe}>
          Request invite
          </button>
        </div>}
      {subscribed && <p>You're on our list!</p>}
    </div>
  )
}

SubscribeInput.propTypes = {}

export default SubscribeInput
