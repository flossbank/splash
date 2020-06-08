import { Box, Heading, Text, Flex } from '@chakra-ui/core'
import { Parallax, Background } from 'react-parallax'

import SplashRocket from '../../public/images/splash/splash_rocket_clouds.svg'
import SplashComputer from '../../public/images/splash/splash_computer.svg'
import SplashForegroundClouds from '../../public/images/splash/splash_foreground_clouds.svg'
import SplashBackgroundClouds from '../../public/images/splash/splash_background_clouds.svg'
import LinkBtn from '../common/linkBtn'
import useMedia from '../common/useMedia'
import styles from './splash_hero.module.scss'

const SplashHero = () => {
  const isWide = useMedia('(min-width: 800px')

  const innerContent = (
    <>
      <Heading
        textAlign='center'
        margin={['10px', '30px']}
        marginTop={['40px', '60px']}
        fontSize='36px'
      >
        On a mission to support open source
      </Heading>
      <Text
        id='hero_header'
        textAlign='center'
        fontSize='20px'
        lineHeight='normal'
        marginTop={['20px', '0']}
      >
        At Flossbank, we help pay open source authors and maintainers for their
        work.
      </Text>
      <Text
        id='hero_subheader'
        textAlign='center'
        fontSize='20px'
        lineHeight='normal'
        marginTop={['20px', '0']}
      >
        Our mission isn’t unique. Our approach is.
      </Text>
      <Flex
        justify='center'
        margin='auto'
        padding={['20px', '0px']}
        flexDirection={['column', 'row']}
        marginTop='30px'
        marginBottom='10px'
      >
        <LinkBtn
          href='#forDevelopers'
          className='u-box-shadow'
          backgroundColor='white'
          color='ocean'
          minW={['none', '10rem']}
          margin={['0 0 1.5rem 0', '0 1.5rem 0 0 ']}
        >
          For Developers
        </LinkBtn>
        <LinkBtn
          href='#forBusinesses'
          className='u-box-shadow'
          backgroundColor='puddle'
          color='ocean'
          minW={['none', '10rem']}
        >
          For Businesses
        </LinkBtn>
      </Flex>
    </>
  )

  return (
    <Box
      width='full'
      alignItems='center'
      zIndex='-1'
      backgroundColor='ocean'
      color='white'
      padding={['0px', '50px']}
      // minH='90vh' I don't think we need this; on tall screens there is not enough content and it's WAY too tall, and on mobile and laptop, the content is always enough to make it tall enough
    >
      {isWide ? (
        <Flex flexDirection='row' justify='space-between'>
          <Parallax strength={150} className={styles.splash_parallax}>
            <SplashRocket className={styles.splash_rocket} />
            <SplashForegroundClouds
              className={styles.splash_foreground_clouds_left}
            />
            <SplashForegroundClouds
              className={styles.splash_foreground_clouds_right}
            />
            {innerContent}
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
          {innerContent}
        </>
      )}
    </Box>
  )
}

export default SplashHero
