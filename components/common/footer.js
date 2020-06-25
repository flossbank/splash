import React from 'react'
import { useAuth } from '../../utils/useAuth'

import { Flex, List, ListItem, Text, Box } from '@chakra-ui/core'

import TextLink from './textLink'
import styles from './footer.module.scss'

const loggedOutLinks = [
  {
    url: '/about',
    text: 'About Us'
  },
  {
    url: '/login',
    text: 'Log In'
  },
  {
    url: '/signup',
    text: 'Sign Up'
  }
]

const loggedInLinks = [
  {
    url: '/contact',
    text: 'Contact Us'
  },
  {
    url: '/faq',
    text: 'FAQs'
  }
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const user = useAuth().user
  const links = user ? loggedInLinks : loggedOutLinks

  return (
    <Box
      as='footer'
      backgroundColor='boulder'
      flexDirection='column'
      justify='space-around'
      padding={{ base: '3rem 1.5rem', md: '5rem 3.75rem' }}
      color='white'
    >
      <Flex flexDirection='row' justify='space-around' marginBottom='1.5rem'>
        <List className={styles.list}>
          {links.map((link, i) => (
            <React.Fragment key={i}>
              {i > 0 && (
                <Box as='span' aria-hidden='true' display={['none', 'initial']}>
                  &bull;
                </Box>
              )}
              <ListItem>
                <TextLink href={link.url} text={link.text} color='white' />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Flex>
      <Text textAlign='center'>
        &copy; {currentYear} Flossbank. All rights reserved.
      </Text>
    </Box>
  )
}

export default Footer
