// Wrapper for every section of the splash page other than the header, hero, and footer
import { Box } from '@chakra-ui/core'

const Section = ({ bgColor, children, ...props }) => (
  <Box
    as='section'
    backgroundColor={bgColor}
    padding={['3rem 1.5rem', '5rem 3.75rem']}
    color='#404042'
    {...props}
  >
    {children}
  </Box>
)

export default Section
