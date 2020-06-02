import { Link } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import styles from './textLink.module.scss'

// destructuring children so if someone passes children (which we don't want), it doesn't funk things up
const TextLink = ({ url, text, children, ...props }) => (
  <Link href={url} className={styles.link} {...props}>
    {text}
  </Link>
)

TextLink.defaultProps = {
  color: 'ocean',
  fontWeight: 600,
  display: 'initial'
}

TextLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextLink
