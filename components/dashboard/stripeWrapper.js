import { Elements, ElementsConsumer } from '@stripe/react-stripe-js'

import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

const StripeWrapper = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      <ElementsConsumer>{children}</ElementsConsumer>
    </Elements>
  )
}

export default StripeWrapper
