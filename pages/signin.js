import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faCrown, faSmile } from '@fortawesome/free-solid-svg-icons'

import styles from '../public/styles/splashheader.module.scss'
import Logo from '../public/images/FlossbankLogo.svg'
import * as bodyStyles from '../public/styles/signin.module.scss'
import '../public/styles/main.scss'

function Signin () {
  const router = useRouter()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo className={styles.logo} onClick={() => router.push('/splash')} />
        </div>
      </div>
      <div className={bodyStyles.wrapper}>
        <h1>Sign in</h1>
        <div className={bodyStyles.contents}>
          <div className={bodyStyles.card}>
            <FontAwesomeIcon icon={faCoins} />
            <h2>I'm an advertiser</h2>
            <button><a href='https://advertiser.flossbank.com/signin'>Advertiser Sign In</a></button>
          </div>
          <div className={bodyStyles.card}>
            <FontAwesomeIcon icon={faCrown} />
            <h2>I'm a maintainer</h2>
            <button><a href='https://maintainer.flossbank.com/signin'>Maintainer Sign In</a></button>
          </div>
          <div className={bodyStyles.card}>
            <FontAwesomeIcon icon={faSmile} />
            <h2>I'm a donor</h2>
            <button><a href='https://donor.flossbank.com/signin'>Donor Sign In</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin