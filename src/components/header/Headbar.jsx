import React from 'react'
import { PhoneIcon } from '@chakra-ui/icons';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';



function Headbar() {


  return (
    <div className='bar'>
     <Flex p="10px" gap={8} flexDirection="row" >
     <h1 className='logo' color='#F86338'>Dealerz</h1>
     <Spacer />
      <PhoneIcon mt="8px"/>
      <Text>Call Center</Text>
      <LocalShippingIcon mt="8px" />
       <Text>Shipping & Returns</Text>
       </Flex>
   
    </div>
  )
}

export default Headbar