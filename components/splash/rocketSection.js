import { Flex } from '@chakra-ui/core'
import { Parallax, Background } from 'react-parallax'

import SplashRocket from '../../public/images/splash/splash_rocket_clouds.svg'
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
      padding={{ base: '1.5rem 1.5rem 3rem', md: '3rem 1.5rem' }}
    >
      {isWide ? (
        <Flex flexDirection='row' justify='space-between' zIndex='-1'>
          <p>I am wide!</p>
          <Parallax strength={150} className={styles.splash_parallax}>
            <SplashRocket className={styles.splash_rocket} />
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
          <SplashRocket className={styles.splash_rocket_mobile} />
          {children}
        </>
      )}
    </Section>
  )
}

export default RocketSection
