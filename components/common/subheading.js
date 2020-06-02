import { Text } from '@chakra-ui/core'

// This is the large text in each section that sits below the underlined section title
const Subheading = ({ copy, align, children, ...props }) => (
  <Text
    textAlign={align}
    marginBottom='2rem'
    fontSize='1.5rem'
    fontWeight='300'
    {...props}
  >
    {children}
  </Text>
)

export default Subheading
