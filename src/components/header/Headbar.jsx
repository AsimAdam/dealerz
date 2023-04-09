import React from 'react'
import { Flex, Spacer, Text, Image } from '@chakra-ui/react';




function Headbar() {


  return (
    <div className='bar'>
     <Flex p="10px" gap={8} flexDirection="row" alignItems="center" bg="white" >
    <Image src='https://i.postimg.cc/KzLL5fZ1/Dealerz.png' alt="" />
     <Spacer />
     
      <Image src='https://i.postimg.cc/1XsgrZCd/Vector-1.png' alt="" w={20} h={20} />
      <a href='#'style={{textDecoration: "none"}} >
      <Text color="black" >Call Center</Text>
      </a>
      <Image src="https://i.postimg.cc/858fsvhN/Vector-2.png" alt="" w={20} h={20}/>
      <a href='#' style={{textDecoration: "none"}}>
       <Text color="black" >Shipping & Returns</Text>
       </a>
       </Flex>
   
    </div>
  )
}

export default Headbar