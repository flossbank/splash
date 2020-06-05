import { Flex } from '@chakra-ui/core'
const FBLogoLetters = ({ width, ...props }) => {
  return (
    <Flex justify='center' {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 96.275 119.75'
        width={width || '2.5rem'}
      >
        <defs>
          <clipPath id='a'>
            <path d='M0 89.809h72.206V0H0z' />
          </clipPath>
        </defs>
        <title>Flossbank logo</title>
        <g clip-path='url(#a)' transform='matrix(1.3333 0 0 -1.3333 0 119.75)'>
          <path
            d='M35.806 22.249V10.274l6.857.006c12.045 0 21.809 9.763 21.809 21.808 0 12.044-9.764 21.808-21.809 21.808h-6.857V41.921s1.34-.009 6.765-.009c5.424 0 9.823-4.398 9.823-9.823s-4.399-9.823-9.823-9.823c-5.425 0-6.765-.017-6.765-.017M7.735 41.918h10.143v11.979H7.735z'
            fill='#529ed6'
          />
          <path
            d='M42.967 79.535V67.556H32.833V10.28H20.855v57.532c.005 6.471 5.248 11.714 11.723 11.723z'
            fill='#2b67af'
          />
        </g>
      </svg>
    </Flex>
  )
}

export default FBLogoLetters
