import { Link, Box } from '@chakra-ui/core'
import FullLogo from './fullLogo'
import FBLogoLetters from './logoLetters'

/*
We're doing it this way, using media queries to decide which logo to show, because
when using `useMedia`, we'd get an initial flash without the full logo on each page load / route change
Even that short amount of time for the useMedia hook to run was long enough to cause the issue which made for an unpleasant flash of unstyled content.
*/

const FBLogo = () => {
  return (
    <Link href='/' aria-label='Flossbank – Home'>
      <Box display={{ base: 'none', md: 'initial' }} aria-hidden='true'>
        <FullLogo />
      </Box>
      <Box display={{ base: 'initial', md: 'none' }} aria-hidden='true'>
        <FBLogoLetters id='letter-logo-header' />
      </Box>
    </Link>
  )
}

export default FBLogo
