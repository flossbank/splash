import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { Menu, MenuList, MenuButton, MenuLink } from '@reach/menu-button'
import '../public/styles/reach-styles/menu.scss'

import styles from '../public/styles/splashheader.module.scss'
import Logo from '../public/images/FlossbankLogo.svg'

import useMedia from './useMedia'

const SplashHeader = props => {
  const isWide = useMedia('(min-width: 800px')

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Logo className={styles.logo} />
        {isWide ? (
          <div className={styles.menu}>
            <ul>
              <li>Contact Us</li>
              <li>Log In</li>
              <li className={styles.signup}>Sign Up</li>
            </ul>
          </div>
        ) : (
          <div className={styles.mobilemenu}>
            <Menu>
              <MenuButton className={styles.menubutton}>
                <FontAwesomeIcon icon={faBars} aria-hidden />
              </MenuButton>
              <MenuList className={styles.menulist}>
                <MenuLink as='a' href='/contact'>
                  Contact Us
                </MenuLink>
                <MenuLink as='a' href='/signin'>
                  Log In
                </MenuLink>
                <MenuLink as='a' href='/signup'>
                  Sign Up
                </MenuLink>
              </MenuList>
            </Menu>
          </div>
        )}
      </div>
    </div>
  )
}

export default SplashHeader
