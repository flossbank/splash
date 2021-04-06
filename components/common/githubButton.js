import { Button, Image, Link } from '@chakra-ui/core'
import { defaultProps } from '../../utils/defaultBtnProps'
import { useLocalStorage } from '../../utils/useLocalStorage'
import { localStorageGHStateKey } from '../../utils/constants'

import PropTypes from 'prop-types'
import { useEffect } from 'react'

const GITHUB_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID
const githubLink = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=user:email`

const GitHubLoginButton = ({ children, login, ...props }) => {
  const [ghState, setGhState] = useLocalStorage(localStorageGHStateKey, '')

  useEffect(() => {
    setGhState(Math.random().toString(36).substring(2, 15))
  }, [])

  const ghLinkWithRedirect = login
    ? githubLink + '&redirect_uri=https://flossbank.com/complete-login'
    : githubLink + '&redirect_uri=https://flossbank.com/verify'

  const fullGithubLink = ghLinkWithRedirect + `&state=${ghState}`
  return (
    <Link href={fullGithubLink}>
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
}

GitHubLoginButton.defaultProps = { ...defaultProps }

GitHubLoginButton.propTypes = {
  login: PropTypes.bool.isRequired
}

export default GitHubLoginButton
