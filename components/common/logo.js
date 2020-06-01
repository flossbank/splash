import {
  Link
} from '@chakra-ui/core'
import { useRouter } from 'next/router'
import Logo from '../../public/images/FlossbankLogo.svg' 

const FBLogo = () => {
  const router = useRouter()

  return (
    <Link>
      <Logo onClick={() => router.push('/')}  />
    </Link>
  )
}

export default FBLogo
