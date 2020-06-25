import PageWrapper from '../components/common/pageWrapper'
import AuthProcess from '../components/common/authProcess'

import { useAuth } from '../utils/useAuth'

const Signup = () => {
  const auth = useAuth()

  return (
    <PageWrapper
      title='Sign Up'
      description='Sign up for Flossbank to start supporting open source maintainers across the entire dependency tree of your installed packages.'
    >
      <AuthProcess
        process={auth.signup}
        icon='hooray'
        headingText='Sign up for Flossbank'
        submitText='Sign Up'
        btnLoadingText='Signing up'
        successText='Check your email for a verification link to finish signing up.'
        otherProcessText='Already have an account?'
        otherProcessHref='/login'
        otherProcessLinkText='Log in'
      />
    </PageWrapper>
  )
}

export default Signup
