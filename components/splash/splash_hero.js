import { 
  Box, 
  Heading, 
  Text,
  Flex,
} from '@chakra-ui/core'
import { 
  useEffect,
  useState,
} from 'react'
import { Parallax, Background } from 'react-parallax'

import SplashRocket from '../../public/images/splash_rocket_clouds.svg'
import SplashComputer from '../../public/images/splash_computer.svg'
import FBButton from '../common/button'
import useMedia from '../common/useMedia'
import styles from './splash_hero.module.scss'


const SplashHero = () => {
  const isWide = useMedia('(min-width: 800px')
  const [yOffset, setYOffset] = useState(0)

  const handleScroll = (x) => {
    // console.log('blah', window.scrollY)
    setYOffset(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Box width='full' alignItems='center' zIndex='-1' backgroundColor='ocean' color='white' padding='50px' height='45rem'>
      {isWide && (
        <Flex flexDirection='row' justify='space-between'>
          <Parallax strength={300} className={styles.splash_parallax}>
            <SplashRocket className={styles.splash_rocket} />
            <Heading textAlign={[ 'left', 'center' ]} margin='30px' marginTop='40px' fontSize='36px'>
              On a mission to support open source
            </Heading>
            <Text id='hero_header' textAlign={[ 'left', 'center' ]} fontSize='20px'>
              At Flossbank, we help pay open source authors and maintainers for their work. 
            </Text>
            <Text id='hero_subheader' textAlign={[ 'left', 'center' ]} fontSize='20px'>
              Our mission isn’t unique. Our approach is.
            </Text>
            <Flex justify='center' margin='auto' width='50%' marginTop='30px'>
              <FBButton backgroundColor='white' margin='10px' color='ocean'>
                For Developers
              </FBButton>
              <FBButton backgroundColor='puddle' margin='10px' color='ocean'>
                For Businesses
              </FBButton>
            </Flex>
            <Background className="custom-bg">
              <SplashComputer className={styles.splash_computer}/>
            </Background>
          </Parallax>
        </Flex>
      )}
    </Box>
  )
}

export default SplashHero
