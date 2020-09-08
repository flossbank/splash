import { Button, Image, Link } from '@chakra-ui/core'
import { defaultProps } from '../../utils/defaultBtnProps'

import PropTypes from 'prop-types'

const githubLink = 'https://github.com/login/oauth/authorize?client_id=b8a7923343a52c37269e&state=poopie&scope=repo%20read:org'

const fetchGHLink = ({ login }) => {
  return login
    ? githubLink + '&redirect_uri=https://flossbank.com/complete-login'
    : githubLink + '&redirect_uri=https://flossbank.com/install'
}

const GitHubLoginButton = ({ children, login, ...props }) => (
  <Link href={fetchGHLink({ login })}>
    <Button {...props} width='100%' backgroundColor='#444444'>
      <Image
        src='/images/github/GitHub-Mark-Light-64px.png'
        alt='GitHub logo'
        height='32px'
        width='32px'
        position='absolute'
        top='8px'
        left='2rem'
      />
      {props.text} with GitHub
    </Button>
  </Link>
)

GitHubLoginButton.defaultProps = { ...defaultProps }

GitHubLoginButton.propTypes = {
  login: PropTypes.bool.isRequired
}

export default GitHubLoginButton
