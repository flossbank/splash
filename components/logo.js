import { useRouter } from 'next/router'
import Logo from '../public/images/FlossbankLogo.svg' 

const FBLogo = () => {
  const router = useRouter()

  return (
    <div className='logo' >
      <Logo onClick={() => router.push('/')}  />
      <style jsx>
      {`
        .logo {
          cursor: pointer;
        }
      `}
    </style>
    </div>
  )
}

export default FBLogo
