import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faCrown, faSmile } from '@fortawesome/free-solid-svg-icons'

import CustomerPopout from './customerpopout'
import TheCircle from '../public/images/thecircle.svg'
import TheMobile from '../public/images/themobile.svg'

import styles from '../public/styles/splashbody.module.scss'

import useMedia from './useMedia'

const SplashBody = () => {
  const isWide = useMedia('(min-width: 768px')

  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        <div className={styles.left}>
          <h3>How it works</h3>
          <h2>What is Flossbank?</h2>
          <p>
            Flossbank helps compensate open source maintainers, authors, and content
            creators by connecting advertisers with developers.
          </p>
          <p>
            So much depends on maintainers, and we think they should get paid for
            their work. By opting in to terminal ads from our advertisers, developers
            can give back to the open source community.
          </p>
          {isWide && <button className={styles.learnmore}>Learn More</button>}
        </div>
        <div className={styles.right}>
          {isWide ? (
            <>
              <TheCircle className={styles.circle} />
              <CustomerPopout position='left'>
                <FontAwesomeIcon icon={faCrown} />
                <span>Maintainers, Authors, and Content Creators</span>
                <div>
                  <p>
                    Make money off your open source packages without changing
                    a single piece of your developer workflow. No self promotion, no kickstarter pages,
                    no patreon plugs or bitcoin addresses.
                  </p>
                  <p>
                    Not only that, but use our maintainer portal to divy up percentages of
                    your packages revenue to maintainers you deem do enough work
                    to receive compensation. We handle the payouts.
                  </p>
                  <p>
                    Get a paypal deposit each month directly correlated to the installs your packages
                    received. No questions asked. <b>Every. Single. Month.</b>
                  </p>
                  <p>
                    Whether you're a maintainer, an author, or a content creator, Flossbank has
                    your back by sharing 70% of our companies revenue with you, regardless of
                    the source of that money. We make money - the community makes money.
                  </p>
                  <button><a href='https://maintainer.flossbank.com'>Go to Maintainer Portal</a></button>
                </div>
              </CustomerPopout>
              <CustomerPopout position='right'>
                <FontAwesomeIcon icon={faSmile} />
                <span>Benevolent Developers and Companies</span>
                <div>
                  <p>
                    Looking for a way to give back to the open source developers whose
                    packages have helped your personal dev or fueled your private companies growth?
                  </p>
                  <p>
                    Instead of blindly donating via Open Collective or Patreon, consider donating
                    through our Donor Portal knowing your donations are distributed in the most ethical,
                    just, and equitable fashion available. We distribute 100% of donations to all packages
                    within our ecosystem based on the install distribution of those packages.
                  </p>
                  <p>
                    Or, if you're a user of Flossbank, visit our User Portal to donate to packages based
                    on your install usage specifically.
                  </p>
                  <p>
                    Fuel <i><b>all of Open Source</b></i>, not just the few packages with name brand recognition.
                  </p>
                  <button><a href='https://user.flossbank.com'>Go to User Portal</a></button>
                </div>
              </CustomerPopout>
              <CustomerPopout position='bottom'>
                <FontAwesomeIcon icon={faCoins} />
                <span>Advertisers and Tech Companies</span>
                <div>
                  <p>
                    Advertise where developers are working, right in the termianl.
                  </p>
                  <p>
                    Design text based ads to market your latest tool, framework or package to developers
                    as they need them.
                  </p>
                  <p>
                    Pay as you go rates. If you don't get impressions, you don't get charged. Start for free.
                  </p>
                  <button><a href='https://advertiser.flossbank.com'>Go to Advertiser Portal</a></button>
                </div>
              </CustomerPopout>
            </>
          ) : (
            <>
              <div className={styles.mobilewrapper}>
                <TheMobile className={styles.block} />
              </div>
              <CustomerPopout position='first'>
                <FontAwesomeIcon icon={faCrown} />
                <span>Maintainers, Authors, and Content Creators</span>
                <div>
                  <p>
                    Make money off your open source packages without changing
                    a single piece of your developer workflow. No self promotion, no kickstarter pages,
                    no patreon plugs or bitcoin addresses.
                  </p>
                  <p>
                    Not only that, but use our maintainer portal to divy up percentages of
                    your packages revenue to maintainers you deem do enough work
                    to receive compensation. We handle the payouts.
                  </p>
                  <p>
                    Get a paypal deposit each month directly correlated to the installs your packages
                    received. No questions asked. <b>Every. Single. Month.</b>
                  </p>
                  <p>
                    Whether you're a maintainer, an author, or a content creator, Flossbank has
                    your back by sharing 70% of our companies revenue with you, regardless of
                    the source of that money. We make money - the community makes money.
                  </p>
                  <button><a href='https://maintainer.flossbank.com'>Go to Maintainer Portal</a></button>
                </div>
              </CustomerPopout>
              <CustomerPopout position='second'>
                <FontAwesomeIcon icon={faSmile} />
                <span>Benevolent Developers and Companies</span>
                <div>
                  <p>
                    Looking for a way to give back to the open source developers whose
                    packages have helped your personal dev or fueled your private companies growth?
                  </p>
                  <p>
                    Instead of blindly donating via Open Collective or Patreon, consider donating
                    through our Donor Portal knowing your donations are distributed in the most ethical,
                    just, and equitable fashion available. We distribute 100% of donations to all packages
                    within our ecosystem based on the install distribution of those packages.
                  </p>
                  <p>
                    Or, if you're a user of Flossbank, visit our User Portal to donate to packages based
                    on your install usage specifically.
                  </p>
                  <p>
                    Fuel <i><b>all of Open Source</b></i>, not just the few packages with name brand recognition.
                  </p>
                  <button><a href='https://user.flossbank.com'>Go to User Portal</a></button>
                </div>
              </CustomerPopout>
              <CustomerPopout position='third'>
                <FontAwesomeIcon icon={faCoins} />
                <span>Advertisers and Tech Companies</span>
                <div>
                  <p>
                    Advertise where developers are working, right in the termianl.
                  </p>
                  <p>
                    Design text based ads to market your latest tool, framework or package to developers
                    as they need them.
                  </p>
                  <p>
                    Pay as you go rates. If you don't get impressions, you don't get charged. Start for free.
                  </p>
                  <button><a href='https://advertiser.flossbank.com'>Go to Advertiser Portal</a></button>
                </div>
              </CustomerPopout>
              <CustomerPopout position='fourth'>
                <FontAwesomeIcon icon={faCrown} />
                <span>Maintainers, Authors, and Content Creators</span>
                <div>
                  <p>
                    Make money off your open source packages without changing
                    a single piece of your developer workflow. No self promotion, no kickstarter pages,
                    no patreon plugs or bitcoin addresses.
                  </p>
                  <p>
                    Not only that, but use our maintainer portal to divy up percentages of
                    your packages revenue to maintainers you deem do enough work
                    to receive compensation. We handle the payouts.
                  </p>
                  <p>
                    Get a paypal deposit each month directly correlated to the installs your packages
                    received. No questions asked. <b>Every. Single. Month.</b>
                  </p>
                  <p>
                    Whether you're a maintainer, an author, or a content creator, Flossbank has
                    your back by sharing 70% of our companies revenue with you, regardless of
                    the source of that money. We make money - the community makes money.
                  </p>
                  <button><a href='https://maintainer.flossbank.com'>Go to Maintainer Portal</a></button>
                </div>
              </CustomerPopout>
            </>
          )}
        </div>
        {!isWide && (
          <div>
            <button className={styles.learnmore}>Learn More</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SplashBody
