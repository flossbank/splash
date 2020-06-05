import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { signup } from '../client'

const Signup = () => (
  <PageWrapper title='Sign Up'>
    <AuthProcess
      process={signup}
      submitText='Sign Up'
      successText=' Success! Click the magic link in your email to finish signing up!'
      otherProcessText='Already have an account?'
      otherProcessHref='/login'
      otherProcessLinkText='Log in'
    />
  </PageWrapper>
)

export default Signup
