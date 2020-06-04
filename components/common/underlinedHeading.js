import { PseudoBox, Box } from '@chakra-ui/core'
import PropTypes from 'prop-types'

/*
us the 'as' prop to change the rendered element
The default is an h2 since that is how it is used mostly in the design, but to change it:
<UnderlineHeading as={h3} text="My heading text" />
*/

const UnderlinedHeading = ({ text, align, lineGap, lineColor, ...props }) => {
  return (
    <PseudoBox textAlign={align} {...props} lineHeight={lineGap}>
      <Box as='span' display='block'>
        {text}
      </Box>
      <Box
        as='span'
        display='inline-block'
        aria-hidden='true'
        w='3.875rem'
        h='0.1875rem'
        backgroundColor={lineColor}
      />
    </PseudoBox>
  )
}

UnderlinedHeading.defaultProps = {
  as: 'h2',
  align: 'left',
  lineGap: '1.75',
  lineColor: 'lake',
  position: 'relative',
  fontWeight: 'bold',
  fontSize: '0.875rem',
  textTransform: 'uppercase',
  marginBottom: '2.25rem'
}

UnderlinedHeading.propTypes = {
  text: PropTypes.string.isRequired
}

export default UnderlinedHeading
