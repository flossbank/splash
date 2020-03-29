import SubscribeInput from './subscribeInput'
import useMedia from './useMedia'
import styles from '../public/styles/footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const isWide = useMedia('(min-width: 970px')

  return (
    <div className={styles.wrapper}>
      <section className={styles.footer}>
        <div className={styles.left}>
          <ul className={styles.menu}>
            <li><a href='/how-it-works'>How It Works</a></li>
            <li><a href='/contact'>Contact Us</a></li>
          </ul>
          <ul className={styles.menu}>
            <li><a href='https://maintainer.flossbank.com'>Maintainer Portal</a></li>
            <li><a href='https://advertiser.flossbank.com'>Advertiser Portal</a></li>
            <li><a href='https://user.flossbank.com'>User Portal</a></li>
          </ul>
        </div>
        {isWide && (
          <div className={styles.right}>
            <p>Request an invite for early access</p>
            <SubscribeInput />
          </div>
        )}

        <div className={styles.copyright}>
          &copy; {currentYear} Flossbank. All Rights Reservered.
        </div>
      </section>
    </div>
  )
}

export default Footer
