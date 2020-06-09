import { Box, Flex } from '@chakra-ui/core'
import { Parallax, Background } from 'react-parallax'

import SplashRocketLg from '../../public/images/splash/splash_rocket_clouds.svg'
import SplashRocketMobile from '../../public/images/splash/splash_rocket_mobile.svg'
import SplashComputer from '../../public/images/splash/splash_computer.svg'
import SplashForegroundClouds from '../../public/images/splash/splash_foreground_clouds.svg'
import SplashBackgroundClouds from '../../public/images/splash/splash_background_clouds.svg'

import Section from '../common/section'

import useMedia from '../common/useMedia'

import styles from './splash_hero.module.scss'

const RocketSection = ({ children }) => {
  const isWide = useMedia('screen and (min-width: 55em')

  return (
    <Section
      width='full'
      alignItems='center'
      backgroundColor='ocean'
      color='white'
      padding='0'
    >
      {isWide ? (
        <Flex flexDirection='row' justify='space-between' zIndex='-1'>
          <Parallax strength={150} className={styles.splash_parallax}>
            <SplashRocketLg className={styles.splash_rocket} />
            <SplashForegroundClouds
              className={styles.splash_foreground_clouds_left}
            />
            <SplashForegroundClouds
              className={styles.splash_foreground_clouds_right}
            />
            {children}
            <Background className={styles.splash_parallax_background}>
              <SplashBackgroundClouds
                className={styles.splash_background_clouds_left}
              />
              <SplashBackgroundClouds
                className={styles.splash_background_clouds_right}
              />
              <SplashComputer className={styles.splash_computer} />
            </Background>
          </Parallax>
        </Flex>
      ) : (
        <>
          <SplashRocketMobile className={styles.splash_rocket_mobile} />
          <Box padding='0 1.5rem 3rem'>{children}</Box>
        </>
      )}
    </Section>
  )
}

export default RocketSection
