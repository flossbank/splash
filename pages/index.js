import SplashHero from '../components/splash/splash_hero'
import SplashWhyFlossbank from '../components/splash/splash_why_flossbank'
import SplashForBussinesses from '../components/splash/splash_for_businesses'
import Footer from '../components/common/footer'
import SplashHeader from '../components/splash/splash_header'
import SplashForDevelopers from '../components/splash/splash_for_developers'

function Splash () {
  return (
    <>
      <SplashHeader />
      <SplashHero />
      <SplashWhyFlossbank />
      <SplashForDevelopers />
      <SplashForBussinesses />
      <Footer />
    </>
  )
}

export default Splash
