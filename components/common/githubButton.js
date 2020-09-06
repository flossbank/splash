import { Button, Image } from '@chakra-ui/core'
import { defaultProps } from '../../utils/defaultBtnProps'

const githubLink = 'https://github.com/login/oauth/authorize?client_id=b8a7923343a52c37269e&state=poopie&scope=repo%20read:org'

const GitHubLoginButton = ({ children, ...props }) => (
  <a href={githubLink}>
    <Button {...props} width='100%' backgroundColor='#444444'>
      <Image
        src='/images/github/GitHub-Mark-Light-64px.png'
        alt='GitHub logo'
        height='32px'
        width='32px'
        position='absolute'
        top='8px'
        left='14px'
      />
      Log in with GitHub
    </Button>
  </a>
)

GitHubLoginButton.defaultProps = { ...defaultProps }

export default GitHubLoginButton
