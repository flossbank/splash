import PageWrapper from '../components/common/pageWrapper'
import AboutUsSection from '../components/about/aboutUsSection'
import ContactSection from '../components/about/contactSection'

const About = () => (
  <PageWrapper
    title='About Us'
    description='Learn how Flossbank works to help you support open source maintainers based on your dependency tree.'
  >
    <AboutUsSection />
    <ContactSection />
  </PageWrapper>
)

export default About
