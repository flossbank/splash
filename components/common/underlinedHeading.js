import { Box } from '@chakra-ui/core'
import PropTypes from 'prop-types'

import styles from './underlinedHeading.module.scss'

/*
us the 'as' prop to change the rendered element

The default is an h2 since that is how it is used mostly in the design, but to change it:

<UnderlineHeading as={h3} text="My heading text" />
*/

// This is the large text in each section that sits below the underlined section title
const UnderlinedHeading = ({ text, align, ...props }) => (
  <Box
    className={`${styles.heading} ${styles[align]}`}
    textAlign={align}
    {...props}
  >
    {text}
  </Box>
)

UnderlinedHeading.defaultProps = {
  as: 'h2',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  marginBottom: '2.25rem'
}

UnderlinedHeading.PropTypes = {
  text: PropTypes.string.isRequired
}

export default UnderlinedHeading
