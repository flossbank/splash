import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Text, ModalFooter, ModalBody } from '@chakra-ui/react'

import FBButton from '../../common/fbButton'

const DonationInfoModalBody = ({ upgradeToDonor, onClose }) => {
  const handleDonorUpgrade = () => {
    upgradeToDonor(true)
  }

  return (
    <>
      <ModalBody marginBottom='1.5rem'>
        <Text marginBottom='1.5rem'>
          Currently you're on the free tier, which allows you to support the
          Open Source community through ads in your terminal.
        </Text>
        <Text marginBottom='1.5rem'>
          By becoming a monthly donor and donating at least
          <strong> $5 a month</strong>, you can opt out of ads and offer even
          more support to the maintainers of the packages you use.
        </Text>
        <Text marginBottom='1.5rem'>
          Monthly donations are split up among the packages you install each month,
          identical to how ad revenue is split up.
        </Text>
      </ModalBody>
      <ModalFooter display='flex' flexDirection='column' alignItems='center'>
        <FBButton
          onClick={handleDonorUpgrade}
          className='u-box-shadow'
          fontWeight='600'
          margin='0 0 1.5rem 0'
        >
          <Box as='span' display='flex' alignItems='center'>
            <CheckIcon fontSize='1rem' marginRight='1rem' />
            Become a monthly donor
          </Box>
        </FBButton>
        <FBButton
          onClick={onClose}
          className='u-box-shadow'
          backgroundColor='lightRock'
          color='ocean'
          fontWeight='600'
        >
          <Box as='span' display='flex' alignItems='center'>
            <CloseIcon fontSize='1rem' marginRight='1rem' />
            Stay on the free tier with ads
          </Box>
        </FBButton>
      </ModalFooter>
    </>
  )
}

export default DonationInfoModalBody
