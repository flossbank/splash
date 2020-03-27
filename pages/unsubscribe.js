import { useEffect } from 'react'
import { useRouter } from 'next/router'
import FBHead from '../components/head'
import styles from '../public/styles/splashheader.module.scss'
import FBLogo from '../components/logo'
import * as api from '../client/index'

import * as bodyStyles from '../public/styles/contact.module.scss'

function UnSubscribe() {
  const router = useRouter()

  useEffect(() => {
    (async () => {
      if (!router.query.email) return
      await api.unsubscribe({ email: router.query.email })
    })()
  }, [])

  const subscribe = () => {
    const email = router.query.email
    api.subscribe({ email })
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
            <h2>Sad to see you go 😢</h2>
            <p>
              If you unsubscribed by mistake, please click <a onClick={subscribe}>here</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UnSubscribe

