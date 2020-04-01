import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { decode } from 'b36'
import FBHead from '../../components/head'
import styles from '../../public/styles/splashheader.module.scss'
import FBLogo from '../../components/logo'
import * as api from '../../client/index'

import * as bodyStyles from '../../public/styles/contact.module.scss'

function UnSubscribe() {
  const router = useRouter()
  const [resubscribed, setResubscribed] = useState(false)

  useEffect(() => {
    (async () => {
      if (!router.query.token) return
      await api.betaUnsubscribe({ token: router.query.token })
    })()
  }, [])

  const betaSubscribe = async () => {
    const email = router.query.e
    if (!email) return 
    await api.betaSubscribe({ email: decode(email).toString() })
    setResubscribed(true)
  }

  return (
    <>
      <FBHead />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <FBLogo />
        </div>
      </div>
      <div className={bodyStyles.wrapper}>
        <div className={bodyStyles.contents}>
          <div className={bodyStyles.center}>
          {!resubscribed && <div>
              <h2>Sad to see you go 😢</h2>
              <p>
                If you unsubscribed by mistake, please click <a onClick={betaSubscribe}>here</a>
              </p>
            </div>}
          {resubscribed && <div>
              <h2>Nice</h2>
              <p>You're back on our list!</p>
            </div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default UnSubscribe

