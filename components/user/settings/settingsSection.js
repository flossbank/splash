import { useState, useRef } from 'react'

import {
  Text,
  Button,
  Heading,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  ModalBody,
  ModalFooter
} from '@chakra-ui/core'

import Section from '../../common/section'
import Card from '../../common/card'
import UnderlinedHeading from '../../common/underlinedHeading'
// import FBButton from '../../common/fbButton'

import { useAuth } from '../../../utils/useAuth'

const BillingInfo = (user) => {
  console.log(user.user.billingInfo)
  return (
    <Box as='dl' display='flex'>
      <Box as='dt' fontWeight='500' marginRight='1rem'>
        Credit Card Number:
      </Box>
      <Box as='dd'>
        <span aria-hidden='true'>{'•••• '.repeat(3)} </span>
        {user.user.billingInfo.last4}
      </Box>
    </Box>
  )
}

const UserSettingsSection = () => {
  const { user } = useAuth()
  const [hasBillingInfo, setHasBillingInfo] = useState(user.billingInfo.last4)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = useRef()

  console.log(user)
  return (
    <Section
      display='flex'
      justifyItems='center'
      flexDirection='column'
      alignItems='center'
      padding={{ base: '3rem 1.5rem', lg: '4rem 7.5rem' }}
      backgroundColor='lightRock'
    >
      <UnderlinedHeading
        as='h1'
        text='User Settings'
        align='center'
        marginBottom='3rem'
      />
      <Card shadowSz='lg' w='100%' maxW='50rem'>
        <Heading
          textTransform='uppercase'
          textAlign={{ base: 'center', md: 'left' }}
          color='ocean'
          fontWeight='bold'
          fontSize='1rem'
          marginBottom='1.5rem'
        >
          Billing Information
        </Heading>
        <Box marginBottom='1.5rem'>
          {!hasBillingInfo && (
            <>
              <Text marginBottom='1.5rem'>
                <strong>
                  You currently have no billing information on file.
                </strong>
              </Text>
              <Text>
                Adding billing information will allow you to donate to the Open
                Source packages you use most.
              </Text>
            </>
          )}
          {hasBillingInfo && <BillingInfo user={user} />}
        </Box>
        <Button
          backgroundColor='puddle'
          color='ocean'
          className='u-box-shadow'
          borderRadius='5px'
          padding='1.5rem'
          transition='all 300ms ease-in-out'
          _hover={{
            backgroundColor: 'ocean',
            color: 'white',
            transform: 'translateY(3px)'
          }}
          _active={{
            backgroundColor: 'ocean',
            color: 'white'
          }}
          ref={finalRef}
          onClick={onOpen}
        >
          {hasBillingInfo
            ? 'Update billing information'
            : 'Add billing information'}
        </Button>
      </Card>
      <Modal isOpen={isOpen} size='xl' onClose={onClose}>
        <ModalOverlay backgroundColor='rgba(0, 0, 0, .75)' />
        <ModalContent backgroundColor='white' padding='2rem'>
          <ModalHeader>
            <UnderlinedHeading
              text='Updating Billing Information'
              align='left'
              marginBottom='0'
            />
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody />
          <ModalFooter />
        </ModalContent>
      </Modal>
    </Section>
  )
}

export default UserSettingsSection
