import { Link } from '@chakra-ui/core'
import { useRouter } from 'next/router'
import Logo from '../../public/images/FlossbankLogo.svg'

// TODO: Convert to usable link; remove click handler; use inline SVG
const FBLogo = () => {
  const router = useRouter()

  return (
    <Link>
      <Logo onClick={() => router.push('/')} />
    </Link>
  )
}

export default FBLogo
