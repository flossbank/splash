import Header from '../components/common/header'
import SplashHero from '../components/splash/splash_hero'
import SplashWhatIsFlossbank from '../components/splash/splash_what_is_flossbank'
import SplashForDevelopers from '../components/splash/splash_for_developers'
import SplashForBussinesses from '../components/splash/splash_for_businesses'
import Footer from '../components/common/footer'

function Splash () {
  return (
    <>
      <Header />
      <SplashHero />
      <SplashWhatIsFlossbank />
      <SplashForDevelopers id='forDevelopers' />
      <SplashForBussinesses id='forBusinesses' />
      <Footer />
    </>
  )
}

export default Splash
