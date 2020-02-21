import { useRouter } from 'next/router'
import styles from '../public/styles/splashheader.module.scss'
import Logo from '../public/images/FlossbankLogo.svg'

import * as bodyStyles from '../public/styles/contact.module.scss'
import '../public/styles/main.scss'

function Contact () {
  const router = useRouter()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo className={styles.logo} onClick={() => router.push('/splash')} />
        </div>
      </div>
      <div className={bodyStyles.wrapper}>
        <div className={bodyStyles.contents}>
          <div className={bodyStyles.center}>
            <h2>Contact us</h2>
            <p>
              Flossbank helps compensate open source maintainers, authors, and content
              creators by connecting advertisers with developers.
            </p>
            <p>
              Let us know how we can assist you in any way at Support @ Flossbank . Com
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact