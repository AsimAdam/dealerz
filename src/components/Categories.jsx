import { Flex, Text, Box } from "@chakra-ui/react";



const Categories = () => {
     
    return (
        <>
         

         <Flex alignItems="start" mt={50} mb={20}>
         <Text fontSize={22} fontWeight="bold" float="left">Product Categories</Text>
         </Flex>
         <Flex display="flex" flexDirection="row" >
              <Text fontWeight="bold" mr="185px">Coat and Jackets</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>


         <Flex display="flex" flexDirection="row">
              <Text fontWeight="bold" mr="265px">Dresses</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>

         <Flex display="flex" flexDirection="row">
              <Text fontWeight="bold" mr="262px">Playsuit</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>


         <Flex display="flex" flexDirection="row">
              <Text fontWeight="bold" mr="283px">Short</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>


         <Flex display="flex" flexDirection="row">
              <Text fontWeight="bold" mr="300px">Top</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>


         <Flex display="flex" flexDirection="row">
              <Text fontWeight="bold" mr="255px">Bottoms</Text>
              <Box mt="8px">
              <i class="bi bi-chevron-right"></i>
              </Box>
         </Flex>



         </>
      )
    }



export default Categories;