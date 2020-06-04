import { Link } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import styles from './textLink.module.scss'

// destructuring children so if someone passes children (which we don't want), it doesn't funk things up
const TextLink = ({ href, text, children, ...props }) => (
  <Link href={href} className={styles.link} {...props}>
    {text}
  </Link>
)

TextLink.defaultProps = {
  color: 'ocean',
  fontWeight: 500,
  display: 'initial'
}

TextLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextLink
