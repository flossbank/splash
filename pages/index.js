import SplashHeader from '../components/splashheader'
import SplashBody from '../components/splashbody'
import Footer from '../components/footer'
import FBHead from '../components/head'

import '../public/styles/main.scss'

function Splash () {
  return (
    <>
      <FBHead />
      <SplashHeader />
      <SplashBody />
      <Footer />
    </>
  )
}

export default Splash
