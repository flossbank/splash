import { useState, useRef } from 'react'

import { useRouter } from 'next/router'
import { useAuth } from '../../../utils/useAuth'

import {
  Flex,
  Text,
  Icon,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/core'

import SettingsCard from './settingsCard'
import UnderlinedHeading from '../../common/underlinedHeading'
import LinkBtn from '../../common/linkBtn'
import FBButton from '../../common/fbButton'
import UninstallCommandBlock from '../../common/uninstallCommandBlock'
import ErrorMessage from '../../common/errorMessage'

import { deleteDonation } from '../../../client'

const AccountInformationSection = ({ user }) => {
  const router = useRouter()
  const auth = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()
  const [attemptingDeletion, setAttemptingDeletion] = useState(false)
  const [error, setError] = useState('')

  const handleLogout = () => {
    router.push('/')
    auth.logout()
  }

  const handleDeleteAccount = async () => {
    setAttemptingDeletion(true)
    try {
      // remove donation first if they're a monthly donor
      if (user.billingInfo.monthlyDonation) {
        const response = await deleteDonation()
        if (response.success) {
          handleLogout()
        } else {
          setError(
            'There was an error attemping to deactivate your account. Please try again or contact us at support@flossbank.com for help.'
          )
        }
      } else {
        handleLogout()
      }
    } catch (e) {
      setError(
        'There was an error attemping to deactivate your account. Please try again or contact us at support@flossbank.com for help.'
      )
    } finally {
      setAttemptingDeletion(false)
    }
  }

  const handleClose = () => {
    setError('')
    onClose()
  }

  return (
    <>
      <SettingsCard headingText='Account'>
        {/* TODO: clean up / make shared styles reusable */}
        <Flex justify='space-between'>
          <LinkBtn
            href='/install'
            backgroundColor='puddle'
            color='ocean'
            borderRadius='5px'
            height='2.5rem'
            display='inline-flex'
            alignItems='center'
            justifyContent='center'
            padding='1.5rem'
            className='u-box-shadow'
            fontWeight='600'
            lineHeight='1.2'
            transition='all 300ms ease-in-out'
          >
            <Icon name='add' size='1rem' marginRight='1rem' />
            Install Flossbank
          </LinkBtn>
          <Button
            backgroundColor='#b9423a'
            color='#ffe5e5'
            className='u-box-shadow'
            borderRadius='5px'
            padding='1.5rem'
            transition='all 300ms ease-in-out'
            _hover={{
              backgroundColor: '#ffe5e5',
              color: '#b9423a',
              transform: 'translateY(3px)'
            }}
            _active={{
              backgroundColor: 'ocean',
              color: 'white'
            }}
            ref={finalRef}
            onClick={onOpen}
          >
            <Icon name='delete' size='1rem' marginRight='1rem' />
            Deactivate Account
          </Button>
        </Flex>
      </SettingsCard>

      <Modal isOpen={isOpen} size='xl' onClose={handleClose}>
        <ModalOverlay backgroundColor='rgba(0, 0, 0, .75)' />
        <ModalContent backgroundColor='white' padding='2rem'>
          <ModalHeader>
            <UnderlinedHeading
              text='Deactivate Your Flossbank Account'
              align='left'
              marginBottom='0'
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text marginBottom='1.5rem'>
              We'd hate to see you go, but we understand if Flossbank isn't
              working out for you.{' '}
              <em>
                (If you're a monthly donor, we'll take care of deleting your
                donation so you won't have to worry about future charges.)
              </em>
            </Text>
            <Text marginBottom='1.5rem'>
              <strong>You can reinstate your account at any time</strong> by
              simply logging in and reinstalling Flossbank.
            </Text>
            <Text marginBottom='1.5rem'>
              <strong>Before you deactivate your account</strong>, remember to
              uninstall Flossbank by running the following command from the
              terminal:
            </Text>
            <UninstallCommandBlock />
            <Text marginBottom='1.5rem'>
              <strong>
                Are you sure you want to deactivate your Flossbank account?
              </strong>
            </Text>
          </ModalBody>
          {error && <ErrorMessage msg={error} marginBottom='3rem' />}
          <ModalFooter
            display='flex'
            alignItems='center'
            padding='0'
            justifyContent='center'
            marginBottom='3rem'
          >
            <FBButton
              onClick={handleClose}
              className='u-box-shadow'
              fontWeight='600'
              backgroundColor='puddle'
              color='ocean'
              margin='0 1.5rem 0 0'
            >
              <Box as='span' display='flex' alignItems='center'>
                <Icon name='close' fontSize='1rem' marginRight='1rem' />
                Keep my account
              </Box>
            </FBButton>
            <FBButton
              onClick={handleDeleteAccount}
              isLoading={attemptingDeletion}
              loadingText='Deleting your account…'
              className='u-box-shadow'
              backgroundColor='#b9423a'
              color='#ffe5e5'
              fontWeight='600'
            >
              <Box as='span' display='flex' alignItems='center'>
                <Icon name='delete' fontSize='1rem' marginRight='1rem' />
                Deactivate my account
              </Box>
            </FBButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AccountInformationSection
