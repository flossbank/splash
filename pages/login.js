import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { login } from '../client'

const Login = () => (
  <PageWrapper title='Log In'>
    <AuthProcess
      process={login}
      icon='smile'
      headingText='Log In to Flossbank'
      submitText='Log In'
      successText='Check your email for a verification link to finish logging in.'
      otherProcessText="Don't have an account? "
      otherProcessHref='/signup'
      otherProcessLinkText='Sign up'
    />
  </PageWrapper>
)

export default Login
