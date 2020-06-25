import { useState } from 'react'
import { useRouter } from 'next/router'

// import { logout } from '../../../client'
import { useAuth } from '../../../utils/useAuth'

import {
  useTheme,
  Box,
  Button,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/core'

const AuthNav = ({ user }) => {
  const router = useRouter()
  const auth = useAuth()

  const [isExpanded, setIsExpanded] = useState(false)
  const { colors } = useTheme()

  const menuButtonActiveStyles = {
    backgroundColor: 'lightPuddle',
    boxShadow: `0 0 0 10px ${colors.lightPuddle}`
  }

  const itemFocusStyles = {
    color: 'lightPuddle',
    backgroundColor: 'ocean',
    outline: 'none !important'
  }

  const handleSettings = () => router.push('/settings')
  const handleLogout = async () => auth.logout()

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          {!isOpen && setIsExpanded(false)}
          <MenuButton
            as={Button}
            borderRadius='0'
            _hover={menuButtonActiveStyles}
            _expanded={menuButtonActiveStyles}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <Box as='span' fontWeight='500' marginRight='1rem'>
              {user.email}
            </Box>
            <Box
              as='span'
              display='inline-flex'
              width='3rem'
              height='3rem'
              alignItems='center'
              justifyContent='center'
              borderRadius='50%'
              fontWeight='400'
              backgroundColor='rock'
              color='white'
              fontSize='1.25rem'
              textTransform='uppercase'
            >
              {user.email.charAt(0)}
            </Box>
            <Icon
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              marginLeft='.5rem'
              size='1.5rem'
            />
          </MenuButton>
          <MenuList backgroundColor='lightRock'>
            <MenuItem
              as='a'
              href='/settings'
              _focus={itemFocusStyles}
              // TODO: file bug issue with Chakra since this should work with no onClick event
              onClick={handleSettings}
            >
              <Icon name='settings' marginRight='.5rem' />
              Settings
            </MenuItem>
            <MenuItem _focus={itemFocusStyles} onClick={handleLogout}>
              {' '}
              <Icon name='unlock' marginRight='.5rem' />
              Log Out
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default AuthNav
