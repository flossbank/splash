import { Alert, AlertIcon } from '@chakra-ui/core'

const ErrorMessage = ({ msg, ...props }) => (
  <Alert
    status='error'
    marginBottom='1rem'
    backgroundColor='#ffe5e5'
    fontWeight='500'
    color='#b9423a'
    {...props}
  >
    <AlertIcon color='#b9423a' />
    {msg}
  </Alert>
)

export default ErrorMessage
