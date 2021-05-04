import { PseudoBox } from '@chakra-ui/core'
import { defaultProps } from '../../utils/defaultBtnProps'
import PropTypes from 'prop-types'

const LinkBtn = ({ children, external, ...props }) => (
  <>
    {!external ? (
      <PseudoBox as='a' display='inline-block' {...props}>
        {children}
      </PseudoBox>
    ) : (
      <PseudoBox as='a' target='_blank' display='inline-block' {...props}>
        {children}
      </PseudoBox>
    )}
  </>
)

LinkBtn.defaultProps = { ...defaultProps }

LinkBtn.propTypes = {
  href: PropTypes.string.isRequired
}

export default LinkBtn
