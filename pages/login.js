import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { useAuth } from '../utils/useAuth'

const Login = () => {
  const auth = useAuth()

  return (
    <PageWrapper title='Log In'>
      <AuthProcess
        process={auth.login}
        icon='smile'
        headingText='Log In to Flossbank'
        submitText='Log In'
        btnLoadingText='Logging in'
        successText='Check your email for a verification link to finish logging in.'
        otherProcessText="Don't have an account? "
        otherProcessHref='/signup'
        otherProcessLinkText='Sign up'
      />
    </PageWrapper>
  )
}

export default Login
