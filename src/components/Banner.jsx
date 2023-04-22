import { Box, Flex, Image } from '@chakra-ui/react';





const Banner = () => {

    return (
        
      <Flex 
        w="100%" 
        h="650" 
        bg="white" 
        // mb="50px" 
        // m="0"
        // border="4px dashed black"
        >

         <Box
          w="100%"
         >

             <Image 
              src="https://i.postimg.cc/VL42PFW3/Ellipse-153.png" 
              alt="" 
              w="100" 
              h="100"
              ml={100}
              mt={50}
              mr={200}
              mb={50}
              
              />
             
             <Image src="https://i.postimg.cc/QNcBXfCY/Ellipse-156.png" alt="" w="39" h="39"
              ml="350px"
              mt="50px"
              
              />
             <Box mt="250px" ml="650px">
              <Image 
              src="https://i.postimg.cc/7Y85qMbS/rot.png" 
              alt="" 
              w="59" 
              h="59 "
            
              />
              </Box>
              <Box ml="120px" > 
              <Image src="https://i.postimg.cc/QNcBXfCY/Ellipse-156.png" alt="" w="19" h="19"
              />
              </Box>
             </Box>


          
             <Flex flexDirection="column" justifyContent="center" gap={40}
              // border="4px solid yellow"
              w="100%" 
             
             >
             <Image src="https://i.postimg.cc/d3D746sG/Home-Shopping-Your-Choice.png" alt="" 
              w="470px" h="100" 
              marginRight={100}
              mt={120}
              marginLeft={30}
              />

              <Image src="https://i.postimg.cc/MZrtxrQ2/lorem.png" alt="" w={500} h={40} mr={160}
              m="0 40px"
              />
           
              
              <Image src="https://i.postimg.cc/J0DHG2JG/rot.png" alt="" w="59px" h="59px" 
              position="absolute"
              right="100px"
              top="350px"
              
              />
              
              <Box ml="510px">
              <Image src="https://i.postimg.cc/85KNjvRd/Ellipse-156.png" alt="" w="19px" h="19px" />
              </Box>

              <Box ml="150px">
              <Image src="https://i.postimg.cc/85KNjvRd/Ellipse-156.png" alt="" w="12px" h="12px" />
              </Box>
              </Flex>

             </Flex>
           


  );

};


export default Banner;