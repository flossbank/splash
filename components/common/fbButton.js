import { PseudoBox } from '@chakra-ui/core'
import PropTypes from 'prop-types'

/*
EXAMPLE USE CASES
==================

As an HTML button element (use for actions like submitting forms or events)
<FBButton
  as="button"
  backgroundColor="puddle"
  color="ocean"
  padding="1.5em"
  onClick={clickHandler}
>
  Click here
 </FBButton>

As a link (use where you would use a Link/HTML a element, to link to another page, fragment on the page (#someId), or external link)
<FBButton
  as="a"
  href="/signup"
>
  Sign Up
 </FBButton>
*/

const FBButton = ({ as, children, ...props }) => (
  <PseudoBox as={as} {...props}>
    {children}
  </PseudoBox>
)

FBButton.defaultProps = {
  display: 'inline-block',
  margin: 0,
  width: 'auto',
  height: 'auto',
  // most of the buttons and link "buttons" in the design file are this width, so it's a sensible default; set to 'none' on the instances that don't need it, like the Sign Up link in the nav
  minW: '8.5rem',
  padding: '.75rem 1rem',
  backgroundColor: 'ocean',
  color: 'white',
  textAlign: 'center',
  fontWeight: 500,
  lineHeight: 'inherit',
  borderRadius: '11px',
  borderWidth: '0px',
  borderColor: 'currentColor',
  transition: 'all 250ms ease-in-out',
  _hover: { transform: 'translateY(3px)' },
  _active: { transform: 'translateY(6px)' }
}

FBButton.propTypes = {
  as: PropTypes.string.isRequired
}

export default FBButton
