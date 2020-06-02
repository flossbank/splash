import { Box } from '@chakra-ui/core'

// TODO: get inline SVG and replace
const FBLogoLetters = ({ margin = 0, width = '2.5rem', height = 'auto' }) => {
  return (
    <Box margin={margin} width={width} height={height}>
      <img src='/images/fbLogoLetters.png' alt='Flossbank logo' />
    </Box>
  )
}

export default FBLogoLetters
