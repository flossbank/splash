import { useRouter } from 'next/router'
import styles from '../public/styles/splashheader.module.scss'
import Logo from '../public/images/FlossbankLogo.svg'

import * as bodyStyles from '../public/styles/howItWorks.module.scss'
import '../public/styles/main.scss'

function HowItWorks () {
  const router = useRouter()

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <Logo className={styles.logo} onClick={() => router.push('/')} />
        </div>
      </div>
      <div className={bodyStyles.wrapper}>
        <div className={bodyStyles.contents}>
          <div className={bodyStyles.center}>
            <h2>How Flossbank works</h2>
            <p>
              Flossbank is built upon the belief that open source development leads to technological advancement and is <b>fundamentally good for the world</b>. Open source development has historically been limited to those who are financially comfortable enough to devote free labor. To that end, Flossbank funds open source developers, maintainers, and content creators through various revenue streams enabling countless additional developers to contribute.
            </p>
            <p>
              If you aren't aware of how prolific open source is or how large the compensation problem has become, reference the following: 
            </p>
            <p><a href='https://staltz.com/software-below-the-poverty-line.html'>
                  https://staltz.com/software-below-the-poverty-line.html
                </a></p>
            <p>
              Flossbank introduces opt-in advertising within terminal as an exterior revenue source. These advertisements will only show during package installation within developer's terminals. This is a win-win for both the open source community and for advertisers: it <b>compensates open source maintainers without changing any existing developer behavior</b> as well as <b>gives advertisers a direct path into developers' line-of-sight</b>. 
            </p>
            <p>
              The <a href='/install'>Flossbank command line tool</a> wraps existing package managers and takes a dependency snapshot of the packages being installed, enabling us to fairly compensate only the relevant authors and maintainers. Compensation is then directly connected to actual use of the packages, and all the dependencies in the tree are given their fair share (not just the popular ones).
            </p>
            <p>
              To support open source without the ads, you can install the Flossbank command line tool and disable ads with a monthly donation.
            </p>
            <p>Questions or feedback? Email us at <b>support @ flossbank . com</b></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowItWorks
