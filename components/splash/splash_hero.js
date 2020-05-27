import { 
  Box, 
  Heading, 
  Text,
  Flex,
} from '@chakra-ui/core'
import { Parallax, Background } from 'react-parallax'

import SplashRocket from '../../public/images/splash/splash_rocket_clouds.svg'
import SplashComputer from '../../public/images/splash/splash_computer.svg'
import SplashForegroundClouds from '../../public/images/splash/splash_foreground_clouds.svg'
import SplashBackgroundClouds from '../../public/images/splash/splash_background_clouds.svg'
import FBButton from '../common/button'
import useMedia from '../common/useMedia'
import styles from './splash_hero.module.scss'


const SplashHero = (props) => {
  const isWide = useMedia('(min-width: 800px')

  const innerContent = (<>
    <Heading textAlign='center' margin={[ '10px', '30px' ]} marginTop={[ '40px', '60px']} fontSize='36px'>
      On a mission to support open source
    </Heading>
    <Text id='hero_header' textAlign='center' fontSize='20px' lineHeight='normal' marginTop={['20px', '0']}>
      At Flossbank, we help pay open source authors and maintainers for their work. 
    </Text>
    <Text id='hero_subheader' textAlign='center' fontSize='20px' lineHeight='normal' marginTop={['20px', '0']}>
      Our mission isn’t unique. Our approach is.
    </Text>
    <Flex justify='center' 
          margin='auto' 
          padding={[ '20px', '0px' ]}
          width={[ 'auto', '50%' ]}
          flexDirection={['column', 'row']}
          marginTop='30px' 
          marginBottom='10px'>
      <FBButton backgroundColor='white' 
                color='ocean' 
                variant='solid' 
                marginBottom={[ '20px', '0' ]}
                _hover={{ marginTop: '3px' }}
                onClick={props.scrollToDeveloperSection}>
        For Developers
      </FBButton>
      <FBButton backgroundColor='puddle' 
                marginLeft={[ '0px', '20px' ]}
                color='ocean' 
                _hover={{ marginTop: '3px' }}
                onClick={props.scrollToBusinessSection}>
        For Businesses
      </FBButton>
    </Flex>
  </>)

  return (
    <Box width='full' 
         alignItems='center' 
         zIndex='-1' 
         backgroundColor='ocean' 
         color='white' 
         padding={[ '0px', '50px' ]}
         height={[ 'auto', '90vh' ]}>
      {isWide ? (
        <Flex flexDirection='row' justify='space-between'>
          <Parallax strength={150} className={styles.splash_parallax}>
            <SplashRocket className={styles.splash_rocket} />
            <SplashForegroundClouds className={styles.splash_foreground_clouds_left}/>
            <SplashForegroundClouds className={styles.splash_foreground_clouds_right}/>
            {innerContent}
            <Background className={styles.splash_parallax_background}>
              <SplashBackgroundClouds className={styles.splash_background_clouds_left}/>
              <SplashBackgroundClouds className={styles.splash_background_clouds_right}/>
              <SplashComputer className={styles.splash_computer}/>
            </Background>
          </Parallax>
        </Flex>
      ) : (
        <>
          <SplashRocket className={styles.splash_rocket_mobile} />
          {innerContent}
        </>
      )}
    </Box>
  )
}

export default SplashHero
