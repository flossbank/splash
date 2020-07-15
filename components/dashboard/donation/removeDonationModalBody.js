import { useState } from 'react'
import { Box, Icon, Text, ModalFooter, ModalBody } from '@chakra-ui/core'

import FBButton from '../../common/fbButton'
import ErrorMessage from '../../common/errorMessage'

import { deleteDonation } from '../../../client'

const RemoveDonation = ({ updateDonorStatus, onClose }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleDonorDowngrade = async () => {
    setIsDeleting(true)
    try {
      const response = await deleteDonation()

      if (response.success) {
        updateDonorStatus(false)
        onClose()
      } else {
        setError(
          'There was an error attemping to remove your donation. Please try again.'
        )
      }
    } catch (e) {
      setError(
        'There was an error attemping to remove your donation. Please try again.'
      )
    } finally {
      setIsDeleting(false)
    }
  }

  const handleCancel = () => {
    updateDonorStatus(true)
  }

  return (
    <>
      <ModalBody marginBottom='1.5rem'>
        <Text marginBottom='1.5rem'>
          Removing your monthly donation will mean you will see ads in your
          terminal when installing Open Source packages. You can become a donor
          again at any time.
        </Text>
        <Text marginBottom='1.5rem'>
          <strong>
            Are you sure you want to delete your monthly donation?
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
          onClick={handleCancel}
          className='u-box-shadow'
          fontWeight='600'
          backgroundColor='puddle'
          color='ocean'
          margin='0 1.5rem 0 0'
        >
          <Box as='span' display='flex' alignItems='center'>
            <Icon name='close' fontSize='1rem' marginRight='1rem' />
            Keep my donation
          </Box>
        </FBButton>
        <FBButton
          onClick={handleDonorDowngrade}
          isLoading={isDeleting}
          loadingText='Submitting...'
          className='u-box-shadow'
          backgroundColor='#b9423a'
          color='#ffe5e5'
          fontWeight='600'
        >
          <Box as='span' display='flex' alignItems='center'>
            <Icon name='delete' fontSize='1rem' marginRight='1rem' />
            Delete my donation
          </Box>
        </FBButton>
      </ModalFooter>
    </>
  )
}

export default RemoveDonation
