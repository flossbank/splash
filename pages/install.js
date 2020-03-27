import { useRouter } from 'next/router'
import FBHead from '../components/head'
import styles from '../public/styles/splashheader.module.scss'
import Logo from '../public/images/FlossbankLogo.svg'

import * as bodyStyles from '../public/styles/install.module.scss'
import '../public/styles/main.scss'

function HowItWorks () {
  const router = useRouter()

  return (
    <>
      <FBHead />
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo className={styles.logo} onClick={() => router.push('/')} />
        </div>
      </div>
      <div className={bodyStyles.wrapper}>
        <div className={bodyStyles.contents}>
          <div className={bodyStyles.center}>
            <h2>Install Flossbank</h2>
            <p>`<b>npm install -g flossbank</b>`</p><br/>
            <p>Visit <a href='https://www.npmjs.com/package/@flossbank/cli'>https://www.npmjs.com/package/@flossbank/cli</a> for more info</p>
            <p>You'll then be prompted to auth so we can verify you're a human. <br/>Verification just consists of your email address.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
