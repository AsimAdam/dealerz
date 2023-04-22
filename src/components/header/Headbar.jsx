import React, { useMemo } from 'react'
import { Flex, Spacer, Text, Image, Box } from '@chakra-ui/react';



function Headbar() {

  const iconsUrlList = useMemo(()=>{
    
    return[

    {link:'https://i.postimg.cc/1XsgrZCd/Vector-1.png',alternative:"Phone Icon",text:"Call Center",fixedWidth:"124px"},
    { link:"https://i.postimg.cc/858fsvhN/Vector-2.png",alternative:"Truck Icon", text:"Shipping & Returns",fixedWidth:"184px"},
  
  
  ]},[])



  return (
    
    <Flex p="26px" gap={8} flexDirection="row" alignItems="center" bg="white" >
    <Image src='https://i.postimg.cc/KzLL5fZ1/Dealerz.png' alt="" />
     <Spacer />
     
     <Flex
     w="20%" justifyContent="space-evenly">


      {iconsUrlList.map((page,index)=>{
  return   <Box
     key={index}
     display='flex'
     alignItems="center"
     justifyContent="space-between"
     w={page.fixedWidth}
     >

   <Image src={page.link} alt={page.alternative} w={18} h={18} />
      <a href='#'style={{textDecoration: "none",fontSize:"16px",fontWeight:"500"}} >
      <Text color="black" >{page.text}</Text>
      </a>
     </Box>

      })}
     </Flex>
    
      
       </Flex>
   
  )
}

export default Headbar