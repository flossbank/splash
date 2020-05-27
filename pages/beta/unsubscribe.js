import { useEffect, useState } from 'react'
import { decode } from 'b36'
import FBHead from '../../components/common/head'
import FBLogo from '../../components/common/logo'
import * as api from '../../client/index'

function UnSubscribe (props) {
  const [resubscribed, setResubscribed] = useState(false)

  useEffect(() => {
    (async () => {
      if (!props.token) return
      await api.betaUnsubscribe({ token: props.token })
    })()
  }, [])

  const betaSubscribe = async () => {
    const email = props.email
    if (!email) return
    await api.betaSubscribe({ email: decode(email).toString() })
    setResubscribed(true)
  }

  return (
    <>
      <FBHead />
      <div>
        <div>
          <FBLogo />
        </div>
      </div>
      <div>
        <div>
          <div>
            {!resubscribed && (
              <div>
                <h2>Sad to see you go 😢</h2>
                <p>
                If you unsubscribed by mistake, please click <a onClick={betaSubscribe}>here</a>
                </p>
              </div>
            )}
            {resubscribed && (
              <div>
                <h2>Nice</h2>
                <p>You're back on our list!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

UnSubscribe.getInitialProps = async (ctx) => {
  return { token: ctx.query.token, email: ctx.query.e }
}

export default UnSubscribe
