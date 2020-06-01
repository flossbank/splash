import { Box } from '@chakra-ui/core'

const FBLogoLetters = ({ margin = 0, width = '2.5rem', height = 'auto' }) => {
  return (
    <Box margin={margin} width={width} height={height}>
      <img src='/images/fbLogoLetters.png' alt='Flossbank' />
    </Box>
  )
}

export default FBLogoLetters
