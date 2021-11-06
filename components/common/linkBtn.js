import { Box } from '@chakra-ui/react'
import { defaultProps } from '../../utils/defaultBtnProps'
import PropTypes from 'prop-types'

const LinkBtn = ({ children, external, ...props }) => (
  <>
    {!external ? (
      <Box as='a' display='inline-block' {...props}>
        {children}
      </Box>
    ) : (
      <Box as='a' target='_blank' display='inline-block' {...props}>
        {children}
      </Box>
    )}
  </>
)

LinkBtn.defaultProps = { ...defaultProps }

LinkBtn.propTypes = {
  href: PropTypes.string.isRequired
}

export default LinkBtn
