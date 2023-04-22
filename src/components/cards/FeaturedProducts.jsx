import { Box, Flex, Image, Text } from "@chakra-ui/react";


const FeaturedProducts = () => {

   return (               
   


        <Flex flexDirection="column" mt="50px">
                <Box mb="20px">         
            <Text fontSize={22} fontWeight="bold" float="left" >Featured Products</Text>
            </Box>
          <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/rm13CRQC/71-3-Hj-GNDUL-AC-SY879-SX-UX-SY-UY.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">Mens Slim Fit T-Shirts </Text>
                <Box>
                <Text color="#F86338" float="left">$22.3</Text>
                </Box>
                </Box>
                </Flex>


                <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/PqqdMPQc/81-Zt42io-Cg-L-AC-SX679.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">Samsung 49" Curved Monitor</Text>
                <Box>
                <Text color="#F86338" float="left">$999.99</Text>
                </Box>
                </Box>
                </Flex>



                <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/rpvFFq5P/71-YAIFU48-IL-AC-UL640-QL65-ML3.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">White Gold Plated Princess</Text>
                <Box>
                <Text color="#F86338" float="left">$9.99</Text>
                </Box>
                </Box>
                </Flex>



                <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/dtdfzw00/61-IBBVJv-SDL-AC-SY879.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">WD 2TB Hard Drive</Text>
                <Box>
                <Text color="#F86338" float="left">$64</Text>
                </Box>
                </Box>
                </Flex>



                <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/7Z55xspb/81-XH0e8fef-L-AC-UY879.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">Women's Leather Jacket</Text>
                <Box>
                <Text color="#F86338" float="left">$29.95</Text>
                </Box>
                </Box>
                </Flex>



                <Flex flexDirection="row" gap={10} mb="30px">
                <Image 
                src="https://i.postimg.cc/zDR5Gmfs/81-Qpk-Ictq-PL-AC-SX679.jpg"
                alt=""
                w="80px"
                h="80px"
                />
                <Box 
                display="flex" 
                flexDirection="column"
                >
                <Text fontWeight="bold">Acer 21.5 inches Monitor</Text>
                <Box>
                <Text color="#F86338" float="left">$599</Text>
                </Box>
                </Box>
                </Flex>






                 </Flex>

   );
};



export default FeaturedProducts;