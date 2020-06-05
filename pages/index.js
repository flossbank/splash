import PageWrapper from '../components/common/pageWrapper'
import SplashHero from '../components/splash/splash_hero'
import SplashWhatIsFlossbank from '../components/splash/splash_what_is_flossbank'
import SplashForDevelopers from '../components/splash/splash_for_developers'
import SplashForBussinesses from '../components/splash/splash_for_businesses'

const Splash = () => (
  <PageWrapper>
    <SplashHero />
    <SplashWhatIsFlossbank />
    <SplashForDevelopers id='forDevelopers' />
    <SplashForBussinesses id='forBusinesses' />
  </PageWrapper>
)

export default Splash
