import { Heading } from '@chakra-ui/core'

import styles from './underlinedHeading.module.scss'

// This is the large text in each section that sits below the underlined section title
const UnderlinedHeading = ({ text, align, ...props }) => (
  <Heading
    className={`${styles.heading} ${styles[align]}`}
    textAlign={align}
    fontWeight='bold'
    fontSize='0.875rem'
    textTransform='uppercase'
    marginBottom='2.25rem'
    {...props}
  >
    {text}
  </Heading>
)

export default UnderlinedHeading
