import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { login } from '../client'

const Login = () => (
  <PageWrapper title='Log In'>
    <AuthProcess
      process={login}
      submitText='Log In'
      successText=' Success! Click the magic link in your email to finish logging in!'
      otherProcessText="Don't have an account? "
      otherProcessHref='/signup'
      otherProcessLinkText='Sign up'
    />
  </PageWrapper>
)

export default Login
