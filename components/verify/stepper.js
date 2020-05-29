import {
  Flex,
  Icon,
  Heading,
  Text,
  Divider,
} from '@chakra-ui/core'

import React from 'react'

const Stepper = (props) => {
  const stepsJsx = props.steps.map((step, index, arr) => {
    return (<React.Fragment key={index}>
      <Flex flexDirection='column' zIndex='2'>
        <Icon name={step.iconName} size='2rem' marginLeft='auto' marginRight='auto'/>
        <Heading fontSize='12px' fontWeight='bold' textAlign='center'>Step {index}</Heading>
        <Text fontSize='14px' textAlign='center'>{step.title}</Text>
      </Flex>
      {(index < arr.length - 1) && (<Divider backgroundColor='rock' 
        width='20%' 
        height='5px' 
        marginTop='0.8rem' 
        marginLeft='-.3rem' 
        marginRight='-.3rem'
        zIndex='1' />)
      }
    </React.Fragment>)
  })

  return (
    <Flex flexDirection='row' justify='center'>
      {stepsJsx}
    </Flex>
  )
}

export default Stepper