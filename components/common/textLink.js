import { Link } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import styles from './textLink.module.scss'

const TextLink = ({ url, text, color = 'ocean', fontWeight = 600 }) => (
  <Link
    href={url}
    className={styles.link}
    color={color}
    fontWeight={fontWeight}
  >
    {text}
  </Link>
)

TextLink.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextLink
